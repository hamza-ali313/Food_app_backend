import express from "express";
import createDish  from "../controllers/createDish.js";
import getDishes  from "../controllers/getDishes.js";
import updateDish  from "../controllers/EditDish.js";
import deleteDish  from "../controllers/deleteDish.js";
const router = express.Router();

router.post("/", createDish);

router.get("/", getDishes);

// router.get("/:id", getDish);

router.put("/:dishId", updateDish);

router.delete("/:dishId", deleteDish);

export default router;
