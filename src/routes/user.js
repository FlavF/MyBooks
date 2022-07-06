const express = require("express");
const router = express.Router();

//? Page Homepage
router.get("", function(req, res){
    res.render("index"),{
        title:"My Booklist"
    }
})


module.exports = router;