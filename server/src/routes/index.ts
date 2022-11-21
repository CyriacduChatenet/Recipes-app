import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../controllers';
import express from 'express';

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;