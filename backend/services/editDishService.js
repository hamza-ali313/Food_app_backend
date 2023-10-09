import editDishRepo from "../repositories/editDishRepo.js";

const editDishService = async (payload) => {
  try {

    const updatedDish = await editDishRepo(payload);

    if (!updatedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    // Check if a new image is uploaded and update it
    // if (req.file) {
    //   existingDish.dishImage = req.file.filename;
    // }

    return updatedDish;

  } catch (error) {
    console.error("Error editing dish:", error);
  }
};

export default editDishService;
