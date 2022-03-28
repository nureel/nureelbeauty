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

	user = await Account.findOne({email: data.email});
	if(user){
		if (user.email_code === data.code){
			user = await Account.findByIdAndUpdate(user._id, {
				email_verify : true
			})
		} else user = null
	}

	return {
		headers: header,
		body: user,
	};
}