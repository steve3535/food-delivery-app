import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { User } from './User';
import { Restaurant } from './Restaurant';
import { MenuItem } from './MenuItem';

class OrderCustomization {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  option!: string;

  @prop({ required: true })
  price!: number;
}

class OrderItem {
  @prop({ ref: () => MenuItem, required: true })
  menuItemId!: Ref<MenuItem>;

  @prop({ required: true })
  quantity!: number;

  @prop({ required: true })
  price!: number;

  @prop({ type: () => [OrderCustomization], default: [] })
  customizations?: OrderCustomization[];
}

class DeliveryAddress {
  @prop({ required: true })
  street!: string;

  @prop({ required: true })
  city!: string;

  @prop({ required: true })
  postalCode!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
class Order {
  @prop({ ref: () => User, required: true })
  userId!: Ref<User>;

  @prop({ ref: () => Restaurant, required: true })
  restaurantId!: Ref<Restaurant>;

  @prop({ type: () => [OrderItem], default: [] })
  items!: OrderItem[];

  @prop({ enum: ['pending', 'confirmed', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'], default: 'pending' })
  status!: string;

  @prop({ required: true })
  subtotal!: number;

  @prop({ required: true })
  deliveryFee!: number;

  @prop({ required: true })
  total!: number;

  @prop({ type: () => DeliveryAddress, required: true })
  deliveryAddress!: DeliveryAddress;

  @prop({ enum: ['pending', 'paid', 'failed'], default: 'pending' })
  paymentStatus!: string;

  @prop({ enum: ['card', 'cash'], required: true })
  paymentMethod!: string;
}

const OrderModel = getModelForClass(Order);
export default OrderModel;
