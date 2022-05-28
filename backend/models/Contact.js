const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  designation: {
    type: String,
    required: [true, "must provide designation"],
  },
  company: {
    type: String,
    required: [true, "must provide company"],
  },
  industry: {
    type: String,
    required: [true, "must provide industry"],
  },
  email: {
    type: String,
    required: [true, "must provide email"],
  },
  phone: {
    type: Number,
    required: [true, "must provide phone"],
  },
  country: {
    type: String,
    required: [true, "must provide country"],
    maxLength: 3,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
