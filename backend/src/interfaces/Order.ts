import { ObjectId } from 'mongodb';

export interface IOrder {
  _id: ObjectId;
  userId: ObjectId;
  restaurantId: ObjectId;
  items: Array<{
    menuItemId: ObjectId;
    quantity: number;
    price: number;
    customizations?: Array<{
      name: string;
      option: string;
      price: number;
    }>;
  }>;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryAddress: {
    street: string;
    city: string;
    postalCode: string;
  };
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod: 'card' | 'cash';
  createdAt: Date;
  updatedAt: Date;
}
