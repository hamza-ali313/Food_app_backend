import Dish from "../models/dish.js"; // Import your Dish model
import upload from "../multer-config.js"; // Import your multer configuration

const editDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dishName, description, price } = req.body;

    // Find the dish by its ID
    const existingDish = await Dish.findById(id);

    if (!existingDish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    // Check if a new image is uploaded and update it
    if (req.file) {
      existingDish.dishImage = req.file.filename;
    }

    // Update the textual properties
    existingDish.dishName = dishName;
    existingDish.description = description;
    existingDish.price = price;

    // Save the updated dish
    const updatedDish = await existingDish.save();

    res.json(updatedDish);
  } catch (error) {
    console.error("Error editing dish:", error);
    res.status(500).json({ error: "Could not edit dish" });
  }
};

export default editDish;
