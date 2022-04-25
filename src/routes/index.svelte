<script>
  const logo = '/img/logo.png'
  const intro = '/vid/intro.mp4'
  const ls1 = '/img/lipserum1.jpeg'
  const ls2 = '/img/lipserum2.jpeg'
  const ls3 = '/img/lipserum3.jpeg'
  const ls4 = '/img/lipserum4.jpeg'
  const vidProduct = '/vid/product.mp4'
  const vid1 = '/vid/1.mp4'
  const vid2 = '/vid/4.mp4'
  const vid3 = '/vid/3.mp4'
  const vid4 = '/vid/2.mp4'
  const founder = 'img/founder.png'
  const mainImg = '/img/main.jpg'
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
  import { post } from '$lib/utils.js';

	let name = '';
  let email = '';
	let message = '';
  let current = false;
  let modal;

	async function submit(event) {
    const response = await post(`feedback/submit`, { name, email, message });
		goto('/');
	}

  // function closeVideo(){
  //   modal.close();
  // }

  // function showVideo(){
  //   modal.showModal();
  //   setTimeout(closeVideo, 7000);
  // }

  // setTimeout(showVideo, 3000);

</script>
<svelte:head>
  <title>Nureel Beauty</title>
</svelte:head>

<section id="header">
<div class="relative bg-neutral-900">
    <div class="max-w mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/#">
            <span class="sr-only">Nureel</span>
            <img class="h-6 w-auto sm:h-8" src={logo} alt="">
          </a>
        </div>

        <div class="-mr-2 -my-2 md:hidden">
          <button on:click="{() => current = true}" type="button" class="open:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-amber-400 hover:text-pink-400" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <a href="/#features" class="text-base font-semibold text-pink-400 hover:text-amber-400"> ISTIMEWA </a>  
          <a href="/#products" class="text-base font-semibold text-pink-400 hover:text-amber-400"> PRODUK </a>
          <a href="/#testimony" class="text-base font-semibold text-pink-400 hover:text-amber-400"> TESTIMONI </a>
          <a href="/#founder" class="text-base font-semibold text-pink-400 hover:text-amber-400"> PENGASAS </a>
          <a href="/#contact" class="text-base font-semibold text-pink-400 hover:text-amber-400"> HUBUNGI KAMI</a>
        </nav>
        {#if $session.user}
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/dashboard" class="whitespace-nowrap text-base font-medium text-amber-400 hover:text-pink-400"> Ruang Ahli </a>
        </div>
        {:else}
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/auth/signin" class="whitespace-nowrap text-base font-medium text-amber-400 hover:text-pink-400"> Daftar Masuk </a>
          <a href="/auth/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-neutral-900 bg-amber-400 hover:bg-pink-400"> Daftar </a>
        </div>
        {/if}
      </div>
    </div>

    <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right {current === false ? 'hidden' : 'visible'}">
      <div class="rounded-lg shadow-md bg-neutral-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 flex items-center justify-between">
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
          <a href="/#features" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">ISTIMEWA</a>
          <a href="/#products" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">PRODUK</a>
          <a href="/#testimony" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">TESTIMONI</a>
          <a href="/#founder" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">PENGASAS</a>
          <a href="/#contact" on:click="{() => current = false}" class="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-amber-400 hover:bg-neutral-800">HUBUNGI KAMI</a>
        </div>
        {#if $session.user}
          <a href="/dashboard" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Ruang Ahli </a>
        {:else}
          <a href="/auth/signin" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Daftar Masuk </a>
          <a href="/auth/signup" on:click="{() => current = false}" class="block w-full px-5 py-3 text-center font-medium text-amber-400 bg-neutral-900 hover:bg-neutral-800"> Daftar </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- <dialog bind:this={modal}>
  <div class="fixed z-30 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      -- This element is to trick the browser into centering the modal contents. --
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="relative inline-block align-bottom bg-amber-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-neutral-900 p-1">
          <div class="sm:flex sm:items-start">
            <video autoplay>
              <source src={intro} type="video/mp4">
              <track kind="captions">
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog> -->

<section id="main">
  <div class="relative bg-neutral-800 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative pb-8 bg-neutral-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden z-20 lg:block absolute right-0 inset-y-0 h-full w-48 text-neutral-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 100,0 50,100 0,100" />
        </svg>
  
        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          </div>
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-pink-400 sm:text-6xl md:text-6xl">
              <span class="block xl:inline">Serlahkan sinar</span>
              <span class="block text-amber-400 xl:inline">rupawan anda...</span>
            </h1>
            <p class="mt-3 text-base text-neutral-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Cantik itu pilihan.. Serlahkan sinar rupawan anda bersama NUREEL BEAUTY</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="/auth/signup" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray bg-amber-400 hover:bg-pink-400 md:py-4 md:text-lg md:px-10"> Daftar Sekarang </a>
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
  <div class="py-12 bg-neutral-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Istimewa</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-amber-400 sm:text-4xl">Produk kecantikan yang memberi kepuasan</p>
        <p class="mt-4 max-w-2xl text-xl text-neutral-100 lg:mx-auto">Nureel Beauty menyediakan produk-produk terbaik serta peluang untuk berjaya kepada semua orang</p>
      </div>
  
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                <svg class="h-6 w-6"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"/></svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Kualiti Terbaik</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral-100">Produk Nureel beauty mengandungi bahan-bahan yang berkualiti tinggi dan mendapat kelulusan dari KKM</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"/></svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Harga mampu Milik</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral-100">Setiap produk Nureel Beauty mampu dimiliki oleh semua orang dengan harga yang berpatutan</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"/></svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Peluang Perniagaan</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral-100">Nureel Beauty menyediakan peluang perniagaan kepada stokis-stokis dan ejen-ejen untuk menambah pendapatan</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-neutral-900">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-pink-400">Kepuasan Terjamin</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral-100">Nureel Beauty memberi jaminan kepuasan kepada pengguna-pengguna produk yang disediakan</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section> 

<section id="products">
  <div class="bg-neutral-800">
    <div class="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-amber-400 sm:text-4xl">Serum Bibir</h2>
        <p class="mt-4 text-neutral-100">Serum bibir menenangkan kulit anda dan menjadikan bibir anda
          halus dan membuat mereka kelihatan tembam dan
          terhidrat. Kandungan yang kaya khasiat dengan minyak penghidratan 
          menjadikan bibir anda sihat dan segar.</p>
  
        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Strawberi</dt>
            <dd class="mt-2 text-sm text-neutral-100">Manis semulajadi dan bau masam</dd>
          </div>
  
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Beri Campuran</dt>
            <dd class="mt-2 text-sm text-neutral-100">Manis lembut dan rasa gula getah</dd>
          </div>
  
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Minyak Badam</dt>
            <dd class="mt-2 text-sm text-neutral-100">Menngeluarkan sel kulit mati serta mengelakkan bibir merekah</dd>
          </div>
  
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Vitamin E</dt>
            <dd class="mt-2 text-sm text-neutral-100">Melembapkan & menenangkan bibir</dd>
          </div>
  
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Mentega Shea</dt>
            <dd class="mt-2 text-sm text-neutral-100">Anti-radang untuk menyembuhkan bibir merekah, menjadikan bibir lembut dan anjal serta antioksidan</dd>
          </div>
  
          <!-- <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-pink-400">Considerations</dt>
            <dd class="mt-2 text-sm text-neutral-100">Made from natural materials. Grain and color vary with each item.</dd>
          </div> -->
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src={ls3} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="bg-gray-100 rounded-lg">
        <img src={ls4} alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg">
        <img src={ls1} alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg">
        <img src={ls2} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg">
      </div>
    </div>
  </div>
</section>

<section>
  <div class="bg-neutral-900 py-10">
    <div class="flex justify-center mx-auto">
      <video controls>
        <source src={vidProduct} type="video/mp4">
          <track kind="captions" />
      Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

<section id="testimony">
  <div class="bg-neutral-800">
    <div class="max-w-2xl mx-auto py-10 px-4 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-amber-400 sm:text-4xl">Testimoni</h2>
  
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <video controls>
              <source src={vid1} type="video/mp4">
                <track kind="captions" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <video controls>
              <source src={vid2} type="video/mp4">
                <track kind="captions" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <video controls>
              <source src={vid3} type="video/mp4">
                <track kind="captions" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <video controls>
              <source src={vid4} type="video/mp4">
                <track kind="captions" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>        
        <!-- More products... -->
      </div>
    </div>
  </div>
</section>

<section id="founder">
  <div class="relative bg-neutral-900 overflow-hidden">
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={founder} alt="">
    </div>
    <div class="max-w-7xl mx-auto">
      <div class="relative bg-neutral-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-neutral-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="mx-auto max-w-7xl p-4 lg:p-8">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl mt-8 tracking-tight font-extrabold text-pink-400 sm:text-3xl md:text-5xl">
              <span class="block xl:inline">Pengasas Nureel Beauty</span>
              <span class="block text-amber-400 xl:inline">Puan Becca</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <!-- <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
              </div> -->
            </div>
          </div>
        </main>
      </div>
    </div>

  </div>
</section>

<section id="section3">
  <div class="bg-neutral-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-pink-400 sm:text-4xl">
        <span class="block">Siapkah anda untuk maju ke hadapan?</span>
        <span class="block text-amber-400">Mulakan langkah anda sekarang.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="/#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400"> Daftar Sekarang </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="bg-neutral-900">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <div class="md:grid md:grid-cols-3 md:gap-3">
        <div class="p-5 md:col-span-1">
          <div class="sm:px-0">
            <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Hubungi Kami</h2>
            <!-- <p class="mt-1 text-sm text-neutral-100">This information will be displayed publicly so be careful what you share.</p> -->
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
              </i>
							<span class="align-middle ml-1 text-neutral-100">+6019-6233811</span>
            </div>
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
              </i>
							<span class="align-middle ml-1 text-neutral-100">info@nureelbeauty.com</span>
            </div>
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>              
              </i>
							<span class="align-middle ml-1 text-neutral-100">Lot 187, Jalan Haruan 5/6, Pusat Komersial Oakland 2, 70300 Seremban, Negeri Sembilan</span>
            </div>
            <hr>
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
              </i>
							<span class="align-middle ml-1 text-neutral-100">Nureel Beauty</span>
            </div>
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
              </i>
							<span class="align-middle ml-1 text-neutral-100">@nureelbeauty</span>
            </div>
            <div class="p-4">
              <i class="inline-block align-middle">
                <svg width="20" height="20" class="fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
              </i>
							<span class="align-middle ml-1 text-neutral-100">Nureel Beauty</span>
            </div>
          </div>
        </div>
        <div class="p-5 md:mt-0 md:col-span-2">
          <form on:submit|preventDefault={submit}>
            <div class="shadow rounded sm:overflow-hidden bg-neutral-800">
              <div class="px-4 py-5 space-y-6 sm:p-6">
                <div>
                  <h2 class="text-base text-pink-400 font-semibold tracking-wide uppercase">Borang Maklum Balas</h2>
                </div>
                <div>
                  <label for="name" class="block text-sm font-medium text-neutral-100"> Nama </label>
                  <div class="mt-2 flex rounded-md shadow-sm">
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" type="text" name="name" bind:value={name} required/>
                    
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-neutral-100"> Emel </label>
                  <div class="mt-2 flex rounded-md shadow-sm">
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" type="email" name="email" bind:value={email} required/>
                  </div>
                </div>      
                <div>
                  <label for="about" class="block text-sm font-medium text-neutral-100"> Mesej </label>
                  <div class="mt-1">
                    <textarea id="about" name="feedback" rows="5" class="py-2 pl-2 pr-2 block w-full rounded-md shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="" bind:value={message} required></textarea>
                  </div>
                </div>
              </div>
              <div class="px-4 py-4 bg-neutral-800 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-neutral-900 bg-amber-400 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2">Hantar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="relative py-4 bg-neutral-800">
    <div class="flex justify-center">
      <p class="text-pink-400">© 2022 Nureel Beauty. Hak Cipta Terpelihara</p>
    </div>

  </div>
</section>