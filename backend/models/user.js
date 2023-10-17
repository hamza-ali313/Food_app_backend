import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { // foodie or chef
    type: String,
    required: true,
  },
  // Add more user-related fields here, such as name, profile picture, etc.
});

const User = mongoose.model('User', userSchema);

export default User;
