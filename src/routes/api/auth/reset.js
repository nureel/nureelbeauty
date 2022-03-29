import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	const salt = bcryptjs.genSaltSync(12);
	const hash = bcryptjs.hashSync(data.password, salt);

	user = await Account.findByIdAndUpdate(data.id,{
		password: hash
	});

	return {
		headers: header,
		body: user,
	};
}