const Contact = require("../models/Contact");

const getOneContact = async (req, res) => {
  console.log("req rec to get one");
  try {
    user = req.user.email;
    const { id } = req.params;
    const singleContact = await Contact.find({ _id: id });
    console.log(singleContact);
    res.status(200).json({
      status: "success",
      contact: singleContact,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getOneContact;
