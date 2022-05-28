const router = require("express").Router();
const registerUser = require("../controllers/registerUser");
const userLogin = require("../controllers/userLogin");
const authMiddleware = require("../middleware/auth");
router.post("/register", registerUser);
router.post("/login", userLogin);
// router
//   .route("/contacts")
//   .get(authMiddleware, getAllContacts)
//   .post(authMiddleware, createContacts);
// router
//   .route("/posts/:id")
//   .put(authMiddleware, editContact)
//   .delete(authMiddleware, deleteContact);

module.exports = router;
