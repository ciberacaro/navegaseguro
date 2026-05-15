<script>
	import { alerta } from '$lib/alerta.js';

	const nivelCor = { alto: '#c0392b', medio: '#b87900', baixo: '#1a5e3e' };
	const nivelLabel = { alto: 'Alerta alto', medio: 'Alerta médio', baixo: 'Informação' };

	const grupos = [
		{ href: '/pre-escolar',    emoji: '🧸', titulo: 'Pré-Escolar',   idades: '3 – 5',  desc: 'Primeiros passos seguros online' },
		{ href: '/primeiro-ciclo', emoji: '🎨', titulo: '1.º Ciclo',     idades: '6 – 10',  desc: 'Passwords, estranhos online e regras básicas' },
		{ href: '/segundo-ciclo',  emoji: '📱', titulo: '2.º Ciclo',     idades: '10 – 12', desc: 'Redes sociais, privacidade e primeiro telemóvel' },
		{ href: '/terceiro-ciclo', emoji: '⚡', titulo: '3.º Ciclo',     idades: '12 – 15', desc: 'Reputação digital, cyberbullying e relações online' },
		{ href: '/secundario',     emoji: '🎯', titulo: 'Secundário',    idades: '15 – 18', desc: 'Deepfakes, pegada digital e fraudes financeiras' },
		{ href: '/adultos',        emoji: '👔', titulo: 'Adultos',       idades: '18 – 59', desc: 'Phishing bancário, trabalho remoto e proteção da família' },
		{ href: '/seniores',       emoji: '🌟', titulo: 'Seniores',      idades: '60+',    desc: 'Burlas telefónicas, suporte falso e compras seguras' }
	];
</script>

<svelte:head>
	<title>NavegaSeguro — Cibersegurança para todos</title>
</svelte:head>

<main class="home">
	<section class="hero">
		<div class="hero-inner">
			<span class="overline">EDIÇÃO PERMANENTE · GRATUITO · EM PT-PT</span>
			<h1>
				Cibersegurança <em>para</em><br />
				todas as idades.
			</h1>
			<p class="standfirst">
				Um recurso português para crianças, jovens, adultos e seniores — adaptado a cada faixa etária, sem publicidade nem recolha de dados.
			</p>
			<div class="meta-hero">
				<span>30 casos documentados</span>
				<span>·</span>
				<span>7 faixas etárias</span>
				<span>·</span>
				<span>PT-PT</span>
			</div>
			<div class="hero-ctas">
				<a href="#faixas" class="btn-primario">Escolher faixa etária</a>
				<a href="/ferramentas" class="btn-link">Ver ferramentas →</a>
			</div>
		</div>
	</section>

	<section class="destaque">
		<div class="rule"><span>ALERTA DESTA SEMANA</span></div>
		<article class="manchete">
			<span class="kicker" style="--n: {nivelCor[alerta.nivel]}">{nivelLabel[alerta.nivel]}</span>
			<span class="data">{alerta.data}</span>
			<h2>{alerta.titulo}</h2>
			<p class="lead">{alerta.descricao}</p>
			<details class="manchete-mais">
				<summary>Ver análise completa</summary>
				<div class="mais-grid">
					<div>
						<strong>Como reconhecer</strong>
						<ul>{#each alerta.como_reconhecer as sinal}<li>{sinal}</li>{/each}</ul>
					</div>
					<div>
						<strong>O que fazer</strong>
						<p>{alerta.o_que_fazer}</p>
					</div>
				</div>
			</details>
			<div class="manchete-tags">
				{#each alerta.tags as tag}<span>#{tag}</span>{/each}
			</div>
		</article>
	</section>

	<section class="faixas" id="faixas">
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
				<p>Planos de sessão, fichas e avaliação de turma.</p>
			</a>
			<a href="/glossario" class="secao">
				<span class="secao-num">→ 06</span>
				<h4>Glossário</h4>
				<p>Termos técnicos em linguagem simples.</p>
			</a>
		</div>
	</section>

	<aside class="emergencia">
		<p>
			<strong>Está a ser burlado agora?</strong>
			<a href="/emergencia">Veja o que fazer →</a>
			· ou ligue
			<a href="tel:800219090">800 21 90 90</a>
		</p>
	</aside>
</main>

<style>
	.home {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* HERO */
	.hero {
		padding: 4rem 0 3rem;
		border-bottom: 2px solid #1a1a1a;
	}
	.hero-inner { max-width: 760px; }

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
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: clamp(2.5rem, 7vw, 5.5rem);
		line-height: 0.95;
		letter-spacing: -0.025em;
		margin-bottom: 1.25rem;
		color: #1a1a1a;
	}
	.hero h1 em { font-style: italic; color: #c0392b; font-weight: 400; }

	.standfirst {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.1rem, 2.2vw, 1.4rem);
		line-height: 1.45;
		color: #333;
		margin-bottom: 1.25rem;
		font-style: italic;
		max-width: 660px;
	}

	.meta-hero {
		display: flex;
		gap: 0.6rem;
		font-size: 0.82rem;
		color: #555;
		flex-wrap: wrap;
		margin-bottom: 2rem;
		letter-spacing: 0.02em;
	}

	.hero-ctas { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
	.btn-primario {
		display: inline-block;
		background: #1a1a1a;
		color: #fdfcf8;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 0.95rem 1.5rem;
		transition: background 0.15s;
	}
	.btn-primario:hover { background: #c0392b; }
	.btn-primario:focus-visible { outline: 3px solid #c0392b; outline-offset: 3px; }

	.btn-link {
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #c0392b;
		border-bottom: 1px solid #c0392b;
		padding-bottom: 3px;
	}
	.btn-link:focus-visible { outline: 3px solid #c0392b; outline-offset: 4px; }

	/* RULE */
	.rule { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
	.rule::after { content: ''; flex: 1; height: 1px; background: #1a1a1a; }
	.rule span {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #1a1a1a;
	}

	section { padding: 4rem 0; }

	/* MANCHETE */
	.manchete { max-width: 800px; }
	.kicker {
		display: inline-block;
		background: var(--n);
		color: #fdfcf8;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.25rem 0.7rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-right: 0.75rem;
		margin-bottom: 0.5rem;
	}
	.data { font-size: 0.82rem; color: #555; }
	.manchete h2 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		line-height: 1.1;
		letter-spacing: -0.015em;
		margin: 0.5rem 0 0.75rem;
		color: #1a1a1a;
	}
	.lead { font-size: 1.05rem; line-height: 1.65; color: #333; margin-bottom: 1rem; }

	.manchete-mais { margin: 1rem 0 1.25rem; }
	.manchete-mais summary {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #c0392b;
		cursor: pointer;
		border-bottom: 1px solid #c0392b;
		padding-bottom: 2px;
		display: inline-block;
		list-style: none;
	}
	.manchete-mais summary::-webkit-details-marker { display: none; }
	.manchete-mais summary:focus-visible { outline: 3px solid #c0392b; outline-offset: 3px; }
	.mais-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-top: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid #ddd;
	}
	.mais-grid strong {
		display: block;
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #555;
		margin-bottom: 0.5rem;
	}
	.mais-grid ul { padding-left: 1.2rem; }
	.mais-grid li, .mais-grid p { font-size: 0.92rem; color: #333; line-height: 1.6; }

	.manchete-tags { display: flex; gap: 0.8rem; flex-wrap: wrap; }
	.manchete-tags span { font-size: 0.78rem; color: #555; font-family: 'Inter', sans-serif; }

	/* FAIXAS */
	.faixas-lista { list-style: none; padding: 0; }
	.faixa-link {
		display: grid;
		grid-template-columns: 80px 1fr auto;
		gap: 2rem;
		align-items: center;
		padding: 1.5rem 0;
		border-top: 1px solid #1a1a1a;
		color: inherit;
		transition: padding 0.2s, color 0.2s;
	}
	.faixa-link:hover { padding-left: 1rem; color: #c0392b; }
	.faixa-link:focus-visible { outline: 3px solid #c0392b; outline-offset: 2px; }
	.faixas-lista li:last-child .faixa-link { border-bottom: 1px solid #1a1a1a; }
	.faixa-numero {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2.5rem;
		font-weight: 900;
		color: #c0392b;
		font-style: italic;
		line-height: 1;
	}
	.faixa-meio h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: 1.75rem;
		line-height: 1.1;
		margin-bottom: 0.3rem;
	}
	.faixa-meio p { font-size: 0.95rem; color: #555; line-height: 1.5; max-width: 480px; }
	.faixa-link:hover .faixa-meio p { color: #333; }
	.faixa-idades {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2rem;
		font-weight: 900;
		text-align: right;
		line-height: 1;
		color: #1a1a1a;
	}
	.faixa-idades span {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		font-weight: 400;
		color: #555;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	/* SECÇÕES */
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
		transition: background 0.15s, color 0.15s;
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
		transition: color 0.15s;
	}
	.secao h4 {
		font-family: 'Playfair Display', Georgia, serif;
		font-weight: 900;
		font-size: 1.25rem;
		margin-bottom: 0.4rem;
	}
	.secao p { font-size: 0.9rem; line-height: 1.5; opacity: 0.8; }

	/* EMERGÊNCIA */
	.emergencia {
		background: #1a1a1a;
		color: #fdfcf8;
		padding: 1.5rem;
		text-align: center;
		margin: 2rem -1.5rem 4rem;
	}
	.emergencia p { font-size: 1rem; max-width: 900px; margin: 0 auto; line-height: 1.6; }
	.emergencia strong { font-family: 'Playfair Display', Georgia, serif; font-size: 1.1rem; margin-right: 0.5rem; }
	.emergencia a { color: #fdfcf8; text-decoration: underline; font-weight: 700; }
	.emergencia a:hover { color: #FF6B6B; }
	.emergencia a:focus-visible { outline: 2px solid #fdfcf8; outline-offset: 3px; }

	@media (max-width: 700px) {
		.faixa-link { grid-template-columns: 50px 1fr; gap: 1rem; }
		.faixa-idades { display: none; }
		.faixa-numero { font-size: 1.75rem; }
		.faixa-meio h3 { font-size: 1.35rem; }
		.mais-grid { grid-template-columns: 1fr; }
	}
</style>
