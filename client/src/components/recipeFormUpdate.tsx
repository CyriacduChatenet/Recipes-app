import { FC, useState } from "react";
import RecipeSevice from "../services/recipes.service";

interface IProps {
    recipe : any
}

const RecipeFormUpdate: FC<IProps> = ({recipe}) => {
    const [credentials, setCredentials] = useState({});

    const recipeService = new RecipeSevice();

    const handleUpdate = (credentials: any, id: string, e?: MouseEvent) => {
        e?.preventDefault();
        recipeService.update(credentials, id)
      };
    
      const handleChange = (e?: any) => {
        const {name, value} = e.target
        setCredentials({
          [name]: value
        })
      };

    return (
        <form action="">
        <input type="text" name='name' value={recipe.name} onChange={handleChange} />
        <input type="text" name='description' value={recipe.description} onChange={handleChange} />
        <input type="submit" value="Edit" onClick={() => handleUpdate(credentials, recipe._id)} />
      </form>
    );
};

export default RecipeFormUpdate;