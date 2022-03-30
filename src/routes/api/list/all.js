import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function get({ request }) {
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	const user = await Account.find({},{ name: 1, email: 1, date: 1, _id: 0 });

	return {
		body: user,
	};
}