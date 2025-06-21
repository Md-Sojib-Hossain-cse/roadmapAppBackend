import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoadmapItemsServices } from './roadmapItems.service';

const createRoadmapItems = catchAsync(async (req, res, next) => {
  const roadmapItemsData = req.body;

  const result =
    await RoadmapItemsServices.createRoadmapItemsIntoDB(roadmapItemsData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Roadmap Items Created Successfully',
    data: result,
  });
});

export const RoadmapItemsControllers = {
  createRoadmapItems,
};
