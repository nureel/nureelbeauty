import { customAlphabet } from 'nanoid';
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};
	let code;
	const sib = variables.SIB_KEY;

	user = await Account.findOne({email: data.email});
	if(user){
		if (user.email_code){
			code = user.email_code;
		} else {
			const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)
			code = nanoid();
			user = await Account.findByIdAndUpdate(user._id, {
				email_code : code
			})
		}

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
				subject: 'Email verification',
				textContent: code
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