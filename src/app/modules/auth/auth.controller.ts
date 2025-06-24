import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(
  catchAsync(async (req, res, next) => {
    const userInfo = req.body;

    const result = await AuthServices.loginUserOnDB(userInfo);

    //send response
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Logged in Successfully!',
      data: result,
    });
  }),
);

export const AuthControllers = {
  loginUser,
};
