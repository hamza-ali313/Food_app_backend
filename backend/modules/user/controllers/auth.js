import { registerService, loginService } from "../services/authService.js";

export const Register = async (req, res, next) => {
    console.log(req.body);
    const newUser = await registerService(req.body);
    res.json(newUser);
};

export const Login = async (req, res, next) => {
    const token = await loginService(req.body);
    await res.json(token);
 
};
