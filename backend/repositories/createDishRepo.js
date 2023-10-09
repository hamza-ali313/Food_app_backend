import Dish from "../models/dish.js";

// Create a new dish and save it to the database
const createDishRepo = async (payload) => {
  try {
    const dish = new Dish(payload); // Create a new Dish instance

    // Save the dish to the database
    const newDish = await dish.save();
    return newDish;
  } catch (error) {
    console.error("Error creating dish:", error);
    throw new Error("Could not create dish");
  }
};

export default createDishRepo;
