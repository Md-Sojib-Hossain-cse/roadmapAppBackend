import { TRoadmapItems } from './roadmapItems.interface';
import { RoadmapItemModel } from './roadmapItems.model';

const createRoadmapItemsIntoDB = async (payload: TRoadmapItems) => {
  const result = await RoadmapItemModel.create(payload);
  return result;
};

const getSingleRoadmapItemsFromDB = async (id: string) => {
  const result = await RoadmapItemModel.findById(id);
  return result;
};

const getAllRoadmapItemsFromDB = async () => {
  const result = await RoadmapItemModel.find();
  return result;
};

export const RoadmapItemsServices = {
  createRoadmapItemsIntoDB,
  getSingleRoadmapItemsFromDB,
  getAllRoadmapItemsFromDB,
};
