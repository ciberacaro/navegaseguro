<script>
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Início' },
		{ href: '/dicas', label: 'Dicas' },
		{ href: '/ferramentas', label: 'Ferramentas' },
		{ href: '/glossario', label: 'Glossário' },
		{ href: '/sobre', label: 'Sobre' }
	];

	let menuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
		<a href="/" class="flex items-center gap-2 text-xl font-bold text-cyan-400">
			<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
			</svg>
			NavegaSeguro
		</a>

		<!-- Desktop -->
		<ul class="hidden items-center gap-6 md:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-medium transition-colors hover:text-cyan-400 {page.url.pathname === link.href ? 'text-cyan-400' : 'text-gray-300'}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile toggle -->
		<button
			class="rounded-md p-2 text-gray-400 hover:bg-gray-800 md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Menu"
		>
			{#if menuOpen}
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			{/if}
		</button>
	</nav>

	{#if menuOpen}
		<div class="border-t border-gray-800 bg-gray-950 px-4 py-3 md:hidden">
			<ul class="flex flex-col gap-3">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="block text-sm font-medium {page.url.pathname === link.href ? 'text-cyan-400' : 'text-gray-300'}"
							onclick={() => (menuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
