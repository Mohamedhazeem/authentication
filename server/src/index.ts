import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import { signUpController } from '../controllers/signUpController';

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE!).then(
    ()=>app.listen(3000, () => {console.log('connected')})
).catch(()=> console.log('Failed to connect'))

app.post('/signup',signUpController);

app.get('/', (req, res) =>{
    res.json('hello hazeem')
})