const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contactsToBeAdded = req.body;
    const check = contactsToBeAdded[0];
    if (
      check.name &&
      check.designation &&
      check.company &&
      check.industry &&
      check.email &&
      check.phone &&
      check.country
    ) {
      console.log("check passed");
      const queryUser = req.user.email;
      const user = await Contact.findOne({ user: queryUser });
      if (!user) {
        await Contact.create({
          user: queryUser,
          contacts: req.body,
        });
        res.status(200).send("success");
      } else {
        const addedContacts = user.contacts.concat(req.body);
        await user.updateOne({ contacts: addedContacts });
        res.status(200).send("success");
      }
    } else {
      console.log("check failed");
      res.status(400).send("All fields not provided");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = createContact;
