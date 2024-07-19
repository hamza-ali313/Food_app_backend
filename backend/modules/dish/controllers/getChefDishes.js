import getChefDishesService from "../services/getChefDishesService.js";

const getChefDishes = async (req, res, next) => {
    try {
        const dishes = await getChefDishesService(req.params.chefId);
        res.json(dishes);
    } catch (error) {
        next(error); // Pass the error to the next middleware (error handler)
    }
};

export default getChefDishes;
