import express from 'express';
import { UserRoutes } from '../modules/users/users.routes';
import { roadmapItemsRoutes } from '../modules/roadmapItems/roadmapItems.routes';
import { commentsRoutes } from '../modules/comments/comments.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/roadmap',
    route: roadmapItemsRoutes,
  },
  {
    path: '/comments',
    route: commentsRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
