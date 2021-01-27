// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com", // localhost
  port: 3306,
  user: "b4165d0a74c9df", // root
  password: "a61067f2", // ""
  database: "heroku_b0975879dc8d7ce" // hamburgers_db
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
