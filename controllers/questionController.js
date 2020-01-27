const Question = require("../models/questionSchema");
const httpsStatus = require("http-status-codes");

function createQuestion(req, res, next) {
  try {
    Question.create(req.body, (err, questions) => {
      if (err) return next(err);
      return res.status(httpsStatus.OK).json({ questions: questions });
    });
  } catch (err) {
    return res.status(httpsStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
}

module.exports = { createQuestion };
