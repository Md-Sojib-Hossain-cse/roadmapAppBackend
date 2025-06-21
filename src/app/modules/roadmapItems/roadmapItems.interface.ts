export type TRoadmapItems = {
  title: string;
  description: string;
  status: 'Planned' | 'In-progress' | 'Completed';
  category: string;
  upvotes: number;
  items: string[];
};
