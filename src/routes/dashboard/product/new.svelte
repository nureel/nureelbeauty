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
</script>

<svelte:head>
  <title>Tambah Produk</title>
</svelte:head>

<div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Produk</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
														<label for="city" class="block  text-amber-400">Penerangan</label>
														<textarea class="w-full mt-1 p-2 rounded-md"/>
													</div>
													<div class="mb-3">
														<label for="postal-code" class="block  text-amber-400">Harga</label>
														<input type="text" class="w-full lg:w-1/3 mt-1 p-2 rounded-md">
													</div>
													<div class="mb-3">
														<label for="postal-code" class="block  text-amber-400">Muat Naik Imej</label>
														<input type="file" class="w-full mt-1 p-2 rounded-md bg-white bg-clip-padding
														border border-solid border-gray-300
														m-0">
													</div>
												<div class="px-4 py-3 bg-neutral-800 text-right sm:px-6">
													<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-neutral-800 bg-amber-400 hover:bg-pink-400">Daftar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
              <!-- More products... -->
          </div>
        </div>

        <!-- /End replace -->
      </div>
    </main>
  </div>