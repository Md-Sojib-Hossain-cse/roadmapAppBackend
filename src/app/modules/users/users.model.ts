import { Schema, model } from 'mongoose';
import { TUser } from './users.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required to create a user.'],
      maxlength: [30, "Name Can't be more then 30 characters long."],
      trim: true,
      validate: function (value: string) {
        const nameStr = value.charAt(0).toUpperCase() + value.slice(1);
        if (value !== nameStr) {
          return false;
        }
        return;
      },
    },
    email: {
      type: String,
      required: [true, 'Email is required to create a user.'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required to create a user.'],
      trim: true,
      maxlength: [30, "Password can't be more then 30 character"],
    },
    image: { type: String },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'others'],
        message: 'Gender is required to create a user.',
      },
      required: true,
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

//Pre middleware to encrypt password
userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//removing password from document for security
userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

export const UserModel = model<TUser>('user', userSchema);
