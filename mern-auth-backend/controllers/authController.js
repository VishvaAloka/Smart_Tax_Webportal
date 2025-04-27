const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Token with user_type
const generateToken = (id, user_type) => {
  return jwt.sign({ id, user_type }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register User (NO PASSWORD HASHING)
const registerUser = async (req, res) => {
  const { username, email, password, user_type } = req.body; // Include user_type in registration

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Save user (Password stored as plain text)
    const newUser = new User({ username, email, password, user_type }); // Save user_type
    await newUser.save();

    // Generate a token for the new user
    const token = generateToken(newUser._id, newUser.user_type);

    res.json({
      message: "User registered successfully",
      token,
      user: { username: newUser.username, email: newUser.email, user_type: newUser.user_type },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Login User (Checking plain text password)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Directly compare plain text passwords
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate token with user_type
    const token = generateToken(user._id, user.user_type);

    res.json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        email: user.email,
        user_type: user.user_type,  // Include user_type in the response
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get User Profile
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      res.json({ _id: user.id, username: user.username, email: user.email, user_type: user.user_type });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { registerUser, loginUser, getUser };
