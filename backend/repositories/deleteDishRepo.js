import Dish from "../models/dish.js";

const deleteDishRepo = async (id) => {
  const deletedDish = await Dish.findByIdAndDelete(id);
  if (!deletedDish) {
    // If dish not found, return an object with an error property
    return { error: "Dish not found" };
  }

  // Fetch all remaining dishes after deletion
  const dishes = await Dish.find();
  return { deletedDish, dishes };
};

export default deleteDishRepo;
