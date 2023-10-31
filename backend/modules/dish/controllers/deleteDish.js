import deleteDishService from "../services/deleteDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const deleteDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteRes = await deleteDishService(id);
    res.json(deleteRes);
  } catch (error) {
    return createBoomError(
      500,
      "Not deleted",
      "could not delete dish"
    );
  }
};

export default deleteDish;
