import getDishesRepo from "../repo/getDishesRepo.js";
import createBoomError from '../../../middleware/boomError.js'
const getDihService = async (req, res, next) => {
    const getDishes = await getDishesRepo();
    return getDishes;
};

export default getDihService;
