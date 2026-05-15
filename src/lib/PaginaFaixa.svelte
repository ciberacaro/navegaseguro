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
	 *   dicas: string[]
	 * }}
	 */
	let { emoji, titulo, subtitulo, cor, fundo, introducao, temas, perguntas, dicas } = $props();
</script>

<svelte:head>
	<title>{titulo} — NavegaSeguro</title>
</svelte:head>

<div class="topo" style="--cor: {cor}; --fundo: {fundo}">
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
				<div class="tema-card" style="--cor: {cor}; --fundo: {fundo}">
					<span class="tema-icone">{tema.icone}</span>
					<h3>{tema.titulo}</h3>
					<p>{tema.conteudo}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="dicas-secao">
		<h2>Dicas rápidas</h2>
		<ul class="dicas">
			{#each dicas as dica}
				<li style="--cor: {cor}">{dica}</li>
			{/each}
		</ul>
	</section>

	<section class="quiz-secao">
		<h2>Testa os teus conhecimentos</h2>
		<p class="quiz-desc">Responde às perguntas abaixo para verificares o que aprendeste.</p>
		<Quiz {perguntas} {cor} />
	</section>
</main>

<style>
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
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		transition: color 0.2s;
	}

	.voltar:hover {
		color: #333;
	}

	.emoji-grande {
		font-size: 4rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	.topo h1 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 900;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.subtitulo {
		color: #555;
		font-size: 1.05rem;
	}

	main {
		padding: 3rem 1.5rem;
	}

	.intro {
		font-size: 1.05rem;
		line-height: 1.7;
		color: #333;
		margin-bottom: 3rem;
		padding: 1.5rem;
		background: #f8faff;
		border-radius: 0.75rem;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.5rem;
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

	.tema-icone {
		font-size: 2rem;
	}

	.tema-card h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1rem;
		color: var(--cor);
	}

	.tema-card p {
		font-size: 0.9rem;
		color: #444;
		line-height: 1.5;
	}

	.dicas {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.dicas li {
		padding: 0.75rem 1rem 0.75rem 3rem;
		background: #fff;
		border-radius: 0.5rem;
		border-left: 3px solid var(--cor);
		position: relative;
		font-size: 0.95rem;
	}

	.dicas li::before {
		content: '✓';
		position: absolute;
		left: 1rem;
		color: var(--cor);
		font-weight: 700;
	}

	.quiz-desc {
		color: #555;
		margin-bottom: 0;
		font-size: 0.95rem;
	}
</style>
