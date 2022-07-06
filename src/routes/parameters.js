const express = require("express");
const router = express.Router();


//? Page for parameters
router.get("/", function(req, res) {
	res.render("params"),{
			title: "Parameters",
		};
});

module.exports = router;
