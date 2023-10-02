import mongoose from "mongoose";


// Define a schema for the dish
const dishSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
    trim: true, // Remove whitespace from the beginning and end of the name
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Minimum price should be 0
  },
  dishImage: {
    type: String,
  },
  chef_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to the 'User' model
  },
  // You can add more fields here as needed
});

// Create a Dish model using the schema
const Dish = mongoose.model('Dish', dishSchema);

export default Dish

// chef: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Chef', // Reference to the Chef model (if you have one)
//   required: true,
// },