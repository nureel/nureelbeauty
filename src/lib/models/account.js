import mongoose from 'mongoose';
const { Schema } = mongoose;

const accountSchema = new Schema({
    email: String,
    password: String,
    name: String,
});

export default mongoose.model('Account', accountSchema);