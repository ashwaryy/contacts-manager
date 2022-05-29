const router = require("express").Router();
const createContact = require("../controllers/createContacts");
const registerUser = require("../controllers/registerUser");
const userLogin = require("../controllers/userLogin");
const authMiddleware = require("../middleware/auth");
const upload = require("../utils/multer");
const getAllContacts = require("../controllers/getAllContacts");

router.post("/register", registerUser);
router.post("/login", userLogin);

router
  .route("/contacts")
  .get(authMiddleware, getAllContacts)
  .post(upload, authMiddleware, createContact);
// router
//   .route("/contacts")
//   .get(authMiddleware, getAllContacts)
//   .post(authMiddleware, createContacts);
// router
//   .route("/posts/:id")
//   .put(authMiddleware, editContact)
//   .delete(authMiddleware, deleteContact);

module.exports = router;
