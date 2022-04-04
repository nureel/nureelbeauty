import Feedback from '$lib/models/feedback'

export async function post({ request }) {
	const data = await request.json();

	const feedback = await new Feedback({
		name: data.name,
		email: data.email,
		message: data.message
	}).save();

	return {
		body: feedback,
	};
}