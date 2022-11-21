import { model, Schema } from 'mongoose';
import IRecipe from '../types/recipe';

const recipeSchema = new Schema<IRecipe>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Recipe = model<IRecipe>('recipes', recipeSchema);

export default Recipe;