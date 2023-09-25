import mongoose from "mongoose";

const foodieSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Add foodie-specific fields here, such as delivery address, favorite dishes, etc.
  deliveryAddress: String,
  favoriteDishes: [String], // An array of favorite dish names
  // ... other foodie-related fields
});

const Foodie = mongoose.model('Foodie', foodieSchema);

module.exports = Foodie;
