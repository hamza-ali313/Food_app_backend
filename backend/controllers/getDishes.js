import Dish from "../models/dish.js";

const getDishes = async(req,res,next)=>{
 const dishes = await Dish.find()
 res.json(dishes)
}

export default getDishes;