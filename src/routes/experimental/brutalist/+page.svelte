<script>
	import { grupos, alerta } from '$lib/grupos.js';
</script>

<svelte:head>
	<title>Brutalist — NavegaSeguro</title>
</svelte:head>

<div class="page">
	<nav class="topbar">
		<a href="/experimental" class="voltar">← VOLTAR</a>
		<span class="badge-exp">PREVIEW · BRUTALIST</span>
	</nav>

	<header class="hero">
		<div class="hero-inner">
			<div class="hero-tag">🇵🇹 SEM PUBLICIDADE · GRÁTIS</div>
			<h1>
				NAVEGA<br/>
				NA INTERNET<br/>
				<span class="grifo">COM SEGURANÇA!</span>
			</h1>
			<p class="lead">Cibersegurança adaptada à tua faixa etária — dos 3 aos 60+ anos. Em português, sem complicações.</p>
			<div class="ctas">
				<a href="#faixas" class="btn btn-amarelo">COMEÇAR →</a>
				<a href="/ferramentas" class="btn btn-branco">VER FERRAMENTAS</a>
			</div>
		</div>
		<div class="hero-deco" aria-hidden="true">
			<div class="shape sq1"></div>
			<div class="shape sq2"></div>
			<div class="shape circle"></div>
		</div>
	</header>

	<section class="alerta">
		<div class="alerta-wrap">
			<span class="alerta-badge">⚠ {alerta.nivel}</span>
			<h2>{alerta.titulo}</h2>
			<p>{alerta.resumo}</p>
			<a href="/noticias" class="btn btn-preto">Ler todos os alertas →</a>
		</div>
	</section>

	<section class="faixas-secao" id="faixas">
		<h2 class="secao-h">ESCOLHE A TUA FAIXA.</h2>
		<div class="faixas-grid">
			{#each grupos as g, i}
				<a href={g.href} class="faixa-card" style="--cor: {g.cor}">
					<span class="faixa-emoji">{g.emoji}</span>
					<h3>{g.titulo}</h3>
					<span class="faixa-idades">{g.idades} ANOS</span>
					<p>{g.desc}</p>
					<span class="faixa-arrow" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</section>

	<section class="ferramentas-secao">
		<h2 class="secao-h">FERRAMENTAS RÁPIDAS</h2>
		<div class="ferramentas-grid">
			<a href="/ferramentas" class="ferr-card" style="--cor: #FFE066">
				<span>🎯</span>
				<h3>Simulador de Fraude</h3>
				<p>Clica nas partes suspeitas. Aprende a reconhecer.</p>
			</a>
			<a href="/checklist" class="ferr-card" style="--cor: #95E1D3">
				<span>✅</span>
				<h3>Checklist</h3>
				<p>10 perguntas. Recomendações personalizadas.</p>
			</a>
			<a href="/arquivo" class="ferr-card" style="--cor: #FF8B94">
				<span>📁</span>
				<h3>30 Casos Reais</h3>
				<p>Burlas documentadas em Portugal.</p>
			</a>
			<a href="/faq" class="ferr-card" style="--cor: #C8B6FF">
				<span>❓</span>
				<h3>FAQ</h3>
				<p>15 dúvidas comuns, com respostas claras.</p>
			</a>
		</div>
	</section>

	<aside class="emergencia">
		<div class="emerg-inner">
			<span aria-hidden="true">🚨</span>
			<div>
				<strong>ESTÁ A SER BURLADO AGORA?</strong>
				<p>Liga 800 21 90 90 ou clica abaixo.</p>
			</div>
			<a href="/emergencia" class="btn btn-vermelho">O QUE FAZER →</a>
		</div>
	</aside>
</div>

<style>
	.page {
		background: #FFF8E7;
		color: #000;
		min-height: 100vh;
		font-family: 'Inter', sans-serif;
	}

	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		border-bottom: 3px solid #000;
		max-width: 1300px;
		margin: 0 auto;
		font-weight: 800;
		font-size: 0.82rem;
	}
	.voltar { color: #000; }
	.badge-exp {
		background: #000;
		color: #FFE066;
		padding: 0.3rem 0.75rem;
		letter-spacing: 0.1em;
	}

	.hero {
		max-width: 1300px;
		margin: 0 auto;
		padding: 3rem 1.5rem 4rem;
		position: relative;
		overflow: hidden;
	}
	.hero-inner { position: relative; z-index: 2; max-width: 800px; }
	.hero-tag {
		display: inline-block;
		background: #000;
		color: #fff;
		font-weight: 800;
		font-size: 0.82rem;
		padding: 0.4rem 0.9rem;
		letter-spacing: 0.1em;
		margin-bottom: 1.5rem;
		transform: rotate(-1deg);
	}
	.hero h1 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: clamp(2.5rem, 9vw, 6.5rem);
		line-height: 0.95;
		letter-spacing: -0.04em;
		margin-bottom: 1.5rem;
		text-transform: uppercase;
	}
	.grifo {
		display: inline-block;
		background: #FFE066;
		color: #000;
		padding: 0 0.3em;
		border: 4px solid #000;
		box-shadow: 8px 8px 0 #000;
		transform: rotate(-1.5deg);
	}
	.lead { font-size: 1.15rem; line-height: 1.5; font-weight: 500; max-width: 580px; margin-bottom: 2rem; }

	.ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
	.btn {
		display: inline-block;
		font-family: inherit;
		font-weight: 800;
		font-size: 0.95rem;
		padding: 0.85rem 1.5rem;
		border: 3px solid #000;
		box-shadow: 6px 6px 0 #000;
		transition: transform 0.1s, box-shadow 0.1s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		cursor: pointer;
	}
	.btn:hover { transform: translate(2px, 2px); box-shadow: 4px 4px 0 #000; }
	.btn:active { transform: translate(6px, 6px); box-shadow: 0 0 0 #000; }
	.btn:focus-visible { outline: 4px solid #0984E3; outline-offset: 4px; }

	.btn-amarelo { background: #FFE066; color: #000; }
	.btn-branco { background: #fff; color: #000; }
	.btn-preto { background: #000; color: #FFE066; }
	.btn-vermelho { background: #FF6B6B; color: #000; }

	.hero-deco { position: absolute; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none; }
	.shape { position: absolute; border: 3px solid #000; }
	.sq1 { top: 8%; right: 8%; width: 80px; height: 80px; background: #FF6B6B; box-shadow: 6px 6px 0 #000; transform: rotate(15deg); }
	.sq2 { bottom: 12%; right: 25%; width: 50px; height: 50px; background: #48DBFB; box-shadow: 4px 4px 0 #000; transform: rotate(-10deg); }
	.circle { top: 35%; right: 15%; width: 60px; height: 60px; background: #1DD1A1; border-radius: 50%; box-shadow: 5px 5px 0 #000; }

	.alerta { padding: 0 1.5rem 4rem; max-width: 1300px; margin: 0 auto; }
	.alerta-wrap {
		background: #FF6B6B;
		border: 4px solid #000;
		box-shadow: 10px 10px 0 #000;
		padding: 2rem;
	}
	.alerta-badge {
		display: inline-block;
		background: #000;
		color: #FFE066;
		font-weight: 900;
		font-size: 0.82rem;
		padding: 0.3rem 0.8rem;
		margin-bottom: 1rem;
		letter-spacing: 0.1em;
	}
	.alerta-wrap h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: clamp(1.4rem, 3vw, 2rem);
		line-height: 1.15;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
	}
	.alerta-wrap p { font-size: 1rem; line-height: 1.55; margin-bottom: 1.25rem; max-width: 700px; font-weight: 500; }

	.faixas-secao { padding: 0 1.5rem 4rem; max-width: 1300px; margin: 0 auto; }
	.secao-h {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		letter-spacing: -0.02em;
		margin-bottom: 2rem;
		text-transform: uppercase;
	}

	.faixas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.5rem;
	}
	.faixa-card {
		background: var(--cor);
		border: 3px solid #000;
		box-shadow: 6px 6px 0 #000;
		padding: 1.25rem;
		position: relative;
		color: #000;
		transition: transform 0.1s, box-shadow 0.1s;
	}
	.faixa-card:hover { transform: translate(3px, 3px); box-shadow: 3px 3px 0 #000; }
	.faixa-card:focus-visible { outline: 4px solid #000; outline-offset: 4px; }
	.faixa-emoji { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
	.faixa-card h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1.25rem;
		text-transform: uppercase;
		letter-spacing: -0.01em;
		margin-bottom: 0.15rem;
	}
	.faixa-idades {
		display: inline-block;
		background: #000;
		color: #fff;
		font-size: 0.7rem;
		font-weight: 800;
		padding: 0.15rem 0.5rem;
		margin-bottom: 0.5rem;
		letter-spacing: 0.1em;
	}
	.faixa-card p { font-size: 0.9rem; line-height: 1.5; font-weight: 500; }
	.faixa-arrow {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		font-size: 1.5rem;
		font-weight: 900;
	}

	.ferramentas-secao { padding: 0 1.5rem 4rem; max-width: 1300px; margin: 0 auto; }
	.ferramentas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}
	.ferr-card {
		background: var(--cor);
		border: 3px solid #000;
		box-shadow: 5px 5px 0 #000;
		padding: 1.25rem;
		color: #000;
		transition: transform 0.1s, box-shadow 0.1s;
	}
	.ferr-card:hover { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #000; }
	.ferr-card:focus-visible { outline: 4px solid #000; outline-offset: 4px; }
	.ferr-card span { font-size: 1.75rem; display: block; margin-bottom: 0.35rem; }
	.ferr-card h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1.05rem;
		text-transform: uppercase;
		margin-bottom: 0.3rem;
	}
	.ferr-card p { font-size: 0.88rem; line-height: 1.45; font-weight: 500; }

	.emergencia {
		background: #000;
		padding: 2rem 1.5rem;
	}
	.emerg-inner {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		gap: 1.5rem;
		align-items: center;
		flex-wrap: wrap;
		color: #fff;
	}
	.emerg-inner > span { font-size: 2.5rem; }
	.emerg-inner > div { flex: 1; min-width: 200px; }
	.emerg-inner strong { font-family: 'Nunito', sans-serif; font-size: 1.2rem; font-weight: 900; display: block; margin-bottom: 0.2rem; letter-spacing: 0.02em; }
	.emerg-inner p { font-size: 0.92rem; opacity: 0.85; }

	@media (max-width: 600px) {
		.hero-deco { display: none; }
	}
</style>
