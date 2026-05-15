<script>
	import { browser } from '$app/environment';

	let { children } = $props();

	let altoContraste = $state(false);
	let tamanhoLetra = $state('normal'); // 'normal' | 'grande' | 'muitogrande'

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

	function cicloLetra() {
		tamanhoLetra = tamanhoLetra === 'normal' ? 'grande' : tamanhoLetra === 'grande' ? 'muitogrande' : 'normal';
	}

	const legendaLetra = { normal: 'A', grande: 'A+', muitogrande: 'A++' };
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="NavegaSeguro — Plataforma de sensibilização para cibersegurança adaptada a cada faixa etária" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

<a href="#conteudo-principal" class="saltar-conteudo">Saltar para o conteúdo</a>

<div class="barra-acessibilidade" role="toolbar" aria-label="Opções de acessibilidade">
	<span class="a11y-label">Acessibilidade:</span>
	<button
		class="a11y-btn"
		class:ativo={tamanhoLetra !== 'normal'}
		onclick={cicloLetra}
		aria-label="Tamanho da letra: {legendaLetra[tamanhoLetra]}"
		title="Alterar tamanho da letra"
	>{legendaLetra[tamanhoLetra]}</button>
	<button
		class="a11y-btn"
		class:ativo={altoContraste}
		onclick={() => altoContraste = !altoContraste}
		aria-pressed={altoContraste}
		aria-label="Alto contraste {altoContraste ? 'ativado' : 'desativado'}"
		title="Alternar alto contraste"
	>◑</button>
</div>

<nav aria-label="Navegação principal">
	<a href="/" class="logo">🛡️ NavegaSeguro</a>
	<div class="nav-links">
		<a href="/checklist">Checklist</a>
		<a href="/quiz-completo">Quiz</a>
		<a href="/educadores">Educadores</a>
		<a href="/glossario">Glossário</a>
		<a href="/recursos">Recursos</a>
		<a href="/sobre">Sobre</a>
	</div>
</nav>

<div id="conteudo-principal">
	{@render children()}
</div>

<footer>
	<div class="footer-inner">
		<p class="footer-logo">🛡️ NavegaSeguro</p>
		<p>Conteúdo gratuito e sem fins lucrativos, em língua portuguesa.</p>
		<nav aria-label="Navegação de rodapé">
			<div class="footer-links">
				<a href="/checklist">Checklist</a>
				<a href="/quiz-completo">Quiz</a>
				<a href="/educadores">Educadores</a>
				<a href="/contacto">Parcerias</a>
				<a href="/sobre">Sobre</a>
				<a href="/recursos">Recursos</a>
				<a href="/glossario">Glossário</a>
			</div>
		</nav>
		<p class="footer-note">Parceria com CNCS · SeguraNet · GNR · Linha Internet Segura 800 21 90 90</p>
	</div>
</footer>

<style>
	/* ── Reset ── */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		background: #f8faff;
		color: #1a1a2e;
		line-height: 1.6;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(h1, h2, h3) {
		line-height: 1.2;
	}

	/* ── Foco visível — obrigatório para navegação por teclado ── */
	:global(:focus-visible) {
		outline: 3px solid #0984E3;
		outline-offset: 3px;
		border-radius: 3px;
	}

	/* ── Tamanho de letra ── */
	:global([data-letra='grande']) {
		font-size: 112%;
	}
	:global([data-letra='muitogrande']) {
		font-size: 125%;
	}

	/* ── Alto contraste ── */
	:global(.alto-contraste) {
		filter: contrast(1.5) saturate(0.8);
	}
	:global(.alto-contraste body) {
		background: #fff;
		color: #000;
	}

	/* ── Saltar para conteúdo ── */
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
		transition: top 0.2s;
	}
	.saltar-conteudo:focus {
		top: 0;
	}

	/* ── Barra de acessibilidade ── */
	.barra-acessibilidade {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: #1a1a2e;
		padding: 0.3rem 1.5rem;
		justify-content: flex-end;
	}

	.a11y-label {
		font-size: 0.75rem;
		color: #aaa;
		margin-right: 0.25rem;
	}

	.a11y-btn {
		background: transparent;
		border: 1px solid #444;
		color: #ccc;
		border-radius: 4px;
		padding: 0.2rem 0.6rem;
		font-size: 0.8rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
		line-height: 1.4;
	}
	.a11y-btn:hover {
		background: #333;
		color: #fff;
	}
	.a11y-btn.ativo {
		background: #0984E3;
		border-color: #0984E3;
		color: #fff;
	}

	/* ── Nav ── */
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0,0,0,0.08);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.logo {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1.25rem;
		color: #1a1a2e;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
	}

	.nav-links a {
		font-size: 0.9rem;
		font-weight: 500;
		color: #555;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: #1a1a2e;
	}

	/* ── Footer ── */
	footer {
		background: #1a1a2e;
		color: #ccc;
		padding: 3rem 2rem;
		margin-top: 4rem;
		text-align: center;
	}

	.footer-inner {
		max-width: 700px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-logo {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1.1rem;
		color: #fff;
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.footer-links a {
		color: #aaa;
		font-size: 0.85rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #fff;
	}

	.footer-note {
		font-size: 0.8rem;
		color: #888;
	}

	@media (max-width: 600px) {
		nav {
			padding: 1rem;
		}
		.nav-links {
			gap: 1rem;
		}
		.barra-acessibilidade {
			padding: 0.3rem 1rem;
		}
	}
</style>
