import getDishesRepo from "../repo/getDishesRepo.js";
import createBoomError from '../../../middleware/boomError.js'
const getDihService = async (req, res, next) => {
  try {
    const getDishes = await getDishesRepo();
    return getDishes;
  } catch (error) {
    return createBoomError(
      500,
      "Not Found",
      "could not find dishes in service"
    );
  }
};

export default getDihService;
