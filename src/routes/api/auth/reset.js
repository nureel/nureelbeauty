import bcryptjs from 'bcryptjs';
import Account from '$lib/models/account'

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};

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