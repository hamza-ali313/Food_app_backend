import getDishesRepo from "../repositories/getDishesRepo.js";
// Create a new dish with the provided payload
const getDihService = async (payload) => {
  try {
    const getDishes = await getDishesRepo();
    return getDishes;
  } catch (error) {
    console.error(error);
  }
};

export default getDihService;
 