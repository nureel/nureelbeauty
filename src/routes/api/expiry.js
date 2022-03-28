import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	console.log(data)
	let user = null;
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	user = await Account.findById(data.id);
	const diff = new Date() - user.reset_expiry
	const minutes = Math.floor(diff/60e3)
	console.log(minutes)
	if (minutes >= 120){
		user = null;
	}

	return {
		headers: header,
		body: user,
	};
}