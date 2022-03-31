import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	event.locals.user = jwt ? JSON.parse(jwt) : null;
	return await resolve(event);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession( event ) {
  return event.locals.user
    ? {
        user: {
          name: event.locals.user.name,
          email: event.locals.user.email,
          email_verify: event.locals.user.email_verify,
          type: event.locals.user.type
        }
      }
    : {user: null};
}