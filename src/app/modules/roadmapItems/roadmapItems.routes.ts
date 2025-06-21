import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import roadmapItemValidationSchema from './roadmapItems.validations';
import { RoadmapItemsControllers } from './roadmapItems.controller';

const roadmapItemsRouter = express.Router();

roadmapItemsRouter.post(
  '/create-roadmap',
  validateRequest(roadmapItemValidationSchema),
  RoadmapItemsControllers.createRoadmapItems,
);

roadmapItemsRouter.get('/:id', RoadmapItemsControllers.getSingleRoadmapItem);

roadmapItemsRouter.get('/', RoadmapItemsControllers.getAllSingleRoadmapItem);

export const roadmapItemsRoutes = roadmapItemsRouter;
