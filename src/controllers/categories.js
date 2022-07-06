const express = require("express")
const router = express.Router()


//? Get category list
router.get("/datas", function (req, res) {
	let sql = `SELECT * FROM Category`;
	db.query(sql, function (err, dataCategories, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			dataCategories,
			message: "Category list retrieved successfully",
		});
	});
})

//? Create a new category entry
router.post("/new", async function (req, res) {
	let sql = `INSERT INTO Category(category) VALUES(?)`
	let values = [req.body.category]
	
	db.query(await sql, await [values], function (err, dataCategories, fields) {
		if (err) throw err;
		// res.json({
		// 	status: 200,
		// 	message: "New category added successfully",
		// })
		res.render("new", { message: "New category added successfully" });
	});
})

//? Update a category entry
router.patch("/update", async function (req, res) {
	let sql = `UPDATE Category SET category=?, WHERE id_category=?`
	let values = [req.body.category, req.body.id_category]
	
	db.query(await sql, await values, function (err, dataCategories, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "Category updated successfully",
		});
		res.render("params", { dataCategories });
	});
});

//? DELETE a category entry
router.get("/delete", async function (req, res) {
	let sql = `DELETE FROM Category WHERE id_category=?`
	let values = [req.body.id_category]
	
	db.query(await sql, await values, function (err, dataCategories, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "category deleted successfully",
		});
		// res.render("list/delete", { dataCategories });
	});
});


module.exports = router
