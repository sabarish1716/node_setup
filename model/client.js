const mongoose = require("mongoose");
const { isEmail } = require("validator");

let clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    minlength: [10, "minimum password length is 10 characters"],
  },
  mobile_number: {
    type: Number,
    required: true,
  },
  address: { type: mongoose.Types.ObjectId, ref: "address" },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("client", clientSchema, "Client");
