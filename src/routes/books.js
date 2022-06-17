const express = require("express")
const router = express.Router()

//? Get book list (JSON)
	router.get("/datas", function (req, res) {
		let sql = `SELECT * FROM books`;

		db.query(sql, function (err, data, fields) {
			if (err) throw err;
			res.json({
				status: 200,
				data,
				message: "Books list retrieved successfully"
			})
		})
})

//? Create a new book entry
router.post("/new", async function (req, res) {
	let sql = `INSERT INTO books(name,author,category,list,kind) VALUES(?)`
	let values = [req.body.name, req.body.author, req.body.category, req.body.list, req.body.kind]
	
	db.query(await sql, await [values], function (err, data, fields) {
		if (err) throw err;
		// res.json({
		// 	status: 200,
		// 	message: "New book added successfully",
		// })
		res.render("new", {message: "New book added successfully"})
	})
})

//? Update a book entry
router.patch("/update", async function (req, res) {
	let sql = `UPDATE books SET name=?, author=?, category=?, list=?,kind=? WHERE id_book=?`
	let values = [req.body.name, req.body.author, req.body.category, req.body.list, req.body.kind, req.body.id_book]
	
	db.query(await sql, await values, function (err, data, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "Book updated successfully"
		});
		res.render("booklist", {
			title: "BookList",
			data,
		});
	});
});

//? DELETE a book entry
router.get("/delete", async function (req, res) {
	let sql = `DELETE FROM books WHERE id_book=?`
	let values = [req.body.id_book]
	
	db.query(await sql, await values, function (err, data, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			message: "Book deleted successfully"
		});
		// res.render("list/delete", { data });
	});
});


module.exports = router

