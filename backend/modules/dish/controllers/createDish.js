import { createDishService } from "../services/createDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const createDish = async (req, res) => {
    const payload = req.body;
    const newDish = await createDishService(payload);
    res.status(201).json(newDish);
};

export default createDish;
