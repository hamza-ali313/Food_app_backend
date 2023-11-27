import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  validateAuthPayload,
  validateLoginPayload,
} from "../../../utils/payloadValidation.js";
import { registerRepo, loginRepo } from "../repo/authRepo.js";

export const registerService = async (payload) => {
  try {
    if (!payload.password) {
      throw new Error("Password is required");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10); 
    console.log(hashedPassword);
    const newUser = {
      username: payload.username,
      email: payload.email,
      password: hashedPassword,
      role: payload.role,
    };
    const validatedPayload = validateAuthPayload(newUser);
    const userGenerated = await registerRepo(validatedPayload.value);
    return userGenerated;
  } catch (error) {
    console.log(error);
  }
};

export const loginService = async (payload) => {
    const user = {
      username: payload.username,
      password: payload.password,
    };
    const validatedPayload = validateLoginPayload(user);
    const loggedInUser = await loginRepo(validatedPayload);
    const token = jwt.sign(loggedInUser.toJSON(), process.env.MONGO);
    return token;
 
};
