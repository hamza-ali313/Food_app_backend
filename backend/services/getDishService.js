import getDishesRepo from "../repositories/getDishesRepo.js";
// Create a new dish with the provided payload
const getDihService = async (req,res,next) => {
  try {
    const getDishes = await getDishesRepo();
    return getDishes;
  } catch (error) {
    next(error);
  }
};

export default getDihService;
 