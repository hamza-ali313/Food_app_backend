import deleteDishRepo from "../repo/deleteDishRepo.js";
import createBoomError from '../../../middleware/boomError.js'

const deleteDishService = async (dishId) => {
    const deletedDishRes = await deleteDishRepo(dishId);
    const { deletedDish, dishes } = deletedDishRes;
   
    if(!deletedDish) {
      const notFound = createBoomError(401,'Not Found','The dish is not found');
      return notFound;
    }

    return dishes;
  
};

export default deleteDishService;
