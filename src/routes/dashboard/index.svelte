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
	const logo = '/img/logo.png'
	const mainImg = '/img/main.jpg'
	import { goto } from '$app/navigation';
  import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

	// let name = '';
	// let email = '';
	// let feedback = '';
	let mobile = false;
	let profile = false;
	let errors = null;
	// async function submit(event) {
	// 	const response = await post(`/api/email`, { name, email, feedback });
	// 	// TODO handle network errors
	// 	errors = response.errors;
	// 	goto('/');
	// }
  async function logout() {
		await post(`/api/signout`);
		// this will trigger a redirect, because it
		// causes the `load` function to run again
		// @ts-ignore
		$session.user = null;
    goto('/')
	}
</script>

<div class="min-h-full">
    <nav class="bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a href="/">
                <img class="h-6" src={logo} alt="Nureel">
              </a>
              
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-neutral-900 text-white", Default: "text-amber-400 hover:bg-neutral-700 hover:text-white" -->
                <a href="/dashboard" class="active:bg-neutral-800 text-amber-400 active:text-pink-400 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
  
                <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 active:bg-neutral-800 active:text-pink-400 px-3 py-2 rounded-md text-sm font-medium">Team</a>
  
                <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
  
                <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
  
                <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium">Reports</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- <button type="button" class="bg-neutral-800 p-1 rounded-full text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell --
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button> -->
  
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button on:click="{() => profile = true}" type="button" class="max-w-xs bg-neutral-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-400" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <svg class="h-8 w-8 rounded-full bg-neutral-700 fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                    </svg>
                    <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
                  </button>
                </div>

                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-800 ring-1 ring-amber-400 ring-opacity-5 focus:outline-none {profile === false ? 'hidden' : 'visible'}" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-neutral-100", Not Active: "" -->
                  <a href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
  
                  <a href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
  
                  <a on:click={logout} href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button on:click="{() => mobile = true}" type="button" class="bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-pink-400 hover:text-amber-400 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-400" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
                Heroicon name: outline/menu
  
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                Heroicon name: outline/x
  
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="{mobile === false ? 'hidden' : 'visible'}" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-neutral-900 text-white", Default: "text-amber-400 hover:bg-neutral-700 hover:text-white" -->
          <a href="/dashboard" class="bg-neutral-700 text-amber-400 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
  
          <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Team</a>
  
          <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
  
          <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
  
          <a href="/dashboard" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-pink-400">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <svg class="h-8 w-8 rounded-full bg-neutral-700 fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-amber-400">{$session.user.name}</div>
              <div class="text-sm font-medium leading-none text-pink-400">{$session.user.email}</div>
            </div>
            <!-- <button type="button" class="ml-auto bg-neutral-800 flex-shrink-0 p-1 rounded-full text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell --
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button> -->
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Your Profile</a>
  
            <a href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Settings</a>
  
            <a on:click={logout} href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-neutral-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-neutral-200 rounded-lg h-96"></div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>