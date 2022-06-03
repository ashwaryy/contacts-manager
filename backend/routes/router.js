const router = require("express").Router();
const createContact = require("../controllers/createContacts");
const registerUser = require("../controllers/registerUser");
const userLogin = require("../controllers/userLogin");
const authMiddleware = require("../middleware/auth");
const upload = require("../utils/multer");
const getAllContacts = require("../controllers/getAllContacts");
const deleteContact = require("../controllers/deleteContact");
const deleteAllContacts = require("../controllers/deleteAllContacts");
const searchContacts = require("../controllers/searchContacts");
const getOneContact = require("../controllers/getOneContact");

router.post("/register", registerUser);
router.post("/login", userLogin);

router
  .route("/contacts")
  .get(authMiddleware, getAllContacts)
  .post(upload, authMiddleware, createContact)
  .delete(authMiddleware, deleteAllContacts);

router
  .route("/contacts/:id")
  .get(authMiddleware, getOneContact)
  .delete(authMiddleware, deleteContact);
router.route("/search").get(authMiddleware, searchContacts);

module.exports = router;
