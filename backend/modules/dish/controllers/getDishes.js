import getDihService from "../services/getDishService.js";

const getDishes = async (req, res, next) => {
  try {
    const dishes = await getDihService();
    res.json(dishes);
  } catch (error) {
    console.log(error);
  }
};

export default getDishes;
