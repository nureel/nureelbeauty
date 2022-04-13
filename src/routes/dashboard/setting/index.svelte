<script context="module">
	export async function load({ session }) {
    if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/signin'
			};
		}
		return {};
	}
</script>

<script>
  import Navbar from '$lib/components/adminNavbar.svelte'
  import { goto } from '$app/navigation';
  import { post } from '$lib/utils.js';

  let name = '';
  let email = ''
  let show = false;
  let status = false;

  async function submit(event) {
    if (status === true) {
      const response = await post(`setting/admin`, { name, email });
		  goto('/dashboard');
    }
	}
  // check email
  async function check(event) {
    const response = await post(`auth/check`, {email});
    if (response === true){
      show = true;
      status = false
    } else status = true
	}
</script>

<svelte:head>
  <title>Tetapan</title>
</svelte:head>

<div class="min-h-full">
  <Navbar></Navbar>
  <header class="bg-neutral-800 shadow">
    <div class="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 class="text-xl text-neutral-100">Tetapan</h1>
    </div>
  </header>
  <main>
    <div class="max-w-full bg-neutral-100 mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="bg-white h-96">
        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="mt-10 sm:mt-0">
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Admin Baru</h3>
                    <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                  </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form on:submit|preventDefault={submit}>
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-neutral-800 sm:p-6">
                        <div class="mb-3">
                          <label for="first-name" class="block text-amber-400">Nama</label>
                          <input bind:value={name} required type="text" class="w-full mt-1 p-2  rounded-md">
                        </div>
                        <div class="mb-5">
                          <label for="street-address" class="block  text-amber-400">Emel</label>
                          <input bind:value={email} on:change|preventDefault={check} required type="email" class="w-full mt-1 p-2 rounded-md">
                        </div>
                        <div class="{show === false ? 'hidden' : 'visible'}">
                          <div class=" bg-red-400 text-neutral-100 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">Emel telah digunakan!</strong>
                            <button on:click="{() => show = !show}" type="button" class="absolute top-0 bottom-0 right-0 px-4 py-3">
                              <svg class="fill-current h-6 w-6 text-neutral-100" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 bg-neutral-800 text-right sm:px-6">
                        <button  type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-neutral-800 bg-amber-400 hover:bg-pink-400">Daftar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>