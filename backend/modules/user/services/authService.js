import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  validateAuthPayload,
  validateLoginPayload,
} from "../../../utils/payloadValidation.js";
import { registerRepo, loginRepo } from "../repo/authRepo.js";
import createBoomError from "../../../middleware/boomError.js";
import User from "../../../models/user.js";

export const registerService = async (payload) => {
  try {
    if (!payload.password) {
      throw createBoomError(400, "Bad Request", "Password is required");
    }
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: payload.username }, { email: payload.email }],
    });

    if (existingUser) {
      return "username or email already exist ";
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    console.log(hashedPassword, "password is being hashed here");
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
    console.error("Error in registerService:", error);
    throw createBoomError(
      500,
      "Internal Server Error",
      "An unexpected error occurred"
    );
  }
};

export const loginService = async (payload) => {
  const user = {
    username: payload.username,
    password: payload.password,
  };
  const validatedPayload = validateLoginPayload(user);
  const loggedInUser = await loginRepo(validatedPayload);
  console.log(loggedInUser, "In loginService");
  const token = jwt.sign(loggedInUser.toJSON(), process.env.MONGO);
  return { token, loggedInUser };
};
