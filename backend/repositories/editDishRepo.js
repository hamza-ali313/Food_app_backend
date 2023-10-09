import Dish from "../models/dish.js"; // Import your Dish model

const editDishRepo = async (payload) => {
  try {
    const {id,dishName, description, price,} = payload;

    // Find the dish by its ID
    const existingDish = await Dish.findById(id);

    if (!existingDish) {
      return ({error: "Dish not found" });
    }

    // Check if a new image is uploaded and update it
    // if (req.file) {
    //   existingDish.dishImage = req.file.filename;
    // }

    // Update the textual properties
    existingDish.dishName = dishName;
    existingDish.description = description;
    existingDish.price = price;

    // Save the updated dish
    const updatedDish = await existingDish.save();
    return updatedDish;

  } catch (error) {
    console.error("Error editing dish:", error);
  }
};

export default editDishRepo;
