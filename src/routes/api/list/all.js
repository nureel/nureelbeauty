import mongoose from 'mongoose'
import Account from '$lib/models/account'
import { variables } from '$lib/variables.js';
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

export async function get({ request }) {
	// const data = await request.json();
	let user = null;
	let header = {};
	const uri = variables.DB_URI;
	mongoose.connect(uri);

	user = await Account.find({},{ name: 1, email: 1, date: 1, _id: 0 });
	console.log(user)


	return {
		headers: header,
		body: user,
	};
}