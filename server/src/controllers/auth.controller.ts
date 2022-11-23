import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/user.model";

dotenv.config();

const generateAccessToken = (email: string, password: string) => {
  return jwt.sign({ email, password }, String(process.env.JWT_ACCESS_TOKEN), {
    expiresIn: "1h",
  });
};

const AuthController = {
  signUp: async (req: Request, res: Response) => {
    const encryptPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: encryptPassword,
    };

    try {
      const user = await User.create(newUser);
      const token = generateAccessToken(newUser.email, encryptPassword);
      return res.status(201).json({user, authToken: token});
    } catch (err: any) {
      return res.status(401).json("Unauthorize");
    }
  },

  signIn: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const userInDB = await User.findOne({ email });

      if (!userInDB) {
        return res.status(401).send("user not found");
      }

      const compare = await bcrypt.compare(password, userInDB.password);

      if (!compare) {
        return res.status(401).send("invalid credentials");
      }

      const token = generateAccessToken(email, password);
      return res.status(200).json({ authToken: token });
    } catch (err) {
      return res.status(401).json("Unauthorize");
    }
  },
};

export default AuthController;
