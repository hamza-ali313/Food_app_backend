import Dish from "../models/dish.js"; // Import your Dish model
import upload from "../multer-config.js"; // Import your multer configuration

const createDish = async (req, res, next) => {
  try {
    // Wrap the callback function in an async function
    upload.single("dishImage")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading image:", err);
        return res.status(500).json({ error: "Could not upload image" });
      }

      // If the image upload is successful, continue with creating the dish
      const { dishName, description, price } = req.body;

      const dish = new Dish({
        dishName,
        description,
        price,
        dishImage: req.file.filename,
      });

      // Now you can use await here
      const newDish = await dish.save();

      res.status(201).json(newDish);
    });
  } catch (error) {
    console.error("Error creating dish:", error);
    res.status(500).json({ error: "Could not create dish" });
  }
};

export default createDish;
