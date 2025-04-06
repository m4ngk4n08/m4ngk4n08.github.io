// Database singleton instance
let dbInstance = null;

// Import SQL files directly
import whodunnitone_network_logs from '../sql/whodunnitone_network_logs.sql?raw';
import whodunnitone_crime_scene_report from '../sql/whodunnitone_crime_scene_report.sql?raw';
import whodunnitone_evidence from '../sql/whodunnitone_evidence.sql?raw';
import whodunnitone_guest_list from '../sql/whodunnitone_guest_list.sql?raw';
import whodunnitone_person from '../sql/whodunnitone_person.sql?raw';
import whodunnitone_person_information from '../sql/whodunnitone_person_information.sql?raw';
import whodunnitone_security_footage from '../sql/whodunnitone_security_footage.sql?raw';
import whodunnitone_statement from '../sql/whodunnitone_statement.sql?raw';
import whodunnitone_safe_logs from '../sql/whodunnitone_safe_logs.sql?raw';
import encrypted_keys from '../sql/encrypted_keys.sql?raw';

// SQL file content array
const SQL_CONTENTS = [
    whodunnitone_crime_scene_report,
    whodunnitone_evidence,
    whodunnitone_guest_list,
    whodunnitone_person,
    whodunnitone_person_information,
    whodunnitone_security_footage,
    whodunnitone_statement,
    whodunnitone_network_logs,
    whodunnitone_safe_logs,
    encrypted_keys
];

/**
 * Initialize the SQL.js database
 * @param {string[]} sqlFilePaths - Array of SQL file paths to load
 * @returns {Promise<Object>} - The initialized database
 */
async function initializeDatabase(SQL_CONTENTS = []) {
    // Return existing instance if already initialized
    if (dbInstance) return dbInstance;

    try {
        // Initialize SQL.js
        const SQL = await initSqlJs({
            locateFile: file => file === 'sql-wasm.wasm' ? window.sqlWasmPath : `https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/${file}`
        });

        // Create a new database
        dbInstance = new SQL.Database();
        
        // Load SQL files if provided
        if (SQL_CONTENTS.length > 0) {
            for(const sqlContent of SQL_CONTENTS){
                try{
                    dbInstance.exec(sqlContent);
                }catch(error){
                    console.error(`Error executing SQL:`, error);
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
initializeDatabase(SQL_CONTENTS)
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