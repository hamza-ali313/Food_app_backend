import express from "express";
const router = express.Router();
import ChefDishes  from "../controllers/chefDishes.js";



router.get("/", ChefDishes);



export default router;
