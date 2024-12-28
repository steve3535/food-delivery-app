import { ObjectId } from 'mongodb';

export interface IRestaurant {
  _id: ObjectId;
  name: string;
  description: string;
  cuisine: string;
  image: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    }
  };
  deliveryFee: number;
  minimumOrder: number;
  isOpen: boolean;
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
    }
  };
}
