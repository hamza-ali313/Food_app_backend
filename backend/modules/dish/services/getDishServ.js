import getDishRepo from "../repo/getDishRepo.js";
import createBoomError from '../../../middleware/boomError.js';

const getDishServ = async ({ dishId }) => {
  try {
    const getDish = await getDishRepo(dishId);
    return getDish;
  } catch (error) {
    throw createBoomError(error);
  }
};

export default getDishServ;
