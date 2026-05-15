<script>
	import { grupos, alerta } from '$lib/grupos.js';
</script>

<svelte:head>
	<title>Dark — NavegaSeguro</title>
</svelte:head>

<div class="page">
	<nav class="topbar">
		<a href="/experimental" class="voltar">← alternativas</a>
		<span class="brand">[ <strong>NAVEGA</strong>SEGURO ]<span class="cursor">_</span></span>
		<span class="status">
			<span class="dot" aria-hidden="true"></span>
			<span>online</span>
		</span>
	</nav>

	<div class="grid-bg" aria-hidden="true"></div>

	<header class="hero">
		<div class="hero-inner">
			<span class="terminal-line">// portuguese.cybersec.platform · v2.6</span>
			<h1>
				<span class="bracket">[</span>NAVEGA<br />
				<span class="glow">SEGURO</span><span class="bracket">]</span>
			</h1>
			<p class="tagline">
				<span class="arrow">▸</span> cibersegurança em portugal, para todas as idades
			</p>
			<p class="lead">
				Recurso gratuito, sem publicidade nem recolha de dados. Conteúdo adaptado dos 3 aos 60+ anos.
			</p>
			<div class="ctas">
				<a href="#faixas" class="btn btn-neon">
					<span>▶</span> iniciar
				</a>
				<a href="/ferramentas" class="btn btn-ghost">ferramentas →</a>
			</div>

			<div class="stats">
				<div><strong>30</strong><span>casos<br/>documentados</span></div>
				<div><strong>7</strong><span>faixas<br/>etárias</span></div>
				<div><strong>0€</strong><span>sempre<br/>gratuito</span></div>
			</div>
		</div>
	</header>

	<section class="alerta">
		<div class="alerta-card">
			<div class="alerta-cab">
				<span class="alerta-tag"><span class="pulse" aria-hidden="true"></span> {alerta.nivel}</span>
				<span class="alerta-tag2">#{alerta.tag}</span>
			</div>
			<h2>{alerta.titulo}</h2>
			<p>{alerta.resumo}</p>
			<a href="/noticias" class="ler-mais">ler análise completa  →</a>
		</div>
	</section>

	<section class="faixas" id="faixas">
		<div class="rule"><span>// faixas etárias</span></div>
		<div class="faixas-grid">
			{#each grupos as g, i}
				<a href={g.href} class="faixa" style="--cor: {g.cor}">
					<div class="faixa-num">{String(i + 1).padStart(2, '0')}</div>
					<div class="faixa-emoji" aria-hidden="true">{g.emoji}</div>
					<h3>{g.titulo}</h3>
					<span class="faixa-idades">{g.idades} anos</span>
					<p>{g.desc}</p>
					<div class="faixa-link">acesso →</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="modulos">
		<div class="rule"><span>// módulos</span></div>
		<div class="modulos-grid">
			<a href="/ferramentas" class="modulo">
				<span class="mod-num">/01</span>
				<h4>ferramentas</h4>
				<p>simulador · verificador · gerador</p>
			</a>
			<a href="/noticias" class="modulo">
				<span class="mod-num">/02</span>
				<h4>notícias</h4>
				<p>alertas curados</p>
			</a>
			<a href="/arquivo" class="modulo">
				<span class="mod-num">/03</span>
				<h4>arquivo</h4>
				<p>casos reais</p>
			</a>
			<a href="/faq" class="modulo">
				<span class="mod-num">/04</span>
				<h4>faq</h4>
				<p>perguntas frequentes</p>
			</a>
			<a href="/educadores" class="modulo">
				<span class="mod-num">/05</span>
				<h4>educadores</h4>
				<p>planos e fichas</p>
			</a>
			<a href="/glossario" class="modulo">
				<span class="mod-num">/06</span>
				<h4>glossário</h4>
				<p>termos técnicos</p>
			</a>
		</div>
	</section>

	<aside class="emergencia">
		<div class="emerg-inner">
			<span class="dot-vermelho" aria-hidden="true"></span>
			<strong>SOS:</strong>
			<span>está a ser burlado agora?</span>
			<a href="/emergencia">→ /emergencia</a>
			<a href="tel:800219090">→ 800 21 90 90</a>
		</div>
	</aside>
</div>

<style>
	.page {
		background: #0a0a14;
		color: #e0e0e0;
		min-height: 100vh;
		font-family: 'Inter', sans-serif;
		position: relative;
		overflow-x: hidden;
	}

	.grid-bg {
		position: fixed;
		inset: 0;
		background-image:
			linear-gradient(rgba(72,219,251,0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(72,219,251,0.04) 1px, transparent 1px);
		background-size: 40px 40px;
		pointer-events: none;
		z-index: 0;
	}

	.topbar {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		max-width: 1300px;
		margin: 0 auto;
		font-size: 0.82rem;
		border-bottom: 1px solid rgba(72,219,251,0.15);
	}
	.voltar { color: #888; font-family: 'JetBrains Mono', monospace; }
	.voltar:hover { color: #48DBFB; }
	.brand {
		font-family: 'JetBrains Mono', monospace;
		color: #48DBFB;
		font-size: 0.9rem;
	}
	.brand strong { color: #fff; font-weight: 800; }
	.cursor { animation: blink 1s steps(2, end) infinite; }
	@keyframes blink { 50% { opacity: 0; } }
	.status { display: flex; align-items: center; gap: 0.4rem; color: #888; font-family: 'JetBrains Mono', monospace; }
	.dot { width: 8px; height: 8px; border-radius: 50%; background: #00ff88; box-shadow: 0 0 8px #00ff88; }

	.hero {
		position: relative;
		z-index: 1;
		max-width: 1100px;
		margin: 0 auto;
		padding: 5rem 1.5rem 4rem;
	}
	.hero-inner { max-width: 760px; }
	.terminal-line {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
		color: #00ff88;
		opacity: 0.7;
		margin-bottom: 1.5rem;
		display: block;
	}
	.hero h1 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: clamp(3rem, 10vw, 7rem);
		line-height: 0.95;
		letter-spacing: -0.04em;
		color: #fff;
		margin-bottom: 1.5rem;
	}
	.bracket { color: #48DBFB; opacity: 0.5; }
	.glow {
		background: linear-gradient(135deg, #48DBFB 0%, #00ff88 50%, #48DBFB 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-shadow: 0 0 80px rgba(72,219,251,0.3);
	}

	.tagline {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.95rem;
		color: #48DBFB;
		margin-bottom: 1rem;
	}
	.arrow { color: #00ff88; }
	.lead { font-size: 1.05rem; line-height: 1.6; color: #b0b0c0; max-width: 580px; margin-bottom: 2rem; }

	.ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 3rem; }
	.btn {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 600;
		font-size: 0.9rem;
		padding: 0.85rem 1.5rem;
		border-radius: 0;
		transition: all 0.2s;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	.btn-neon {
		background: #00ff88;
		color: #0a0a14;
		border: 1px solid #00ff88;
		box-shadow: 0 0 20px rgba(0,255,136,0.4);
	}
	.btn-neon:hover { box-shadow: 0 0 32px rgba(0,255,136,0.6); transform: translateY(-2px); }
	.btn-neon:focus-visible { outline: 3px solid #48DBFB; outline-offset: 3px; }
	.btn-ghost {
		background: transparent;
		color: #e0e0e0;
		border: 1px solid rgba(255,255,255,0.2);
	}
	.btn-ghost:hover { border-color: #48DBFB; color: #48DBFB; }
	.btn-ghost:focus-visible { outline: 3px solid #48DBFB; outline-offset: 3px; }

	.stats {
		display: flex;
		gap: 2.5rem;
		flex-wrap: wrap;
		padding-top: 2rem;
		border-top: 1px solid rgba(72,219,251,0.15);
	}
	.stats div { display: flex; align-items: baseline; gap: 0.75rem; }
	.stats strong {
		font-family: 'Nunito', sans-serif;
		font-size: 2.5rem;
		font-weight: 900;
		color: #48DBFB;
		text-shadow: 0 0 20px rgba(72,219,251,0.3);
	}
	.stats span { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #888; line-height: 1.3; }

	.alerta { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
	.alerta-card {
		background: linear-gradient(135deg, rgba(255,107,107,0.08), rgba(255,107,107,0.02));
		border: 1px solid rgba(255,107,107,0.3);
		border-left: 3px solid #FF6B6B;
		padding: 1.75rem;
		border-radius: 0.5rem;
	}
	.alerta-cab { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
	.alerta-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255,107,107,0.15);
		color: #FFB0B0;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		padding: 0.25rem 0.7rem;
		border: 1px solid rgba(255,107,107,0.3);
	}
	.alerta-tag2 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: #48DBFB;
		padding: 0.25rem 0;
	}
	.pulse { width: 8px; height: 8px; border-radius: 50%; background: #FF6B6B; animation: pulse 1.5s infinite; }
	@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,107,0.7); } 70% { box-shadow: 0 0 0 8px rgba(255,107,107,0); } }

	.alerta-card h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: clamp(1.3rem, 3vw, 1.75rem);
		color: #fff;
		line-height: 1.2;
		margin-bottom: 0.5rem;
	}
	.alerta-card p { color: #b0b0c0; font-size: 0.95rem; line-height: 1.55; margin-bottom: 1rem; max-width: 700px; }
	.ler-mais {
		font-family: 'JetBrains Mono', monospace;
		color: #48DBFB;
		font-size: 0.9rem;
		font-weight: 600;
	}
	.ler-mais:hover { color: #00ff88; }
	.ler-mais:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; }

	.rule { margin-bottom: 1.5rem; }
	.rule span {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.82rem;
		color: #00ff88;
		opacity: 0.7;
	}

	section { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem; }

	.faixas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 0.75rem;
	}
	.faixa {
		background: rgba(255,255,255,0.02);
		border: 1px solid rgba(72,219,251,0.15);
		padding: 1.25rem;
		position: relative;
		transition: all 0.2s;
		color: #e0e0e0;
	}
	.faixa:hover {
		background: rgba(72,219,251,0.05);
		border-color: var(--cor);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 24px color-mix(in srgb, var(--cor) 20%, transparent);
	}
	.faixa:focus-visible { outline: 2px solid var(--cor); outline-offset: 3px; }
	.faixa-num {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: var(--cor);
		opacity: 0.7;
		margin-bottom: 0.5rem;
	}
	.faixa-emoji { font-size: 1.75rem; margin-bottom: 0.4rem; }
	.faixa h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.15rem;
		color: var(--cor);
		margin-bottom: 0.2rem;
	}
	.faixa-idades { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #888; display: block; margin-bottom: 0.6rem; }
	.faixa p { font-size: 0.88rem; color: #b0b0c0; line-height: 1.5; margin-bottom: 1rem; }
	.faixa-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.82rem;
		color: var(--cor);
		opacity: 0.7;
	}
	.faixa:hover .faixa-link { opacity: 1; }

	.modulos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 0;
	}
	.modulo {
		padding: 1.25rem;
		border: 1px solid rgba(72,219,251,0.15);
		margin-left: -1px;
		margin-top: -1px;
		color: #e0e0e0;
		transition: all 0.2s;
	}
	.modulo:hover { background: rgba(72,219,251,0.05); color: #48DBFB; }
	.modulo:focus-visible { outline: 2px solid #48DBFB; outline-offset: -2px; }
	.mod-num { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #00ff88; display: block; margin-bottom: 0.5rem; }
	.modulo h4 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.05rem; margin-bottom: 0.25rem; }
	.modulo p { font-size: 0.82rem; color: #888; }

	.emergencia {
		position: relative;
		z-index: 1;
		background: linear-gradient(90deg, rgba(255,107,107,0.1), transparent);
		border-top: 1px solid rgba(255,107,107,0.3);
		padding: 1.25rem 1.5rem;
		margin-top: 3rem;
	}
	.emerg-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.9rem;
	}
	.dot-vermelho { width: 10px; height: 10px; border-radius: 50%; background: #FF6B6B; box-shadow: 0 0 12px #FF6B6B; }
	.emerg-inner strong { color: #FF6B6B; }
	.emerg-inner span { color: #b0b0c0; }
	.emerg-inner a { color: #48DBFB; }
	.emerg-inner a:hover { color: #00ff88; }
	.emerg-inner a:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; }
</style>
