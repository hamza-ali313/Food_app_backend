// controllers/createDish.js
import {createDishService} from "../services/createDishService.js"
import {validateDishPayload} from "../utils/payloadValidation.js"

// Create a new dish based on the validated request payload
export const createDish = async (req, res) => {
  try {
    const payload = req.body; // Get the payload from the request body

    // Validate the payload using the payload validation function
    const { error } = validateDishPayload(payload);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // If the payload is valid, call the service to create a new dish
    const newDish = await createDishService(payload);

    // Send a success response
    res.status(201).json(newDish);
  } catch (error) {
    console.error("Error creating dish:", error);
    res.status(500).json({ error: error.message || "Could not create dish" });
  }
};
