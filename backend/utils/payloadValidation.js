import Joi from "joi"

const dishSchema = Joi.object({
  dishName: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  thumbnail: Joi.string().required(),
});

export const validateDishPayload = (payload) => {
  return dishSchema.validate(payload);
};

const editDishSchema = Joi.object({
  dishName: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  id: Joi.required(),
});

export const validateEditDishPayload = (payload) => {
  return editDishSchema.validate(payload);
};
const authSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(), 
  password: Joi.string().required(), 
  role: Joi.string().valid('foodie', 'chef').required(), 
});

export const validateAuthPayload = (payload) => {
  return authSchema.validate(payload);
};

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(), 
});


export const validateLoginPayload = (payload) => {
  return loginSchema.validate(payload);
};
