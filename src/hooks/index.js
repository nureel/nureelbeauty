import * as cookie from 'cookie';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

/** @type {import('@sveltejs/kit').HandleError} */
export async function handleError({ error, event }) {
  Sentry.init({
		dsn: "https://f27e5acb8fb04503a8de8bcd18162a2e@o1173486.ingest.sentry.io/6268593",
		tracesSampleRate: 1.0,
	});
	
	const transaction = Sentry.startTransaction({
		op: "test",
		name: "My First Test Transaction",
	});
	
	// setTimeout(() => {
	// 	try {
	// 		foo();
	// 	} catch (e) {
	// 		Sentry.captureException(e);
	// 	} finally {
	// 		transaction.finish();
	// 	}
	// }, 99);
  Sentry.captureException(error, { event });
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	event.locals.user = jwt ? JSON.parse(jwt) : null;
	return await resolve(event);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession( event ) {
	console.log(event.locals)

  return event.locals.user
    ? {
        user: {
          name: event.locals.user.name,
          email: event.locals.user.email,

        }
      }
    : {};
	// return {
	// 	userAgent: event.locals.headers['user-agent'],
	// 	user: event.locals.user && {
	// 		name: event.locals.user.name,
	// 		email: event.locals.user.email,
	// 	}
	// };
}