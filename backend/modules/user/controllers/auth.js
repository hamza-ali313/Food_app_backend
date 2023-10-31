import { registerService, loginService } from "../services/authService.js";

export const Register = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = await registerService(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const token = await loginService(req.body);
    await res.json(token);
  } catch (error) {
    next(error);
  }
};
