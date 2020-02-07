const mongoose = require("mongoose");

const schema = mongoose.Schema;

const answerSchema = new schema({
  answers: {
    type: Array,
    required: true,
    created: Date.now
  },
  submitter: { type: schema.Types.ObjectId, ref: "User" }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
