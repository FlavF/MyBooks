const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

//? routers
const booksRouter = require("./routes/books")

//? DATABASE Setup
const db = require("./db/db")

// //? Datas
// var server = {
//     port: 4040
// }

//? Module in use
app.unsubscribe(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //* parsion incoming

//? Router
app.use('/books', booksRouter)
//? Router for the form book
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname,"../views") +'/index.html')
})

// //? Start the server
// app.listen(server.port, () => console.log(`Server started, listenning port : ${server.port}`))


module.exports = app