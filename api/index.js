require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

// enable CORS
app.use(cors());

// Load products data
const products = require("../data/products.json");

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

module.exports = app;
