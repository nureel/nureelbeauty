import mongoose from 'mongoose';
import { variables } from '$lib/variables.js';
const uri = variables.DB_URI;
mongoose.connect(uri).
  catch(error => console.log(error));
const { Schema } = mongoose;

const productSchema = new Schema({
    date: {type: Date, default: Date.now},
    name: String,
    description: String,
    price: String,
    path: Date,
});

export default mongoose.model('Product', productSchema); 