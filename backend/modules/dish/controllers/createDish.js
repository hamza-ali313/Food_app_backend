import { createDishService } from "../services/createDishService.js";
import upload from '../../../multer-config.js';

const createDish = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    
    try {
      const payload = req.body;
      const files = req.files;
      const newDish = await createDishService(payload, files);
      
      res.status(201).json(newDish);
    } catch (error) {
      res.status(500).json({
        message: "Error saving dish to the database",
        error: error.message,
      });
    }
  });
};

export default createDish;
