import { Request, Response } from "express";
import User from "../models/user.model";

export const findUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await User.findById({ email: req.body.email });
    return res.status(200).json(user);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate({_id : req.params.id}, {
        $set: {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    }, { new: true })

    return res.status(204).json(user);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndRemove({_id : req.params.id});
        return res.status(204);
    } catch (err: any) {
        throw new Error(err);
    }
};
