import validateUser from '../middlewares/auth.middleware';
import express from 'express';
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from '../controllers/category.controller';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', validateUser, createCategory);
categoryRouter.patch('/:id', validateUser, updateCategory);
categoryRouter.delete('/:id', validateUser, deleteCategory);

export default categoryRouter;