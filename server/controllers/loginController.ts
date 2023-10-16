import { Request, Response } from "express";
import { authModel } from "../models/authModel";
import { AlertEnum } from "../src/alertEnum";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../utilis/generateToken";

export const loginController = async (req: Request,res: Response) =>{
   
    const { email, password } = req.params;
    try {
      const existUser  = await authModel.findOne({ email: email});
    
      const result = bcrypt.compareSync(password,existUser!.password)
      if (result)  {
         res.cookie('token',generateJwtToken(existUser!.id));
         res.json({isExist:AlertEnum.logedIn, msg: `Successfully loged!` });
      }
       else {
        
        res.json({isExist:AlertEnum.emailNotMatch, msg: `Email and Password not Match. Try Again` });
      }
    } catch {
      res.status(500).json({ msg: `Error creating user` });
    }
}