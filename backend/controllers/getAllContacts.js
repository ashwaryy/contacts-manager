const Contact = require("../models/Contact");

const getAllContacts = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const contactsPerPage = 10;

    user = req.user.email;
    const contacts = await Contact.find({ user: user })
      .skip(page * contactsPerPage)
      .limit(contactsPerPage);
    res.status(200).json({
      status: "success",
      contactList: contacts,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getAllContacts;
