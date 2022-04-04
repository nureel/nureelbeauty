import Account from '$lib/models/account'

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};

	user = await Account.findById(data.id);
	const diff = new Date() - user.reset_expiry
	const minutes = Math.floor(diff/60e3)
	if (minutes >= 2880){
		user = null;
	}

	return {
		headers: header,
		body: user,
	};
}