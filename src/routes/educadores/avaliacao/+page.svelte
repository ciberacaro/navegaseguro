<script>
	const questionarios = [
		{
			id: 'ciclo1',
			faixa: '1.º Ciclo',
			idades: '6–10 anos',
			cor: '#48DBFB',
			perguntas: [
				{ q: 'Antes de instalar uma aplicação nova, devo:', opcoes: ['Instalar logo, são todas seguras', 'Pedir a um adulto', 'Pedir aos colegas'], correta: 1 },
				{ q: 'Uma palavra-passe forte tem:', opcoes: ['O meu nome', 'Várias palavras e um número', '1234'], correta: 1 },
				{ q: 'Se um desconhecido me pede uma foto online, devo:', opcoes: ['Enviar para ser amigável', 'Contar a um adulto', 'Bloquear sem dizer a ninguém'], correta: 1 },
				{ q: 'Se vir uma imagem que me incomoda, devo:', opcoes: ['Continuar a ver', 'Apagar e fingir que não vi', 'Contar a um adulto de confiança'], correta: 2 },
				{ q: 'A informação que partilho online:', opcoes: ['Apaga-se logo', 'Pode ficar para sempre', 'Só vê quem eu quero'], correta: 1 }
			]
		},
		{
			id: 'ciclo2',
			faixa: '2.º Ciclo',
			idades: '10–12 anos',
			cor: '#1DD1A1',
			perguntas: [
				{ q: 'A minha conta de Instagram/TikTok deve estar:', opcoes: ['Pública para ter mais seguidores', 'Privada por defeito', 'Tanto faz'], correta: 1 },
				{ q: 'Recebo um SMS dos CTT com um link para pagar 1,99€. Devo:', opcoes: ['Pagar para não perder a encomenda', 'Apagar — provavelmente é falso', 'Reenviar a amigos'], correta: 1 },
				{ q: 'Para autenticar a conta, uso:', opcoes: ['Apenas palavra-passe', 'Palavra-passe + código SMS (2FA)', 'O nome de utilizador'], correta: 1 },
				{ q: 'Num jogo, alguém oferece-me itens grátis se lhe der a minha senha. Devo:', opcoes: ['Dar — é uma boa oferta', 'Recusar — é fraude', 'Trocar por outra senha falsa'], correta: 1 },
				{ q: 'Posso aceitar pedidos de amizade de pessoas que não conheço pessoalmente?', opcoes: ['Sim, são amigos potenciais', 'Não, é arriscado', 'Só se forem da mesma idade'], correta: 1 },
				{ q: 'A informação que partilho com "amigos" no Instagram:', opcoes: ['Fica só com eles', 'Eles podem capturar e partilhar', 'Apaga-se ao fim de 24h'], correta: 1 }
			]
		},
		{
			id: 'ciclo3',
			faixa: '3.º Ciclo',
			idades: '12–15 anos',
			cor: '#FF6B6B',
			perguntas: [
				{ q: 'Recebo ameaças de divulgação de imagens íntimas. A primeira coisa a fazer é:',
					opcoes: ['Pagar para parar', 'Não pagar e procurar ajuda (800 21 90 90)', 'Apagar a conversa e esquecer'], correta: 1 },
				{ q: 'Cyberbullying num grupo da turma. Devo:', opcoes: ['Ignorar para não me envolver', 'Sair do grupo silenciosamente', 'Documentar e reportar à escola/encarregado'], correta: 2 },
				{ q: 'Conteúdo que publico hoje:', opcoes: ['Posso apagar e desaparece', 'Pode ser visto daqui a anos', 'Só o vê quem eu quero'], correta: 1 },
				{ q: 'Conheci alguém num jogo. Quer encontrar-se comigo. Devo:', opcoes: ['Ir sem dizer aos pais', 'Falar com um adulto antes de qualquer decisão', 'Ir mas dizer aos pais depois'], correta: 1 },
				{ q: 'Um grooming aprofunda-se quando:', opcoes: ['A pessoa pede segredo absoluto', 'Falamos só de assuntos comuns', 'Há discussões abertas'], correta: 0 },
				{ q: 'Em caso de violência online, posso pedir ajuda em:', opcoes: ['Apenas à família', 'Linha Internet Segura (800 21 90 90), APAV, PSP', 'Só ao psicólogo da escola'], correta: 1 }
			]
		},
		{
			id: 'sec',
			faixa: 'Secundário',
			idades: '15–18 anos',
			cor: '#A29BFE',
			perguntas: [
				{ q: 'Plataforma de cripto promete 10% ao mês. É:', opcoes: ['Investimento normal', 'Quase certamente fraude', 'Bom se for "early adopter"'], correta: 1 },
				{ q: 'Antes de investir, verifico:', opcoes: ['Os comentários da plataforma', 'O registo na CMVM', 'Apenas o testemunho da figura pública'], correta: 1 },
				{ q: 'Um vídeo viral mostra um político a dizer algo escandaloso. Devo:', opcoes: ['Partilhar logo', 'Verificar em fontes oficiais antes', 'Acreditar — o vídeo é prova'], correta: 1 },
				{ q: 'Empregador procura o meu nome no Google. Aparece:', opcoes: ['Só o que eu controlo', 'Tudo o que existe sobre mim na rede', 'Nada — é privado'], correta: 1 },
				{ q: 'Usar ChatGPT num trabalho académico:', opcoes: ['É sempre permitido', 'Depende da política da instituição e da forma de uso', 'Nunca é permitido'], correta: 1 },
				{ q: 'Os meus dados em apps gratuitas:',
					opcoes: ['São anónimos', 'Costumam ser o modelo de negócio', 'Não saem do meu dispositivo'], correta: 1 }
			]
		}
	];

	let questAtivo = $state(questionarios[0].id);
	let modoAtivo = $state('apresentador'); // 'apresentador' | 'folha'
	let perguntaAtual = $state(0);
	let mostrarResposta = $state(false);

	const qActual = $derived(questionarios.find(q => q.id === questAtivo));

	function escolher(id) {
		questAtivo = id;
		perguntaAtual = 0;
		mostrarResposta = false;
	}

	function proxima() {
		if (perguntaAtual < qActual.perguntas.length - 1) {
			perguntaAtual++;
			mostrarResposta = false;
		}
	}

	function anterior() {
		if (perguntaAtual > 0) {
			perguntaAtual--;
			mostrarResposta = false;
		}
	}

	function teclas(e) {
		if (modoAtivo !== 'apresentador') return;
		if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); proxima(); }
		if (e.key === 'ArrowLeft') { e.preventDefault(); anterior(); }
		if (e.key === 'r' || e.key === 'R') { mostrarResposta = !mostrarResposta; }
	}
</script>

<svelte:head>
	<title>Avaliação de turma — NavegaSeguro</title>
	<meta name="description" content="Modo apresentador para avaliação coletiva em sala de aula, com folha de respostas imprimível." />
</svelte:head>

<svelte:window onkeydown={teclas} />

<div class="topo no-print">
	<div class="container">
		<a href="/educadores" class="voltar">← Pais e Educadores</a>
		<h1>📊 Avaliação de turma</h1>
		<p>Modo apresentador para projetar as perguntas + folha de respostas para distribuir.</p>
	</div>
</div>

<main class="container no-print">
	<section class="config">
		<div class="config-bloco">
			<h2>1. Escolha a faixa etária</h2>
			<div class="faixas" role="radiogroup" aria-label="Faixa etária">
				{#each questionarios as q}
					<button
						class="faixa-btn"
						class:ativa={questAtivo === q.id}
						style="--cor: {q.cor}"
						role="radio"
						aria-checked={questAtivo === q.id}
						onclick={() => escolher(q.id)}
					>
						<strong>{q.faixa}</strong>
						<span>{q.idades}</span>
						<span class="nperguntas">{q.perguntas.length} perguntas</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="config-bloco">
			<h2>2. Escolha o modo</h2>
			<div class="modos" role="radiogroup" aria-label="Modo de avaliação">
				<button
					class="modo-btn"
					class:ativo={modoAtivo === 'apresentador'}
					role="radio"
					aria-checked={modoAtivo === 'apresentador'}
					onclick={() => modoAtivo = 'apresentador'}
				>
					<span aria-hidden="true">🖥️</span>
					<strong>Modo apresentador</strong>
					<p>Projeta no quadro. Os alunos veem uma pergunta de cada vez e respondem em coro ou por braço levantado.</p>
				</button>
				<button
					class="modo-btn"
					class:ativo={modoAtivo === 'folha'}
					role="radio"
					aria-checked={modoAtivo === 'folha'}
					onclick={() => modoAtivo = 'folha'}
				>
					<span aria-hidden="true">📄</span>
					<strong>Folha de respostas</strong>
					<p>Distribuição individual. Ctrl+P para imprimir uma folha por aluno.</p>
				</button>
			</div>
		</div>
	</section>

	{#if modoAtivo === 'apresentador'}
		<section class="apresentador" aria-labelledby="apres-titulo">
			<h2 id="apres-titulo" class="sr-only">Modo apresentador</h2>
			<div class="palco" style="--cor: {qActual.cor}">
				<div class="palco-cabecalho">
					<span class="palco-faixa">{qActual.faixa}</span>
					<span class="palco-progresso" aria-live="polite">Pergunta {perguntaAtual + 1} de {qActual.perguntas.length}</span>
				</div>

				<div class="palco-pergunta" aria-live="polite">
					<p class="numero">{perguntaAtual + 1}.</p>
					<h3>{qActual.perguntas[perguntaAtual].q}</h3>
					<ol class="opcoes-palco" type="A">
						{#each qActual.perguntas[perguntaAtual].opcoes as op, i}
							<li class:correta={mostrarResposta && i === qActual.perguntas[perguntaAtual].correta}>
								{op}
								{#if mostrarResposta && i === qActual.perguntas[perguntaAtual].correta}
									<span class="check" aria-label="Resposta correta"> ✓</span>
								{/if}
							</li>
						{/each}
					</ol>
				</div>

				<div class="palco-controles">
					<button onclick={anterior} disabled={perguntaAtual === 0} aria-label="Pergunta anterior">← Anterior</button>
					<button class="btn-resposta" onclick={() => mostrarResposta = !mostrarResposta} aria-pressed={mostrarResposta}>
						{mostrarResposta ? 'Esconder resposta' : 'Revelar resposta'}
					</button>
					<button onclick={proxima} disabled={perguntaAtual === qActual.perguntas.length - 1} aria-label="Próxima pergunta">Próxima →</button>
				</div>

				<p class="atalhos">
					Atalhos: <kbd>←</kbd> <kbd>→</kbd> navegar · <kbd>Espaço</kbd> próxima · <kbd>R</kbd> revelar resposta
				</p>
			</div>
		</section>
	{:else}
		<section class="folha-aviso">
			<p>📄 A pré-visualização da folha de respostas está pronta abaixo. Use <kbd>Ctrl</kbd>+<kbd>P</kbd> (ou <kbd>Cmd</kbd>+<kbd>P</kbd>) para imprimir uma folha por aluno.</p>
		</section>
	{/if}
</main>

{#if modoAtivo === 'folha'}
	<div class="folha-area">
		<article class="folha" id="folha-imprimir">
			<header class="folha-cabecalho">
				<div>
					<h2>Avaliação NavegaSeguro — {qActual.faixa}</h2>
					<p class="folha-sub">{qActual.idades} · {qActual.perguntas.length} perguntas</p>
				</div>
				<div class="folha-id">
					<p><strong>Nome:</strong> _____________________________</p>
					<p><strong>Turma:</strong> _________ <strong>Data:</strong> ____ / ____ / ______</p>
				</div>
			</header>

			<p class="instrucoes-folha">Instruções: para cada pergunta, assinala com um círculo a letra (A, B ou C) da resposta que consideras correta.</p>

			<ol class="folha-perguntas">
				{#each qActual.perguntas as p, i}
					<li>
						<p class="folha-pergunta-texto">{p.q}</p>
						<ol class="folha-opcoes" type="A">
							{#each p.opcoes as op}<li>{op}</li>{/each}
						</ol>
					</li>
				{/each}
			</ol>

			<footer class="folha-rodape">
				<p>NavegaSeguro · navegaseguro.pages.dev · Recurso gratuito para uso escolar</p>
			</footer>
		</article>

		<article class="folha gabarito">
			<header class="folha-cabecalho">
				<h2>🔑 Gabarito (apenas para o professor)</h2>
			</header>
			<table class="tabela-gabarito">
				<thead>
					<tr><th>Pergunta</th><th>Resposta</th></tr>
				</thead>
				<tbody>
					{#each qActual.perguntas as p, i}
						<tr>
							<td>{i + 1}</td>
							<td><strong>{String.fromCharCode(65 + p.correta)}</strong> — {p.opcoes[p.correta]}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</article>
	</div>
{/if}

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 1000px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.85); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.voltar:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; border-radius: 2px; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.85); max-width: 580px; margin: 0 auto; }

	main { padding: 2rem 1.5rem 4rem; }

	.config { display: grid; gap: 2rem; margin-bottom: 2.5rem; }
	.config-bloco h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.75rem;
	}

	.faixas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.75rem;
	}
	.faixa-btn {
		background: #fff;
		border: 2px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1rem;
		text-align: left;
		font-family: inherit;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		transition: border-color 0.15s, background 0.15s;
	}
	.faixa-btn:hover { border-color: var(--cor); }
	.faixa-btn:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.faixa-btn.ativa { border-color: var(--cor); background: color-mix(in srgb, var(--cor) 8%, #fff); }
	.faixa-btn strong { font-size: 1rem; color: #1a1a2e; }
	.faixa-btn span { font-size: 0.82rem; color: #555; }
	.faixa-btn .nperguntas { font-size: 0.75rem; color: #888; margin-top: 0.25rem; }

	.modos { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
	.modo-btn {
		background: #fff;
		border: 2px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.1rem;
		text-align: left;
		font-family: inherit;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
	}
	.modo-btn:hover { border-color: #0984E3; }
	.modo-btn:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.modo-btn.ativo { border-color: #0984E3; background: #f0f7ff; }
	.modo-btn span:first-child { font-size: 1.5rem; display: block; margin-bottom: 0.25rem; }
	.modo-btn strong { display: block; font-size: 1rem; color: #1a1a2e; margin-bottom: 0.2rem; }
	.modo-btn p { font-size: 0.85rem; color: #555; line-height: 1.45; }

	.palco {
		background: #fff;
		border: 2px solid var(--cor);
		border-radius: 1rem;
		padding: 2rem;
		min-height: 500px;
		display: flex;
		flex-direction: column;
	}
	.palco-cabecalho {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 1rem;
		border-bottom: 1px solid #f0f0f0;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.palco-faixa { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1rem; color: var(--cor); }
	.palco-progresso { font-size: 0.9rem; color: #555; font-weight: 600; }

	.palco-pergunta { flex: 1; padding: 1.5rem 0; }
	.palco-pergunta .numero {
		font-family: 'Nunito', sans-serif;
		font-size: 3rem;
		font-weight: 900;
		color: var(--cor);
		opacity: 0.3;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	.palco-pergunta h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.6rem;
		font-weight: 800;
		color: #1a1a2e;
		line-height: 1.35;
		margin-bottom: 1.5rem;
	}
	.opcoes-palco {
		list-style-position: inside;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.opcoes-palco li {
		font-size: 1.15rem;
		padding: 0.85rem 1.1rem;
		border: 2px solid #e5e7eb;
		border-radius: 0.5rem;
		color: #1a1a2e;
		transition: all 0.2s;
	}
	.opcoes-palco li.correta {
		background: #e8fff8;
		border-color: #1DD1A1;
		color: #0a5a3e;
		font-weight: 600;
	}
	.check { font-weight: 900; color: #1DD1A1; font-size: 1.4rem; }

	.palco-controles {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		margin-top: 1.5rem;
		flex-wrap: wrap;
	}
	.palco-controles button {
		background: #fff;
		border: 2px solid #e5e7eb;
		border-radius: 999px;
		padding: 0.6rem 1.4rem;
		font-family: inherit;
		font-weight: 600;
		font-size: 0.95rem;
		color: #1a1a2e;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
	}
	.palco-controles button:hover:not(:disabled) { border-color: #0984E3; }
	.palco-controles button:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.palco-controles button:disabled { opacity: 0.4; cursor: not-allowed; }
	.btn-resposta { background: var(--cor) !important; border-color: var(--cor) !important; color: #fff !important; }
	.btn-resposta:focus-visible { outline-color: var(--cor) !important; }

	.atalhos {
		text-align: center;
		font-size: 0.82rem;
		color: #555;
		margin-top: 1rem;
	}
	kbd {
		display: inline-block;
		background: #f0f4ff;
		border: 1px solid #c0d0e0;
		border-radius: 0.25rem;
		padding: 0.05rem 0.4rem;
		font-family: 'Inter', monospace;
		font-size: 0.78rem;
		color: #1a1a2e;
		margin: 0 0.1rem;
	}

	.folha-aviso {
		background: #f8faff;
		border: 1px solid #d0daff;
		border-radius: 0.75rem;
		padding: 1rem 1.25rem;
		color: #1a1a2e;
		font-size: 0.92rem;
	}

	.folha-area { padding: 0 1.5rem 4rem; max-width: 900px; margin: 0 auto; }
	.folha {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 2rem;
		margin-bottom: 2rem;
		page-break-after: always;
	}
	.folha-cabecalho { padding-bottom: 1rem; border-bottom: 2px solid #1a1a2e; margin-bottom: 1.25rem; }
	.folha h2 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1.35rem; color: #1a1a2e; margin-bottom: 0.25rem; }
	.folha-sub { font-size: 0.85rem; color: #555; margin-bottom: 0.75rem; }
	.folha-id p { font-size: 0.95rem; line-height: 2; color: #333; }
	.instrucoes-folha {
		background: #f8faff;
		padding: 0.7rem 1rem;
		border-left: 4px solid #0984E3;
		border-radius: 0.3rem;
		font-size: 0.9rem;
		color: #333;
		margin-bottom: 1.5rem;
	}
	.folha-perguntas { padding-left: 1.6rem; }
	.folha-perguntas > li { margin-bottom: 1.25rem; }
	.folha-pergunta-texto { font-size: 0.98rem; color: #1a1a2e; font-weight: 600; margin-bottom: 0.4rem; }
	.folha-opcoes { padding-left: 1.6rem; line-height: 1.8; }
	.folha-opcoes li { font-size: 0.93rem; color: #333; }
	.folha-rodape {
		margin-top: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid #f0f0f0;
		text-align: center;
	}
	.folha-rodape p { font-size: 0.78rem; color: #777; }

	.gabarito { background: #fffaf5; border-color: #ffd0a0; }
	.gabarito h2 { color: #c0392b; }
	.tabela-gabarito { width: 100%; border-collapse: collapse; }
	.tabela-gabarito th, .tabela-gabarito td {
		padding: 0.55rem 0.75rem;
		text-align: left;
		border-bottom: 1px solid #f0e0d0;
		font-size: 0.92rem;
	}
	.tabela-gabarito th { background: #fff; font-weight: 700; color: #555; }
	.tabela-gabarito td:first-child { width: 80px; font-weight: 700; }

	.sr-only {
		position: absolute;
		width: 1px; height: 1px;
		padding: 0; margin: -1px;
		overflow: hidden; clip: rect(0, 0, 0, 0);
		white-space: nowrap; border: 0;
	}

	@media print {
		.no-print { display: none !important; }
		body, main { background: #fff !important; padding: 0 !important; }
		.folha-area { padding: 0; max-width: none; }
		.folha {
			border: none;
			padding: 0.5cm 0;
			margin: 0;
		}
		.folha h2 { color: #000 !important; }
		.gabarito { background: #fff !important; }
		.instrucoes-folha { background: #f5f5f5 !important; border-left-color: #000 !important; }
	}

	@media (max-width: 700px) {
		.modos { grid-template-columns: 1fr; }
		.palco-pergunta h3 { font-size: 1.3rem; }
		.opcoes-palco li { font-size: 1rem; }
	}
</style>
