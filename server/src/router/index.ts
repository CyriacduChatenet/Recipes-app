import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../controllers';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.patch('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

export default recipeRouter;