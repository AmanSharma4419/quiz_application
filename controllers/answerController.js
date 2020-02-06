const Answer = require("../models/aswerSchema");
const HttpStatus = require("http-status-codes");

function submitAnswer(req, res, next) {
  try {
    Answer.create(req.body, (err, answer) => {
      if (err) return next(err);
      return res.status(HttpStatus.OK).json({ answer: answer });
    });
  } catch (err) {
    return console.log(err.message);
  }
}
