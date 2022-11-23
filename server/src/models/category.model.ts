import ICategorie from '../types/categorie.type';
import { model, Schema } from 'mongoose';

const categorySchema = new Schema<ICategorie>({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

const Category = model<ICategorie>('categories', categorySchema);

export default Category;