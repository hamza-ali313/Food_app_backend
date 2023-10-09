import createDishService from "../services/createDishService.js";

// Create a new dish based on the request payload
export const createDish = async (req, res) => {
  try {
    const payload = req.body; // Get the payload from the request body

    // Call the service to create a new dish
    const newDish = await createDishService(payload);

    // Send a success response
    res.status(201).json(newDish);
  } catch (error) {
    console.error("Error creating dish:", error);
    res.status(500).json({ error: error.message || "Could not create dish" });
  }
};
