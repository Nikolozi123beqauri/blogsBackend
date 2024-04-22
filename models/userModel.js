
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Password: {
      type: Number,
      required: true,
    },
  });
const User = mongoose.model("User", UserSchema);

module.exports = User