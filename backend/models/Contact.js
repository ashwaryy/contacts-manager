const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: [true, "name must be provided"],
  },
  designation: {
    type: String,
    required: [true, "designation must be provided"],
  },
  company: {
    type: String,
    required: [true, "company must be provided"],
  },
  industry: {
    type: String,
    required: [true, "industry must be provided"],
  },
  email: {
    type: String,
    required: [true, "email must be provided"],
  },
  phone: {
    type: Number,
    required: [true, "phone must be provided"],
  },
  country: {
    type: String,
    required: [true, "country must be provided"],
    maxLength: 3,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
