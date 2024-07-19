import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js';

const getDishRepo = async (dishId) => {
  try {
    const dish = await Dish.findById(dishId);
    if (!dish) {
      throw new Error('Dish not found');
    }
    return dish;
  } catch (error) {
    throw createBoomError(error);
  }
};

export default getDishRepo;
