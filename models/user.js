const mongoose = require("mongoose");

//Schema
const UserSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
      },
      technology: {
        type: String,
      },
    },
    { timestamps: true }
  );
  
  //Modal
  const UserModal = mongoose.model("users", UserSchema);

  module.exports = UserModal;