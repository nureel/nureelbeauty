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
  <title>Laporan</title>
</svelte:head>

<div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Laporan</h1>
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