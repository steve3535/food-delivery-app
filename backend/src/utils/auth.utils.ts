// src/utils/auth.utils.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { _id: user._id },
    process.env.JWT_SECRET || 'your-default-secret',
    { expiresIn: '7d' }
  );
};