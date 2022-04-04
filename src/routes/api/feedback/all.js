import Feedback from '$lib/models/feedback'

export async function get({ request }) {
	const feedbacks = await Feedback.find({},{ name: 1, email: 1, message: 1, date: 1, _id: 0 });

	return {
		body: feedbacks,
	};
}