import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";

dotenv.config({
  path: "./src/.env",
});
const secretKey = process.env.SECRET_KEY;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(secretKey);

app.listen(3001, () => console.log("yeeee working"));
