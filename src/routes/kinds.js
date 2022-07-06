const express = require("express")
const router = express.Router()


//? Get kind list
router.get("/datas", function (req, res) {
	let sql = `SELECT * FROM Kind`;
	db.query(sql, function (err, dataKinds, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			dataKinds,
			message: "Kinds list retrieved successfully",
		});
	});
})

//? Create a new kind entry
router.post("/new", async function (req, res) {
	let sql = `INSERT INTO Kind(kind) VALUES(?)`
	let values = [req.body.kind]
	
	db.query(await sql, await [values], function (err, dataCategories, fields) {
		if (err) throw err;
		// res.json({
		// 	status: 200,
		// 	message: "New kind added successfully",
		// })
		res.render("new", { message: "New kind added successfully" });
	});
})

//? Update a kind entry
router.patch("/update", async function (req, res) {
	let sql = `UPDATE Kind SET kind=?, WHERE id_kind=?`
	let values = [req.body.kind, req.body.id_kind]
	
	db.query(await sql, await values, function (err, dataKinds, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "Kind updated successfully",
		});
		res.render("params", { dataKinds });
	});
});

//? DELETE a kind entry
router.get("/delete", async function (req, res) {
	let sql = `DELETE FROM kind WHERE id_kind=?`
	let values = [req.body.id_kind]
	
	db.query(await sql, await values, function (err, dataKinds, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "kind deleted successfully",
		});
		// res.render("list/delete", { dataCategories });
	});
});


module.exports = router
