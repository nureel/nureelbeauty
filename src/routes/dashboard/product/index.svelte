<script context="module">
	export async function load({ session }) {
    if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/signin'
			};
		} else {
			const products = await fetch('/api/product/all').then(response => response.json())
      return {
        props: {
          products
        }
      };
		}
	}
</script>

<script>
  import Navbar from '$lib/components/adminNavbar.svelte'
	import Grid  from 'gridjs-svelte'
  export let products
  let array = []

  for (let i of products){
    array.push([i.name, i.description, i.price])
  }

  // const data = users;
  const data = array;
  const columns = [{
    name: "Nama",
  },{
    name: "Penerangan",
    sort: true
  },{
    name: "Harga",
  }];
  const style = {
		table: {
			width: "100%",
		},
		header: {
			display: "flex",
			alignItems: "center",
			flexDirection: "row-reverse",
		},
	};
  const language = {
    "search" : {
      "placeholder": "Carian.."
    },
    "pagination": {
      "previous" : "sebelum",
      "next" : "seterus",
      "showing" : "paparan",
      "results" : () => "rekod",
      "to" : "ke",
      "of" : "dari"
    }
  };
  const className = {
    table: "table-auto shadow-lg bg-white",
    th:"bg-neutral-800 text-amber-400 border text-left px-8 py-3 capitalize",
    td:"border px-8 py-4",
    search:"py-4 px-8 rounded ",
    pagination:"mt-3"
	};
</script>

<svelte:head>
  <title>Produk</title>
</svelte:head>

<div class="min-h-full">
	<Navbar></Navbar>
	<header class="bg-neutral-800 shadow">
		<div class="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
			<h1 class="text-xl text-neutral-100">Produk</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			
			<Grid 
				{data}
				{columns}
				sort
				search
				pagination={{ enabled: true, limit: 10 }}
				{language}
				{style}
			/>
			<div class="p-4 flex">
				<a href="/dashboard/product/new" class="group bg-neutral-900 text-amber-400  hover:bg-neutral-700   hover:text-pink-400 px-3 py-2 rounded-md font-medium" aria-current="page">
					<i class="hidden xl:inline-block align-middle">
						<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
					</i>
						<span class="align-middle ml-1">Tambah Produk</span>
				</a>
			</div>
			<!-- /End replace -->
		</div>
		

	</main>
</div>

<style global>
	@import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>