const mongoose = require("mongoose");
const schema = mongoose.Schema;

const profileSchema = new schema(
  {
    // img: { data: Buffer, contentType: String },
    userName: {
      type: "String",
      required: "true"
    },
    email: {
      type: "String",
      required: "true"
    },
    description: {
      type: "String",
      required: true
    }
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
