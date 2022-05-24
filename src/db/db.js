const mysql = require("mysql")

db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "MyBooks",
});

module.exports = db