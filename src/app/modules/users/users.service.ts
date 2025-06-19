import { TUser } from './users.interface';
import { UserModel } from './users.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
};
