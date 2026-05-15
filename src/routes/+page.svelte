<script>
	const stats = [
		{ value: '83%', label: 'dos ataques começam com phishing' },
		{ value: '30s', label: 'tempo médio para uma vítima clicar' },
		{ value: '4,5M€', label: 'custo médio de uma violação de dados' }
	];

	const features = [
		{
			icon: 'shield',
			title: 'Dicas Práticas',
			desc: 'Aprende como proteger as tuas contas, dispositivos e privacidade com passos simples.',
			href: '/dicas'
		},
		{
			icon: 'tool',
			title: 'Ferramentas Gratuitas',
			desc: 'Gestores de palavras-passe, VPNs, verificadores de email — tudo testado e recomendado.',
			href: '/ferramentas'
		},
		{
			icon: 'book',
			title: 'Glossário',
			desc: 'Phishing, ransomware, 2FA — explica-se tudo em português simples.',
			href: '/glossario'
		}
	];
</script>

<svelte:head>
	<title>NavegaSeguro — Navega com segurança</title>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden py-24 md:py-32">
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent)]"></div>
	<div class="relative mx-auto max-w-4xl px-4 text-center">
		<span class="mb-4 inline-block rounded-full border border-cyan-900 bg-cyan-950/50 px-3 py-1 text-xs font-medium text-cyan-400">
			Cibersegurança em português 🇵🇹
		</span>
		<h1 class="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
			Navega a internet<br />
			<span class="text-cyan-400">com confiança.</span>
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
			Aprende a proteger-te online com dicas práticas, ferramentas gratuitas e linguagem simples.
			Sem jargão técnico. Sem custos.
		</p>
		<div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="/dicas"
				class="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
			>
				Começar agora
			</a>
			<a
				href="/ferramentas"
				class="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
			>
				Ver ferramentas
			</a>
		</div>
	</div>
</section>

<!-- Stats -->
<section class="bg-gray-900/50 py-12">
	<div class="mx-auto max-w-6xl px-4">
		<dl class="grid grid-cols-1 gap-6 sm:grid-cols-3">
			{#each stats as stat}
				<div class="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
					<dt class="text-3xl font-extrabold text-cyan-400">{stat.value}</dt>
					<dd class="mt-1 text-sm text-gray-400">{stat.label}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<!-- Features -->
<section class="py-20">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
			O que encontras aqui
		</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each features as f}
				<a
					href={f.href}
					class="group rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-cyan-800 hover:bg-gray-800"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400">
						{#if f.icon === 'shield'}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
							</svg>
						{:else if f.icon === 'tool'}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
							</svg>
						{/if}
					</div>
					<h3 class="mb-2 font-semibold text-white group-hover:text-cyan-400">{f.title}</h3>
					<p class="text-sm text-gray-400">{f.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16">
	<div class="mx-auto max-w-2xl px-4 text-center">
		<div class="rounded-2xl border border-cyan-900 bg-gradient-to-b from-cyan-950/40 to-gray-900 p-10">
			<h2 class="text-2xl font-bold text-white">Pronto para começar?</h2>
			<p class="mt-3 text-sm text-gray-400">
				Começa pelas dicas básicas — em menos de 10 minutos melhoraras a tua segurança online.
			</p>
			<a
				href="/dicas"
				class="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
			>
				Ver as dicas →
			</a>
		</div>
	</div>
</section>
