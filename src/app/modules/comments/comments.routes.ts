import express from 'express';
import { CommentsController } from './comments.controller';

const router = express.Router();

router.get('/', CommentsController.getAllComments);

router.post('/create-comment', CommentsController.createComment);

router.patch('/:id', CommentsController.updateComment);

router.delete('/:id', CommentsController.deleteComment);

export const commentsRoutes = router;
