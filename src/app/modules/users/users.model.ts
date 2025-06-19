import { Schema, model } from 'mongoose';
import { TUser } from './users.interface';

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('user', userSchema);
