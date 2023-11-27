import editDishRepo from "../repo/editDishRepo.js";
import { validateEditDishPayload } from "../../../utils/payloadValidation.js";
import createBoomError from '../../../middleware/boomError.js'

const editDishService = async (payload) => {
    const validatedPayload = validateEditDishPayload(payload);
    const updatedDish = await editDishRepo(validatedPayload);
    return updatedDish;
};

export default editDishService;
