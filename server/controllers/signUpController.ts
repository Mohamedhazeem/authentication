import { Request, Response } from "express";
import { authModel } from "../models/authModel";

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existUser = await authModel.findOne({
      email: email,
      password: password,
    });

    if (existUser) {
      res.json({ msg: "User already exists" });
    } else {
      const user = new authModel({ email: email, password: password });
      const savedUser = await user.save();
      res.json(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};
