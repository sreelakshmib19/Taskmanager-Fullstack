const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task_manager",
  multipleStatements: true,
});

module.exports = connection;
