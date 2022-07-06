const express = require("express");

//? Controller
const bookController = require('../controllers/book')

const router = express.Router();

//? Page BookList
router.get("/", bookController.getBookList);

//? Page BookList JSON
router.get("/datas", bookController.getBookListJSON);

//? Page New Book
router.get('/new', bookController.newBook)

//*? To Add the new Book (form)
router.post("/new", bookController.addBook);

//? To update a book entry (form)
router.patch("/update", bookController.updateBook);

//? To delete a book entry (link)
router.get("/delete",bookController.deleteBook );

module.exports = router;

