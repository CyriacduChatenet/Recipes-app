import express from 'express';
import { DBconnection } from './config/dbConfig';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from './controllers';

const PORT = process.env.PORT || 8000;

const app = express();
DBconnection();
app.use(express.json());

app.get('/recipes', getAllRecipes);
app.get('/recipes/:id', getRecipeById);
app.post('/recipes/', createRecipe);
app.patch('/recipes/:id', updateRecipe);
app.delete('/recipes/:id', deleteRecipe);


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})