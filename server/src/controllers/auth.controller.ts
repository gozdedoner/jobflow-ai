import { Request, Response } from "express";
import { signAccessToken, signRefreshToken } from "../utils/jwt";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // ⚠️ Şimdilik fake user (DB gelince değişecek)
  if (email !== "gozde@test.com" || password !== "123456") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = { id: 1, email };

  // 🔑 TOKEN’LAR
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken({ id: user.id });

  // 🍪 httpOnly refresh cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // prod: true
    path: "/api/auth/refresh",
  });

  return res.status(200).json({
    message: "Login successful 🚀",
    token: accessToken,
  });
};
