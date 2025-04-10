import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.get("/api/products", (req, res) => {
    res.send(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
