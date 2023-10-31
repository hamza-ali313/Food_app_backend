import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js'


const createDishRepo = async (payload) => {
  try {
    const dish = new Dish(payload);
    const newDish = await dish.save();
    return newDish;
  } catch (error) {
    return createBoomError(500, "Not Found", "could not create dish");
  }
};

export default createDishRepo;
