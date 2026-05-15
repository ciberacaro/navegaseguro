<script>
	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="NavegaSeguro — Plataforma de sensibilização para cibersegurança adaptada a cada faixa etária" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

<nav>
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

{@render children()}

<footer>
	<div class="footer-inner">
		<p class="footer-logo">🛡️ NavegaSeguro</p>
		<p>Conteúdo gratuito e sem fins lucrativos, em língua portuguesa.</p>
		<div class="footer-links">
			<a href="/checklist">Checklist</a>
			<a href="/quiz-completo">Quiz</a>
			<a href="/educadores">Educadores</a>
			<a href="/contacto">Parcerias</a>
			<a href="/sobre">Sobre</a>
			<a href="/recursos">Recursos</a>
			<a href="/glossario">Glossário</a>
		</div>
		<p class="footer-note">Parceria com CNCS · SeguraNet · GNR · Linha Internet Segura 800 21 90 90</p>
	</div>
</footer>

<style>
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
	}
</style>
