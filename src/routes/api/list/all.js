import Account from '$lib/models/account'

export async function get({ request }) {
	const user = await Account.find({},{ name: 1, email: 1, date: 1, _id: 0 });

	return {
		body: user,
	};
}