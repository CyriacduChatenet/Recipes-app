import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../controllers/recipe.controller';
import express from 'express';
import validateUser from '../middlewares/auth.middleware';

const recipeRouter = express.Router();

recipeRouter.get('/' ,getAllRecipes);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', validateUser, createRecipe);
recipeRouter.patch('/:id', validateUser, updateRecipe);
recipeRouter.delete('/:id', validateUser, deleteRecipe);

export default recipeRouter;