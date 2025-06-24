import express from 'express';
import { CommentsController } from './comments.controller';
import validateRequest from '../../middlewares/validateRequest';
import { replyValidationSchema } from './comments.validations';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', CommentsController.getAllComments);

router.post('/create-comment', CommentsController.createComment);

router.patch('/:id', auth(), CommentsController.updateComment);

router.delete('/:id', auth(), CommentsController.deleteComment);

router.post(
  '/:commentId/create-reply',
  auth(),
  validateRequest(replyValidationSchema),
  CommentsController.createReplies,
);

export const commentsRoutes = router;
