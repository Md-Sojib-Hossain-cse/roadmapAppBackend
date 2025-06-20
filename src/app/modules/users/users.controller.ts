import httpStatus from 'http-status';
import { UserServices } from './users.service';
import userValidationSchema from './users.validations';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res, next) => {
  const user = req.body;

  //data validating using zod

  const zodParsedData = userValidationSchema.parse(user);

  const result = await UserServices.createUserIntoDB(zodParsedData);

  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully!',
    data: result,
  });
});

const getUser = catchAsync(async (req, res, next) => {
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

export const UserController = {
  createUser,
  getUser,
};
