//? Module
const app = require("./app")

//? Datas
const port = 4040
// const port = process.env.PORT

//?Server
app.listen(port, () => console.log(`Server started, listening port: ${port}`));
