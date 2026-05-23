import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "local_secret";

export interface JwtPayload {
  userId: string;
  role: string;
}

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
