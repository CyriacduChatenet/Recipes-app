import ICategorie from "./categorie.type";

interface IRecipe {
    _id?: string;
    name: string;
    description: string;
    categories: ICategorie[];
}

export default IRecipe;