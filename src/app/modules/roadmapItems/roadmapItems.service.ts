import { UserModel } from '../users/users.model';
import { TRoadmapItems } from './roadmapItems.interface';
import { RoadmapItemModel } from './roadmapItems.model';

const createRoadmapItemsIntoDB = async (payload: TRoadmapItems) => {
  const result = await RoadmapItemModel.create(payload);
  return result;
};

const getSingleRoadmapItemsFromDB = async (id: string) => {
  const result = await RoadmapItemModel.findById(id);

  if (!result) {
    throw new Error("This roadmap doesn't Exist.");
  }
  return result;
};

const getAllRoadmapItemsFromDB = async () => {
  const result = await RoadmapItemModel.find().sort('-createdAt');
  return result;
};

const removeUpVoteInRoadmapItemDocumentInDB = async (
  id: string,
  payload: { userId: string; email: string },
) => {
  const idRoadmapItemExists = await RoadmapItemModel.findById(id);

  if (!idRoadmapItemExists) {
    throw new Error('Roadmap item not Exists.');
  }

  const isUserExists = await UserModel.findById(payload?.userId);

  if (!isUserExists) {
    throw Error('User does not Exists to vote.');
  }

  const alreadyVoted = idRoadmapItemExists?.upvotesBy.includes(payload?.email);

  if (!alreadyVoted) {
    throw Error('User have no vote to added.');
  }

  const result = await RoadmapItemModel.findByIdAndUpdate(
    id,
    {
      $inc: { upvotes: -1 },
      $pull: { upvotesBy: payload?.email },
    },
    { new: true },
  );

  return result;
};

const addUpVoteInRoadmapItemDocumentInDB = async (
  id: string,
  payload: { userId: string; email: string },
) => {
  const idRoadmapItemExists = await RoadmapItemModel.findById(id);

  if (!idRoadmapItemExists) {
    throw new Error('Roadmap item not Exists.');
  }
  const isUserExists = await UserModel.findById(payload?.userId);

  if (!isUserExists) {
    throw Error('User does not Exists to vote.');
  }
  const alreadyVoted = idRoadmapItemExists?.upvotesBy.includes(payload.email);

  if (alreadyVoted) {
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
  removeUpVoteInRoadmapItemDocumentInDB,
};
