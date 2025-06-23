import { Types } from 'mongoose';

export type TComments = {
  userId: Types.ObjectId;
  itemId: Types.ObjectId;
  text: string;
  replies: TReplies[];
};

export type TReplies = {
  commentId: Types.ObjectId;
  userId: Types.ObjectId;
  text: string;
};

export type TDeleteCommentPayload = {
  userId: Types.ObjectId;
  email: string;
};

export type TUpdateCommentPayload = {
  userId: Types.ObjectId;
  email: string;
  text: string;
};
