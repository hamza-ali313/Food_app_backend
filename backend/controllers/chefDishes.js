import Dish from "../models/dish.js";

const getChefDishes = async (req, res, next) => {
  const chefId = req.params.chef_ID; 

  try {
    const dishes = await Dish.find({ chef_id: chefId }).exec();
    res.json(dishes);
  } catch (error) {
    console.error("Error fetching dishes:", error);
    res.status(500).json({ error: "An error occurred while fetching dishes" });
  }
};

export default getChefDishes;
