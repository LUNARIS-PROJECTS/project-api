import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { prototype } from "pg/lib/type-overrides";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
})

app.listen(process.env.PORT, ()=>{
  console.log(`server running on port ${process.env.PORT}`);
})
