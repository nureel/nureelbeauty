import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	let user = await Account.findOne({email: data.email});
	if(user){
		const check = await bcryptjs.compareSync(data.password, user.password)
		if (check === true){
			const json = await JSON.stringify(user);
			const value = await Buffer.from(json).toString('base64');
			header = {
				'set-cookie': `jwt=${value}; Path=/; HttpOnly`
			}
		}
		else {
			user = null
		}
	} else {
		user = null
	}

	return {
		headers: header,
		body: user,
	};
}