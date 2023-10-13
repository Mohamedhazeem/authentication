import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { AlertEnum } from "../src/alertEnum";

export const loginController = async (req: Request,res: Response) =>{
   
    const { email, password } = req.params;
    try {
      //const existUser = await authModel.findOne({email: email});
      const existUser  = await authModel.findOne({ email: email, password: password });
      
      //const existUser = await authModel.find({email,password})
      if (existUser)  {
         res.json({isExist:AlertEnum.logedIn, msg: `Successfully loged!${existUser}` });
      }
       else {
        
        res.json({isExist:AlertEnum.emailNotMatch, msg: `User not exist! Please Sign Up! ${req.params}` });
      }
    } catch {
      res.status(500).json({ msg: `Error creating user` });
    }
}