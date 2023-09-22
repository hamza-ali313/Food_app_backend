import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import dishRoutes from "./Routes/DishRoutes.js"
import multer from "multer";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes here
app.use('/api/dishes', dishRoutes);

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is starting on port ${port}`);
    });
});

app.get('/', (req, res) => {
    res.send("Server is up and running successfully");
});


