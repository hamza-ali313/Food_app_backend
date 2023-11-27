import Dish from "../../../models/dish.js";
import createBoomError from '../../../middleware/boomError.js'
const editDishRepo = async (payload) => {
    console.log(payload, "repo");
    const { id, dishName, description, price } = payload.value;
    const existingDish = await Dish.findById(id);
    
    if(!existingDish) {
     return createBoomError(401,'Not Found','The dish is not found');
    }
    existingDish.dishName = dishName;
    existingDish.description = description;
    existingDish.price = price;
    const updatedDish = await existingDish.save();
    return updatedDish;
};

export default editDishRepo;
