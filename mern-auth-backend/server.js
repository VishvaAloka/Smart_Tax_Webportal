const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");  // Import userRoutes
const faqRoutes = require("./routes/FAQ_routes"); // Import FAQ routes
const User = require("./models/User");


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// Define the route to get all users
app.use("/api/users", userRoutes);  // Updated this line

app.use("/api/faqs", faqRoutes); // Add FAQ routes
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
