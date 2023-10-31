import createDishRepo from "../repo/createDishRepo.js";
import createBoomError from '../../../middleware/boomError.js'

import { validateDishPayload } from "../../../utils/payloadValidation.js";

export const createDishService = async (payload) => {
  try {
    const newDish = {
      dishName: payload.dishName,
      description: payload.description,
      price: payload.price,
    };
    const validatedDish = validateDishPayload(newDish);
    const savedDish = await createDishRepo(validatedDish.value);
    return savedDish;
  } catch (error) {
    return createBoomError(500,'Not Found','could not create dish in service')
  }
};
