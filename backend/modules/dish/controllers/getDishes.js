import getDihService from "../services/getDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const getDishes = async (req, res, next) => {
  try {
    const dishes = await getDihService();
    res.json(dishes);
  } catch (error) {
   return createBoomError(
      500,
      "Not Found",
      "could not find dishes"
    );
  }
};

export default getDishes;
