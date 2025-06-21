import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoadmapItemsServices } from './roadmapItems.service';

const createRoadmapItems = catchAsync(async (req, res) => {
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

const getSingleRoadmapItem = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RoadmapItemsServices.getSingleRoadmapItemsFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Roadmap Item Retrieve Successfully',
    data: result,
  });
});

const getAllSingleRoadmapItem = catchAsync(async (req, res) => {
  const result = await RoadmapItemsServices.getAllRoadmapItemsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Roadmap Items Retrieve Successfully',
    data: result,
  });
});

export const RoadmapItemsControllers = {
  createRoadmapItems,
  getSingleRoadmapItem,
  getAllSingleRoadmapItem,
};
