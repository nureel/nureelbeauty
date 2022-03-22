const base = '/api';

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.headers['Accept'] = 'application/json';
		opts.credentials = 'include';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, data, token) {
	return send({ method: 'GET', path, data, token });
}

export function del(path, data, token) {
	return send({ method: 'DELETE', path, data, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
// export function post(endpoint, data) {
// 	return fetch(endpoint, {
// 		method: 'POST',
// 		// credentials: 'include',
// 		body: JSON.stringify(data || {}),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	}).then((r) => r.json());
// }