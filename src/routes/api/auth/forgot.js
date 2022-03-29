import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request, url }) {
	const data = await request.json();
	let user = null;
	let header = {};
	const uri = variables.DB_URI;
	const sib = variables.SIB_KEY;
	mongoose.connect(uri);

	user = await Account.findOneAndUpdate({email: data.email}, {
		reset_expiry : new Date()
	});

	if (user){
		const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
			method: 'POST',
			body: JSON.stringify({
				sender: {
					name : 'Nureel Beauty',
					email: 'noreply@nureelbeauty.com'
				},
				to: [{
					email : user.email,
					name: user.name
				}],
				subject: 'Email verification',
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
	}
	
	return {
		headers: header,
		body: user,
	};
}