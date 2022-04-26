<script context="module">
	export async function load({ session }) {
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
    const dashboard = await fetch('/api/dashboard').then(response => response.json())
		return {
      props: {
          dashboard
        }
    };
	}
</script>

<script>
  import { session } from '$app/stores';
  import Navbar from '$lib/components/adminNavbar.svelte'
  import CardStats from '$lib/components/CardStats.svelte';
  import { useRef } from 'gridjs';

  export let dashboard;
</script>

<svelte:head>
  <title>Utama</title>
</svelte:head>

<div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-neutral-800 shadow">
      <div class="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl text-neutral-100">Utama</h1>
      </div>
    </header>
    <main>
      <div class="bg-neutral-100 max-w-full mx-auto py-6 sm:px-6 lg:px-6">
        <!-- Replace with your content -->
        {#if $session.user.type === 3 || $session.user.type === 4}
          <div class="bg-white">
            <div class="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6">
                <div class="px-4 py-4 sm:px-0">
                  <div class="border-4 border-dashed border-gray-200 rounded-lg h-76 p-4">
                    <div class="relative p-4">
                      <dt>
                        <div class="absolute flex items-center justify-center h-24 w-24 rounded-md bg-amber-400 text-neutral-900">
                          <svg class="h-16 w-16 fill-neutral-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M623.5 164C638.1 172.6 644.6 192.1 635.1 207.5C627.4 222.1 607.9 228.6 592.5 219.1L319.1 68.61L47.54 219.1C32.09 228.6 12.61 222.1 4.025 207.5C-4.558 192.1 1.008 172.6 16.46 164L304.5 4.027C314.1-1.342 325.9-1.342 335.5 4.027L623.5 164zM279.1 200C279.1 177.9 297.9 160 319.1 160C342.1 160 359.1 177.9 359.1 200C359.1 222.1 342.1 240 319.1 240C297.9 240 279.1 222.1 279.1 200zM103.1 296C103.1 273.9 121.9 256 143.1 256C166.1 256 183.1 273.9 183.1 296C183.1 318.1 166.1 336 143.1 336C121.9 336 103.1 318.1 103.1 296V296zM535.1 296C535.1 318.1 518.1 336 495.1 336C473.9 336 455.1 318.1 455.1 296C455.1 273.9 473.9 256 495.1 256C518.1 256 535.1 273.9 535.1 296zM226.9 491.4L199.1 441.5V480C199.1 497.7 185.7 512 167.1 512H119.1C102.3 512 87.1 497.7 87.1 480V441.5L61.13 491.4C54.84 503 40.29 507.4 28.62 501.1C16.95 494.8 12.58 480.3 18.87 468.6L56.74 398.3C72.09 369.8 101.9 352 134.2 352H153.8C170.1 352 185.7 356.5 199.2 364.6L232.7 302.3C248.1 273.8 277.9 255.1 310.2 255.1H329.8C362.1 255.1 391.9 273.8 407.3 302.3L440.8 364.6C454.3 356.5 469.9 352 486.2 352H505.8C538.1 352 567.9 369.8 583.3 398.3L621.1 468.6C627.4 480.3 623 494.8 611.4 501.1C599.7 507.4 585.2 503 578.9 491.4L551.1 441.5V480C551.1 497.7 537.7 512 519.1 512H471.1C454.3 512 439.1 497.7 439.1 480V441.5L413.1 491.4C406.8 503 392.3 507.4 380.6 501.1C368.1 494.8 364.6 480.3 370.9 468.6L407.2 401.1C405.5 399.5 404 397.6 402.9 395.4L375.1 345.5V400C375.1 417.7 361.7 432 343.1 432H295.1C278.3 432 263.1 417.7 263.1 400V345.5L237.1 395.4C235.1 397.6 234.5 399.5 232.8 401.1L269.1 468.6C275.4 480.3 271 494.8 259.4 501.1C247.7 507.4 233.2 503 226.9 491.4H226.9z"/></svg>
                        </div>
                        <p class="ml-32 text-lg leading-6 font-medium text-pink-400">Stokis</p>
                      </dt>
                      <dd class="mt-2 ml-32 text-base text-neutral-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>
                    <div class="flex justify-center py-6">
                      <a href="/dashboard/register?type=stokis" class="flex justify-center bg-neutral-800 text-amber-400 hover:bg-pink-400 hover:text-neutral-800 rounded w-full p-3">
                        Daftar Stokis
                      </a>
                    </div>
                  </div>
                </div>
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
                      <a href="/dashboard/register?type=ejen" class="flex justify-center bg-neutral-800 text-amber-400 hover:bg-pink-400 hover:text-neutral-800 rounded w-full p-3">
                        Daftar Ejen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <div class="relative bg-white pb-8 pt-8">
            <div class="px-4 md:px-10 mx-auto w-full">
              <div>
                <!-- Card stats -->
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="PESANAN"
                      statTitle={dashboard.products}
                      statArrow="up"
                      statPercent="3.48"
                      statPercentColor="text-emerald-500"
                      statDescripiron="Since last month"
                      statIconName="fas fa-shopping-cart"
                      statIconColor="bg-amber-400"
                    />
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="AHLI"
                      statTitle={dashboard.accounts}
                      statArrow="down"
                      statPercent="3.48"
                      statPercentColor="text-red-500"
                      statDescripiron="Since last week"
                      statIconName="fas fa-users"
                      statIconColor="bg-amber-400"
                    />
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="MAKLUM BALAS"
                      statTitle={dashboard.feedbacks}
                      statArrow="down"
                      statPercent="1.10"
                      statPercentColor="text-red-500"
                      statDescripiron="Since yesterday"
                      statIconName="fas fa-message"
                      statIconColor="bg-amber-400"
                    />
                  </div>
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="JUALAN"
                      statTitle="RM 2000"
                      statArrow="up"
                      statPercent="12"
                      statPercentColor="text-emerald-500"
                      statDescripiron="Since last month"
                      statIconName="fas fa-chart-line"
                      statIconColor="bg-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
        <!-- /End replace -->
      </div>
    </main>
  </div>