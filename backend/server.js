import express from "express";

import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMilddleware.js";
import connectDB from "./config/db.js";

// import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
// app.use(cors());

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API running...💥");
});

app.listen(port, () => {
  console.log(`Server running on port ${port} 👍`);
  connectDB();
});
