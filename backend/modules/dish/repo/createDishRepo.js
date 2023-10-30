import Dish from "../../../models/dish.js";

const createDishRepo = async (payload) => {
  try {
    const dish = new Dish(payload);

    const newDish = await dish.save();
    return newDish;
  } catch (error) {
    console.error("Error creating dish:", error);
    throw new Error("Could not create dish");
  }
};

export default createDishRepo;
