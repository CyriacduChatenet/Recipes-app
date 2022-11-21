import express from 'express';
import { DBconnection } from './config/dbConfig';
import recipeRouter from './router';

const PORT = process.env.PORT || 8000;

const app = express();
DBconnection();
app.use(express.json());

app.use('/recipes*', recipeRouter);


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})