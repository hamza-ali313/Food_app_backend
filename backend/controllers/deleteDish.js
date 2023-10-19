import deleteDishService from "../services/deleteDishService.js";

const deleteDish = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const deleteRes = await deleteDishService(id);
    
    if (deleteRes.error) {
      return res.status(404).json({ error: "Dish not found" });
    }
    
    res.json(deleteRes);
  } catch (error) {
    console.error("Error deleting dish:", error);
    res.status(500).json({ error: "Could not delete dish" });
  }
};

export default deleteDish;
