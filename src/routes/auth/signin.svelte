<script context="module">
  export async function load({ session }) {
    if (session.user) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}
		return {};
	}

	const logo = '/img/logo.png'
  import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
  import ListErrors from '$lib/ListErrors.svelte';

	let email = '';
	let password = '';
	let errors = null;
	async function submit(event) {
    // const response = await post(`signin`, { email, password });
    const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
      if(response.ok) return response.json();
    }).then(json => {
      console.log(json)
      if(json){
        // $session.user = json;
			  // goto('/dashboard');
      } else console.log("username & password is incorrect")
    });
	}
</script>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-neutral-900 p-10 max-w-md w-full space-y-8">
      <div>
          <a href="/">
            <img class="mx-auto h-12 w-auto" src={logo} alt="Nureel">
          </a>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-400">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-neutral-100">
          Or
          <a href="/auth/signup" class="font-medium text-pink-400 hover:text-amber-400"> sign up for new account </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" on:submit|preventDefault={submit}>
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input bind:value={email} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-t-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-b-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>
  
        <div class="flex items-center justify-between">
  
          <div class="text-sm">
            <a href="/auth/forgot" class="font-medium text-pink-400 hover:text-amber-400"> Forgot your password? </a>
          </div>
        </div>
  
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-pink-400 group-hover:text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  