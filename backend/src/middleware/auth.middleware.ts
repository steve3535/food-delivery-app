// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import { IUser } from '../interfaces';

export interface AuthRequest extends Request {
  user?: IUser;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-default-secret') as { _id: string };
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.user = user.toObject();
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};
