import createDishRepo from "../repositories/createDishRepo.js";
import Dish from "../models/dish.js";
// Create a new dish with the provided payload
const createDishService = async (payload) => {
  try {
    // You can add any validation or business logic here
    // For now, assume payload is valid and directly pass it to the repository
    const newDish = {
      dishName:payload.dishName,
      description:payload.description,
      price:payload.price,
    };

    const savedDish = await createDishRepo(newDish);
    return savedDish;
  } catch (error) {
    console.error("Error creating dish:", error);
    throw new Error("Could not create dish");
  }
};

export default createDishService;
