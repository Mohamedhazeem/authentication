import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import { signUpController } from '../controllers/signUpController';
import { loginController } from '../controllers/loginController';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.DATABASE!).then(
    ()=>app.listen(3000, () => {console.log('connected')})
).catch(()=> console.log('Failed to connect'))

app.post('/signup',signUpController);
app.post('/login',loginController);

app.get('/', (req, res) =>{
    res.json('hello hazeem')
})