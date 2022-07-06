const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

//? Routers Setup
const userRouter = require("./routes/user");
const bookListRouter = require("./routes/bookList");
const categoriesRouter = require("./routes/categories")
const kindsRouter = require("./routes/kinds");
const listsRouter = require("./routes/lists");
const parametersRouter = require("./routes/parameters");

//? Controller
const errorController = require("./controllers/error")

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

//? Modules in use
app.unsubscribe(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //* parsin incoming

//? Routers
app.use(userRouter)//? Homepage
app.use('/booklist', bookListRouter)//? BookList pages
app.use("/categories", categoriesRouter);//? Categories pages
app.use("/kinds", kindsRouter);//? kinds pages
app.use("/lists", listsRouter);//? lists pages
app.use("/parameters", parametersRouter);//? Parameters pages

//? error Page
app.use(errorController.getError404);



module.exports = app