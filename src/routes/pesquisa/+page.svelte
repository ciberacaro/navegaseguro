<script>
	import { searchIndex, indiceTitulos } from '$lib/searchIndex.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let query = $state('');

	if (browser) {
		const u = new URL(window.location.href);
		query = u.searchParams.get('q') || '';
	}

	// Índice completo: estático + entradas dinâmicas dos arquivos de dados
	const indiceCompleto = [
		...searchIndex,
		...indiceTitulos.noticias.map(t => ({ tipo: 'noticia', titulo: t, desc: 'Alerta publicado em /notícias', url: '/noticias', tags: [] })),
		...indiceTitulos.arquivo.map(t => ({ tipo: 'arquivo', titulo: t, desc: 'Caso real documentado', url: '/arquivo', tags: [] })),
		...indiceTitulos.faq.map(t => ({ tipo: 'faq', titulo: t, desc: 'Pergunta frequente', url: '/faq', tags: [] })),
		...indiceTitulos.glossario.map(t => ({ tipo: 'glossario', titulo: t, desc: 'Termo do glossário', url: '/glossario', tags: [] }))
	];

	function normalizar(s) {
		return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
	}

	const resultados = $derived.by(() => {
		const q = normalizar(query.trim());
		if (q.length < 2) return [];
		const termos = q.split(/\s+/).filter(Boolean);

		return indiceCompleto
			.map(item => {
				const haystack = normalizar([item.titulo, item.desc, ...(item.tags || [])].join(' '));
				let pontos = 0;
				for (const t of termos) {
					if (haystack.includes(t)) pontos += 1;
					if (normalizar(item.titulo).includes(t)) pontos += 2;
					if ((item.tags || []).some(tag => normalizar(tag) === t)) pontos += 3;
				}
				return { item, pontos };
			})
			.filter(r => r.pontos > 0)
			.sort((a, b) => b.pontos - a.pontos)
			.slice(0, 60)
			.map(r => r.item);
	});

	const grupos = $derived.by(() => {
		const g = {};
		for (const r of resultados) {
			if (!g[r.tipo]) g[r.tipo] = [];
			g[r.tipo].push(r);
		}
		return g;
	});

	const labelsTipo = {
		page: '📄 Páginas',
		faixa: '👥 Faixas etárias',
		tema: '🎯 Temas',
		ferramenta: '🛠️ Ferramentas',
		noticia: '📰 Notícias',
		arquivo: '📁 Arquivo de casos',
		faq: '❓ Perguntas frequentes',
		glossario: '📖 Glossário'
	};

	const ordemTipos = ['page', 'faixa', 'tema', 'ferramenta', 'noticia', 'arquivo', 'faq', 'glossario'];

	$effect(() => {
		if (!browser) return;
		const u = new URL(window.location.href);
		if (query) u.searchParams.set('q', query);
		else u.searchParams.delete('q');
		history.replaceState({}, '', u);
	});
</script>

<svelte:head>
	<title>Pesquisa — NavegaSeguro</title>
	<meta name="description" content="Pesquisa em todo o conteúdo do NavegaSeguro — faixas etárias, notícias, casos, FAQ e glossário." />
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🔍 Pesquisa</h1>
		<p>Procura em todo o conteúdo do NavegaSeguro</p>
	</div>
</div>

<main class="container">
	<label for="pesquisa-input" class="label-pesquisa">
		<span>O que procuras?</span>
	</label>
	<input
		id="pesquisa-input"
		type="search"
		bind:value={query}
		placeholder="ex: phishing, MB Way, passkeys, sextorsão..."
		autocomplete="off"
		autofocus
	/>

	{#if query.trim().length < 2}
		<div class="vazio">
			<p>Escreva pelo menos 2 letras para começar.</p>
			<div class="sugestoes">
				<span>Sugestões:</span>
				<button onclick={() => query = 'phishing'}>phishing</button>
				<button onclick={() => query = 'mb way'}>MB Way</button>
				<button onclick={() => query = 'sim swap'}>SIM swap</button>
				<button onclick={() => query = 'passkeys'}>passkeys</button>
				<button onclick={() => query = 'sextorsão'}>sextorsão</button>
				<button onclick={() => query = 'whatsapp'}>WhatsApp</button>
				<button onclick={() => query = 'seniores'}>seniores</button>
				<button onclick={() => query = 'cyberbullying'}>cyberbullying</button>
			</div>
		</div>
	{:else if !resultados.length}
		<div class="vazio" role="status">
			<p><strong>Sem resultados para "{query}".</strong></p>
			<p>Experimente outras palavras-chave, ou consulte a <a href="/faq">FAQ</a>, o <a href="/glossario">glossário</a> ou a <a href="/">página inicial</a>.</p>
		</div>
	{:else}
		<p class="contagem" role="status" aria-live="polite">{resultados.length} resultado{resultados.length === 1 ? '' : 's'} para "{query}"</p>

		{#each ordemTipos as tipo}
			{#if grupos[tipo]?.length}
				<section class="grupo">
					<h2>{labelsTipo[tipo]} <span class="contador">({grupos[tipo].length})</span></h2>
					<ul>
						{#each grupos[tipo] as r}
							<li>
								<a href={r.url}>
									<strong>{r.titulo}</strong>
									{#if r.desc}<span class="desc">{r.desc}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		{/each}
	{/if}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); font-size: 0.95rem; }

	main { padding: 2.5rem 1.5rem 4rem; }
	.label-pesquisa { display: block; font-size: 0.85rem; font-weight: 600; color: #555; margin-bottom: 0.4rem; }
	input {
		width: 100%;
		padding: 1rem 1.25rem;
		font-size: 1.1rem;
		border: 2px solid #d0d0d0;
		border-radius: 0.75rem;
		background: white;
	}
	input:focus-visible { outline: 3px solid #0984E3; outline-offset: 1px; border-color: #0984E3; }

	.contagem { margin: 1.5rem 0 0.5rem; font-size: 0.88rem; color: #555; }

	.grupo { margin-top: 1.75rem; }
	.grupo h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 0.95rem;
		font-weight: 800;
		color: #1a1a2e;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 0.5rem;
	}
	.contador { color: #888; font-weight: 600; }

	.grupo ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.3rem; }
	.grupo a {
		display: block;
		padding: 0.7rem 1rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		text-decoration: none;
		color: #1a1a2e;
		transition: border-color 0.15s, box-shadow 0.15s;
	}
	.grupo a:hover { border-color: #0984E3; box-shadow: 0 2px 6px rgba(9,132,227,0.08); }
	.grupo a:focus-visible { outline: 3px solid #0984E3; outline-offset: 1px; }
	.grupo strong { display: block; font-size: 0.95rem; color: #1a1a2e; margin-bottom: 0.15rem; }
	.grupo .desc { font-size: 0.82rem; color: #666; line-height: 1.4; }

	.vazio {
		margin-top: 1.5rem;
		padding: 1.5rem;
		background: #f8f9fa;
		border: 1px solid #e0e0e0;
		border-radius: 0.75rem;
		color: #555;
		font-size: 0.92rem;
	}
	.vazio a { color: #0984E3; text-decoration: underline; }
	.sugestoes { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.85rem; align-items: center; }
	.sugestoes span { font-size: 0.82rem; color: #777; margin-right: 0.25rem; }
	.sugestoes button {
		background: white;
		border: 1px solid #d0d0d0;
		padding: 0.3rem 0.75rem;
		border-radius: 999px;
		font-size: 0.82rem;
		cursor: pointer;
		color: #1a1a2e;
	}
	.sugestoes button:hover { background: #eaf3fa; border-color: #0984E3; }
	.sugestoes button:focus-visible { outline: 2px solid #0984E3; }
</style>
