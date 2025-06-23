import express from 'express';
import { CommentsController } from './comments.controller';
import validateRequest from '../../middlewares/validateRequest';
import { replyValidationSchema } from './comments.validations';

const router = express.Router();

router.get('/', CommentsController.getAllComments);

router.post('/create-comment', CommentsController.createComment);

router.patch('/:id', CommentsController.updateComment);

router.delete('/:id', CommentsController.deleteComment);

router.post(
  '/:commentId/create-reply',
  validateRequest(replyValidationSchema),
  CommentsController.createReplies,
);

export const commentsRoutes = router;
