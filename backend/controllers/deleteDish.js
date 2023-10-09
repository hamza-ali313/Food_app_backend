import deleteDishService from "../services/deleteDishService.js";

const deleteDish = async (req, res, next) => {
  try {
    const { id } = req.params; // Use destructuring to extract the id from req.params
    const deleteRes = await deleteDishService(id);
    
    if (deleteRes.error) {
      // Handle the case where the dish was not found
      return res.status(404).json({ error: "Dish not found" });
    }
    
    // Handle successful deletion
    res.json(deleteRes);
  } catch (error) {
    console.error("Error deleting dish:", error);
    res.status(500).json({ error: "Could not delete dish" });
  }
};

export default deleteDish;
