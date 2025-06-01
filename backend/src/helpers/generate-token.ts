import jwt from "jsonwebtoken";

// use user._id to generate token
export const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
};
