import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateJwtToken = (userId: string) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ userId },secretKey!, { expiresIn: '1h' });
    return token;
  };