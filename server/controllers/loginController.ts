import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { AlertEnum } from "./signUpController";

export const loginController = async (req: Request,res: Response) =>{
    const { email, password } = req.body;
    try {
      const existUser = await authModel.findOne({email: email});
  
      if (existUser && existUser.password == password)  {
        return res.json({isExist:AlertEnum.logedIn, msg: `Successfully loged!` });
      }
      else if(existUser && existUser.password != password){
        return res.json({isExist:AlertEnum.logedIn, msg: `Successfully loged!` });
      }
       else {
        const user = new authModel({ email: email, password: password });
        const savedUser = await user.save();
        res.json({isExist:AlertEnum.signUp, msg: `Account created successfully` });
      }
    } catch {
      res.status(500).json({ msg: `Error creating user` });
    }
}