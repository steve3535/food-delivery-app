import { ObjectId } from 'mongodb';

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  phone: string;
  addresses: Array<{
    street: string;
    city: string;
    postalCode: string;
    isDefault: boolean;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
