import axios from 'axios';

const RECIPES_ENDPOINT = `http://localhost:4000/recipes`;

interface ICredentials {
    title?: string;
    description?: string;
}


class RecipeSevice {
    getAll = async () => {
        const response = await axios.get(RECIPES_ENDPOINT);
        return response.data;
    };

    getOne = async (id: string) => {
        const response = await axios.get(`${RECIPES_ENDPOINT}/${id}`);
        return response.data;
    };

    create = async (credentials: ICredentials) => {
        const response = await axios.post(`${RECIPES_ENDPOINT}`, credentials);
        return response.data;
    };

    update = async (credentials: ICredentials, id: string) => {
        const response = await axios.patch(`${RECIPES_ENDPOINT}/${id}`, credentials);
        return response.data;
    }

    removeOne = async (id: string) => {
        const response = await axios.delete(`${RECIPES_ENDPOINT}/${id}`);
        return response.data;
    };
};

export default RecipeSevice;