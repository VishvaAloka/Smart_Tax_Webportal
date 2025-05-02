const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  getUserProfile,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", registerUser); // ✅ This is correct
router.post("/login", loginUser);
router.get("/user-profile", protect, getUserProfile);

module.exports = router;
