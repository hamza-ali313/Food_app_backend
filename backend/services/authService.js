import bcrypt from "bcrypt";
import {validateAuthPayload,validateLoginPayload} from "../utils/payloadValidation.js";
import { registerRepo, loginRepo } from "../repositories/authRepo.js";

export const registerService = async (payload) => {
  try {

    if (!payload.password) {
        throw new Error("Password is required");
      }
      
    const hashedPassword = await bcrypt.hash(payload.password, 10); // 10 is the number of salt rounds
    console.log(hashedPassword)
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
  try {
    const user = {
      username: payload.username,
      password: payload.password,
    };
    console.log(user)
    const validatedPayload = validateLoginPayload(user);
    console.log(validatedPayload)
    const loggedInUser = await loginRepo(validatedPayload);

    return loggedInUser;
  } catch (error) {
    console.log(error);
  }
};
