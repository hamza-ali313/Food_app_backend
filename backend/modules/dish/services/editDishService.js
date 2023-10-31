import editDishRepo from "../repo/editDishRepo.js";
import { validateEditDishPayload } from "../../../utils/payloadValidation.js";
import createBoomError from '../../../middleware/boomError.js'

const editDishService = async (payload) => {
  try {
    const validatedPayload = validateEditDishPayload(payload);
    const updatedDish = await editDishRepo(validatedPayload);
    return updatedDish;
  } catch (error) {
    return createBoomError(
      500,
      "Not edited",
      "could not edit dish in service"
    );
  }
};

export default editDishService;
