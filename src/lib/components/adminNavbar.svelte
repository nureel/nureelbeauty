<script>
	const logo = '/img/logo.png'
	import { goto } from '$app/navigation';
  import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

	let mobile = false;
	let profile = false;

  async function logout() {
		await post(`auth/signout`);
		// @ts-ignore
		$session.user = null;
    goto('/')
	}
</script>

<nav class="relative bg-neutral-900">
	<div class="max-w mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<a href="/">
						<img class="h-6 w-auto sm:h-8" src={logo} alt="Nureel">
					</a>
					
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex space-x-4">
						<a href="/dashboard" class="group bg-neutral-900 text-amber-400  hover:bg-neutral-700   hover:text-pink-400 px-3 py-2 rounded-md font-medium" aria-current="page">
							<i class="hidden xl:inline-block align-middle">
								<svg width="20" height="20" class="text-amber-400 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill-rule="evenodd" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>							</i>
							<span class="align-middle ml-1">Utama</span>
						</a>

						<a href="/dashboard/stock" class="group bg-neutral-900 text-amber-400  hover:bg-neutral-700 hover:text-pink-400 px-3 py-2 rounded-md font-medium">
							<i class="hidden xl:inline-block align-middle">
								<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>
							</i>
							<span class="align-middle ml-1">Stok</span>
						</a>
						{#if $session.type === 1 || $session.type === 2}
							<a href="/dashboard/list" class="group text-amber-400 hover:bg-neutral-700 hover:text-pink-400 active:bg-neutral-800 active:text-pink-400 px-3 py-2 rounded-md font-medium">
								<i class="hidden xl:inline-block align-middle">
									<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM64 160H128V96H64V160zM448 96H192V160H448V96zM64 288H128V224H64V288zM448 224H192V288H448V224zM64 416H128V352H64V416zM448 352H192V416H448V352z"/></svg>							</i>
								<span class="align-middle ml-1">Senarai</span>
							</a>  

							<a href="/dashboard/feedback" class="group text-amber-400 hover:bg-neutral-700 hover:text-pink-400 active:bg-neutral-800 active:text-pink-400 px-3 py-2 rounded-md font-medium">
								<i class="hidden xl:inline-block align-middle">
									<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
								</i>
								<span class="align-middle ml-1">Maklum Balas</span>
							</a>

							<a href="/dashboard/report" class="group text-amber-400 hover:bg-neutral-700 hover:text-pink-400 active:bg-neutral-800 active:text-pink-400 px-3 py-2 rounded-md font-medium">
								<i class="hidden xl:inline-block align-middle">
									<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"/></svg>
								</i>
								<span class="align-middle ml-1">Laporan</span>
							</a>
						{/if}
						{#if $session.type === 1}
						<a href="/dashboard/setting" class="group text-amber-400 hover:bg-neutral-700 hover:text-pink-400 active:bg-neutral-800 active:text-pink-400 px-3 py-2 rounded-md font-medium">
							<i class="hidden xl:inline-block align-middle">
								<svg width="20" height="20" class="fill-amber-400 group-hover:fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>							
							</i>
								<span class="align-middle ml-1">Tetapan</span>
						</a>
						{/if}
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<div>
						<span class="text-pink-400 font-medium capitalize">
							{$session.
								// @ts-ignore
													user.name}
						</span>
					</div>
					<!-- <button type="button" class="bg-neutral-800 p-1 rounded-full text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
						<span class="sr-only">View notifications</span>
						<!-- Heroicon name: outline/bell --
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
					</button> -->

					<!-- Profile dropdown -->
					<div class="ml-3 relative">
						<div>
							<button on:click="{() => profile = !profile}" type="button" class="max-w-xs flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-400" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
								<span class="sr-only">Open user menu</span>
								<svg class="h-8 w-8 fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
								</svg>
								<!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
							</button>
						</div>

						<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-800 ring-1 ring-amber-400 ring-opacity-5 focus:outline-none {profile === false ? 'hidden' : 'visible'}" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
							<!-- Active: "bg-neutral-100", Not Active: "" -->
							<a href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-0">Profil</a>

							<!-- <a href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a> -->

							<a on:click={logout} href="/#" class="block px-4 py-2 text-sm text-amber-400" role="menuitem" tabindex="-1" id="user-menu-item-2">Daftar keluar</a>
						</div>
					</div>
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<!-- Mobile menu button -->
				<button on:click="{() => mobile = !mobile}" type="button" class="bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-pink-400 hover:text-amber-400 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-400" aria-controls="mobile-menu" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<!--
						Heroicon name: outline/menu

						Menu open: "hidden", Menu closed: "block"
					-->
					<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<!--
						Heroicon name: outline/x

						Menu open: "block", Menu closed: "hidden"
					-->
					<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="{mobile === false ? 'hidden' : 'visible'}" id="mobile-menu">
		<div class="z-10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
			<!-- Current: "bg-neutral-900 text-white", Default: "text-amber-400 hover:bg-neutral-700 hover:text-white" -->
			<a href="/dashboard" class="bg-neutral-700 text-amber-400 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Utama</a>

			<a href="/dashboard/stock" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Stok</a>

			{#if $session.type === 1 || $session.type === 2}
				<a href="/dashboard/list" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Senarai</a>

				<a href="/dashboard/feedback" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Maklum balas</a>
			{/if}
			{#if $session.type === 1}
				<a href="/dashboard/report" class="text-amber-400 hover:bg-neutral-700 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Laporan</a>
			{/if}
		</div>
		<div class="pt-4 pb-3 border-t border-pink-400">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<svg class="h-8 w-8 rounded-full bg-neutral-700 fill-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
					</svg>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium leading-none text-amber-400">{$session.
// @ts-ignore
					user.name}</div>
					<div class="text-sm font-medium leading-none text-pink-400">{$session.
// @ts-ignore
					user.email}</div>
				</div>
				<!-- <button type="button" class="ml-auto bg-neutral-800 flex-shrink-0 p-1 rounded-full text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
					<span class="sr-only">View notifications</span>
					<!-- Heroicon name: outline/bell --
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
				</button> -->
			</div>
			<div class="mt-3 px-2 space-y-1">
				<a href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Profil</a>

				<!-- <a href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Settings</a> -->

				<a on:click={logout} href="/#" class="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-pink-400 hover:bg-neutral-700">Daftar Keluar</a>
			</div>
		</div>
	</div>
</nav>