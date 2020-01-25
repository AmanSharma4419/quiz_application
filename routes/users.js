// All Requires
var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

// Handling the router for user registration
router.post("/register", userController.userRegistration);

// Handling the router for user login
router.post("/login", userController.userLogin);

// Exporting The User Router
module.exports = router;
