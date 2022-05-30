const Contact = require("../models/Contact");

const deleteAllContacts = async (req, res) => {
  console.log("delete all request received");
  try {
    const contactToBeDeleted = req.body;
    await Contact.deleteMany({ _id: { $in: contactToBeDeleted } });
    res.status(200).send("success");
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = deleteAllContacts;
