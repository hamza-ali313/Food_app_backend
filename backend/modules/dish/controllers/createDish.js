import { createDishService } from "../services/createDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const createDish = async (req, res) => {
  try {
    const payload = req.body;
    const newDish = await createDishService(payload);
    res.status(201).json(newDish);
  } catch (error) {
    return createBoomError(
      500,
      "Not created",
      "could not create dish in controll"
    );
  }
};

export default createDish;
