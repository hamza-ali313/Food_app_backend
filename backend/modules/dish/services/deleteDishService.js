import deleteDishRepo from "../repo/deleteDishRepo.js";
import createBoomError from '../../../middleware/boomError.js'

const deleteDishService = async (id) => {
  try {
    const deletedDishRes = await deleteDishRepo(id);
    const { deletedDish, dishes } = deletedDishRes;
   
    if(!deletedDish) {
      const notFound = createBoomError(401,'Not Found','The dish is not found');
      return notFound;
    }

    return dishes;
  } catch (error) {
    return createBoomError(
      500,
      "Not deleted",
      "could not delete dish in service"
    );
  }
};

export default deleteDishService;
