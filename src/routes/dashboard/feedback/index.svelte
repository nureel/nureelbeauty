<script context="module">
	export async function load({ session }) {
    if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/signin'
			};
		} else {
      const feedbacks = await fetch('/api/feedback/all').then(response => response.json())
      return {
        props: {
          feedbacks
        }
      };
    }
	}
</script>

<script>
  import Navbar from '$lib/components/adminNavbar.svelte'
  import Grid  from 'gridjs-svelte'
  export let feedbacks
  let array = []

  for (let i of feedbacks){
    let d = new Date(i.date)
    array.push([i.name, i.email, d.toLocaleString('en-GB'), i.message])
  }

  // const data = feedbacks;
  const data = array;
  const columns = [{
    name: "Nama",
  },{
    name: "Emel",
    sort: true
  },{
    name: "Tarikh",
  },{
    name: "Mesej",
    sort: true
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

<div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Maklum Balas</h1>
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
          {className}
        />
        <!-- /End replace -->
      </div>
    </main>
  </div>