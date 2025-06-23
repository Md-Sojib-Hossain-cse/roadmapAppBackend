// import { Types } from 'mongoose';

export type TRoadmapItems = {
  title: string;
  description: string;
  status: 'Planned' | 'In-progress' | 'Completed';
  category: string;
  upvotes: number;
  upvotesBy: string[];
  items: string[];
  // comments: Types.ObjectId;
};
