import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { Error } from "mongoose";

export const enum AlertEnum {
  none,
  signUp,
  signed,
  logedIn,
}

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existUser = await authModel.findOne({
      email: email});

    if (existUser) {
      return res.json({isExist:AlertEnum.signed, msg: `User with email ${email} already exists` });
    } else {
      const user = new authModel({ email: email, password: password });
      const savedUser = await user.save();
      res.json({isExist:AlertEnum.signUp, msg: `Account created successfully` });
    }
  } catch {
    res.status(500).json({ msg: `Error creating user` });
  }
};
