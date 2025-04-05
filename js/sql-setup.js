let db;

async function loadDB(sqlFilePaths = []){
    const SQL = await initSqlJs({
        locateFile: file => `./lib/sql-wasm.wasm`
    });

    const db = new SQL.Database();
    
    if(sqlFilePaths.length > 0){
        
        let sqlFile;

        try{
            for(const sqlFilePath of sqlFilePaths){
                // fetch sql file
                const response = await fetch(sqlFilePath);
                if(!response.ok){
                    throw new Error(`failed to load SQL File ${sqlFilePath}: ${response.statusText}`);
                }

                // read the sql file content
                const sqlScript = await response.text();

                // execute the sql script
                sqlFile = sqlFilePath;
                db.exec(sqlScript);
            }
        }catch(error){
            //console.error("Error loading SQL file:", error);
            // change the error message that describe what sql file is not loaded
            console.log("Error loading SQL file:", error);
            console.log("Please check if the SQL file is in the correct path: ", sqlFile);
        }
    } else{
        console.log("Database initialized manually.")
    } 

    return db;
}

const DatabaseModule = {
    loadDb : async function(sqlFilePaths) {
        db = await loadDB(sqlFilePaths);
    },
    // make db accessible from outside
    get db() {
        return db;
    },
};

DatabaseModule.loadDb([
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
]).then(()=> {
    console.log("Database loaded successfully!");
    document.getElementById("decryptionBtn").disabled = false; // Enable the button after loading the database
    document.getElementById("vaultBtn").disabled = false; // Enable the button after loading the database
}).catch((error) => {
    console.error("Error loading database:", error);
});

window.DatabaseModule = DatabaseModule;