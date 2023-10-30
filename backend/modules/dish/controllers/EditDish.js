import editDishService from "../services/editDishService.js";

const editDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dishName, description, price } = req.body;
    const updatedDish = await editDishService({
      dishName,
      description,
      price,
      id,
    });

    res.json(updatedDish);
  } catch (error) {
    console.error("Error editing dish:", error);
    res.status(500).json({ error: "Could not edit dish" });
  }
};

export default editDish;
