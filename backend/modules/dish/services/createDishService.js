import createDishRepo from "../repo/createDishRepo.js";
import createBoomError from "../../../middleware/boomError.js";
import { validateDishPayload } from "../../../utils/payloadValidation.js";

export const createDishService = async (payload, files) => {
  const img = files?.["thumbnail"] ? files["thumbnail"][0].path : "";
  
  const newDish = {
    dishName: payload.dishName,
    description: payload.description,
    price: payload.price,
    thumbnail: img,
  };
  
  const { error, value } = validateDishPayload(newDish);
  
  if (error) {
    throw createBoomError(400, error.details[0].message);
  }
  
  const savedDish = await createDishRepo(value);
  return savedDish;
};
