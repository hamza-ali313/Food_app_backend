import getDishService from "../services/getDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const getDishes = async (req, res, next) => {
    const dishes = await getDishService();
    res.json(dishes);
};

export default getDishes;
