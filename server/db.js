const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://postgres:7227@localhost:3001/TEMP'

// Creating a new database instance from the connection details:
const db = pgp(cn)

// Exporting the database object for shared use:
module.exports = db
