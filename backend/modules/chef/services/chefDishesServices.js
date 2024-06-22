import ChefDishesRepo from "../repo/chefDishesRepo.js";
import createBoomError from '../../../middleware/boomError.js'

const chefDishesServices = async (payload) => {
    const getDishes = await ChefDishesRepo(payload);
    return getDishes;
};

export default chefDishesServices;
 