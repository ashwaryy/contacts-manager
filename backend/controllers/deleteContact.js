const Contact = require("../models/Contact");

const deleteContact = async (req, res) => {
  console.log("delete request received");
  const { email } = req.user;
  const { id } = req.params;
  try {
    const contactToBeDeleted = await Contact.find({ _id: id });
    if (contactToBeDeleted.length === 0) {
      res.status(404).send("Contact not found");
      return;
    }
    if (contactToBeDeleted[0].user === email) {
      await Contact.findByIdAndDelete({ _id: id, user: email });
      res.json({ status: "successfully deleted" });
    } else {
      res.status(403).send("you are not authorised to delete this contact");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = deleteContact;
