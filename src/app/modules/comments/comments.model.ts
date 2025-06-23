import { Schema, model } from 'mongoose';
import { TComments, TReplies } from './comments.interface';

const repliesSchema = new Schema<TReplies>(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const commentsSchema = new Schema<TComments>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'RoadmapItem',
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
      max: [300, "Comments Can't be more then 300 character long."],
    },
    replies: {
      type: [repliesSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const CommentsModel = model<TComments>('Comment', commentsSchema);
