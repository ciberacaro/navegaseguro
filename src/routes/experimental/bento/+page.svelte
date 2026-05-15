<script>
	import { grupos, alerta } from '$lib/grupos.js';
</script>

<svelte:head>
	<title>Bento — NavegaSeguro</title>
</svelte:head>

<div class="page">
	<nav class="topbar">
		<a href="/experimental" class="voltar">← Alternativas</a>
		<span class="badge-exp">Pré-visualização · Bento</span>
	</nav>

	<header class="hero">
		<span class="kicker">🇵🇹 · Gratuito · Sem publicidade</span>
		<h1>
			Navega na internet<br />
			<span class="grad">com segurança.</span>
		</h1>
		<p class="lead">Conteúdo de cibersegurança adaptado à tua faixa etária — para crianças, jovens, adultos e seniores.</p>
		<div class="acoes">
			<a href="#faixas" class="cta">Escolher faixa etária</a>
			<a href="/ferramentas" class="cta-ghost">Ver ferramentas →</a>
		</div>
	</header>

	<section class="bento">
		<a href="/emergencia" class="cell cell-alerta">
			<span class="alerta-tag">{alerta.nivel}</span>
			<h3>{alerta.titulo}</h3>
			<p>{alerta.resumo}</p>
			<span class="link-arrow">Ver detalhes →</span>
		</a>

		<a href="/noticias" class="cell cell-noticias">
			<span class="cell-icon">📰</span>
			<h3>Notícias</h3>
			<p>Alertas curados a partir do CNCS, PJ e CMVM.</p>
		</a>

		<a href="/ferramentas" class="cell cell-ferramentas">
			<div>
				<span class="cell-icon">🛠️</span>
				<h3>Ferramentas</h3>
				<p>Simulador de fraudes · verificador de passwords · gerador por frase</p>
			</div>
			<div class="tools-preview" aria-hidden="true">
				<span>🎯</span><span>🔑</span><span>💡</span><span>📋</span>
			</div>
		</a>

		<a href="/checklist" class="cell cell-checklist">
			<span class="cell-icon">✅</span>
			<h3>Checklist</h3>
			<p>10 perguntas com recomendações personalizadas.</p>
		</a>

		<a href="/arquivo" class="cell cell-arquivo">
			<span class="cell-icon">📁</span>
			<h3>30 casos reais</h3>
			<p>Burlas documentadas em Portugal, com filtros.</p>
		</a>
	</section>

	<section class="faixas-secao" id="faixas">
		<div class="secao-cabec">
			<h2>Para quem é o NavegaSeguro?</h2>
			<p>Escolhe o teu grupo etário.</p>
		</div>
		<div class="faixas-grid">
			{#each grupos as g}
				<a href={g.href} class="faixa" style="--cor: {g.cor}; --fundo: {g.fundo}">
					<span class="faixa-emoji">{g.emoji}</span>
					<div>
						<h3>{g.titulo}</h3>
						<span class="faixa-idades">{g.idades} anos</span>
					</div>
					<p>{g.desc}</p>
					<span class="faixa-arrow" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.page {
		--bg: #fafafa;
		--fg: #0a0a0a;
		--muted: #555;
		--card: #fff;
		--border: #ececec;
		background: var(--bg);
		color: var(--fg);
		min-height: 100vh;
		font-family: 'Inter', sans-serif;
	}

	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	.voltar { font-size: 0.85rem; color: var(--muted); }
	.voltar:hover { color: var(--fg); }
	.badge-exp {
		background: #1a1a2e;
		color: #fff;
		font-size: 0.72rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
	}

	.hero {
		max-width: 1200px;
		margin: 2rem auto 3rem;
		padding: 0 1.5rem;
		text-align: center;
	}
	.kicker {
		display: inline-block;
		background: #fff;
		border: 1px solid var(--border);
		font-size: 0.82rem;
		color: var(--muted);
		padding: 0.4rem 1rem;
		border-radius: 999px;
		margin-bottom: 1.5rem;
	}
	.hero h1 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
	}
	.grad {
		background: linear-gradient(135deg, #0984E3 0%, #1DD1A1 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.lead {
		font-size: 1.1rem;
		color: var(--muted);
		max-width: 580px;
		margin: 0 auto 2rem;
		line-height: 1.55;
	}
	.acoes { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
	.cta {
		background: #0a0a0a;
		color: #fff;
		padding: 0.9rem 1.75rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: transform 0.15s;
	}
	.cta:hover { transform: translateY(-2px); }
	.cta:focus-visible { outline: 3px solid #0984E3; outline-offset: 3px; }
	.cta-ghost {
		background: #fff;
		color: #0a0a0a;
		border: 1px solid var(--border);
		padding: 0.9rem 1.75rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
	}
	.cta-ghost:hover { border-color: #0a0a0a; }
	.cta-ghost:focus-visible { outline: 3px solid #0984E3; outline-offset: 3px; }

	.bento {
		max-width: 1200px;
		margin: 0 auto 4rem;
		padding: 0 1.5rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(140px, auto);
		gap: 1rem;
	}
	.cell {
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
	}
	.cell:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.06); }
	.cell:focus-visible { outline: 3px solid #0984E3; outline-offset: 3px; }
	.cell h3 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.1rem; }
	.cell p { color: var(--muted); font-size: 0.88rem; line-height: 1.5; }
	.cell-icon { font-size: 1.75rem; }

	.cell-alerta {
		grid-column: span 2;
		grid-row: span 2;
		background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
		border-color: #FFD0D0;
	}
	.alerta-tag {
		display: inline-block;
		background: #FF6B6B;
		color: #fff;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.25rem 0.7rem;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		width: fit-content;
		margin-bottom: 0.5rem;
	}
	.cell-alerta h3 { font-size: 1.5rem; line-height: 1.25; color: #1a1a2e; }
	.cell-alerta p { font-size: 0.95rem; }
	.link-arrow { margin-top: auto; font-weight: 600; color: #c0392b; font-size: 0.9rem; }

	.cell-ferramentas { grid-column: span 2; }
	.tools-preview { display: flex; gap: 0.75rem; font-size: 2rem; margin-top: auto; }

	.cell-noticias { background: linear-gradient(135deg, #F0F7FF 0%, #E0EFFF 100%); border-color: #C5DCFF; }
	.cell-checklist { background: linear-gradient(135deg, #F0FFF4 0%, #E0F8E8 100%); border-color: #C0E8CC; }
	.cell-arquivo { background: linear-gradient(135deg, #FFF8F0 0%, #FFE8D0 100%); border-color: #FFD8B0; }

	.faixas-secao { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem 5rem; }
	.secao-cabec { margin-bottom: 2rem; }
	.secao-cabec h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 2rem;
		letter-spacing: -0.02em;
		margin-bottom: 0.4rem;
	}
	.secao-cabec p { color: var(--muted); font-size: 1rem; }

	.faixas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
	.faixa {
		background: var(--fundo);
		border: 1px solid transparent;
		border-radius: 1.25rem;
		padding: 1.5rem;
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.4rem 1rem;
		align-items: center;
		transition: transform 0.2s, border-color 0.2s;
	}
	.faixa:hover { transform: translateY(-3px); border-color: var(--cor); }
	.faixa:focus-visible { outline: 3px solid var(--cor); outline-offset: 3px; }
	.faixa-emoji { font-size: 2.5rem; grid-row: 1 / 3; }
	.faixa h3 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.15rem; color: var(--cor); }
	.faixa-idades { font-size: 0.78rem; color: var(--muted); font-weight: 600; }
	.faixa p { grid-column: 1 / -1; color: #333; font-size: 0.88rem; line-height: 1.5; }
	.faixa-arrow {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 1.25rem;
		color: var(--cor);
		opacity: 0.6;
		transition: transform 0.2s, opacity 0.2s;
	}
	.faixa:hover .faixa-arrow { opacity: 1; transform: translateX(4px); }

	@media (max-width: 900px) {
		.bento { grid-template-columns: repeat(2, 1fr); }
		.cell-alerta, .cell-ferramentas { grid-column: span 2; }
	}
	@media (max-width: 500px) {
		.bento { grid-template-columns: 1fr; }
		.cell-alerta, .cell-ferramentas { grid-column: span 1; grid-row: auto; }
	}
</style>
