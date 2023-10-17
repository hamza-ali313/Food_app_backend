import editDishRepo from "../repositories/editDishRepo.js";
import {validateEditDishPayload} from "../utils/payloadValidation.js"

const editDishService = async (payload) => {

  try {
    const validatedPayload = validateEditDishPayload(payload)
    console.log(validatedPayload);
    const updatedDish = await editDishRepo(validatedPayload);
    console.log(updatedDish)
    if (!updatedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    // Check if a new image is uploaded and update it
    // if (req.file) {
    //   existingDish.dishImage = req.file.filename;
    // }

    return updatedDish;

  } catch (error) {
    console.error("Error editing dish:", error);
  }
};

export default editDishService;
