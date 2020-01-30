const mongoose = require("mongoose");
const schema = mongoose.Schema;

const profileSchema = new schema(
  {
    avtar: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
