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

const allowedOrigins = [
  "http://localhost:5173",
  "https://jobflow-ai-sigma.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Postman / server-to-server için
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());

// 🔁 Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

// 🩺 Health check
app.get("/", (_req, res) => {
  res.json({ status: "API is running 🚀" });
});

export default app;
