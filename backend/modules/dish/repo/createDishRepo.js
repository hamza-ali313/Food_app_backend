import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js'


const createDishRepo = async (payload) => {
    const dish = new Dish(payload);
    const newDish = await dish.save();
    return newDish;
};

export default createDishRepo;
