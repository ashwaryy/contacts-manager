const createContact = async (req, res) => {
  try {
    console.log("request hit");
    res.send("Working");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = createContact;
