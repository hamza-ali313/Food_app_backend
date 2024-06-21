import deleteDishService from "../services/deleteDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const deleteDish = async (req, res, next) => {
    const { dishId } = req.params;
    const deleteRes = await deleteDishService(dishId);
    res.json(deleteRes);
};

export default deleteDish;
