import { Types } from 'mongoose';

export type TComments = {
  userId: Types.ObjectId;
  itemId: Types.ObjectId;
  text: string;
  replies: TReplies[];
};

export type TReplies = {
  userId: Types.ObjectId;
  text: string;
};

export type TDeleteCommentPayload = {
  userId: Types.ObjectId;
  email: string;
};
