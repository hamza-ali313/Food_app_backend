import express from "express";
import {createDish} from "../controllers/createDish.js";
import getDishes from "../controllers/getDishes.js";
import deleteDish from "../controllers/deleteDish.js";
import editDish from "../controllers/EditDish.js";
import getChefDishes from "../controllers/chefDishes.js";

const router = express.Router();

router.post("/createDish", createDish);
router.get("/", getDishes);
router.get("/:chef_ID", getChefDishes);
router.post("/:id", deleteDish);
router.put("/:id", editDish);

export default router;
