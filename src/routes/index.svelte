<script>
  const logo = '/img/logo.png'
  const mainImg = '/img/main.jpg'
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

	let name = '';
  let email = '';
	let feedback = '';
  let current = false;
	let errors = null;
	async function submit(event) {
		const response = await post(`email`, { name, email, feedback });
		// TODO handle network errors
		errors = response.errors;
		goto('/');
	}

</script>

<section id="header">
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-neutral-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/#">
            <span class="sr-only">Nureel</span>
            <img class="h-6 w-auto sm:h-8" src={logo} alt="">
          </a>
        </div>

        <div class="-mr-2 -my-2 md:hidden">
          <button on:click="{() => current = true}" type="button" class="open:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-amber-400 hover:text-pink-400" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <a href="/#" class="text-base font-semibold text-pink-400 hover:text-amber-400"> PRODUCTS </a>
          <a href="/#features" class="text-base font-semibold text-pink-400 hover:text-amber-400"> FEATURES </a>
          <a href="/#" class="text-base font-semibold text-pink-400 hover:text-amber-400"> PRICING </a>
          <a href="/#contact" class="text-base font-semibold text-pink-400 hover:text-amber-400"> CONTACT US</a>
        </nav>
        {#if $session.user}
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/dashboard" class="whitespace-nowrap text-base font-medium text-amber-400 hover:text-pink-400"> Dashboard </a>
        </div>
        {:else}
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/auth/signin" class="whitespace-nowrap text-base font-medium text-amber-400 hover:text-pink-400"> Sign in </a>
          <a href="/auth/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-neutral-900 bg-amber-400 hover:bg-pink-400"> Sign up </a>
        </div>
        {/if}
      </div>
    </div>

    <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right {current === false ? 'hidden' : 'visible'}">
      <div class="rounded-lg shadow-md bg-neutral-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div class="flex justify-start">
            <span class="sr-only">Nureel</span>
            <img class="h-6 w-auto" src={logo} alt="Nureel">
          </div>
          <div class="-mr-2">
            <button on:click="{() => current = false}" type="button" class="bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-amber-400 hover:text-pink-400">
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/#" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">Products</a>

          <a href="/#features" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">Features</a>

          <a href="/#" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">Pricing</a>

          <a href="/#contact" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">Contact Us</a>
        </div>
        {#if $session.user}
          <a href="/dashboard" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Dashboard </a>
        {:else}
          <a href="/auth/signin" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Sign In </a>
          <a href="/auth/signup" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Sign Up </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- This example requires Tailwind CSS v2.0+ -->
<section id="main">
  <div class="relative bg-neutral-800 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative pb-8 bg-neutral-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-neutral-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
    
          <div>
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            </div>
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-pink-400 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Data to enrich your</span>
                <span class="block text-amber-400 xl:inline">online business</span>
              </h1>
              <p class="mt-3 text-base text-neutral-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="/#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray bg-amber-400 hover:bg-pink-400 md:py-4 md:text-lg md:px-10"> Get started </a>
                </div>
                <!-- <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
                </div> -->
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={mainImg} alt="">
      </div>
    </div>
  </section>

  <section id="features">
      <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Features</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-amber-400 sm:text-4xl">A better way to send money</p>
          <p class="mt-4 max-w-2xl text-xl text-neutral-100 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>
    
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Competitive exchange rates</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                  <!-- Heroicon name: outline/scale -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-pink-400">No hidden fees</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Transfers are instant</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                  <!-- Heroicon name: outline/annotation -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Mobile notifications</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    
  </section> 
  
  <section id="section3">
      <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-neutral-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-pink-400 sm:text-4xl">
          <span class="block">Ready to dive in?</span>
          <span class="block text-amber-400">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="/#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400"> Get started </a>
          </div>
          <!-- <div class="ml-3 inline-flex rounded-md shadow">
            <a href="/#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-white hover:bg-indigo-50"> Learn more </a>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="bg-neutral-900 py-12">
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-3">
          <div class="p-5 md:col-span-1">
            <div class="sm:px-0">
              <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Contact Us</h2>
              <p class="mt-1 text-sm text-neutral-100">This information will be displayed publicly so be careful what you share.</p>
            </div>
          </div>
          <div class="p-5 md:mt-0 md:col-span-2">
            <form on:submit|preventDefault={submit}>
              <div class="shadow rounded sm:overflow-hidden bg-neutral-800">
                <div class="px-4 py-5 space-y-6 sm:p-6">
                  <div>
                    <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Get In Touch</h2>
                  </div>
                  <div>
                    <label for="name" class="block text-sm font-medium text-neutral-100"> Name </label>
                    <div class="mt-2 flex rounded-md shadow-sm">
                      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" type="text" name="name" bind:value={name} required/>
                      
                    </div>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-neutral-100"> Email </label>
                    <div class="mt-2 flex rounded-md shadow-sm">
                      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" type="email" name="email" bind:value={email} required/>
                    </div>
                  </div>      
                  <div>
                    <label for="about" class="block text-sm font-medium text-neutral-100"> Message </label>
                    <div class="mt-1">
                      <textarea id="about" name="feedback" rows="5" class="py-2 pl-2 pr-2 block w-full rounded-md shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" bind:value={feedback} required></textarea>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-neutral-800 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="relative py-10 bg-neutral-800">
      <div class="flex justify-center">
        <p class="text-pink-400">© 2022 Nureel Beauty. All rights reserved</p>
      </div>

    </div>
  </section>