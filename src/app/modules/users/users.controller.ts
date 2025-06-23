import httpStatus from 'http-status';
import { UserServices } from './users.service';
import userValidationSchema from './users.validations';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res, next) => {
  const user = req.body;

  const result = await UserServices.createUserIntoDB(user);

  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully!',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await UserServices.getUserFromDB(id);

  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Data Retrieve Successfully!',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res, next) => {
  const result = await UserServices.getAllUsersFromDB();

  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Users Data Retrieve Successfully!',
    data: result,
  });
});

export const UserController = {
  createUser,
  getSingleUser,
  getAllUsers,
};
