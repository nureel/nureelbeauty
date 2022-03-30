import mongoose from 'mongoose';
const { Schema } = mongoose;

const feedbackSchema = new Schema({
    date: {type: Date, default: Date.now},
    name: String,
    email: String,
    message: String,
    status: String
});

export default mongoose.model('Feedback', feedbackSchema);