import { TUser } from './users.interface';
import { UserModel } from './users.model';

const createUserIntoDB = async (payload: TUser) => {
  const isUserExists = await UserModel.findOne({ email: payload?.email });

  if (isUserExists) {
    throw new Error('User is already Exists.');
  }
  const result = await UserModel.create(payload);
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  getAllUsersFromDB,
};
