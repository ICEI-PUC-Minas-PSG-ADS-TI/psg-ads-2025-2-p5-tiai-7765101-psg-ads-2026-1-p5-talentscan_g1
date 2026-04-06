const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  updateProfile,
  updatePassword
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);
router.put("/password/:id", updatePassword);

module.exports = router;