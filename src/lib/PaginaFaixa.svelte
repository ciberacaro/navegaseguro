<script>
	import Quiz from './Quiz.svelte';

	/**
	 * @type {{
	 *   emoji: string,
	 *   titulo: string,
	 *   subtitulo: string,
	 *   cor: string,
	 *   fundo: string,
	 *   introducao: string,
	 *   temas: Array<{icone: string, titulo: string, conteudo: string}>,
	 *   perguntas: Array<{pergunta: string, opcoes: string[], correta: number, explicacao: string}>,
	 *   dicas: string[],
	 *   variante?: 'infantil' | 'juvenil' | 'jovem-adulto' | 'adulto' | 'senior',
	 *   historias?: Array<{titulo: string, narrativa: string, licao: string}>
	 * }}
	 */
	let { emoji, titulo, subtitulo, cor, fundo, introducao, temas, perguntas, dicas, variante = 'adulto', historias = [] } = $props();
</script>

<svelte:head>
	<title>{titulo} — NavegaSeguro</title>
</svelte:head>

<div class="pagina variante-{variante}" style="--cor: {cor}; --fundo: {fundo}">
	<div class="topo">
		<div class="container">
			<a href="/" class="voltar">← Início</a>
			<span class="emoji-grande">{emoji}</span>
			<h1>{titulo}</h1>
			<p class="subtitulo">{subtitulo}</p>
		</div>
	</div>

	<main class="container">
		<section class="intro">
			<p>{introducao}</p>
		</section>

		<section class="temas">
			<h2>O que vais aprender</h2>
			<div class="grelha-temas">
				{#each temas as tema}
					<div class="tema-card">
						<span class="tema-icone">{tema.icone}</span>
						<h3>{tema.titulo}</h3>
						<p>{tema.conteudo}</p>
					</div>
				{/each}
			</div>
		</section>

		{#if historias.length > 0}
			<section class="historias">
				<h2>Histórias reais</h2>
				<p class="hist-desc">Casos anonimizados que aconteceram em Portugal. Os nomes foram alterados.</p>
				<div class="historias-lista">
					{#each historias as h}
						<article class="historia-card">
							<h3>{h.titulo}</h3>
							<p class="narrativa">{h.narrativa}</p>
							<div class="licao">
								<strong>O que aprendemos:</strong>
								<span>{h.licao}</span>
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		<section class="dicas-secao">
			<h2>Dicas rápidas</h2>
			<ul class="dicas">
				{#each dicas as dica}
					<li>{dica}</li>
				{/each}
			</ul>
		</section>

		<section class="quiz-secao">
			<h2>Testa os teus conhecimentos</h2>
			<p class="quiz-desc">Responde às perguntas abaixo para verificares o que aprendeste.</p>
			<Quiz {perguntas} {cor} />
		</section>
	</main>
</div>

<style>
	/* ---------- BASE COMUM ---------- */
	.pagina {
		min-height: 100vh;
	}

	.topo {
		background: linear-gradient(135deg, var(--fundo), white);
		border-bottom: 3px solid var(--cor);
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.voltar {
		display: inline-block;
		color: #888;
		margin-bottom: 1.5rem;
		transition: color 0.2s;
	}

	.voltar:hover { color: #333; }

	.emoji-grande {
		display: block;
		margin-bottom: 0.5rem;
	}

	.topo h1 {
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	main { padding: 3rem 1.5rem; }

	.intro {
		line-height: 1.7;
		color: #333;
		margin-bottom: 3rem;
		padding: 1.5rem;
		background: #f8faff;
		border-radius: 0.75rem;
	}

	section { margin-bottom: 3rem; }

	h2 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		margin-bottom: 1.25rem;
		color: #1a1a2e;
	}

	.grelha-temas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.25rem;
	}

	.tema-card {
		background: var(--fundo);
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.tema-icone { display: inline-block; }

	.tema-card h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		color: var(--cor);
	}

	.tema-card p { color: #444; line-height: 1.5; }

	.hist-desc { color: #666; margin-bottom: 1.5rem; font-style: italic; }

	.historias-lista {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.historia-card {
		background: #fff;
		border-left: 4px solid var(--cor);
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	.historia-card h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		color: var(--cor);
		margin-bottom: 0.75rem;
	}

	.narrativa { color: #333; line-height: 1.7; margin-bottom: 1rem; }

	.licao {
		background: var(--fundo);
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		font-size: 0.95em;
	}

	.licao strong { color: var(--cor); margin-right: 0.4rem; }

	.dicas {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 0;
	}

	.dicas li {
		padding: 0.75rem 1rem 0.75rem 3rem;
		background: #fff;
		border-radius: 0.5rem;
		border-left: 3px solid var(--cor);
		position: relative;
	}

	.dicas li::before {
		content: '✓';
		position: absolute;
		left: 1rem;
		color: var(--cor);
		font-weight: 700;
	}

	.quiz-desc { color: #555; margin-bottom: 0; }

	/* ---------- VARIANTE INFANTIL (pré-escolar, 1.º ciclo) ---------- */
	.variante-infantil {
		font-family: 'Nunito', sans-serif;
		font-size: 1.1rem;
	}

	.variante-infantil .topo {
		padding: 4rem 1.5rem 3rem;
		background: radial-gradient(circle at top, var(--fundo), white);
	}

	.variante-infantil .emoji-grande { font-size: 5.5rem; }

	.variante-infantil .topo h1 {
		font-size: clamp(2.2rem, 5vw, 3rem);
		font-weight: 900;
	}

	.variante-infantil .subtitulo { font-size: 1.15rem; }

	.variante-infantil h2 {
		font-size: 1.75rem;
		text-align: center;
	}

	.variante-infantil .intro {
		font-size: 1.15rem;
		padding: 1.75rem;
		border-radius: 1.25rem;
		border: 3px dashed var(--cor);
		background: white;
	}

	.variante-infantil .tema-card {
		border-radius: 1.25rem;
		padding: 1.75rem;
		border: 3px solid var(--cor);
		text-align: center;
	}

	.variante-infantil .tema-icone { font-size: 3rem; }
	.variante-infantil .tema-card h3 { font-size: 1.2rem; }
	.variante-infantil .tema-card p { font-size: 1rem; }

	.variante-infantil .dicas li {
		font-size: 1.05rem;
		padding: 1rem 1rem 1rem 3rem;
		border-radius: 1rem;
		border-left-width: 5px;
	}

	.variante-infantil .historia-card { border-radius: 1.25rem; }

	/* ---------- VARIANTE JUVENIL (2.º e 3.º ciclo) ---------- */
	.variante-juvenil { font-family: 'Inter', sans-serif; }

	.variante-juvenil .emoji-grande { font-size: 4rem; }

	.variante-juvenil .topo h1 {
		font-size: clamp(2rem, 4.5vw, 2.8rem);
	}

	.variante-juvenil h2 { font-size: 1.5rem; }
	.variante-juvenil .intro { font-size: 1.05rem; }

	.variante-juvenil .tema-card {
		border-radius: 0.85rem;
		transition: transform 0.2s;
	}

	.variante-juvenil .tema-card:hover { transform: translateY(-3px); }
	.variante-juvenil .tema-icone { font-size: 2.2rem; }

	/* ---------- VARIANTE JOVEM-ADULTO (secundário) ---------- */
	.variante-jovem-adulto { font-family: 'Inter', sans-serif; }

	.variante-jovem-adulto .emoji-grande { font-size: 3.5rem; }
	.variante-jovem-adulto .topo h1 { font-size: clamp(1.9rem, 4vw, 2.6rem); }
	.variante-jovem-adulto h2 { font-size: 1.4rem; }
	.variante-jovem-adulto .intro { font-size: 1rem; }
	.variante-jovem-adulto .tema-icone { font-size: 1.9rem; }
	.variante-jovem-adulto .tema-card { border-radius: 0.65rem; }

	/* ---------- VARIANTE ADULTO ---------- */
	.variante-adulto { font-family: 'Inter', sans-serif; }
	.variante-adulto .emoji-grande { font-size: 3.25rem; }
	.variante-adulto .topo h1 { font-size: clamp(1.8rem, 3.8vw, 2.4rem); }
	.variante-adulto h2 { font-size: 1.35rem; }
	.variante-adulto .intro { font-size: 0.98rem; }
	.variante-adulto .tema-icone { font-size: 1.8rem; }
	.variante-adulto .tema-card { border-radius: 0.5rem; padding: 1.25rem; }

	/* ---------- VARIANTE SENIOR ---------- */
	.variante-senior {
		font-family: 'Inter', sans-serif;
		font-size: 1.2rem;
	}

	.variante-senior .topo { padding: 4rem 1.5rem 3rem; }
	.variante-senior .emoji-grande { font-size: 5rem; }
	.variante-senior .topo h1 { font-size: clamp(2.2rem, 5vw, 3rem); }
	.variante-senior .subtitulo { font-size: 1.25rem; }

	.variante-senior h2 {
		font-size: 1.9rem;
		padding-bottom: 0.5rem;
		border-bottom: 3px solid var(--cor);
		display: inline-block;
	}

	.variante-senior .intro {
		font-size: 1.2rem;
		line-height: 1.85;
		padding: 2rem;
		border-radius: 1rem;
		border: 2px solid var(--cor);
		background: white;
	}

	.variante-senior .grelha-temas {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.variante-senior .tema-card {
		padding: 2rem;
		border-radius: 1rem;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.5rem;
		align-items: start;
	}

	.variante-senior .tema-icone { font-size: 3.5rem; }

	.variante-senior .tema-card h3 {
		font-size: 1.3rem;
		grid-column: 2;
	}

	.variante-senior .tema-card p {
		font-size: 1.15rem;
		line-height: 1.7;
		grid-column: 2;
		color: #222;
	}

	.variante-senior .dicas li {
		font-size: 1.2rem;
		padding: 1.25rem 1.25rem 1.25rem 3.5rem;
		border-radius: 0.75rem;
		border-left-width: 5px;
		line-height: 1.5;
	}

	.variante-senior .dicas li::before {
		font-size: 1.5rem;
		left: 1.25rem;
	}

	.variante-senior .historia-card {
		padding: 2rem;
		border-left-width: 6px;
	}

	.variante-senior .historia-card h3 { font-size: 1.4rem; }
	.variante-senior .narrativa { font-size: 1.15rem; line-height: 1.85; }
	.variante-senior .licao { font-size: 1.1rem; padding: 1rem 1.25rem; }

	.variante-senior .voltar { font-size: 1rem; }
</style>
