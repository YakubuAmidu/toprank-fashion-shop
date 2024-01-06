import dotenv from "dotenv";
dotenv.config();

import express from "express";

import morgan from "morgan";

import products from "./data/products.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running💥");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port} 👍`));
