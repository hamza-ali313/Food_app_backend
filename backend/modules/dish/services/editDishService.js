import editDishRepo from "../repo/editDishRepo.js";
import { validateEditDishPayload } from "../../../utils/payloadValidation.js";

const editDishService = async (payload) => {
  try {
    const validatedPayload = validateEditDishPayload(payload);
    const updatedDish = await editDishRepo(validatedPayload);
    if (!updatedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    return updatedDish;
  } catch (error) {
    console.error("Error editing dish:", error);
  }
};

export default editDishService;
