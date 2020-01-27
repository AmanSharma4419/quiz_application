const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  questions: {
    type: Array,
    created: Date.now
  },
  resource: {
    type: String,
    created: Date.now
  }
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = Question;
