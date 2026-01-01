import jwt, { SignOptions } from "jsonwebtoken";

export const signAccessToken = (payload: object) => {
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) throw new Error("JWT_ACCESS_SECRET is missing");

  const expiresIn =
    (process.env.ACCESS_TOKEN_EXPIRES as SignOptions["expiresIn"]) || "10m";

  return jwt.sign(payload, secret, { expiresIn });
};

export const signRefreshToken = (payload: object) => {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) throw new Error("JWT_REFRESH_SECRET is missing");

  const expiresIn =
    (process.env.REFRESH_TOKEN_EXPIRES as SignOptions["expiresIn"]) || "7d";

  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyRefreshToken = (token: string) => {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) throw new Error("JWT_REFRESH_SECRET is missing");

  return jwt.verify(token, secret);
};
