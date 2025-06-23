import { TComments, TDeleteCommentPayload } from './comments.interface';
import { CommentsModel } from './comments.model';

const getAllCommentsFromDB = async () => {
  const result = await CommentsModel.find().sort('-createdAt');
  return result;
};

const createCommentsOnDB = async (payload: TComments) => {
  const result = await CommentsModel.create(payload);
  return result;
};

const deleteCommentFromDB = async (
  id: string,
  payload: TDeleteCommentPayload,
) => {
  const res = await CommentsModel.findById(id);

  if (!res?.userId.equals(payload?.userId)) {
    throw new Error('This User has no access to delete this comment');
  }

  const result = await CommentsModel.findByIdAndDelete(id);

  return result;
};

export const CommentsServices = {
  getAllCommentsFromDB,
  createCommentsOnDB,
  deleteCommentFromDB,
};
