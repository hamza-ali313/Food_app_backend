import { registerService, loginService } from "../services/authService.js";

export const Register = async (req, res, next) => {
  try {
    const newUser = await registerService(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const {loggedInUser, token} = await loginService(req.body);
    console.log(loggedInUser, "In login controller")
    console.log(token, "In login controller")
    res.json({ token, loggedInUser })
  } catch (error) {
    next(error);
  }
};
