import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
class Address {
  @prop({ required: true })
  street!: string;

  @prop({ required: true })
  city!: string;

  @prop({ required: true })
  postalCode!: string;

  @prop({ default: false })
  isDefault!: boolean;
}

@modelOptions({ schemaOptions: { timestamps: true } })
class User {
  @prop({ required: true, unique: true })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  phone!: string;

  @prop({ type: () => [Address], default: [] })
  addresses!: Address[];
}

const UserModel = getModelForClass(User);
export default UserModel;
