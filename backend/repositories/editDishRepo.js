import Dish from "../models/dish.js";

const editDishRepo = async (payload) => {
  try {
    console.log(payload,"repo")
    const {id,dishName, description, price,} = payload.value;
    
    const existingDish = await Dish.findById(id);
    console.log(payload,"repo")

    if (!existingDish) {
      return ({error: "Dish not found" });
    }

    existingDish.dishName = dishName;
    existingDish.description = description;
    existingDish.price = price;

    const updatedDish = await existingDish.save();
    return updatedDish;

  } catch (error) {
    console.error("Error editing dish:", error);
  }
};

export default editDishRepo;
