import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { AlertEnum } from "../src/alertEnum";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../utilis/generateToken";

export const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existUser = await authModel.findOne({
      email: email});

    if (existUser) {
      return res.json({isExist:AlertEnum.signed, msg: `User with email ${email} already exists, Please try Log In` });
    } else {
      const pass = bcrypt.hashSync(password,10);
      const user = new authModel({ email: email, password: pass});
      const savedUser = await user.save();
      res.cookie('token',generateJwtToken(user.id));
      res.json({isExist:AlertEnum.signUp, msg: `Account created successfully` });
    }
  } catch {
    res.status(500).json({ msg: `Error creating user` });
  }
};
