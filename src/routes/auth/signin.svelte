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
</script>

<script>
	const logo = '/img/logo.png'
  import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	let email = '';
	let password = '';
  let show = false;
	async function submit(event) {
    const response = await post(`signin`, { email, password });
    if(response){
      $session.user = response;
      goto('/dashboard');
    } else show = true;
	}
</script>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-neutral-900 p-10 max-w-md w-full space-y-8">
      <div>
          <a href="/">
            <img class="mx-auto h-12 w-auto" src={logo} alt="Nureel">
          </a>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-400">Log masuk akaun anda</h2>
        <p class="mt-2 text-center text-sm text-neutral-100">
          Atau
          <a href="/auth/signup" class="font-medium text-pink-400 hover:text-amber-400"> daftar akaun baru </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" on:submit|preventDefault={submit}>
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Emel</label>
            <input bind:value={email} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Emel">
          </div>
          <div class="py-6">
            <label for="password" class="sr-only">Kata laluan</label>
            <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Kata laluan">
          </div>
        </div>
  
        <div class="flex items-center justify-between">
  
          <div class="text-sm">
            <a href="/auth/forgot" class="font-medium text-pink-400 hover:text-amber-400"> Lupa kata laluan? </a>
          </div>
        </div>
        <div class="{show === false ? 'hidden' : 'visible'}">
          <div class=" bg-red-400 text-neutral-100 px-4 py-3 mb-6 rounded relative" role="alert">
            <strong class="font-bold">Emel atau kata laluan tidak sah!</strong>
            <button on:click="{() => show = !show}" type="button" class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-neutral-100" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </button>
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
            Log masuk
          </button>
        </div>
      </form>
    </div>
  </div>
  