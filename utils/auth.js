const jwt = require("jsonwebtoken");
const httpStatus = require("http-status-codes");

function generateToken(payload) {
  return jwt.sign({ payload }, process.env.TOKEN_SECERET, {
    expiresIn: "10days"
  });
}

function verifyToken(req, res, next) {
  var token = req.headers.authorization || "";
  try {
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECERET, (err, Decoded) => {
        if (err)
          res
            .status(httpStatus.UNAUTHORIZED)
            .json({ token: "TOKEN NOT MATCHED" });
        next();
      });
    } else {
      return res.json({ token: "TOKEN NOT FOUND" });
    }
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
}

module.exports = {
  generateToken,
  verifyToken
};
