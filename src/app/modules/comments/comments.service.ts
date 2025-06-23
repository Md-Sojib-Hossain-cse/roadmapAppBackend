import {
  TComments,
  TDeleteCommentPayload,
  TReplies,
  TUpdateCommentPayload,
} from './comments.interface';
import { CommentsModel } from './comments.model';

const getAllCommentsFromDB = async () => {
  const result = await CommentsModel.find().sort('-createdAt');
  return result;
};

const createCommentsOnDB = async (payload: TComments) => {
  const result = await CommentsModel.create(payload);
  return result;
};

const updateCommentOnDB = async (
  id: string,
  payload: TUpdateCommentPayload,
) => {
  const res = await CommentsModel.findById(id);

  if (!res?.userId.equals(payload?.userId)) {
    throw new Error('This User has no access to update this comment');
  }

  const result = await CommentsModel.findByIdAndUpdate(
    id,
    { text: payload?.text || '' },
    {
      new: true,
    },
  );

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

const createReplyOnDB = async (id: string, payload: TReplies) => {
  const isCommentExists = await CommentsModel.findById(id);

  if (!isCommentExists) {
    throw new Error(
      "Comment is not exist or maybe deleted . You can't reply at this moment.",
    );
  }

  const result = await CommentsModel.findByIdAndUpdate(
    id,
    {
      $addToSet: { replies: payload },
    },
    { new: true },
  );

  return result;
};

export const CommentsServices = {
  getAllCommentsFromDB,
  createCommentsOnDB,
  deleteCommentFromDB,
  updateCommentOnDB,
  createReplyOnDB,
};
