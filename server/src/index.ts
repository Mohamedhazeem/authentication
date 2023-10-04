import express from 'express';
import 'dotenv/config';

const app = express();

app.listen(3000, () => {console.log(process.env.DATABASE)})

app.get('/', (req, res) =>{
    res.send('hello hazeem')
})