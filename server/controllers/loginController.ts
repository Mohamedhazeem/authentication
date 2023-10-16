import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { AlertEnum } from "../src/alertEnum";

export const loginController = async (req: Request,res: Response) =>{
   
    const { email, password } = req.params;
    try {
      const existUser  = await authModel.findOne({ email: email, password: password });
      if (existUser)  {
         res.json({isExist:AlertEnum.logedIn, msg: `Successfully loged!` });
      }
       else {
        
        res.json({isExist:AlertEnum.emailNotMatch, msg: `Email and Password not Match. Try Again` });
      }
    } catch {
      res.status(500).json({ msg: `Error creating user` });
    }
}