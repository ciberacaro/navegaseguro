<script>
	const fichas = [
		{
			id: 'pre',
			faixa: 'Pré-Escolar',
			idades: '3–5 anos',
			cor: '#FF9F43',
			objetivos: [
				'Reconhecer que existem regras para usar o tablet/telemóvel',
				'Saber identificar quem é um adulto de confiança',
				'Compreender que não se fala com estranhos online'
			],
			exercicios: [
				{
					titulo: 'Pinta a regra certa',
					tipo: 'pintura',
					enunciado: 'Pinta o desenho onde a criança está a fazer a coisa certa.',
					itens: [
						'😊 Anica pede ao pai antes de abrir o tablet.',
						'😟 O Tomás abre o tablet sem dizer a ninguém.',
						'😊 A Inês mostra à mãe uma mensagem estranha.',
						'😟 O Rui responde a um desconhecido que lhe pediu uma foto.'
					]
				},
				{
					titulo: 'Liga com um traço',
					tipo: 'ligar',
					enunciado: 'Liga cada situação à pessoa a quem deves contar.',
					colunaA: ['Vi uma imagem assustadora', 'Alguém pediu-me uma foto', 'Não consigo sair do jogo', 'Apareceu uma mensagem estranha'],
					colunaB: ['A mãe ou o pai', 'A professora', 'O avô ou a avó', 'Um adulto da família']
				}
			]
		},
		{
			id: 'ciclo1',
			faixa: '1.º Ciclo',
			idades: '6–10 anos',
			cor: '#48DBFB',
			objetivos: [
				'Criar palavras-passe simples mas seguras',
				'Identificar mensagens suspeitas',
				'Saber a quem pedir ajuda em caso de dúvida'
			],
			exercicios: [
				{
					titulo: 'Verdadeiro ou falso?',
					tipo: 'vf',
					enunciado: 'Marca V (verdadeiro) ou F (falso) em cada afirmação.',
					itens: [
						{ frase: 'Devo usar a mesma palavra-passe em todos os sites.', resposta: 'F' },
						{ frase: 'A minha palavra-passe pode ter o nome do meu animal.', resposta: 'F' },
						{ frase: 'Devo contar aos pais se vir alguma coisa que me incomode.', resposta: 'V' },
						{ frase: 'Posso aceitar pedidos de amizade de pessoas que não conheço.', resposta: 'F' },
						{ frase: 'Se um site me pede a morada, devo perguntar a um adulto.', resposta: 'V' }
					]
				},
				{
					titulo: 'Inventa uma palavra-passe forte',
					tipo: 'criacao',
					enunciado: 'Escreve uma palavra-passe que junte: 3 palavras + 1 número + 1 símbolo. Não uses o teu nome nem a data de nascimento.',
					exemplo: 'Ex: gato-rapido-noite-7! (não uses esta — inventa uma tua)'
				},
				{
					titulo: 'Pinta o SMS suspeito',
					tipo: 'identificacao',
					enunciado: 'Pinta o quadrado do SMS que parece falso e diz porquê.',
					itens: [
						'📱 "Olá filho, sou a mãe. Vens jantar a casa?"',
						'📱 "GANHASTE 1000€! Clica AQUI para receber: ganho-premio.com"',
						'📱 "A tua encomenda chega amanhã. CTT"',
						'📱 "Urgente: dá-me o teu PIN para confirmar prémio."'
					]
				}
			]
		},
		{
			id: 'ciclo2',
			faixa: '2.º Ciclo',
			idades: '10–12 anos',
			cor: '#1DD1A1',
			objetivos: [
				'Configurar privacidade nas redes sociais',
				'Distinguir entre informação pública e privada',
				'Reconhecer técnicas de manipulação em jogos online'
			],
			exercicios: [
				{
					titulo: 'O que devo partilhar?',
					tipo: 'tabela',
					enunciado: 'Para cada informação, marca se podes partilhá-la publicamente (P), só com amigos (A) ou nunca (N).',
					itens: [
						{ frase: 'A minha morada completa', resposta: 'N' },
						{ frase: 'A escola que frequento', resposta: 'A' },
						{ frase: 'O meu desporto favorito', resposta: 'P' },
						{ frase: 'O número de telemóvel', resposta: 'N' },
						{ frase: 'Fotos minhas e dos meus amigos', resposta: 'A' },
						{ frase: 'O número do cartão de cidadão', resposta: 'N' },
						{ frase: 'O nome da equipa de futebol que apoio', resposta: 'P' }
					]
				},
				{
					titulo: 'Auditoria à minha conta',
					tipo: 'lista',
					enunciado: 'No teu telemóvel, abre a conta que mais usas (Instagram, TikTok...) e responde:',
					itens: [
						'A conta está pública ou privada?',
						'Quantos seguidores conheces pessoalmente?',
						'A localização está ativada nas tuas publicações?',
						'A última vez que mudaste a palavra-passe foi há quanto tempo?',
						'Tens autenticação em dois passos?'
					]
				},
				{
					titulo: 'Reconhece a manipulação',
					tipo: 'analise',
					enunciado: 'Em cada situação num jogo online, identifica o que está errado e o que farias.',
					itens: [
						'"Dou-te 5000 V-Bucks se me deres a tua password" — _________________',
						'"És o meu melhor amigo, mas não digas aos teus pais que falamos" — _________________',
						'"Envia uma foto tua para confirmar que és tu" — _________________'
					]
				}
			]
		},
		{
			id: 'ciclo3',
			faixa: '3.º Ciclo',
			idades: '12–15 anos',
			cor: '#FF6B6B',
			objetivos: [
				'Reconhecer cyberbullying e saber agir',
				'Identificar sinais de grooming e sextorsão',
				'Compreender a permanência do conteúdo digital'
			],
			exercicios: [
				{
					titulo: 'Análise de caso',
					tipo: 'caso',
					enunciado: 'Lê o caso e responde às questões.',
					caso: 'A Marta, 14 anos, conheceu um rapaz chamado "Diogo, 15" num jogo online. Conversaram durante semanas. O Diogo começou a pedir-lhe fotos cada vez mais íntimas. Quando a Marta recusou enviar mais, ameaçou divulgar as anteriores na escola.',
					questoes: [
						'Que sinais de alarme estavam presentes desde o início?',
						'O que deveria a Marta ter feito quando começaram os pedidos?',
						'Agora que recebeu a ameaça, o que deve fazer?',
						'Que entidades a podem ajudar? Indica pelo menos 2.'
					]
				},
				{
					titulo: 'A pegada que deixas',
					tipo: 'reflexao',
					enunciado: 'Procura o teu nome no Google e em Imagens. Responde:',
					itens: [
						'O que encontraste? Está conforme o que querias que aparecesse?',
						'Há fotos tuas publicadas por outros? Tens autorização sobre elas?',
						'Se um empregador procurar o teu nome daqui a 5 anos, o que vai encontrar?',
						'O que mudarias agora?'
					]
				},
				{
					titulo: 'Resposta a cyberbullying',
					tipo: 'roleplay',
					enunciado: 'Em pares, simulem este diálogo (5 min cada um):',
					itens: [
						'Pessoa A: "Um colega está a ser ridicularizado num grupo de WhatsApp da turma."',
						'Pessoa B: "O que farias? Sairias do grupo? Falarias com o colega? Reportarias à escola?"',
						'Inverte os papéis e discute as diferenças de abordagem.'
					]
				}
			]
		},
		{
			id: 'sec',
			faixa: 'Secundário',
			idades: '15–18 anos',
			cor: '#A29BFE',
			objetivos: [
				'Identificar fraudes de investimento e esquemas em pirâmide',
				'Compreender deepfakes e desinformação',
				'Gerir a identidade digital com vista ao futuro profissional'
			],
			exercicios: [
				{
					titulo: 'Investigação de plataforma',
					tipo: 'pesquisa',
					enunciado: 'Escolhe um anúncio de investimento que tenhas visto recentemente (Instagram, TikTok). Pesquisa:',
					itens: [
						'A empresa está registada na CMVM (cmvm.pt)?',
						'Quem são os fundadores? Existem no LinkedIn?',
						'Há reclamações em fóruns ou no Portal da Queixa?',
						'Que promessas de retorno faz? Acima de 5% ao ano é suspeito.',
						'Conclusão: investirias? Porquê (não)?'
					]
				},
				{
					titulo: 'Verdadeiro ou IA?',
					tipo: 'vf',
					enunciado: 'O professor mostrará 5 imagens/vídeos. Indica em cada um se é real (R) ou gerado por IA (IA) e justifica em uma frase.',
					itens: []
				},
				{
					titulo: 'Termos e condições',
					tipo: 'leitura',
					enunciado: 'Escolhe uma aplicação que uses muito. Lê os termos e responde:',
					itens: [
						'Que dados a aplicação recolhe sobre ti?',
						'Com quem partilha esses dados?',
						'Quanto tempo guarda os dados após apagares a conta?',
						'A aplicação opera sob o RGPD ou outra jurisdição?',
						'Se descobrisses isto antes de instalar, terias instalado?'
					]
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Fichas de trabalho — NavegaSeguro</title>
	<meta name="description" content="Fichas de exercícios imprimíveis para cada faixa etária, sobre cibersegurança." />
</svelte:head>

<div class="topo no-print">
	<div class="container">
		<a href="/educadores" class="voltar">← Pais e Educadores</a>
		<h1>📝 Fichas de trabalho</h1>
		<p>Exercícios prontos a imprimir, por faixa etária. Cada ficha está alinhada com os planos de sessão de 45 minutos.</p>
	</div>
</div>

<main class="container">
	<div class="instrucoes no-print">
		<h2>Como usar</h2>
		<ol>
			<li>Escolha a faixa etária que precisa.</li>
			<li>Use <kbd>Ctrl</kbd>+<kbd>P</kbd> (ou <kbd>Cmd</kbd>+<kbd>P</kbd> no Mac) para imprimir.</li>
			<li>Na pré-visualização, escolha "Guardar como PDF" para arquivar.</li>
			<li>As fichas estão otimizadas para A4 a preto-e-branco.</li>
		</ol>
		<p class="nota">Pode imprimir só uma faixa: na pré-visualização do browser, escolha o intervalo de páginas correspondente.</p>
	</div>

	{#each fichas as f}
		<article class="ficha" style="--cor: {f.cor}" id="ficha-{f.id}">
			<header class="ficha-cabecalho">
				<div>
					<span class="ficha-faixa">{f.faixa}</span>
					<span class="ficha-idades">{f.idades}</span>
				</div>
				<div class="ficha-meta">
					<strong>Nome:</strong> ___________________________
					<strong>Data:</strong> ____ / ____ / ______
				</div>
			</header>

			<section class="objetivos">
				<h3>Objetivos da ficha</h3>
				<ul>
					{#each f.objetivos as o}<li>{o}</li>{/each}
				</ul>
			</section>

			{#each f.exercicios as ex, i}
				<section class="exercicio">
					<h3>Exercício {i + 1} — {ex.titulo}</h3>
					<p class="enunciado">{ex.enunciado}</p>

					{#if ex.tipo === 'pintura' || ex.tipo === 'identificacao'}
						<ul class="opcoes">
							{#each ex.itens as item}
								<li class="opcao-pintura">
									<span class="quadrado" aria-hidden="true"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					{:else if ex.tipo === 'ligar'}
						<div class="ligar">
							<ul>{#each ex.colunaA as a}<li>{a} ____</li>{/each}</ul>
							<ul>{#each ex.colunaB as b}<li>____ {b}</li>{/each}</ul>
						</div>
					{:else if ex.tipo === 'vf' || ex.tipo === 'tabela'}
						<table>
							<thead>
								<tr><th>Afirmação</th><th class="resp-col">Resposta</th></tr>
							</thead>
							<tbody>
								{#each ex.itens as item}
									<tr>
										<td>{typeof item === 'string' ? item : item.frase}</td>
										<td class="resp-col">_____</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{:else if ex.tipo === 'criacao'}
						<div class="linha-resposta-grande">
							_______________________________________________
						</div>
						{#if ex.exemplo}<p class="hint">{ex.exemplo}</p>{/if}
					{:else if ex.tipo === 'lista' || ex.tipo === 'reflexao' || ex.tipo === 'pesquisa' || ex.tipo === 'analise' || ex.tipo === 'leitura' || ex.tipo === 'roleplay'}
						<ol class="lista-resposta">
							{#each ex.itens as item}
								<li>
									<p>{item}</p>
									<div class="linha-resposta">_______________________________________________</div>
									<div class="linha-resposta">_______________________________________________</div>
								</li>
							{/each}
						</ol>
					{:else if ex.tipo === 'caso'}
						<div class="caso-texto">
							<p>{ex.caso}</p>
						</div>
						<ol class="lista-resposta">
							{#each ex.questoes as q}
								<li>
									<p>{q}</p>
									<div class="linha-resposta">_______________________________________________</div>
									<div class="linha-resposta">_______________________________________________</div>
								</li>
							{/each}
						</ol>
					{/if}
				</section>
			{/each}

			<footer class="ficha-rodape">
				<p>NavegaSeguro — Recurso gratuito, sem registo · navegaseguro.pages.dev</p>
			</footer>
		</article>
	{/each}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.85); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.voltar:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; border-radius: 2px; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.85); max-width: 580px; margin: 0 auto; }

	main { padding: 2rem 1.5rem 4rem; }

	.instrucoes {
		background: #f8faff;
		border: 1px solid #d0daff;
		border-radius: 0.75rem;
		padding: 1.5rem;
		margin-bottom: 2.5rem;
	}
	.instrucoes h2 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.6rem; color: #1a1a2e; }
	.instrucoes ol { padding-left: 1.4rem; line-height: 1.7; color: #333; font-size: 0.92rem; }
	.instrucoes .nota { margin-top: 0.75rem; font-size: 0.85rem; color: #555; }
	kbd {
		display: inline-block;
		background: #fff;
		border: 1px solid #c0d0e0;
		border-radius: 0.25rem;
		padding: 0.05rem 0.4rem;
		font-family: 'Inter', monospace;
		font-size: 0.82rem;
	}

	.ficha {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-top: 5px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.75rem;
		margin-bottom: 2rem;
		page-break-after: always;
	}

	.ficha-cabecalho {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		padding-bottom: 0.85rem;
		margin-bottom: 1.25rem;
		border-bottom: 2px solid #f0f0f0;
		flex-wrap: wrap;
	}
	.ficha-faixa {
		font-family: 'Nunito', sans-serif;
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--cor);
		display: block;
	}
	.ficha-idades { font-size: 0.85rem; color: #555; }
	.ficha-meta { font-size: 0.9rem; color: #333; line-height: 2.2; }
	.ficha-meta strong { margin-right: 0.5rem; margin-left: 0.75rem; }
	.ficha-meta strong:first-child { margin-left: 0; }

	.objetivos {
		background: #f8faff;
		border-left: 4px solid var(--cor);
		padding: 0.85rem 1rem;
		border-radius: 0.4rem;
		margin-bottom: 1.5rem;
	}
	.objetivos h3 {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #555;
		margin-bottom: 0.4rem;
	}
	.objetivos ul { padding-left: 1.3rem; font-size: 0.9rem; color: #333; line-height: 1.55; }

	.exercicio { margin-bottom: 1.75rem; }
	.exercicio h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 0.4rem;
	}
	.enunciado { font-size: 0.92rem; color: #333; margin-bottom: 0.85rem; line-height: 1.5; }

	.opcoes { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
	.opcao-pintura {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.95rem;
		color: #333;
	}
	.quadrado {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border: 2px solid #333;
		border-radius: 0.25rem;
		flex-shrink: 0;
	}

	.ligar { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
	.ligar ul { list-style: none; padding: 0; }
	.ligar li { padding: 0.5rem 0; border-bottom: 1px dashed #ddd; font-size: 0.92rem; }

	table { width: 100%; border-collapse: collapse; }
	th, td {
		padding: 0.6rem 0.75rem;
		text-align: left;
		border-bottom: 1px solid #e5e7eb;
		font-size: 0.92rem;
	}
	th { background: #f8faff; font-weight: 700; font-size: 0.85rem; color: #555; }
	.resp-col { text-align: center; width: 100px; }

	.linha-resposta, .linha-resposta-grande {
		font-family: 'Inter', sans-serif;
		color: #888;
		letter-spacing: 0.1em;
		margin: 0.5rem 0;
		overflow: hidden;
	}
	.linha-resposta-grande { font-size: 1.1rem; padding: 0.5rem 0; }
	.hint { font-size: 0.82rem; color: #666; font-style: italic; margin-top: 0.4rem; }

	.lista-resposta { padding-left: 1.4rem; }
	.lista-resposta li { margin-bottom: 1rem; }
	.lista-resposta p { font-size: 0.92rem; color: #333; margin-bottom: 0.25rem; }

	.caso-texto {
		background: #fff8e1;
		border-left: 4px solid #FF9F43;
		padding: 0.85rem 1rem;
		border-radius: 0.4rem;
		margin-bottom: 1rem;
	}
	.caso-texto p { font-size: 0.92rem; color: #333; line-height: 1.6; font-style: italic; }

	.ficha-rodape {
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid #f0f0f0;
		text-align: center;
	}
	.ficha-rodape p { font-size: 0.78rem; color: #777; }

	@media print {
		.no-print { display: none !important; }
		body, main { background: #fff !important; padding: 0 !important; }
		.container { max-width: none; padding: 0; }
		.ficha {
			border: none;
			border-top: 3pt solid #000;
			padding: 0.5cm 0;
			page-break-after: always;
			margin: 0;
		}
		.ficha-faixa { color: #000 !important; }
		.objetivos { border-left-color: #000 !important; background: #f5f5f5 !important; }
		.caso-texto { border-left-color: #000 !important; }
		table th { background: #f5f5f5 !important; }
		.exercicio { page-break-inside: avoid; }
		* { box-shadow: none !important; }
	}

	@media (max-width: 600px) {
		.ligar { grid-template-columns: 1fr; gap: 1rem; }
		.ficha-cabecalho { flex-direction: column; }
	}
</style>
