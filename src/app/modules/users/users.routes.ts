import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.post('/create-user', UserController.createUser);

router.get('/:id', UserController.getUser);

export const UserRoutes = router;
