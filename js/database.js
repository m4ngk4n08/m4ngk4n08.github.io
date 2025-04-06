// Database singleton instance
let dbInstance = null;

// SQL file paths
const SQL_FILES = [
    './sql/whodunnitone_crime_scene_report.sql',
    './sql/whodunnitone_evidence.sql',
    './sql/whodunnitone_guest_list.sql',
    './sql/whodunnitone_person.sql',
    './sql/whodunnitone_person_information.sql',
    './sql/whodunnitone_security_footage.sql',
    './sql/whodunnitone_statement.sql',
    './sql/whodunnitone_network_logs.sql',
    './sql/whodunnitone_safe_logs.sql',
    './sql/encrypted_keys.sql'
];

/**
 * Initialize the SQL.js database
 * @param {string[]} sqlFilePaths - Array of SQL file paths to load
 * @returns {Promise<Object>} - The initialized database
 */
async function initializeDatabase(sqlFilePaths = []) {
    // Return existing instance if already initialized
    if (dbInstance) return dbInstance;

    try {
        // Initialize SQL.js
        const SQL = await window.initSqlJs({
            locateFile: file => `./lib/${file}`
        });

        // Create a new database
        dbInstance = new SQL.Database();
        
        // Load SQL files if provided
        if (sqlFilePaths.length > 0) {
            for (const sqlFilePath of sqlFilePaths) {
                try {
                    // Fetch SQL file
                    const response = await fetch(sqlFilePath);
                    if (!response.ok) {
                        throw new Error(`Failed to load SQL file ${sqlFilePath}: ${response.statusText}`);
                    }

                    // Read and execute the SQL script
                    const sqlScript = await response.text();
                    dbInstance.exec(sqlScript);
                } catch (error) {
                    console.error(`Error loading SQL file ${sqlFilePath}:`, error);
                }
            }
        } else {
            console.log("Database initialized without SQL files.");
        }

        return dbInstance;
    } catch (error) {
        console.error("Error initializing database:", error);
        throw error;
    }
}

/**
 * Get the database instance
 * @returns {Object} - The database instance
 * @throws {Error} - If the database is not initialized
 */
function getDatabase() {
    if (!dbInstance) {
        throw new Error("Database not initialized. Call initializeDatabase() first.");
    }
    return dbInstance;
}

/**
 * Execute a SQL query
 * @param {string} query - The SQL query to execute
 * @returns {Array} - The query results
 * @throws {Error} - If the database is not initialized or the query fails
 */
function executeQuery(query) {
    const db = getDatabase();
    return db.exec(query);
}

// Initialize the database when the module is loaded
initializeDatabase(SQL_FILES)
    .then(() => {
        console.log("Database loaded successfully!");
        // Enable buttons after database is loaded
        document.getElementById("decryptionBtn").disabled = false;
        document.getElementById("vaultBtn").disabled = false;
    })
    .catch(error => {
        console.error("Error loading database:", error);
    });

// Export the database module
export const Database = {
    initialize: initializeDatabase,
    getInstance: getDatabase,
    execute: executeQuery
}; 