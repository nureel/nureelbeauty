import bcryptjs from 'bcryptjs';
import { customAlphabet } from 'nanoid';
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';

export async function post({ request }) {
	const data = await request.json();
	let user = null;
	let header = {};
	const sib = variables.SIB_KEY;

	const salt = bcryptjs.genSaltSync(12);
	const hash = bcryptjs.hashSync(data.password, salt);

	const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)
	const code = nanoid();

	user = await new Account({
		name: data.name,
		email: data.email,
		password : hash,
		email_code : code
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

	return {
		headers: header,
		body: user,
	};
}