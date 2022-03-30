import mongoose from 'mongoose'
import Feedback from '$lib/models/feedback'
import { variables } from '$lib/variables.js';

export async function get({ request }) {
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	const feedbacks = await Feedback.find({},{ name: 1, email: 1, message: 1, date: 1, _id: 0 });

	return {
		body: feedbacks,
	};
}