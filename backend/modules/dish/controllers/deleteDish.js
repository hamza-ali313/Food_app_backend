import deleteDishService from "../services/deleteDishService.js";
import createBoomError from '../../../middleware/boomError.js'

const deleteDish = async (req, res, next) => {
    const { id } = req.params;
    const deleteRes = await deleteDishService(id);
    res.json(deleteRes);
};

export default deleteDish;
