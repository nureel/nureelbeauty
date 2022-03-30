<script context="module">
	export async function load({ session, url, fetch }) {
    const type = new URLSearchParams(url.search).get("type")

		if (!session.user) {
      return {
        status: 302,
        redirect: '/auth/signin'
      };
		} else {
      if (session.user.email_verify === false){
        return {
          status: 302,
          redirect: '/auth/verify'
        };
      }
    }
		return {
      props: {
        type
      }
    };
	}
</script>

<script>
  import Navbar from '$lib/components/adminNavbar.svelte'
	export let type;
</script>

<div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Pendaftaran</h1>
      </div>
    </header>
    <main>
      <div class="bg-neutral-100 max-w mx-auto py-6 sm:px-6 lg:px-6">
        <!-- Replace with your content -->
        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
							{#if (type === 'stokis')}
							<div class="mt-10 sm:mt-0">
								<div class="md:grid md:grid-cols-3 md:gap-6">
									<div class="md:col-span-1">
										<div class="px-4 sm:px-0">
											<h3 class="text-lg font-medium leading-6 text-gray-900">Pendaftaran Stokis</h3>
											<p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
										</div>
									</div>
									<div class="mt-5 md:mt-0 md:col-span-2">
										<form action="#" method="POST">
											<div class="shadow overflow-hidden sm:rounded-md">
												<div class="px-4 py-5 bg-neutral-800 sm:p-6">
				
														<div class="mb-3">
															<label for="first-name" class="block text-amber-400">Nama</label>
															<input type="text" autocomplete="given-name" class="w-full mt-1 p-2  rounded-md">
														</div>
														<div class="mb-3">
															<label for="street-address" class="block  text-amber-400">Alamat 1</label>
															<input type="text" class="w-full mt-1 p-2 rounded-md">
														</div>
														<div class="mb-3">
															<label for="street-address" class="block  text-amber-400">Alamat 2</label>
															<input type="text" class="w-full mt-1 p-2 rounded-md">
														</div>
														<div class="mb-3">
															<label for="city" class="block  text-amber-400">Bandar</label>
															<input type="text" class="w-full lg:w-1/3 mt-1 p-2 rounded-md">
														</div>
														<div class="mb-3">
															<label for="postal-code" class="block  text-amber-400">Poskod</label>
															<input type="text" class="w-full lg:w-1/3 mt-1 p-2 rounded-md">
														</div>
														<div class="col-span-6 sm:col-span-3">
															<label for="country" class="block  text-amber-400">Negeri</label>
															<select class="mt-1 block w-full lg:w-1/3 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
																<option value="">Pilih Negeri</option>
																<option value="Johor">Johor</option>
																<option value="Kedah">Kedah</option>
																<option value="Kelantan">Kelantan</option>
																<option value="Melaka">Melaka</option>
																<option value="Negeri Sembilan">Negeri Sembilan</option>
																<option value="Pahang">Pahang</option>
																<option value="Perak">Perak</option>
																<option value="Perlis">Perlis</option>
																<option value="Pulau Pinang">Pulau Pinang</option>
																<option value="Sabah">Sabah</option>
																<option value="Sarawak">Sarawak</option>
																<option value="Selangor">Selangor</option>
																<option value="Terengganu">Terengganu</option>
																<option value="W.P. Kuala Lumpur">W.P. Kuala Lumpur</option>
																<option value="W.P. Labuan">W.P. Labuan</option>
																<option value="W.P. Putrajaya">W.P. Putrajaya</option>
															</select>
														</div>

												</div>
												<div class="px-4 py-3 bg-neutral-800 text-right sm:px-6">
													<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-neutral-800 bg-amber-400 hover:bg-pink-400">Daftar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							{:else}
								<div class="px-4 py-4 sm:px-0">
									<div class="border-4 border-dashed border-gray-200 rounded-lg h-76 p-4">
										<div class="relative p-4">
											<dt>
												<div class="absolute flex items-center justify-center h-24 w-24 rounded-md bg-amber-400 text-neutral-900">
													<svg class="h-12 w-12 fill-neutral-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M208 48C208 74.51 186.5 96 160 96C133.5 96 112 74.51 112 48C112 21.49 133.5 0 160 0C186.5 0 208 21.49 208 48zM152 352V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480V256.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C80.2 145.7 111.4 128 145.1 128H174.9C208.6 128 239.8 145.7 257.2 174.6L315.4 271.5C324.5 286.7 319.6 306.3 304.5 315.4C289.3 324.5 269.7 319.6 260.6 304.5L232 256.9V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V352L152 352z"/></svg>                      </div>
												<p class="ml-32 text-lg leading-6 font-medium text-pink-400">Ejen</p>
											</dt>
											<dd class="mt-2 ml-32 text-base text-neutral-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
										</div>
										<div class="flex justify-center py-6">
											<button class="bg-neutral-800 text-amber-400 rounded w-full p-3">Daftar Ejen</button>
										</div>
									</div>
								</div>
							{/if}
        
              <!-- More products... -->
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>