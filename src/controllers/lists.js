const express = require("express")
const router = express.Router()


//? Get list list
router.get("/datas", function (req, res) {
	let sql = `SELECT * FROM List`;
	db.query(sql, function (err, dataLists, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			dataLists,
			message: "list  retrieved successfully",
		});
	});
})

//? Create a new list entry
router.post("/new", async function (req, res) {
	let sql = `INSERT INTO List(list) VALUES(?)`
	let values = [req.body.list]
	
	db.query(await sql, await [values], function (err, dataLists, fields) {
		if (err) throw err;
		// res.json({
		// 	status: 200,
		// 	message: "New list added successfully",
		// })
		res.render("new", { message: "New list added successfully" });
	});
})

//? Update a list entry
router.patch("/update", async function (req, res) {
	let sql = `UPDATE List SET list=?, WHERE id_list=?`
	let values = [req.body.list, req.body.id_list]
	
	db.query(await sql, await values, function (err, dataLists, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "list updated successfully",
		});
		res.render("params", { dataLists });
	});
});

//? DELETE a list entry
router.get("/delete", async function (req, res) {
	let sql = `DELETE FROM List WHERE id_list=?`
	let values = [req.body.id_list]
	
	db.query(await sql, await values, function (err, dataLists, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "list deleted successfully",
		});
		// res.render("list/delete", { dataLists });
	});
});


module.exports = router
