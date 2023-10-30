import Dish from "../../../models/dish.js";

const getDishesRepo = async () => {
  const dishes = await Dish.find();
  return dishes;
};

export default getDishesRepo;
