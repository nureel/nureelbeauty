import mongoose from 'mongoose';
const { Schema } = mongoose;

const accountSchema = new Schema({
    date: {type: Date, default: Date.now},
    email: String,
    password: String,
    name: String,
    email_verify: {type: Boolean, default: false},
    email_code: String,
    reset_token: String,
    reset_expiry: Date
});

export default mongoose.model('Account', accountSchema);