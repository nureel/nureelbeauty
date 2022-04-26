import Account from '$lib/models/account'
import Feedback from '$lib/models/feedback'
import Product from '$lib/models/product'

export async function get({ request }) {
	const accounts = await Account.countDocuments({});
	const feedbacks = await Feedback.countDocuments({});
	const products = await Product.countDocuments({});
	return {
		body: {accounts, feedbacks, products}
	};
}