import express from "express";
import {createDish} from "../controllers/createDish.js";
import getDishes from "../controllers/getDishes.js";
import deleteDish from "../controllers/deleteDish.js";
import editDish from "../controllers/EditDish.js";
import getChefDishes from "../controllers/chefDishes.js";

const router = express.Router();

// createDish
router.post("/createDish", createDish);
//get all dishes
router.get("/", getDishes);
// get chef related dishes
router.get("/:chef_ID", getChefDishes);
// delete specefic dish
router.post("/:id", deleteDish);
//edit dish
router.put("/:id", editDish);

export default router;
