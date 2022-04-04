import mongoose from 'mongoose';
import { variables } from '$lib/variables.js';
const uri = variables.DB_URI;
mongoose.connect(uri).
  catch(error => console.log(error));
const { Schema } = mongoose;

const accountSchema = new Schema({
    date: {type: Date, default: Date.now},
    email: String,
    password: String,
    name: String,
    email_verify: {type: Boolean, default: false},
    email_code: String,
    reset_token: String,
    reset_expiry: Date,
    user_type: {type: Number, default: 0} // 0: normal, 1: super admin, 2: admin, 3: stockist, 4: agent
});

export default mongoose.model('Account', accountSchema);