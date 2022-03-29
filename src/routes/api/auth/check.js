import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let ok = false;
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	user = await Account.findOne({email: data.email});
	if (user){
		ok = true;
	}

	return {
		headers: header,
		body: ok,
	};
}