import { Request, Response } from "express";
import { authModel } from "../models/authModel";

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existUser = await authModel.findOne({
      email: email});

    if (existUser) {
      res.status(409).json({ msg: "User already exists" });
    } else {
      const user = new authModel({ email: email, password: password });
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};
