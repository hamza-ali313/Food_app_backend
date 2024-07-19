import Dish from "../../../models/dish.js";

const getChefDishesRepo = async (chefId) => {
    try {
        const dishes = await Dish.find({ chef_id: chefId }); // Assuming `chef_id` is the field name in your Dish model
        return dishes;
    } catch (error) {
        throw createBoomError(500, 'Error fetching dishes from database', error);
    }
};

export default getChefDishesRepo;
