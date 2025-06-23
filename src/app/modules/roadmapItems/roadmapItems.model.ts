import { Schema, model, Types } from 'mongoose';
import { TRoadmapItems } from './roadmapItems.interface';

const roadmapItemsSchema = new Schema<TRoadmapItems>(
  {
    title: {
      type: String,
      required: [true, 'Title is required!'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required!'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['Planned', 'In-progress', 'Completed'],
      required: [true, 'Status is required!'],
    },
    category: {
      type: String,
      required: [true, 'Category is required!'],
      trim: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    items: {
      type: [String],
      default: [],
    },
    // comments: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Comment',
    //   default: [],
    // },
  },
  {
    timestamps: true,
  },
);

export const RoadmapItemModel = model<TRoadmapItems>(
  'RoadmapItem',
  roadmapItemsSchema,
);
