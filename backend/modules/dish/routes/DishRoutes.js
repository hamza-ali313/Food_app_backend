import express from "express";
import createDish  from "../controllers/createDish.js";
import getDishes  from "../controllers/getDishes.js";
import getDish  from "../controllers/getDish.js";
import getChefDishes  from "../controllers/getChefDishes.js";
import updateDish  from "../controllers/EditDish.js";
import deleteDish  from "../controllers/deleteDish.js";
const router = express.Router();

router.post("/", createDish);

router.get("/", getDishes);

router.get("/:dishId", getDish);

// getting the dishes of a specific chef
router.get("/:chefId", getChefDishes);

router.put("/:dishId", updateDish);


router.delete("/:dishId", deleteDish);

export default router;
