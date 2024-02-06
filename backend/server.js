import express from "express";

import cookieParser from "cookie-parser";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMilddleware.js";
import connectDB from "./config/db.js";

import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie-parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API running...💥");
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port} 👍`);
  connectDB();
});
