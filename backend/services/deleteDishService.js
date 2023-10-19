import deleteDishRepo from "../repositories/deleteDishRepo.js";
const deleteDishService = async (id) => {
  try {
    const deletedDishRes = await deleteDishRepo(id);
    const { deletedDish, dishes } = deletedDishRes
    if (!deletedDish) {
      return { error: "Dish not found" };
    }

    return  dishes;
  } catch (error) {
    console.error("Error deleting dish:", error);
    throw new Error("Could not delete dish");
  }
};

export default deleteDishService;
