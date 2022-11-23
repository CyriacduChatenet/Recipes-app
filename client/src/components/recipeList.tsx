import { FC, useEffect, useMemo, useState } from "react";
import RecipeSevice from "../services/recipes.service";
import RecipeForm from "./recipeForm";
import RecipeFormUpdate from "./recipeFormUpdate";

interface ICategorie {
  name: string;
  _id: string;
}

interface IRecipe {
  name: string;
  description: string;
  _id: string;
  categories: ICategorie[];
}

const RecipeList: FC = () => {
  
  const [data, setData] = useState([]);

  const recipeService = new RecipeSevice();

  const fetchAllRecipes = async () => {
    try {
      const datas = await recipeService.getAll();
      setData(datas);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const handleDelete = (id: string) => {
    recipeService.removeOne(id);
    data.filter((recipe: IRecipe) => recipe._id !== id)
  };

  return (
    <div>
      <h1>Recipes list</h1>
      <RecipeForm fetchAllRecipes={fetchAllRecipes} />
      <ul>
        {
          RecipeList.length >= 0 ?
          data.map((recipe: IRecipe) => (
            <article key={recipe._id}>
              <RecipeFormUpdate recipe={(recipe.name, recipe.description)} />
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <button onClick={() => handleDelete(recipe._id)}>Delete</button>
            </article>
          ))
          : <p>Pas de recettes pour le moment</p>}
      </ul>
    </div>
  );
};

export default RecipeList;
