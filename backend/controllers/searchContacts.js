const Contact = require("../models/Contact");

const searchContacts = async (req, res) => {
  try {
    const searchQuery = req.query.search || "";

    user = req.user.email;
    if (searchQuery.length) {
      const searchResults = await Contact.find({
        email: { $regex: searchQuery },
      });
      const filteredResults = searchResults.filter(
        (item) => item.user === user
      );
      res.status(200).json({
        status: "success",
        searchResults: filteredResults,
      });
    } else {
      res.status(200).json({
        status: "success",
        searchResults: [],
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = searchContacts;
