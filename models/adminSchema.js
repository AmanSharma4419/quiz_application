const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = mongoose.Schema;

const adminSchema = new schema(
  {
    name: {
      type: "String",
      require: "true"
    },
    email: {
      type: "String",
      require: "true"
    },
    password: {
      type: "String",
      require: "true"
    },
    isAdmin: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

adminSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

adminSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
