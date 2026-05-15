<svelte:head>
	<title>Pré-visualização de designs — NavegaSeguro</title>
</svelte:head>

<main>
	<header>
		<a href="/" class="voltar">← Voltar à homepage atual</a>
		<h1>4 alternativas de design</h1>
		<p>Cada link abre uma versão completa da homepage num estilo diferente. O design atual continua intacto e é a referência para comparar.</p>
	</header>

	<ul>
		<li>
			<a href="/experimental/bento">
				<span class="num">01</span>
				<div>
					<strong>Bento grid</strong>
					<p>Cards de tamanhos diferentes, tipografia generosa, paleta suave. Estilo Apple/Vercel.</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/experimental/editorial">
				<span class="num">02</span>
				<div>
					<strong>Editorial / Revista</strong>
					<p>Manchetes serif grandes, layout assimétrico, autoridade jornalística.</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/experimental/brutalist">
				<span class="num">03</span>
				<div>
					<strong>Neo-brutalist</strong>
					<p>Bordas pretas grossas, cores saturadas, sombras offset. Memorável e divertido.</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/experimental/dark">
				<span class="num">04</span>
				<div>
					<strong>Cibernético / Dark</strong>
					<p>Modo escuro, acentos neon, estética cybersec. Atenção: requer cuidado de acessibilidade.</p>
				</div>
			</a>
		</li>
	</ul>

	<p class="nota">Nenhuma destas páginas substitui o site atual — são apenas pilotos para comparar. Depois de escolheres, aplico o estilo a todo o site, mantendo WCAG 2.1 AA.</p>
</main>

<style>
	main { max-width: 720px; margin: 0 auto; padding: 3rem 1.5rem; }
	.voltar { font-size: 0.85rem; color: #555; }
	.voltar:hover { color: #1a1a2e; }
	header { margin-bottom: 2.5rem; }
	h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin: 1rem 0 0.5rem; }
	header p { color: #555; line-height: 1.6; }

	ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
	li a {
		display: flex;
		gap: 1.25rem;
		align-items: center;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.875rem;
		padding: 1.25rem;
		transition: border-color 0.15s, box-shadow 0.15s;
	}
	li a:hover { border-color: #0984E3; box-shadow: 0 4px 16px rgba(9,132,227,0.1); }
	li a:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.num {
		font-family: 'Nunito', sans-serif;
		font-size: 1.75rem;
		font-weight: 900;
		color: #ccc;
		min-width: 3rem;
	}
	strong { display: block; font-size: 1.05rem; color: #1a1a2e; margin-bottom: 0.2rem; }
	li p { font-size: 0.9rem; color: #555; line-height: 1.5; margin: 0; }

	.nota { margin-top: 2rem; font-size: 0.85rem; color: #777; line-height: 1.6; font-style: italic; }
</style>
