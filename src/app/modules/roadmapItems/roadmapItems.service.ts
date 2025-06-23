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
  const result = await RoadmapItemModel.find().sort('-createdAt');
  return result;
};

const addUpVoteInRoadmapItemDocumentInDB = async (
  id: string,
  payload: { userId: string; email: string },
) => {
  const isUserAlreadyVoted = await RoadmapItemModel.find({
    upvotesBy: { $in: payload?.email },
  });

  if (isUserAlreadyVoted.length) {
    throw Error('Vote Already added.');
  }

  const result = await RoadmapItemModel.findByIdAndUpdate(
    id,
    {
      $inc: { upvotes: 1 },
      $push: { upvotesBy: payload?.email },
    },
    { new: true },
  );

  return result;
};

export const RoadmapItemsServices = {
  createRoadmapItemsIntoDB,
  getSingleRoadmapItemsFromDB,
  getAllRoadmapItemsFromDB,
  addUpVoteInRoadmapItemDocumentInDB,
};
