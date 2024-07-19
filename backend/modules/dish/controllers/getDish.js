import getDishServ from "../services/getDishServ.js";
import createBoomError from '../../../middleware/boomError.js';

const getDish = async (req, res, next) => {
  try {
    const dish = await getDishServ({ dishId: req.params.dishId });
    res.json(dish);
  } catch (error) {
    next(createBoomError(error));
  }
};

export default getDish;
