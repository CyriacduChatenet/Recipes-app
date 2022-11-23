import { Request, Response } from 'express';
import Category from '../models/category.model';

export const getAllCategories = async (_req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err: any) {
        res.status(404).json(err);
    }
};

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err: any) {
        res.status(404).json(err);
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.create(req.body);
        category.save();
        res.status(201).json(category);
    } catch (err: any) {
        res.status(404).json(err);
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const editCategory = await Category.findByIdAndUpdate({_id : req.params.id}, {
            $set : {
                name : req.body.name,
            }
        }, {new: true});
        res.status(200).json(editCategory);
    } catch (err) {
        res.status(404).json({ err: err });
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const deleteCategory = await Category.findOneAndDelete({_id : req.params.id});
        res.status(204).json(deleteCategory);
    } catch (err) {
        res.status(404).json({err: err});
    }
}