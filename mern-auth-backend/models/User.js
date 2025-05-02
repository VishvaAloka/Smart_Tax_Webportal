const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  user_type: { type: String, default: "user" },
  salary : { type: Number, default: 0 }, 
  business_income : { type: Number, default: 0 }, 
});

module.exports = mongoose.model("user", UserSchema);
