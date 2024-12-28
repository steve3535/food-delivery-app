import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Restaurant } from './Restaurant';

class CustomizationOption {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  price!: number;
}

class Customization {
  @prop({ required: true })
  name!: string;

  @prop({ type: () => [CustomizationOption], default: [] })
  options!: CustomizationOption[];
}

@modelOptions({ schemaOptions: { timestamps: true } })
class MenuItem {
  @prop({ ref: () => Restaurant, required: true })
  restaurantId!: Ref<Restaurant>;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  description!: string;

  @prop({ required: true })
  price!: number;

  @prop({ required: true })
  image!: string;

  @prop({ required: true })
  category!: string;

  @prop({ type: () => [Customization], default: [] })
  customizations?: Customization[];

  @prop({ default: true })
  isAvailable!: boolean;
}

const MenuItemModel = getModelForClass(MenuItem);
export default MenuItemModel;
