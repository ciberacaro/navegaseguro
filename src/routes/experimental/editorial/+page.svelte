<script>
	import { grupos, alerta } from '$lib/grupos.js';
</script>

<svelte:head>
	<title>Editorial — NavegaSeguro</title>
</svelte:head>

<div class="page">
	<nav class="topbar">
		<div class="topbar-inner">
			<a href="/experimental" class="voltar">← Alternativas</a>
			<span class="masthead">NAVEGA SEGURO</span>
			<span class="badge-exp">Editorial</span>
		</div>
	</nav>

	<header class="hero">
		<div class="hero-inner">
			<span class="overline">EDIÇÃO #01 · Cibersegurança em Portugal</span>
			<h1>
				Ciberseguran&shy;ça <em>para</em><br />
				todas as idades.
			</h1>
			<p class="standfirst">
				Um recurso português, gratuito e sem publicidade, adaptado a cada faixa etária — dos 3 aos 60+ anos.
			</p>
			<div class="meta-hero">
				<span>30 casos documentados</span>
				<span>·</span>
				<span>7 faixas etárias</span>
				<span>·</span>
				<span>PT-PT</span>
			</div>
		</div>
	</header>

	<section class="destaque">
		<div class="rule"><span>ALERTA DESTA SEMANA</span></div>
		<article class="manchete">
			<span class="kicker-alerta">{alerta.tag}</span>
			<h2><a href="/emergencia">{alerta.titulo}</a></h2>
			<p class="lead">{alerta.resumo}</p>
			<a href="/noticias" class="continuar">Continuar a ler  →</a>
		</article>
	</section>

	<section class="faixas">
		<div class="rule"><span>POR FAIXA ETÁRIA</span></div>
		<ol class="faixas-lista">
			{#each grupos as g, i}
				<li>
					<a href={g.href} class="faixa-link">
						<span class="faixa-numero">{String(i + 1).padStart(2, '0')}</span>
						<div class="faixa-meio">
							<h3>{g.titulo}</h3>
							<p>{g.desc}</p>
						</div>
						<span class="faixa-idades">{g.idades}<br /><span>anos</span></span>
					</a>
				</li>
			{/each}
		</ol>
	</section>

	<section class="secoes">
		<div class="rule"><span>SECÇÕES</span></div>
		<div class="secoes-grid">
			<a href="/ferramentas" class="secao">
				<span class="secao-num">→ 01</span>
				<h4>Ferramentas</h4>
				<p>Simulador, verificador de palavras-passe, gerador por frase.</p>
			</a>
			<a href="/noticias" class="secao">
				<span class="secao-num">→ 02</span>
				<h4>Notícias</h4>
				<p>Alertas curados das entidades oficiais.</p>
			</a>
			<a href="/arquivo" class="secao">
				<span class="secao-num">→ 03</span>
				<h4>Arquivo</h4>
				<p>30 casos reais documentados em Portugal.</p>
			</a>
			<a href="/faq" class="secao">
				<span class="secao-num">→ 04</span>
				<h4>Perguntas frequentes</h4>
				<p>15 dúvidas comuns sobre cibersegurança.</p>
			</a>
			<a href="/educadores" class="secao">
				<span class="secao-num">→ 05</span>
				<h4>Educadores</h4>
				<p>Planos de sessão, fichas e avaliação.</p>
			</a>
			<a href="/glossario" class="secao">
				<span class="secao-num">→ 06</span>
				<h4>Glossário</h4>
				<p>Termos técnicos em linguagem simples.</p>
			</a>
		</div>
	</section>

	<aside class="emergencia">
		<p><strong>Está a ser burlado agora?</strong> <a href="/emergencia">Veja o que fazer →</a> · ou ligue <a href="tel:800219090">800 21 90 90</a></p>
	</aside>
</div>

<style>
	.page {
		background: #fdfcf8;
		color: #1a1a1a;
		min-height: 100vh;
		font-family: 'Inter', sans-serif;
	}

	.topbar {
		border-bottom: 1px solid #1a1a1a;
		padding: 0.75rem 1.5rem;
	}
	.topbar-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.voltar { font-size: 0.82rem; color: #555; }
	.voltar:hover { color: #000; }
	.masthead {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		font-size: 1rem;
		letter-spacing: 0.15em;
	}
	.badge-exp {
		font-size: 0.72rem;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.hero { padding: 5rem 1.5rem 4rem; border-bottom: 2px solid #1a1a1a; }
	.hero-inner { max-width: 1100px; margin: 0 auto; }

	.overline {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #c0392b;
		margin-bottom: 1.5rem;
		display: block;
	}

	.hero h1 {
		font-family: 'Playfair Display', 'Nunito', Georgia, serif;
		font-weight: 900;
		font-size: clamp(2.5rem, 8vw, 6rem);
		line-height: 0.95;
		letter-spacing: -0.025em;
		margin-bottom: 1.5rem;
	}
	.hero h1 em { font-style: italic; color: #c0392b; font-weight: 400; }

	.standfirst {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.1rem, 2.5vw, 1.5rem);
		line-height: 1.4;
		color: #333;
		max-width: 700px;
		margin-bottom: 1.5rem;
		font-style: italic;
	}

	.meta-hero { display: flex; gap: 0.6rem; font-size: 0.82rem; color: #555; flex-wrap: wrap; }

	.rule {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	.rule::after {
		content: '';
		flex: 1;
		height: 1px;
		background: #1a1a1a;
	}
	.rule span {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #1a1a1a;
	}

	section { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem; }

	.manchete {
		max-width: 760px;
	}
	.kicker-alerta {
		display: inline-block;
		background: #1a1a1a;
		color: #fdfcf8;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.25rem 0.7rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
	}
	.manchete h2 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		line-height: 1.1;
		letter-spacing: -0.015em;
		margin-bottom: 0.75rem;
	}
	.manchete h2 a { color: inherit; }
	.manchete h2 a:hover { color: #c0392b; }
	.lead { font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 1rem; max-width: 640px; }
	.continuar {
		font-weight: 700;
		color: #c0392b;
		font-size: 0.92rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border-bottom: 1px solid #c0392b;
		padding-bottom: 2px;
	}
	.continuar:focus-visible { outline: 3px solid #c0392b; outline-offset: 4px; }

	.faixas-lista { list-style: none; padding: 0; }
	.faixa-link {
		display: grid;
		grid-template-columns: 80px 1fr auto;
		gap: 2rem;
		align-items: center;
		padding: 1.5rem 0;
		border-top: 1px solid #1a1a1a;
		color: inherit;
		transition: padding 0.2s;
	}
	.faixa-link:hover { padding-left: 1rem; }
	.faixa-link:focus-visible { outline: 3px solid #c0392b; outline-offset: 2px; }
	.faixas-lista li:last-child .faixa-link { border-bottom: 1px solid #1a1a1a; }
	.faixa-numero {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2.5rem;
		font-weight: 900;
		color: #c0392b;
		font-style: italic;
	}
	.faixa-meio h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: 1.75rem;
		line-height: 1.1;
		margin-bottom: 0.3rem;
	}
	.faixa-meio p { font-size: 0.95rem; color: #555; line-height: 1.5; max-width: 480px; }
	.faixa-idades {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2rem;
		font-weight: 900;
		text-align: right;
		line-height: 1;
	}
	.faixa-idades span { font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 400; color: #555; letter-spacing: 0.1em; text-transform: uppercase; }

	.secoes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 0;
	}
	.secao {
		padding: 1.5rem;
		border: 1px solid #1a1a1a;
		margin-left: -1px;
		margin-top: -1px;
		display: block;
		color: inherit;
		transition: background 0.15s;
	}
	.secao:hover { background: #1a1a1a; color: #fdfcf8; }
	.secao:hover .secao-num { color: #fdfcf8; }
	.secao:focus-visible { outline: 3px solid #c0392b; outline-offset: -3px; }
	.secao-num {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: #c0392b;
		display: block;
		margin-bottom: 0.5rem;
	}
	.secao h4 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: 1.25rem;
		margin-bottom: 0.4rem;
	}
	.secao p { font-size: 0.9rem; line-height: 1.5; opacity: 0.8; }

	.emergencia {
		background: #1a1a1a;
		color: #fdfcf8;
		padding: 1.5rem;
		text-align: center;
		margin-top: 2rem;
	}
	.emergencia p { font-size: 1rem; max-width: 900px; margin: 0 auto; }
	.emergencia a { color: #fdfcf8; text-decoration: underline; font-weight: 700; }
	.emergencia a:focus-visible { outline: 2px solid #fdfcf8; outline-offset: 3px; }

	@media (max-width: 700px) {
		.faixa-link { grid-template-columns: 50px 1fr; gap: 1rem; }
		.faixa-idades { display: none; }
		.faixa-numero { font-size: 1.75rem; }
		.faixa-meio h3 { font-size: 1.35rem; }
	}
</style>
