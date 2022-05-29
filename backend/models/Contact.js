const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "user must be provided"],
  },
  contacts: [
    {
      name: {
        type: String,
        required: [true, "user must be provided"],
      },
      designation: {
        type: String,
        default: "",
      },
      company: {
        type: String,
        default: "",
      },
      industry: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      phone: {
        type: Number,
        default: "",
      },
      country: {
        type: String,
        default: "",
        maxLength: 3,
      },
    },
  ],
});

module.exports = mongoose.model("Contact", ContactSchema);
