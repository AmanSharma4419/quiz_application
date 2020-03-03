const Admin = require("../models/adminSchema");
const HttpStatus = require("http-status-codes");
const auth = require("../utils/auth");

function adminLogin(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json("Please Fill All Credentials");
  }
  const { email, password } = req.body;
  try {
    Admin.findOne({ email }, (err, admin) => {
      if (err) return next(err);
      if (!admin)
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json("USER NOT FOUND WITH THIS EMAIL");
      if (!admin.confirmPassword(password)) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json("PASSWORD IS NOT CORRECT");
      }
      var token = auth.generateToken(email);

      return res.status(HttpStatus.OK).json({ admin: admin, token });
    });
  } catch (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
}
module.exports = {
  adminLogin
};
