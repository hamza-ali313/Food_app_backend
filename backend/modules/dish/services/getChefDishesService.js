import getChefDishesRepo from "../repo/getChefDishesRepo.js";

const getChefDishesService = async (chefId) => {
    try {
        const getDishes = await getChefDishesRepo(chefId);
        return getDishes;
    } catch (error) {
        throw createBoomError(500, 'Error fetching dishes', error);
    }
};

export default getChefDishesService;
