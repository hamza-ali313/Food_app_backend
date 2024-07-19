import getDishesRepo from "../repo/getDishesRepo.js";
import createBoomError from '../../../middleware/boomError.js'

const getDihService = async () => {
    const getDishes = await getDishesRepo();
    return getDishes;
};

export default getDihService;
