import { TComments } from './comments.interface';
import { CommentsModel } from './comments.model';

const getAllCommentsFromDB = async () => {
  const result = await CommentsModel.find().sort('-createdAt');
  return result;
};

const createCommentsOnDB = async (payload: TComments) => {
  const result = await CommentsModel.create(payload);
  return result;
};

export const CommentsServices = {
  getAllCommentsFromDB,
  createCommentsOnDB,
};
