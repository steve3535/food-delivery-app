// src/services/auth.service.ts
import { IUser } from '../interfaces';
import { User } from '../models';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.utils';

export class AuthService {
  async register(userData: Partial<IUser>) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    if (userData.password) {
      userData.password = await hashPassword(userData.password);
    }

    const user = await User.create(userData);
    const token = generateToken(user.toObject());

    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user.toObject());
    return { user, token };
  }
}
