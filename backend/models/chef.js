import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Add chef-specific fields here, such as restaurant name, specialty, etc.
  restaurantName: String,
  specialty: String,
  // ... other chef-related fields
});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
