const mysql = require("mysql")

db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "MyBooks"
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Database is connected successfully !");
})

module.exports = db