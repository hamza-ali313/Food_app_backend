import Dish from "../models/dish.js";

const deleteDishRepo = async (id) => {
  const deletedDish = await Dish.findByIdAndDelete(id);
  if (!deletedDish) {
    return { error: "Dish not found" };
  }

  const dishes = await Dish.find();
  return { deletedDish, dishes };
};

export default deleteDishRepo;
