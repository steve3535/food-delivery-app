import { ObjectId } from 'mongodb';

export interface IMenuItem {
  _id: ObjectId;
  restaurantId: ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizations?: Array<{
    name: string;
    options: Array<{
      name: string;
      price: number;
    }>;
  }>;
  isAvailable: boolean;
}
