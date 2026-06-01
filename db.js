const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "database-example.chcy4oysmk72.ap-south-1.rds.amazonaws.com",
    user: "root",
    password: "Welcome5252",
    // database: "taskdb"
});

connection.connect();

module.exports = connection;