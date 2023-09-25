import Dish from "../models/dish.js";

const deleteDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    // if dish is not found deletedDish = "" that is a flasy value the opposite of which is truthy vlaue
    if (!deletedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    console.error("Error deleting dish:", error);
    res.status(500).json({ error: "Could not delete dish" });
  }
};

export default deleteDish;
 