import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Account from '$lib/models/account';
const uri = import.meta.env.VITE_DB_URI;
mongoose.connect(uri);

export async function post({ request }) {
	const data = await request.json();
	console.log(data)
	let user = {}
	let header = {};
	user.uri = uri;
	// async function checkUser(){
	// 	let user = await Account.findOne({email: data.email});
	// 	if(user){
	// 		const check = await bcryptjs.compareSync(data.password, user.password)
	// 		if (check === true){
	// 			const json = await JSON.stringify(user);
	// 			const value = await Buffer.from(json).toString('base64');
	// 			header = {
	// 				'set-cookie': `jwt=${value}; Path=/; HttpOnly`
	// 			}
	// 		}
	// 		else {
	// 			user = null
	// 		}
	// 	} else {
	// 		user = null
	// 	}
	// 	return user;
	// } 
	
	// const user = await checkUser()

	return {
		headers: header,
		body: data,
	};
}