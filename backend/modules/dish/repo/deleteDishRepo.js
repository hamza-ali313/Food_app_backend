import Dish from "../../../models/dish.js";

const deleteDishRepo = async (dishId) => {
  const deletedDish = await Dish.findByIdAndDelete(dishId);
  const dishes = await Dish.find();
  return { deletedDish, dishes };
};

export default deleteDishRepo;
