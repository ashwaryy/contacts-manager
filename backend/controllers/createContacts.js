const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    console.log(req.body);
    const queryUser = "ashwaryy@gmail.com";
    const user = await Contact.findOne({ user: queryUser });
    console.log(user);
    if (user.length === 0) {
      const createContactForFirstTime = await Contact.create(req.body);
      res.status(200).send("success");
    } else {
      console.log(req.body.contacts);
      const addedContacts = user.contacts.concat(req.body.contacts);
      await user.updateOne({ contacts: addedContacts });
      res.status(200).send("success");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = createContact;
