// import { PrismaClient } from '@prisma/client';
import { default as PrismaClient } from '@prisma/client'

import bcryptjs from 'bcryptjs';

export async function post({ request }) {
	const data = await request.json();
	const prisma = new PrismaClient()
	let header = {};
	let user = null;
	await prisma.$connect()

	const allUsers = await prisma.user.findMany()
  console.log(allUsers)
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
		body: allUsers,
	};
}