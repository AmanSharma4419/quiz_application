// Requring The Schema Of User
var User = require("../models/userSchema");
var HttpStatus = require("http-status-codes");
var auth = require("../utils/auth");
// Controller for handling the user registration
function userRegistration(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json("Please Fill All Credentials");
  }
  try {
    User.create(req.body, (err, user) => {
      if (err) return next;
      return res.status(HttpStatus.OK).json({ user: user });
    });
  } catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
}

// Controller for handling the user login
function userLogin(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json("Please Fill All Credentials");
  }
  const { email, password } = req.body;
  try {
    User.findOne({ email }, (err, user) => {
      if (err) return next(err);
      if (!user)
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json("USER NOT FOUND WITH THIS EMAIL");
      if (!user.confirmPassword(password)) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json("PASSWORD IS NOT CORRECT");
      }
      var token = auth.generateToken(email);
      return res.status(HttpStatus.OK).json({ user: user, token });
    });
  } catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
}

// Explicitly Exporting The Controllers
module.exports = { userRegistration, userLogin };
