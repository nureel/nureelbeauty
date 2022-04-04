import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request, url }) {
	const data = await request.json();
	console.log(data)
	let user = null;
	const uri = variables.DB_URI;
	const sib = variables.SIB_KEY;
	mongoose.connect(uri);

	user = await new Account({
		name: data.name,
		email: data.email,
		email_verify: true,
		user_type: 2
	}).save();
	
	const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
		method: 'POST',
		body: JSON.stringify({
				sender: {
					name : 'Nureel Beauty',
					email: 'noreply@nureelbeauty.com'
				},
				to: [{
					email : data.email,
					name: data.name
				}],
				subject: 'New Admin',
				textContent: url.origin+'/auth/reset?id='+user._id
		}),
		headers: {
				'api-key': sib,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		}
	}).then(response => {
		if(response.ok) return response.json();
	}).then(json => {
		console.log(json)
	});

	return {
		body: user,
	};
}