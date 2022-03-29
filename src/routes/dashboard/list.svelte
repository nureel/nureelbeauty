<!-- <svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js" on:load={jsLoaded}></script>
</svelte:head> -->

<script context="module">
  export async function load({ session, fetch }) {
    if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/signin'
			};
		} else {
      const users = await fetch('/api/list/all').then(response => response.json())
      return {
        props: {
          users
        }
      };
    }
		
	}
</script>
<script>
  import Navbar from '$lib/components/adminNavbar.svelte'
  import Grid  from 'gridjs-svelte'
  export let users

  const data = users;
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

<div class="min-h-full">
  <Navbar></Navbar>
  <header class="bg-neutral-800 shadow">
    <div class="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h1 class="text-xl text-neutral-100">Utama</h1>
    </div>
  </header>
    <main>
      <div class="bg-neutral-100 max-w-full mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
        <!-- Replace with your content -->
        <Grid 
          {data}
          sort
          search
          pagination={{ enabled: true, limit: 3 }}
          {language}
          {style}
          {className}
        />

        <!-- /End replace -->
      </div>
    </main>
  </div>

  <style global>
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  </style>