import express from 'express';
import { CommentsController } from './comments.controller';

const router = express.Router();

router.use('/', CommentsController.getAllComments);

export const commentsRoutes = router;
