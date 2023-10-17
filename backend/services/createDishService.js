import bcrypt from 'bcrypt'
import createDishRepo from "../repositories/createDishRepo.js"
import Dish from '../models/dish.js';

// Create a new dish with the provided payload
export const createDishService = async (payload) => {
  try {
    // Validate and hash the password using bcrypt

    // Create a new Dish instance with the hashed password
    const newDish = {
      dishName: payload.dishName,
      description: payload.description,
      price: payload.price,
    };

    // Save the dish to the database
    const savedDish = await createDishRepo(newDish);
    return savedDish;
  } catch (error) {
    console.error("Error creating dish:", error);
    throw new Error("Could not create dish");
  }
};

