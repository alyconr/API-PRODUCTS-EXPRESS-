import express from "express";
import productRoutes from "./routes/product.routes.js";



const app = express();
app.use(express.json());
app.get("/", (_req, res) => {
  res.status(200).json({ message: "Products API funcionando" });
});



app.use("/api/products", productRoutes);
export default app;
