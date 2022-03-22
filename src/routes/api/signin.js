// import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose'

export async function post({ request }) {
	const data = await request.json();
	
	let header = {};
	let user = null;
	const uri = import.meta.env.VITE_DB_URI;
	mongoose.connect(uri);
	// const prisma = new PrismaClient()
	// await prisma.$connect()
	// const allUsers = await prisma.user.findMany()
  // console.log(allUsers)
	// let user = await Account.findOne({email: data.email});
	// console.log(user)
	// if(user){
	// 	const check = await bcryptjs.compareSync(data.password, user.password)
	// 	if (check === true){
	// 		const json = await JSON.stringify(user);
	// 		const value = await Buffer.from(json).toString('base64');
	// 		header = {
	// 			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
	// 		}
	// 	}
	// 	else {
	// 		user = null
	// 	}
	// } else {
	// 	user = null
	// }

	return {
		headers: header,
		body: user,
	};
}