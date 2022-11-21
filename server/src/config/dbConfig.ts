import mongoose, { ConnectOptions } from 'mongoose';

export const DBconnection = () => {
    mongoose.connect('mongodb://mongoroot:mongoroot@localhost:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as ConnectOptions, (err: any) => {
        if(err) throw new Error(err);
        else console.log('Connected to Mongo')
    })
};