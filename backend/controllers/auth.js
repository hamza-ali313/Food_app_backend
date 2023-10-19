import { registerService,loginService } from "../services/authService.js";


export const Register = async (req, res, next) => {
    try {
        console.log(req.body)
        const newUser = await registerService(req.body);
        res.json(newUser);
    } catch (error) {
        next(error)
    }
}

export const Login = async (req, res, next) => {
    try {
        const user = await loginService(req.body);
        await res.json(user);
    } catch (error) {
       next(error)
    }
}


