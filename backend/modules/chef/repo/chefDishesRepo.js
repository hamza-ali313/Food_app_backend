import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js'

const ChefDishesRepo = async (payload) => {
  const dishes = await Dish.find({chef_id : payload});
  return dishes;
};

export default ChefDishesRepo;
