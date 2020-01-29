// All Requires
var express = require("express");
var auth = require("../utils/auth");

var router = express.Router();

var userController = require("../controllers/userController");

// Handling the router for user registration
router.post("/register", userController.userRegistration);

// Handling the router for user login
router.post("/login", userController.userLogin);

// Handling the router for the user profile section posting
router.post("/profile", userController.userProfile);

// Exporting The User Router
module.exports = router;
