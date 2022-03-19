<script>
	const logo = '/img/logo.png'
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	let email = '';
	let password = '';
  let confirm = '';
	let errors = null;
	async function submit(event) {
		const response = await post(`/api/email`, { email, password });
		// TODO handle network errors
		errors = response.errors;
		goto('/');
	}
</script>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-neutral-900 p-10 max-w-md w-full space-y-8">
      <div>
          <a href="/">
            <img class="mx-auto h-12 w-auto" src={logo} alt="Nureel">
          </a>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-400">Sign up a new account</h2>
        <p class="mt-2 text-center text-sm text-neutral-100">
          Or
          <a href="/auth/signin" class="font-medium text-pink-400 hover:text-amber-400"> sign in to your account </a>
        </p>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input bind:value={email} type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-t-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input bind:value={password} type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input bind:value={confirm} type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-b-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Confirm Password">
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-pink-400 group-hover:text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
  