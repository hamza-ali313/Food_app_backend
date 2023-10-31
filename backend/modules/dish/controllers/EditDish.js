import editDishService from "../services/editDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const editDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dishName, description, price } = req.body;
    const updatedDish = await editDishService({
      dishName,
      description,
      price,
      id,
    });

    res.json(updatedDish);
  } catch (error) {
    return createBoomError(
      500,
      "Not edited",
      "could not edit dish"
    );
  }
};

export default editDish;
