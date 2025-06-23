import { Schema, model, Types } from 'mongoose';
import { TComments } from './comments.interface';

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
    // replies: {
    //   type: Schema.Types.ObjectId,
    // ref : ""
    //   default: [],
    // },
  },
  {
    timestamps: true,
  },
);

export const CommentsModel = model<TComments>('Comment', commentsSchema);
