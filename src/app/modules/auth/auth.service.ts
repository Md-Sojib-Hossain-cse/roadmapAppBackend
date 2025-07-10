import AppError from '../../errors/handleAppError';
import { UserModel } from '../users/users.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import config from '../../config';

const loginUserOnDB = async (payload: TLoginUser) => {
  const isUserExists = await UserModel.findOne({ email: payload?.email });

  if (!isUserExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'User does not Exists to post a comment',
    );
  }

  //  checking password

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists?.password,
  );

  //creating token and send to the client

  const jwtPayload = {
    email: isUserExists?.email,
    role: isUserExists?.role,
  };

  const accessToken = Jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '24h',
  });

  if (isPasswordMatched) {
    const userObj = {
      name: isUserExists?.name,
      email: isUserExists?.email,
      image: isUserExists?.image,
      gender: isUserExists?.gender,
      accessToken,
    };
    return userObj;
  } else {
    throw new AppError(httpStatus.FORBIDDEN, 'User Credentials invalid');
  }
};

export const AuthServices = {
  loginUserOnDB,
};
