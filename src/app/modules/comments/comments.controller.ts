import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentsServices } from './comments.service';
import httpStatus from 'http-status';

const getAllComments = catchAsync(async (req, res) => {
  const result = await CommentsServices.getAllCommentsFromDB();

  sendResponse(res, {
    success: true,
    message: 'All Comments Retrieve Successfully.',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const CommentsController = {
  getAllComments,
};
