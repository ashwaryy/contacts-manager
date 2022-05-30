const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contactsToBeAdded = req.body;
    contactsToBeAdded.forEach((element) => {
      element.user = req.user.email;
    });
    await Contact.create(contactsToBeAdded);
    res.status(200).send("success");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = createContact;
