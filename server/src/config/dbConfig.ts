import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const DBconnection = () => {
    mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost:${process.env.MONGODB_PORT}/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as ConnectOptions, (err: any) => {
        if(err) throw new Error(err);
        else console.log('Connected to Mongo')
    })
};