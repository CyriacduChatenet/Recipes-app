import { model, Schema } from 'mongoose';
import IRecipe from '../types/recipe.type';

const recipeSchema = new Schema<IRecipe>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'categories',
        }
    ]
});

const Recipe = model<IRecipe>('recipes', recipeSchema);

export default Recipe;