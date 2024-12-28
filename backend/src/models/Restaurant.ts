import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

class Coordinates {
  @prop({ required: true })
  latitude!: number;

  @prop({ required: true })
  longitude!: number;
}

class RestaurantAddress {
  @prop({ required: true })
  street!: string;

  @prop({ required: true })
  city!: string;

  @prop({ required: true })
  postalCode!: string;

  @prop({ type: () => Coordinates, required: true })
  coordinates!: Coordinates;
}

class OpeningHours {
  @prop({ required: true })
  open!: string;

  @prop({ required: true })
  close!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
class Restaurant {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  description!: string;

  @prop({ required: true })
  cuisine!: string;

  @prop({ required: true })
  image!: string;

  @prop({ type: () => RestaurantAddress, required: true })
  address!: RestaurantAddress;

  @prop({ required: true })
  deliveryFee!: number;

  @prop({ required: true })
  minimumOrder!: number;

  @prop({ default: true })
  isOpen!: boolean;

  @prop({ type: () => Map, of: OpeningHours })
  openingHours!: Map<string, OpeningHours>;
}

const RestaurantModel = getModelForClass(Restaurant);
export default RestaurantModel;
