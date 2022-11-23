import { FC, useState } from "react";
import RecipeSevice from "../services/recipes.service";

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

interface IProps {
    fetchAllRecipes: () => any;
    recipe: IRecipe
};

interface ICredentials {
    title: string;
    description: string;
}

const RecipeForm: FC<IProps> = ({ fetchAllRecipes, recipe }) => {
    const [credentials, setCredentials] = useState<ICredentials>({
        title: '',
        description: ''
    });

    const recipeService = new RecipeSevice();

    const handleChange = (e?: any) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    };

    const handleSubmit = () => {
        recipeService.create(credentials);
        fetchAllRecipes();
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <label htmlFor="">
                <p>Name</p>
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <p>description</p>
                <input type="text" name="description" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default RecipeForm;