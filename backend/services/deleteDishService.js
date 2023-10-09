import Dish from "../models/dish.js";
import deleteDishRepo from "../repositories/deleteDishRepo.js";
const deleteDishService = async (id) => {
  try {
    const deletedDishRes = await deleteDishRepo(id);
    const { deletedDish, dishes } = deletedDishRes
    if (!deletedDish) {
      // If dish not found, return an object with an error property
      return { error: "Dish not found" };
    }

    // Fetch all remaining dishes after deletion
    return  dishes;
  } catch (error) {
    console.error("Error deleting dish:", error);
    throw new Error("Could not delete dish");
  }
};

export default deleteDishService;
