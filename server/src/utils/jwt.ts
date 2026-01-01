import jwt, { SignOptions } from "jsonwebtoken";

export const signAccessToken = (payload: object) => {
  const secret = process.env.JWT_ACCESS_SECRET;

  if (!secret) {
    throw new Error("JWT_ACCESS_SECRET is missing");
  }

  const options: SignOptions = {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES ?? "10m",
  };

  return jwt.sign(payload, secret, options);
};

export const signRefreshToken = (payload: object) => {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error("JWT_REFRESH_SECRET is missing");
  }

  const options: SignOptions = {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES ?? "7d",
  };

  return jwt.sign(payload, secret, options);
};

export const verifyRefreshToken = (token: string) => {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error("JWT_REFRESH_SECRET is missing");
  }

  return jwt.verify(token, secret);
};
