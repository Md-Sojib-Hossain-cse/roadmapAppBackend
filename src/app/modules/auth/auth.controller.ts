import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './auth.service';
import config from '../../config';

const loginUser = catchAsync(
  catchAsync(async (req, res, next) => {
    const userInfo = req.body;

    const result = await AuthServices.loginUserOnDB(userInfo);

    //send response
    sendResponse(
      res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        secure: config.node_env === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
      }),
      {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User Logged in Successfully!',
        data: result,
      },
    );
  }),
);

export const AuthControllers = {
  loginUser,
};
