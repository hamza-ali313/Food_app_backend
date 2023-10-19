import {createDishService} from "../services/createDishService.js"
import {validateDishPayload} from "../utils/payloadValidation.js"

export const createDish = async (req, res) => {
  try {
    const payload = req.body; 


    const newDish = await createDishService(payload);

    res.status(201).json(newDish);
  } catch (error) {
    console.error("Error creating dish:", error);
    res.status(500).json({ error: error.message || "Could not create dish" });
  }
};
