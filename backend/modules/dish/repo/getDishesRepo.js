import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js'

const getDishesRepo = async () => {
  const dishes = await Dish.find();
  return dishes;
};

export default getDishesRepo;
