import getDihService from "../services/getDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const getDishes = async (req, res, next) => {
    const dishes = await getDihService();
    res.json(dishes);
};

export default getDishes;
