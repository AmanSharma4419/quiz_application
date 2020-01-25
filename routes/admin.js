var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminControllers");

router.post("/login", adminController.adminLogin);

module.exports = router;
