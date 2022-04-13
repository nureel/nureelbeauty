import Product from '$lib/models/product'

export async function get({ request }) {
	const product = await Product.find({});

	return {
		body: product,
	};
}