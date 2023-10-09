import { Request, Response } from "express";
import { authModel } from "../models/authModel";

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existUser = await authModel.findOne({
      email: email});

    if (existUser) {
      return res.json({ msg: `User with email ${email} already exists` });
    } else {
      const user = new authModel({ email: email, password: password });
      const savedUser = await user.save();
      res.json(savedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: `Error creating user: ${error.message}` });
  }
};
