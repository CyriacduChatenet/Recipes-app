import { Request, Response } from 'express';
import Recipe from '../models/recipe';

export const getAllRecipes = async (_req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json(recipe);
    } catch (err: any) {
        throw new Error(err);
    }
};

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const recipe = await Recipe.create(req.body);
        recipe.save();
        res.status(201).json(recipe);
    } catch (err: any) {
        throw new Error(err);
    }
}

export const updateRecipe = async (req: Request, res: Response) => {
    try{
        const recipe = await Recipe.updateOne({_id: req.params.id}, {$se: {name: req.body.name, description: req.body.description}});
        res.status(204).json(recipe);
    } catch (err: any) {
        throw new Error(err);
    }
}

export const deleteRecipe = async (req: Request, res: Response) => {
    try {
        const recipe = await Recipe.remove({_id: req.params.id});
        res.status(204).json(recipe);
    } catch(err: any) {
        throw new Error(err);
    }
}