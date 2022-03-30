import mongoose from 'mongoose'
import Feedback from '$lib/models/feedback'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	const feedback = await new Feedback({
		name: data.name,
		email: data.email,
		message: data.message
	}).save();

	return {
		body: feedback,
	};
}