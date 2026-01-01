import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import protectedRoutes from "./routes/protected.routes";

dotenv.config();

const app = express();

// 🔐 Middlewares
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend 
    credentials: true, // 🔥 COOKIE 
  })
);

app.use(cookieParser()); // 🔥 REFRESH TOKEN 

// 🔁 Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

// 🩺 Health check
app.get("/", (_req, res) => {
  res.json({ status: "API is running 🚀" });
});

export default app;
