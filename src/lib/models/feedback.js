import mongoose from 'mongoose';
import { variables } from '$lib/variables.js';
const uri = variables.DB_URI;
mongoose.connect(uri).
  catch(error => console.log(error));
const { Schema } = mongoose;

const feedbackSchema = new Schema({
    date: {type: Date, default: Date.now},
    name: String,
    email: String,
    message: String,
    status: String
});

export default mongoose.model('Feedback', feedbackSchema);