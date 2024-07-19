import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dishRoutes from "./modules/dish/routes/DishRoutes.js";
import authRoutes from "./modules/user/routes/authRouts.js";
// import multer from "multer";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(errorMiddleware);




// Routes here
app.use("/api/v1/dishes", dishRoutes);
app.use("/api/v1/chefdishes", dishRoutes);
app.use("/api/v1/users", authRoutes);
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is starting on port ${port}`);
    });
  });

app.get("/", (req, res) => {
  res.send("Server is up and running successfully");
});
