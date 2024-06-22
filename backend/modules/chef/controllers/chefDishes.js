import chefDishesServices from "../services/chefDishesServices";

const ChefDishes = async (req, res, next) => {
  const chefId = req.params.chef_ID; 
  try {
    const dishes = await chefDishesServices(chefId)
    res.json(dishes);
  } catch (error) {
    console.error("Error fetching dishes:", error);
    res.status(500).json({ error: "An error occurred while fetching dishes" });
  }
};

export default ChefDishes;
