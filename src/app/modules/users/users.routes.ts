import express from 'express';
import { UserController } from './users.controller';
import validateRequest from '../../middlewares/validateRequest';
import userValidationSchema from './users.validations';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidationSchema),
  UserController.createUser,
);

router.get('/:id', UserController.getSingleUser);

router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
