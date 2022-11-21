import express from 'express';
import { DBconnection } from './config/dbConfig';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from './controllers';
import router from './routes';

const PORT = process.env.PORT || 8000;

const app = express();
DBconnection();
app.use(express.json());

app.use('/recipes', router);


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})