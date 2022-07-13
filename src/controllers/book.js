//? Page for bookList
exports.getBookList = (req, res, next) => {
	let sql = `SELECT * FROM books`;
	db.query(sql, function (err, data, fields) {
		if (err) throw err;
		res.render("booklist", {
			title: "BookList",
			data,
		});
	});
};

//? Get book list (JSON)
exports.getBookListJSON = (req, res, next) => {
	let sql = `SELECT * FROM books`;
	db.query(sql, function (err, data, fields) {
		if (err) throw err;
		res.json({
			status: 200,
			data,
			message: "Books list retrieved successfully",
		});
	});
};

//? Pagefor add book
exports.newBook = (req, res, next) => {
	res.render("new"),
	{
		title: "Add new Book",
	};
};

//? Create a new book entry
exports.addBook = async (req, res, next) => {
	let sql = `INSERT INTO Books(name,author,category,list,kind) VALUES(?)`;
	let values = [
		req.body.name,
		req.body.author,
		req.body.category,
		req.body.list,
		req.body.kind,
	];

	db.query(await sql, await [values], function (err, data, fields) {
		if (err) throw err;
		res.render("new", { message: "New book added successfully" });
	});
};

// TODO : doesn't work from here

//? Update a book entry
exports.updateBook = (req, res, next) => {
	//? Stop page to change ????
	console.log(req.body.name)
   db.query('UPDATE `Books` SET `name`=?,`author`=?,`cateogry`=? ,`list`=?, ,`kind`=? where `id_book`=?', [req.body.name, req.body.author, req.body.category, req.body.list, req.body.kind, req.body.id_book], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
	next()


	///

// 	let values = [
// 		req.body.name,
// 		req.body.author,
// 		req.body.category,
// 		req.body.list,
// 		req.body.kind,
// 		req.body.id_book
// 	];
// 	console.log(req.body.id_book)

// 	let sql = "UPDATE `Books` SET `name`=?,`author`=?,`category`=?`,list`=?,`kind`=? where `id_book`=?"

// 	db.query(await sql, await values, (err, data, fields) => {
// 		if (err) throw err;
// 		res.end(JSON.stringify(data));
// 	});
// 	next()
// // 	res.redirect("/");
};

//? DELETE a book entry
exports.deleteBook = async (req, res, next) => {
	let values = mysql.format(req.body.id_book);
"DELETE FROM `employee` WHERE `id`=?";
	let sql = `DELETE from Books where id_book = ?"`;
	
	db.query(await sql, await values, (err, data, fields) => {
		if (err) throw err;
		res.end("Record has been deleted!");
		console.log(data)
	});
	res.redirect("/");
};
