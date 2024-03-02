const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  database: "student_clubs",
  user: "root",
  password: "lolZ@1",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

module.exports = connection;
