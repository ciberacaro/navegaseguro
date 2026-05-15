<script>
	import { alerta } from '$lib/alerta.js';

	const nivelCor = { alto: '#FF6B6B', medio: '#FF9F43', baixo: '#1DD1A1' };
	const nivelLabel = { alto: 'Alerta alto', medio: 'Alerta médio', baixo: 'Informação' };

	const grupos = [
		{ href: '/pre-escolar',    emoji: '🧸', titulo: 'Pré-Escolar',   idades: '3 – 5 anos',             desc: 'Primeiros passos seguros online',                          cor: '#FF9F43', fundo: '#FFF5E6' },
		{ href: '/primeiro-ciclo', emoji: '🎨', titulo: '1.º Ciclo',     idades: '6 – 10 anos',             desc: 'Passwords, estranhos online e regras básicas',             cor: '#48DBFB', fundo: '#E8FAFF' },
		{ href: '/segundo-ciclo',  emoji: '📱', titulo: '2.º Ciclo',     idades: '10 – 12 anos',            desc: 'Redes sociais, privacidade e primeiro telemóvel',           cor: '#1DD1A1', fundo: '#E8FFF8' },
		{ href: '/terceiro-ciclo', emoji: '⚡', titulo: '3.º Ciclo',     idades: '12 – 15 anos',            desc: 'Reputação digital, cyberbullying e relações online',        cor: '#FF6B6B', fundo: '#FFF0F0' },
		{ href: '/secundario',     emoji: '🎯', titulo: 'Secundário',    idades: '15 – 18 anos',            desc: 'Deepfakes, pegada digital e fraudes financeiras',           cor: '#A29BFE', fundo: '#F3F0FF' },
		{ href: '/adultos',        emoji: '👔', titulo: 'Adultos',       idades: '18 – 59 anos',            desc: 'Phishing bancário, trabalho remoto e proteção da família', cor: '#0984E3', fundo: '#EBF5FF' },
		{ href: '/seniores',       emoji: '🌟', titulo: 'Seniores',      idades: '60+ anos',                desc: 'Burlas telefónicas, suporte falso e compras seguras',       cor: '#6C5CE7', fundo: '#F0EEFF' }
	];
</script>

<svelte:head>
	<title>NavegaSeguro — Cibersegurança para todos</title>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-inner">
			<span class="badge">🇵🇹 Gratuito · Sem publicidade · Em português</span>
			<h1>Navega na internet<br /><span class="destaque">com segurança</span></h1>
			<p class="subtitulo">Conteúdo de cibersegurança adaptado à tua faixa etária — para crianças, jovens, adultos e seniores.</p>
			<div class="hero-btns">
				<a href="#escolhe" class="btn-principal">Escolhe a tua faixa etária ↓</a>
				<a href="/ferramentas" class="btn-secundario">Ver ferramentas →</a>
			</div>
		</div>
	</section>

	<section class="alerta-semana" aria-label="Alerta da semana">
		<div class="container">
			<div class="alerta-card" style="--cor: {nivelCor[alerta.nivel]}">
				<div class="alerta-topo">
					<span class="alerta-badge" style="background: {nivelCor[alerta.nivel]}">{nivelLabel[alerta.nivel]}</span>
					<span class="alerta-data">{alerta.data}</span>
				</div>
				<h2>⚠️ {alerta.titulo}</h2>
				<p>{alerta.descricao}</p>
				<details class="alerta-mais">
					<summary>Ver detalhes</summary>
					<div class="alerta-detalhe">
						<div>
							<strong>Como reconhecer:</strong>
							<ul>{#each alerta.como_reconhecer as sinal}<li>{sinal}</li>{/each}</ul>
						</div>
						<div>
							<strong>O que fazer:</strong>
							<p>{alerta.o_que_fazer}</p>
						</div>
					</div>
				</details>
				<div class="alerta-tags">
					{#each alerta.tags as tag}<span class="tag">{tag}</span>{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="grupos" id="escolhe">
		<div class="container">
			<h2>Para quem é o NavegaSeguro?</h2>
			<p class="secao-desc">Escolhe o teu grupo para acederes ao conteúdo adaptado.</p>
			<div class="grelha">
				{#each grupos as g}
					<a href={g.href} class="cartao" style="--cor: {g.cor}; --fundo: {g.fundo}">
						<span class="cartao-emoji" aria-hidden="true">{g.emoji}</span>
						<h3>{g.titulo}</h3>
						<span class="idades">{g.idades}</span>
						<p>{g.desc}</p>
						<span class="seta" aria-hidden="true">Explorar →</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="emergencia-strip">
		<div class="container">
			<span>🚨 <strong>Está a ser burlado agora?</strong></span>
			<a href="/emergencia" class="btn-emergencia">O que fazer →</a>
			<a href="tel:800219090" class="btn-tel">📞 800 21 90 90</a>
		</div>
	</section>
</main>

<style>
	main { min-height: 100vh; }

	/* ── Hero ── */
	.hero {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
		color: white;
		padding: 5rem 2rem 6rem;
		text-align: center;
	}
	.hero-inner {
		max-width: 680px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}
	.badge {
		background: rgba(255,255,255,0.12);
		border: 1px solid rgba(255,255,255,0.2);
		padding: 0.35rem 1rem;
		border-radius: 999px;
		font-size: 0.82rem;
	}
	h1 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
		line-height: 1.15;
	}
	.destaque { color: #48DBFB; }
	.subtitulo {
		font-size: 1.05rem;
		color: rgba(255,255,255,0.8);
		max-width: 500px;
	}
	.hero-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; }
	.btn-principal {
		background: #48DBFB;
		color: #1a1a2e;
		font-weight: 700;
		padding: 0.85rem 1.75rem;
		border-radius: 999px;
		font-size: 0.95rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.btn-principal:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(72,219,251,0.35); }
	.btn-secundario {
		background: rgba(255,255,255,0.1);
		color: white;
		border: 1px solid rgba(255,255,255,0.3);
		font-weight: 600;
		padding: 0.85rem 1.75rem;
		border-radius: 999px;
		font-size: 0.95rem;
		transition: background 0.2s;
	}
	.btn-secundario:hover { background: rgba(255,255,255,0.18); }

	/* ── Alerta ── */
	.alerta-semana {
		background: #fff;
		padding: 2rem 1.5rem;
		border-bottom: 1px solid #f0f0f0;
	}
	.container { max-width: 1000px; margin: 0 auto; padding: 0 1.5rem; }
	.alerta-card {
		border: 2px solid var(--cor);
		border-radius: 1rem;
		padding: 1.25rem 1.5rem;
		background: #fffaf5;
	}
	.alerta-topo { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
	.alerta-badge {
		color: white;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.2rem 0.65rem;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.alerta-data { font-size: 0.8rem; color: #999; }
	.alerta-card h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.1rem;
		color: #1a1a2e;
		margin-bottom: 0.4rem;
	}
	.alerta-card > p { font-size: 0.9rem; color: #444; }
	.alerta-mais { margin-top: 0.75rem; }
	.alerta-mais summary {
		font-size: 0.85rem;
		font-weight: 600;
		color: #0984E3;
		cursor: pointer;
		list-style: none;
	}
	.alerta-mais summary::-webkit-details-marker { display: none; }
	.alerta-detalhe {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 0.75rem;
	}
	.alerta-detalhe strong { display: block; font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.3rem; }
	.alerta-detalhe ul { padding-left: 1.2rem; font-size: 0.875rem; color: #333; line-height: 1.6; }
	.alerta-detalhe p { font-size: 0.875rem; color: #333; line-height: 1.6; }
	.alerta-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.75rem; }
	.tag { background: #f0f4ff; color: #555; font-size: 0.72rem; padding: 0.15rem 0.55rem; border-radius: 999px; }

	/* ── Faixas ── */
	.grupos { padding: 4rem 1.5rem; }
	.grupos h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.7rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 0.4rem;
	}
	.secao-desc { text-align: center; color: #666; margin-bottom: 2rem; font-size: 0.95rem; }
	.grelha { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
	.cartao {
		background: var(--fundo);
		border: 2px solid transparent;
		border-radius: 1rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
	}
	.cartao:hover { transform: translateY(-3px); border-color: var(--cor); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
	.cartao-emoji { font-size: 2.25rem; }
	.cartao h3 { font-family: 'Nunito', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--cor); }
	.idades { font-size: 0.75rem; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.05em; }
	.cartao p { font-size: 0.875rem; color: #444; flex: 1; }
	.seta { font-size: 0.82rem; font-weight: 600; color: var(--cor); margin-top: 0.25rem; }

	/* ── Faixa de emergência ── */
	.emergencia-strip {
		background: #1a1a2e;
		padding: 1.25rem 1.5rem;
	}
	.emergencia-strip .container {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.emergencia-strip span { color: #ccc; font-size: 0.95rem; }
	.emergencia-strip strong { color: #fff; }
	.btn-emergencia {
		background: #FF6B6B;
		color: white;
		font-weight: 700;
		font-size: 0.875rem;
		padding: 0.5rem 1.1rem;
		border-radius: 999px;
		transition: background 0.2s;
	}
	.btn-emergencia:hover { background: #e55a5a; }
	.btn-tel {
		background: #1DD1A1;
		color: #1a1a2e;
		font-weight: 700;
		font-size: 0.875rem;
		padding: 0.5rem 1.1rem;
		border-radius: 999px;
		transition: background 0.2s;
	}
	.btn-tel:hover { background: #17b98d; }

	@media (max-width: 600px) {
		.alerta-detalhe { grid-template-columns: 1fr; }
	}
</style>
