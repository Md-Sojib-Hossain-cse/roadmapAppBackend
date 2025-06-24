import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import roadmapItemValidationSchema from './roadmapItems.validations';
import { RoadmapItemsControllers } from './roadmapItems.controller';
import auth from '../../middlewares/auth';

const roadmapItemsRouter = express.Router();

roadmapItemsRouter.post(
  '/create-roadmap',
  auth(),
  validateRequest(roadmapItemValidationSchema),
  RoadmapItemsControllers.createRoadmapItems,
);

roadmapItemsRouter.get(
  '/:id',
  auth(),
  RoadmapItemsControllers.getSingleRoadmapItem,
);

roadmapItemsRouter.get(
  '/',
  auth(),
  RoadmapItemsControllers.getAllSingleRoadmapItem,
);

roadmapItemsRouter.post(
  '/upvote/:id',
  auth(),
  RoadmapItemsControllers.addUpvoteInRoadmapItemDocument,
);

roadmapItemsRouter.delete(
  '/upvote/:id',
  auth(),
  RoadmapItemsControllers.removeUpvoteInRoadmapItemDocument,
);

export const roadmapItemsRoutes = roadmapItemsRouter;
