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
	// const logo = '/img/logo.png'
	// const mainImg = '/img/main.jpg'
	// import { goto } from '$app/navigation';
  // import { session } from '$app/stores';
	// import { post } from '$lib/utils.js';
  
	// let mobile = false;
	// let profile = false;

  // async function logout() {
	// 	await post(`signout`);
	// 	$session.user = null;
  //   goto('/')
	// }
</script>

<div class="bg-neutral-800 min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Utama</h1>
      </div>
    </header>
    <main>
      <div class="bg-neutral-100 max-w mx-auto py-6 sm:px-6 lg:px-6">
        <!-- Replace with your content -->
        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
        
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="/#" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
              </a>
        
              <a href="/#" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
        
              <a href="/#" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
              </a>
        
              <a href="/#" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
        
              <!-- More products... -->
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>