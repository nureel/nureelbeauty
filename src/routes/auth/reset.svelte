<script context="module">
  export async function load({ url, fetch }) {
		const id = new URLSearchParams(url.search).get("id")
    const response = await fetch('/api/expiry', {method: 'post', body: JSON.stringify({id: id}),credentials:'same-origin'})
    .then(response => response.json())
    if (!response){
      return {
        status: 302,
        redirect: '/auth/forgot'
      }
    }
		return {};
	}
</script>
<script>
	const logo = '/img/logo.png'
  import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	let password = '';
  let confirm = '';
  let show = false;

	async function submit(event) {
    const response = await post(`forgot`, { password });
    goto('/auth/signin');
	}

</script>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-neutral-900 p-10 max-w-md w-full space-y-8">
      <div>
          <a href="/">
            <img class="mx-auto h-12 w-auto" src={logo} alt="Nureel">
          </a>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-400">Set semula kata laluan</h2>
        <p class="mt-2 text-center text-sm text-neutral-100">
          Sila masukkan kata laluan baru
        </p>
      </div>
      <form class="mt-8 space-y-6" on:submit|preventDefault={submit}>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="password" class="sr-only">Kata laluan</label>
            <input bind:value={password} type="password" required class="mt-6 appearance-none rounded-md relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Kata laluan" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).&#123;8,&#125;"
            title="Mesti mengandungi sekurang-kurang SATU NOMBOR dan SATU HURUF BESAR dan huruf kecil, serta panjang sekurang-kurang 8 AKSARA">>
          </div>
          <div>
            <label for="password" class="sr-only">Kata laluan</label>
            <input bind:value={confirm} type="password" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm" placeholder="Sah Kata laluan" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).&#123;8,&#125;"
            title="Mesti mengandungi sekurang-kurang SATU NOMBOR dan SATU HURUF BESAR dan huruf kecil, serta panjang sekurang-kurang 8 AKSARA">>
          </div>

        </div> 
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-pink-400 group-hover:text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill-rule="evenodd" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/></svg>
            </span>
            Set semula kata laluan
          </button>
        </div>
      </form>
    </div>
  </div>
  