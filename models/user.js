import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add more user-related fields here, such as name, profile picture, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
