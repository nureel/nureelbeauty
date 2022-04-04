import Account from '$lib/models/account'

export async function post({ request }) {
	const data = await request.json();
	let ok = false;
	let header = {};

	user = await Account.findOne({email: data.email});
	if (user){
		ok = true;
	}

	return {
		headers: header,
		body: ok,
	};
}