import { TRoadmapItems } from './roadmapItems.interface';
import { RoadmapItemModel } from './roadmapItems.model';

const createRoadmapItemsIntoDB = async (payload: TRoadmapItems) => {
  const result = await RoadmapItemModel.create(payload);
  return result;
};

export const RoadmapItemsServices = {
  createRoadmapItemsIntoDB,
};
