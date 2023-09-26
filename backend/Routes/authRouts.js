import { Register, Login } from "../controllers/auth.js";
import express from "express";


const router = express.Router()

// Register
router.post('/register', Register);
//Login 
router.post('/login', Login);

export default router;