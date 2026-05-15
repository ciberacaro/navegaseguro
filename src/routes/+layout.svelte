<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LeitorVoz from '$lib/LeitorVoz.svelte';

	let { children } = $props();

	let menuAberto = $state(false);
	let altoContraste = $state(false);
	let tamanhoLetra = $state('normal');

	if (browser) {
		altoContraste = localStorage.getItem('ac') === '1';
		tamanhoLetra = localStorage.getItem('tl') || 'normal';
	}

	$effect(() => {
		if (!browser) return;
		const html = document.documentElement;
		html.classList.toggle('alto-contraste', altoContraste);
		html.dataset.letra = tamanhoLetra;
		localStorage.setItem('ac', altoContraste ? '1' : '0');
		localStorage.setItem('tl', tamanhoLetra);
	});

	$effect(() => {
		// fechar menu ao navegar
		page;
		menuAberto = false;
	});

	function cicloLetra() {
		tamanhoLetra = tamanhoLetra === 'normal' ? 'grande' : tamanhoLetra === 'grande' ? 'muitogrande' : 'normal';
	}

	const legendaLetra = { normal: 'A', grande: 'A+', muitogrande: 'A++' };

	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/ferramentas', label: 'Ferramentas' },
		{ href: '/noticias', label: 'Notícias' },
		{ href: '/recursos', label: 'Recursos' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/glossario', label: 'Glossário' },
		{ href: '/sobre', label: 'Sobre' },
	];

	const rotasBrutalist = ['/pre-escolar', '/primeiro-ciclo', '/segundo-ciclo', '/terceiro-ciclo', '/secundario'];

	const tema = $derived.by(() => {
		const p = $page.url.pathname;
		if (rotasBrutalist.some(r => p === r || p.startsWith(r + '/'))) return 'brutalist';
		return 'editorial';
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="NavegaSeguro — Plataforma de sensibilização para cibersegurança adaptada a cada faixa etária" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />
</svelte:head>

<a href="#conteudo-principal" class="saltar-conteudo">Saltar para o conteúdo</a>

<div class="app" data-tema={tema}>

<header>
	<nav aria-label="Navegação principal">
		<a href="/" class="logo">🛡️ <span>NavegaSeguro</span></a>

		<div class="nav-desktop">
			{#each navLinks as l}
				<a href={l.href} class:atual={$page.url.pathname === l.href}>{l.label}</a>
			{/each}
			<a href="/emergencia" class="btn-emergencia-nav">🚨 Emergência</a>
		</div>

		<div class="nav-acoes">
			<button class="a11y-btn" onclick={cicloLetra} aria-label="Tamanho da letra: {legendaLetra[tamanhoLetra]}" title="Tamanho da letra" class:ativo={tamanhoLetra !== 'normal'}>
				{legendaLetra[tamanhoLetra]}
			</button>
			<button class="a11y-btn" onclick={() => altoContraste = !altoContraste} aria-pressed={altoContraste} aria-label="Alto contraste" title="Alto contraste" class:ativo={altoContraste}>
				◑
			</button>
			<button class="hamburger" onclick={() => menuAberto = !menuAberto} aria-expanded={menuAberto} aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}>
				{menuAberto ? '✕' : '☰'}
			</button>
		</div>
	</nav>

	{#if menuAberto}
		<div class="menu-mobile" role="dialog" aria-label="Menu de navegação">
			{#each navLinks as l}
				<a href={l.href}>{l.label}</a>
			{/each}
			<a href="/emergencia" class="menu-emergencia">🚨 Emergência</a>
		</div>
	{/if}
</header>

<div id="conteudo-principal">
	{@render children()}
</div>

<footer>
	<div class="footer-inner">
		<p class="footer-logo">🛡️ NavegaSeguro</p>
		<p class="footer-desc">Gratuito · Sem publicidade · Sem recolha de dados · PT-PT</p>
		<nav aria-label="Navegação de rodapé" class="footer-links">
			<a href="/ferramentas">Ferramentas</a>
			<a href="/noticias">Notícias</a>
			<a href="/recursos">Recursos</a>
			<a href="/faq">FAQ</a>
			<a href="/glossario">Glossário</a>
			<a href="/educadores">Educadores</a>
			<a href="/contacto">Parcerias</a>
			<a href="/sobre">Sobre</a>
		</nav>
		<p class="footer-note">Linha Internet Segura <a href="tel:800219090">800 21 90 90</a> · APAV <a href="tel:116006">116 006</a> · Emergência <a href="tel:112">112</a></p>
	</div>
</footer>

</div>

<LeitorVoz />

<style>
	/* ── Reset global ── */
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
	:global(body) { font-family: 'Inter', sans-serif; background: #f4f6fb; color: #1a1a2e; line-height: 1.6; }
	:global(a) { color: inherit; text-decoration: none; }
	:global(h1, h2, h3) { line-height: 1.2; }
	:global(:focus-visible) { outline: 3px solid #0984E3; outline-offset: 3px; border-radius: 3px; }
	:global([data-letra='grande']) { font-size: 112%; }
	:global([data-letra='muitogrande']) { font-size: 125%; }

	/* ── Alto contraste WCAG (preto sobre branco, sem cores decorativas) ── */
	:global(.alto-contraste),
	:global(.alto-contraste body) {
		background: #fff !important;
		color: #000 !important;
	}
	:global(.alto-contraste *) {
		background-image: none !important;
		text-shadow: none !important;
		box-shadow: none !important;
	}
	:global(.alto-contraste *:not(button):not(.btn-emergencia-nav):not(.menu-emergencia):not(.btn-emergencia):not(.btn-tel):not(.btn-principal):not(.btn-secundario):not(.alerta-badge):not(.recurso-tag):not(.tag):not(.cat-badge):not(.linha-card):not(input):not(textarea)) {
		color: #000 !important;
		background-color: transparent !important;
	}
	:global(.alto-contraste a) {
		color: #0000EE !important;
		text-decoration: underline !important;
	}
	:global(.alto-contraste a:visited) {
		color: #551A8B !important;
	}
	:global(.alto-contraste button),
	:global(.alto-contraste .btn-principal),
	:global(.alto-contraste .btn-secundario),
	:global(.alto-contraste .btn-emergencia),
	:global(.alto-contraste .btn-tel),
	:global(.alto-contraste .btn-emergencia-nav) {
		background: #000 !important;
		color: #fff !important;
		border: 2px solid #000 !important;
	}
	:global(.alto-contraste header),
	:global(.alto-contraste footer),
	:global(.alto-contraste .topo),
	:global(.alto-contraste .hero),
	:global(.alto-contraste .emergencia-strip) {
		background: #fff !important;
		color: #000 !important;
		border-bottom: 2px solid #000 !important;
	}
	:global(.alto-contraste footer),
	:global(.alto-contraste footer *) {
		color: #000 !important;
	}
	:global(.alto-contraste *) {
		border-color: #000 !important;
	}
	:global(.alto-contraste img),
	:global(.alto-contraste svg) {
		filter: contrast(1.2);
	}

	/* ── App wrapper (recebe o tema) ── */
	.app { min-height: 100vh; display: flex; flex-direction: column; }
	.app > footer { margin-top: auto; }

	/* ── Skip link ── */
	.saltar-conteudo {
		position: absolute;
		top: -100%;
		left: 1rem;
		background: #0984E3;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 0 0 0.5rem 0.5rem;
		font-weight: 700;
		font-size: 0.9rem;
		z-index: 9999;
	}
	.saltar-conteudo:focus { top: 0; }

	/* ── Header / Nav ── */
	header {
		background: #fff;
		border-bottom: 1px solid #e8eaf0;
		position: sticky;
		top: 0;
		z-index: 200;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.875rem 1.5rem;
		max-width: 1100px;
		margin: 0 auto;
		gap: 1rem;
	}

	.logo {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1.2rem;
		color: #1a1a2e;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		flex-shrink: 0;
	}

	.nav-desktop {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex: 1;
		justify-content: center;
	}

	.nav-desktop a {
		font-size: 0.9rem;
		font-weight: 500;
		color: #555;
		transition: color 0.2s;
		white-space: nowrap;
	}

	.nav-desktop a:hover, .nav-desktop a.atual { color: #1a1a2e; }

	.btn-emergencia-nav {
		background: #FF6B6B;
		color: white !important;
		font-weight: 700 !important;
		font-size: 0.82rem !important;
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		transition: background 0.2s !important;
	}
	.btn-emergencia-nav:hover { background: #e55a5a !important; }

	.nav-acoes {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		flex-shrink: 0;
	}

	.a11y-btn {
		background: transparent;
		border: 1px solid #ddd;
		color: #666;
		border-radius: 6px;
		padding: 0.3rem 0.55rem;
		font-size: 0.8rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.15s;
		line-height: 1.3;
	}
	.a11y-btn:hover { border-color: #0984E3; color: #0984E3; }
	.a11y-btn.ativo { background: #0984E3; border-color: #0984E3; color: #fff; }

	.hamburger {
		display: none;
		background: transparent;
		border: 1px solid #ddd;
		color: #1a1a2e;
		border-radius: 6px;
		padding: 0.3rem 0.6rem;
		font-size: 1.1rem;
		cursor: pointer;
		font-family: inherit;
		line-height: 1.3;
	}

	/* ── Menu mobile ── */
	.menu-mobile {
		border-top: 1px solid #f0f0f0;
		display: flex;
		flex-direction: column;
	}

	.menu-mobile a {
		padding: 1rem 1.5rem;
		font-size: 1rem;
		font-weight: 500;
		color: #333;
		border-bottom: 1px solid #f5f5f5;
		transition: background 0.15s;
	}
	.menu-mobile a:hover { background: #f8faff; }

	.menu-emergencia {
		color: #FF6B6B !important;
		font-weight: 700 !important;
	}

	/* ── Footer ── */
	footer {
		background: #1a1a2e;
		color: #aaa;
		padding: 2.5rem 1.5rem;
		margin-top: 4rem;
		text-align: center;
	}

	.footer-inner {
		max-width: 700px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.footer-logo { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1.1rem; color: #fff; }
	.footer-desc { font-size: 0.8rem; }

	.footer-links {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.footer-links a { color: #ccc; font-size: 0.82rem; transition: color 0.2s; }
	.footer-links a:hover { color: #fff; }
	.footer-links a:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; border-radius: 2px; }

	.footer-note { font-size: 0.78rem; color: #bbb; }
	.footer-note a { color: #ccc; text-decoration: underline; }
	.footer-note a:hover { color: #fff; }
	.footer-note a:focus-visible { outline: 2px solid #48DBFB; outline-offset: 2px; border-radius: 2px; }

	/* ── Responsive ── */
	@media (max-width: 768px) {
		.nav-desktop { display: none; }
		.hamburger { display: block; }
	}

	/* ───── TEMA EDITORIAL (adultos, séniores, partilhadas) ───── */
	:global(.app[data-tema='editorial']) {
		background: #fdfcf8;
		color: #1a1a1a;
	}
	:global(.app[data-tema='editorial']) header {
		background: #fdfcf8;
		border-bottom: 1px solid #1a1a1a;
	}
	:global(.app[data-tema='editorial']) .logo {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		letter-spacing: 0.02em;
	}
	:global(.app[data-tema='editorial']) .nav-desktop a {
		font-size: 0.85rem;
		color: #333;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
	}
	:global(.app[data-tema='editorial']) .nav-desktop a.atual {
		color: #c0392b;
	}
	:global(.app[data-tema='editorial']) .nav-desktop a:hover { color: #c0392b; }
	:global(.app[data-tema='editorial']) .btn-emergencia-nav {
		background: #1a1a1a;
		border-radius: 0;
	}
	:global(.app[data-tema='editorial']) .btn-emergencia-nav:hover { background: #c0392b !important; }
	:global(.app[data-tema='editorial']) footer {
		background: #fdfcf8;
		border-top: 2px solid #1a1a1a;
		color: #333;
		margin-top: 5rem;
	}
	:global(.app[data-tema='editorial']) .footer-logo {
		font-family: 'Playfair Display', Georgia, serif;
		color: #1a1a1a;
		letter-spacing: 0.05em;
	}
	:global(.app[data-tema='editorial']) .footer-links a { color: #333; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.78rem; }
	:global(.app[data-tema='editorial']) .footer-links a:hover { color: #c0392b; }
	:global(.app[data-tema='editorial']) .footer-note { color: #555; }
	:global(.app[data-tema='editorial']) .footer-note a { color: #333; }
	:global(.app[data-tema='editorial']) .footer-note a:hover { color: #c0392b; }

	/* ───── TEMA BRUTALIST (3.º até secundário) ───── */
	:global(.app[data-tema='brutalist']) {
		background: #FFF8E7;
		color: #000;
	}
	:global(.app[data-tema='brutalist']) header {
		background: #FFF8E7;
		border-bottom: 3px solid #000;
	}
	:global(.app[data-tema='brutalist']) .logo {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		color: #000;
		text-transform: uppercase;
		font-size: 1.1rem;
		letter-spacing: 0.02em;
	}
	:global(.app[data-tema='brutalist']) .nav-desktop a {
		color: #000;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.85rem;
		letter-spacing: 0.05em;
	}
	:global(.app[data-tema='brutalist']) .nav-desktop a.atual,
	:global(.app[data-tema='brutalist']) .nav-desktop a:hover {
		background: #FFE066;
		color: #000;
		padding: 0.25rem 0.6rem;
		margin: 0 -0.2rem;
		border: 2px solid #000;
	}
	:global(.app[data-tema='brutalist']) .btn-emergencia-nav {
		background: #FF6B6B;
		color: #000 !important;
		border: 2px solid #000;
		border-radius: 0;
		box-shadow: 3px 3px 0 #000;
		font-weight: 800 !important;
	}
	:global(.app[data-tema='brutalist']) .btn-emergencia-nav:hover {
		background: #FF6B6B !important;
		transform: translate(1px, 1px);
		box-shadow: 2px 2px 0 #000;
	}
	:global(.app[data-tema='brutalist']) .a11y-btn {
		border: 2px solid #000;
		border-radius: 0;
		color: #000;
		font-weight: 800;
	}
	:global(.app[data-tema='brutalist']) .a11y-btn:hover { background: #FFE066; color: #000; border-color: #000; }
	:global(.app[data-tema='brutalist']) .a11y-btn.ativo { background: #000; border-color: #000; color: #FFE066; }
	:global(.app[data-tema='brutalist']) .hamburger {
		border: 2px solid #000;
		border-radius: 0;
		color: #000;
		font-weight: 800;
	}
	:global(.app[data-tema='brutalist']) footer {
		background: #000;
		color: #FFE066;
		border-top: 4px solid #FFE066;
		margin-top: 4rem;
	}
	:global(.app[data-tema='brutalist']) .footer-logo {
		color: #FFE066;
		text-transform: uppercase;
	}
	:global(.app[data-tema='brutalist']) .footer-links a {
		color: #fff;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.05em;
	}
	:global(.app[data-tema='brutalist']) .footer-links a:hover { color: #FFE066; }
	:global(.app[data-tema='brutalist']) .footer-note { color: #aaa; }
	:global(.app[data-tema='brutalist']) .footer-note a { color: #FFE066; }
</style>
