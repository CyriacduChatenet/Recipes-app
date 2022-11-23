import express from 'express';
import cors from 'cors';
import { DBconnection } from './config/dbConfig';
import categoryRouter from './routes/categorie.router';
import recipeRouter from './routes/recipe.router';
import userRouter from './routes/user.router';
import authRouter from './routes/auth.router';

const PORT = process.env.PORT || 8000;

const app = express();
DBconnection();
app.use(express.json());
app.use(cors());

app.use('/recipes', recipeRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})