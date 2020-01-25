const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign({ payload }, process.env.TOKEN_SECERET, {
    expiresIn: "10days"
  });
}

module.exports = {
  generateToken
};
