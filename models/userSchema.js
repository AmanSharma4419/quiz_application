// All Requires
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Extracting The Schema From The Mongoose
const schema = mongoose.Schema;

// Creating The Schema For User
const userSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4
    },
    email: {
      type: String,
      required: true,
      minlength: 6
    },
    password: {
      type: String,
      required: true,
      minlength: 4
    }
  },
  { timestamps: true }
);

// Implementing The Pre-save Function To Hash The Password
userSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

// Comparig The Hash And Plane Password
userSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Making The Model Of The Schema
const User = mongoose.model("User", userSchema);

// Exporting The Model Of The Schema
module.exports = User;
