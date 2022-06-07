const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
//? Routers Setup
const booksRouter = require("./routes/books")
//? DATABASE Setup
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
app.use(express.urlencoded({ extended: true })); //* parsion incoming
app.use('/books', booksRouter)

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
app.get('/list', function(req, res){
    let sql = `SELECT * FROM books`;
    db.query(sql, function (err, data) {
        if (err) throw err;
        res.render("list",{
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