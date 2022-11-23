import AuthController from '../controllers/auth.controller';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/signup', AuthController.signUp);
authRouter.post('/signin', AuthController.signIn);

export default authRouter;