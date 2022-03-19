import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Account from '$lib/models/account';
const uri = import.meta.env.VITE_DB_URI;
// @ts-ignore
mongoose.connect(uri);

export async function post({ request }) {
	const data = await request.json();
	let user = await Account.findOne({email: data.email});
	let header = {};

	if(user){
		console.log('check password')
		const check = await bcryptjs.compareSync(data.password, user.password)
		if (check === true){
			const json = await JSON.stringify(user);
			const value = await Buffer.from(json).toString('base64');
			header = {
				'set-cookie': `jwt=${value}; Path=/; HttpOnly`
			}
			user = null
		}
		else user = null
	}
	console.log(user)

	return {
		headers: header,
		body: user,
	};
}