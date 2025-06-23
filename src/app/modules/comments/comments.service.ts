import { CommentsModel } from './comments.model';

const getAllCommentsFromDB = async () => {
  const result = await CommentsModel.find().sort('-createdAt');
  return result;
};

export const CommentsServices = {
  getAllCommentsFromDB,
};
