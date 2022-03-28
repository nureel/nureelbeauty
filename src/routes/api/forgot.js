import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	user = await Account.findOneAndUpdate({email: data.email}, {
		reset_expiry : new Date()
	});
	
	return {
		headers: header,
		body: user,
	};
}