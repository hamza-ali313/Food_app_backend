// utils/payloadValidation.js
import Joi from "joi"

// Define a 'joi' schema for the payload
const dishSchema = Joi.object({
  dishName: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
});

// Create a function to validate the payload against the schema
export const validateDishPayload = (payload) => {
  return dishSchema.validate(payload);
};
// Define a 'joi' schema for the payload
const authSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(), // Use .email() for email validation
  password: Joi.string().required(), // Make sure password is a string
  role: Joi.string().valid('foodie', 'chef').required(), // Validate against specific roles
});

// Create a function to validate the payload against the schema
export const validateAuthPayload = (payload) => {
  return authSchema.validate(payload);
};
