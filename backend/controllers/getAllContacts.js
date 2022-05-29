const Contact = require("../models/Contact");

const getAllContacts = async (req, res) => {
  try {
    console.log("req.received");
    user = req.user.email;
    const contacts = await Contact.findOne({ user: user });
    res.status(200).json({ status: "success", contactList: contacts.contacts });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getAllContacts;
