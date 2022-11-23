import { deleteUser, findUserById, findUsers, updateUser } from '../controllers/user.controller';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/', findUsers);
userRouter.get('/:id', findUserById);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;