const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

//? Routers Setup
const booksRouter = require("./routes/books")
const categoriesRouter = require("./routes/categories")

//? DATABASE Setup
require("dotenv").config() //use to use .env
const db = require("./db/db")
const { url } = require("inspector")

//? paths
const publicDirectoryPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, "../templates/partials")

//? Module HBS
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//? customize the server
app.use(express.static(publicDirectoryPath))

//? Module in use
app.unsubscribe(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //* parsin incoming
app.use('/books', booksRouter)
const booksDatas = app.use("/books/datas", booksRouter)
app.use("/categories", categoriesRouter);

//? Routers
//? Page Homepage
app.get("", function(req, res){
    res.render("index"),{
        title:"My Booklist"
    }
})

//? Pagefor add book
app.get('/new', function(req, res){
    res.render("new"),{
        title:"Add new Book"
    }
})

//TODO:get the data from routes/books.js  
//? Page for bookList
app.get('/booklist', function(req, res){ 
    //? can we get routes/books.js
    let sql = `SELECT * FROM books`;
    db.query(sql, function (err, data) {
        if (err) throw err;
        res.render("booklist",{
            title:"BookList",
            data
        })
    })
})



//? Page for parameters
app.get('/params', function(req, res){
    res.render("params"),{
        title:"Parameters"
    }
})



module.exports = app