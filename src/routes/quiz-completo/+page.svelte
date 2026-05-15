<script>
	const faixas = [
		{
			titulo: 'Pré-Escolar & 1.º Ciclo',
			emoji: '🧸',
			cor: '#FF9F43',
			perguntas: [
				{ p: 'O teu amigo pede-te a palavra-passe do jogo. O que fazes?', o: ['Dou — é meu amigo', 'Digo que não, é segredo', 'Dou se ele prometer não contar', 'Mudamos as palavras-passe'], c: 1, e: 'A palavra-passe é sempre segredo, mesmo entre amigos.' },
				{ p: 'Alguém desconhecido fala contigo num jogo online. Tu...', o: ['Falo normalmente', 'Chamo um adulto imediatamente', 'Digo o nome da minha escola', 'Pergunto o nome dele'], c: 1, e: 'Estranhos online são como estranhos na rua — chamamos sempre um adulto.' },
				{ p: 'O tablet mostra uma coisa assustadora. Tu...', o: ['Continuo a ver', 'Chamo logo um adulto', 'Tapo os olhos', 'Subo o volume'], c: 1, e: 'Chamar um adulto é sempre a melhor resposta quando algo te incomoda online.' },
				{ p: 'Qual destas informações NUNCA deves partilhar online?', o: ['Cor favorita', 'Nome do cão', 'Morada e escola', 'Jogo favorito'], c: 2, e: 'Morada e escola permitem a um estranho encontrar-te na vida real.' },
				{ p: 'Antes de dormir, o adulto pede para parar o tablet. Tu...', o: ['Continuo escondido', 'Faço birra', 'Paro e vou dormir', 'Finjo que não ouvi'], c: 2, e: 'A luz do ecrã dificulta o sono. Parar é a decisão certa.' }
			]
		},
		{
			titulo: '2.º Ciclo (5.º e 6.º ano)',
			emoji: '📱',
			cor: '#1DD1A1',
			perguntas: [
				{ p: 'Tens conta no Instagram. O que é mais seguro?', o: ['Perfil público para ter seguidores', 'Perfil privado com aprovação', 'Aceitar todos os pedidos', 'Usar nome falso e perfil público'], c: 1, e: 'Perfil privado + aprovação manual = controlo total sobre quem te vê.' },
				{ p: 'Um jogo oferece item raro se deres o teu email e palavra-passe. Tu...', o: ['Aceito — é grátis!', 'Crio conta nova para isso', 'Recuso — jogos legítimos não pedem palavra-passe', 'Pergunto aos colegas'], c: 2, e: 'Nenhum serviço legítimo pede a tua palavra-passe. É phishing.' },
				{ p: 'Para ter palavras-passe seguras, deves...', o: ['Usar a mesma em todo o lado', 'Ter palavras-passe diferentes por conta', 'Usar a data de nascimento', 'Só letras minúsculas'], c: 1, e: 'Palavras-passe únicas por conta — se uma for comprometida, as outras ficam seguras.' },
				{ p: 'No grupo de turma alguém partilha foto embaraçosa de um colega. Tu...', o: ['Reencaminho', 'Rio mas não respondo', 'Conto a um adulto', 'Apago da minha conversa'], c: 2, e: 'Contar a um adulto é o mais eficaz. Reencaminhar pode ser crime mesmo com 11 anos.' },
				{ p: 'Para receber por MB Way, o comprador pede o teu NIF. É...', o: ['Normal para configurar', 'Fraude — para receber só precisas do nº de telemóvel', 'Opcional mas facilita', 'Necessário para valores altos'], c: 1, e: 'Nunca dês o NIF para receber MB Way. Isso é a fraude do "falso comprador".' }
			]
		},
		{
			titulo: '3.º Ciclo (7.º ao 9.º ano)',
			emoji: '⚡',
			cor: '#FF6B6B',
			perguntas: [
				{ p: 'Alguém ameaça publicar imagens tuas. Tu...', o: ['Envio mais para ele parar', 'Pago o que pede', 'Bloqueio, guardo provas e ligo 800 21 90 90', 'Apago tudo e finjo que não aconteceu'], c: 2, e: 'Nunca cedes a chantagem. Guardar provas e pedir ajuda é a única saída.' },
				{ p: 'O namorado quer a palavra-passe do teu Instagram. Isso é...', o: ['Normal entre quem se ama', 'Aceitável com reciprocidade', 'Sinal de controlo — não é saudável', 'Depende da confiança'], c: 2, e: 'Pedir contas de outra pessoa é controlo, não amor. Relações saudáveis têm confiança sem vigilância.' },
				{ p: 'A verificação em dois passos (2FA) serve para...', o: ['Tornar o login mais lento', 'Proteger a conta mesmo que alguém saiba a tua palavra-passe', 'Receber mais notificações', 'Só funciona em emails'], c: 1, e: 'Com 2FA, roubar a palavra-passe já não chega. É a maior proteção que tens.' },
				{ p: 'Um "amigo" online pede para guardares segredo dos teus pais. É...', o: ['Sinal de confiança', 'Sinal grave de aliciamento — conta a um adulto já', 'Dependia do assunto', 'Normal entre amigos próximos'], c: 1, e: 'Pedir segredos dos pais é tática clássica de grooming. Conta sempre.' },
				{ p: 'Imagens íntimas falsas de um colega geradas por IA são...', o: ['Inofensivas se forem falsas', 'Crime em Portugal, mesmo sendo falsas', 'Só problema se se espalharem', 'Depende de quem fez'], c: 1, e: 'Deepfakes íntimos de menores podem ser equiparados a pornografia de menores. É crime.' }
			]
		},
		{
			titulo: 'Secundário (10.º ao 12.º ano)',
			emoji: '🎯',
			cor: '#A29BFE',
			perguntas: [
				{ p: 'Anúncio promete 500€/semana em crypto sem experiência. Probabilidade de ser legítimo?', o: ['Alta — há traders bons', 'Quase zero — é Ponzi ou phishing', 'Média se parecer profissional', 'Depende do país'], c: 1, e: 'Investimentos com retornos garantidos são sempre fraudes. Sem exceção.' },
				{ p: 'Para verificar se uma plataforma de investimento é legal em Portugal...', o: ['Avaliações no Google', 'Instagram da empresa', 'Registo na CMVM (cmvm.pt)', 'Fóruns de utilizadores'], c: 2, e: 'A CMVM é o único registo válido. Sem registo, é ilegal operar em Portugal.' },
				{ p: 'Que tipo de 2FA é mais seguro?', o: ['SMS', 'Aplicação de autenticação (Authy)', 'Email', 'Não faz diferença'], c: 1, e: 'Apps de autenticação são imunes a SIM swap. SMS é o método mais fraco.' },
				{ p: 'O melhor uso académico de IA é...', o: ['Pedir o trabalho completo e copiar', 'Usar para ideias e estrutura — escrevendo tu', 'Não usar nada', 'Pedir e mudar algumas palavras'], c: 1, e: 'IA como assistente — ideias, estrutura, revisão. Escrever por ti é desonestidade académica.' },
				{ p: 'O RGPD dá-te direito a pedir apagamento dos teus dados. A empresa tem...', o: ['Direito a recusar', 'Até 30 dias para responder, sem custos', '6 meses', '1 ano'], c: 1, e: 'Direito ao esquecimento — 30 dias, gratuitamente. Em incumprimento, queixa à CNPD.' }
			]
		},
		{
			titulo: 'Adultos',
			emoji: '👔',
			cor: '#0984E3',
			perguntas: [
				{ p: 'SMS: "CTT — pacote retido, 2,99€. Pague em [link]". O que faz?', o: ['Pago — são só 2,99€', 'Clico para verificar', 'Ignoro e apago — é phishing', 'Reencaminho para amigos'], c: 2, e: 'Os CTT nunca pedem pagamentos por SMS com link. É o esquema mais comum em Portugal.' },
				{ p: 'O banco liga a pedir o código do cartão. O que faz?', o: ['Confirmo — é o banco', 'Peço o nome e confirmo', 'Desligo e ligo ao número do verso do cartão', 'Confirmo só os últimos 4 dígitos'], c: 2, e: 'Bancos nunca pedem dados por chamada não solicitada. Desligue e ligue pelo número oficial.' },
				{ p: 'Email do "CEO" pede transferência urgente de 30.000€. O que faz?', o: ['Transfiro — é o CEO', 'Confirmo por telefone com o CEO', 'Pergunto por email', 'Transfiro mas peço comprovativo'], c: 1, e: 'Business Email Compromise. Validação por outro canal antes de qualquer transferência.' },
				{ p: 'App de namoro: 3 meses de mensagens, nunca videochamada, pede 2.000€. É...', o: ['Pode ser real', 'Burla romântica — nunca empreste', 'Empresto se assinar contrato', 'Mando metade'], c: 1, e: 'Padrão clássico de burla romântica. Nunca transfira a quem nunca conheceu pessoalmente.' },
				{ p: 'O que é mais seguro como backup?', o: ['Não fazer backup', 'Backup manual ocasional', 'Backup automático na nuvem (Drive, iCloud)', 'Guardar só no computador'], c: 2, e: 'Backup automático na nuvem protege de ransomware, roubo e avaria. Configure hoje.' }
			]
		},
		{
			titulo: 'Seniores',
			emoji: '🌟',
			cor: '#6C5CE7',
			perguntas: [
				{ p: 'Ligação: "Avó, sou o Tiago, tive acidente, preciso 800€". O que faz?', o: ['Transfere imediatamente', 'Pergunta detalhes', 'Desliga e liga ao Tiago pelo número que tem', 'Pede o IBAN'], c: 2, e: 'Burla do "falso neto". Sempre desligar e ligar ao número que já conhece.' },
				{ p: '"Técnico da Microsoft" liga a pedir acesso ao computador. O que faz?', o: ['Deixo — a Microsoft é fiável', 'Peço o nome primeiro', 'Desligo — a Microsoft nunca liga assim', 'Desligo o computador'], c: 2, e: 'Nenhuma empresa de tecnologia liga a pedir acesso remoto. Sempre burlão.' },
				{ p: '"Ganhou 25.000€, pague 150€ de taxas para receber." É...', o: ['Provavelmente verdade', 'Burla — prémios não pedem taxas', 'Depende de quem organizou', 'Pergunto ao banco'], c: 1, e: 'Prémios legítimos nunca cobram taxas. Os 150€ perdem-se; os 25.000€ não existem.' },
				{ p: 'Para comprar online com segurança, deve...', o: ['Escolher o mais barato', 'Comprar em sites conhecidos com cadeado e https', 'Qualquer site profissional', 'Pagar por transferência'], c: 1, e: 'Sites conhecidos + https + cadeado = compra segura.' },
				{ p: 'Já caiu numa burla. O que deve fazer?', o: ['Ter vergonha e não contar', 'Ligar 800 21 90 90 e queixar na PSP/GNR', 'Resolver sozinho', 'Esperar que o dinheiro volte'], c: 1, e: 'Vergonha é o que os burlões querem. A queixa ajuda-o e ajuda a proteger outros.' }
			]
		}
	];

	let fase = $state('inicio'); // 'inicio' | 'quiz' | 'fim'
	let nome = $state('');
	let faixaIdx = $state(0);
	let perguntaIdx = $state(0);
	let selecionada = $state(null);
	let pontuacaoTotal = $state(0);
	let pontuacaoPorFaixa = $state([]);
	let mostrarExplicacao = $state(false);

	const totalPerguntas = faixas.reduce((s, f) => s + f.perguntas.length, 0);

	let perguntaGlobal = $derived(
		faixas.slice(0, faixaIdx).reduce((s, f) => s + f.perguntas.length, 0) + perguntaIdx
	);

	let faixaAtual = $derived(faixas[faixaIdx]);
	let perguntaAtual = $derived(faixaAtual?.perguntas[perguntaIdx]);

	function iniciar() {
		if (!nome.trim()) { nome = 'Participante'; }
		fase = 'quiz';
	}

	function escolher(idx) {
		if (selecionada !== null) return;
		selecionada = idx;
		mostrarExplicacao = true;
		if (idx === perguntaAtual.c) pontuacaoTotal++;
	}

	function proxima() {
		if (perguntaIdx + 1 < faixaAtual.perguntas.length) {
			perguntaIdx++;
		} else {
			pontuacaoPorFaixa = [...pontuacaoPorFaixa, {
				titulo: faixaAtual.titulo,
				emoji: faixaAtual.emoji,
				cor: faixaAtual.cor,
				acertos: faixaAtual.perguntas.filter((_, i) => i === perguntaIdx ? selecionada === _.c : false).length
			}];
			if (faixaIdx + 1 < faixas.length) {
				faixaIdx++;
				perguntaIdx = 0;
			} else {
				fase = 'fim';
			}
		}
		selecionada = null;
		mostrarExplicacao = false;
	}

	let percentagem = $derived(Math.round((pontuacaoTotal / totalPerguntas) * 100));
	let aprovado = $derived(percentagem >= 60);
	let dataHoje = new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<svelte:head>
	<title>Quiz Completo — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🏆 Quiz NavegaSeguro Completo</h1>
		<p>Percorre todas as faixas etárias e obtém o teu certificado</p>
	</div>
</div>

<main class="container">
	{#if fase === 'inicio'}
		<div class="inicio-card">
			<div class="intro-stats">
				<div class="stat"><strong>{faixas.length}</strong><span>faixas etárias</span></div>
				<div class="stat"><strong>{totalPerguntas}</strong><span>perguntas</span></div>
				<div class="stat"><strong>≥60%</strong><span>para certificado</span></div>
			</div>
			<p>Este quiz percorre todos os grupos do NavegaSeguro — desde o pré-escolar até aos seniores. Não precisas de pertencer a todas as faixas para participar: é uma forma de conhecer os riscos que afetam pessoas de todas as idades, incluindo a tua família.</p>
			<div class="nome-campo">
				<label for="nome">O teu nome (para o certificado)</label>
				<input id="nome" type="text" bind:value={nome} placeholder="Ex: Maria Silva" maxlength="60" />
			</div>
			<button class="btn-iniciar" onclick={iniciar}>Começar o quiz →</button>
		</div>

		<div class="faixas-preview">
			{#each faixas as f}
				<div class="preview-item" style="--cor: {f.cor}">
					<span>{f.emoji}</span>
					<span>{f.titulo}</span>
					<span class="preview-n">{f.perguntas.length} perguntas</span>
				</div>
			{/each}
		</div>

	{:else if fase === 'quiz'}
		<div class="quiz-wrap">
			<div class="progresso-global">
				<div class="prog-barra">
					<div class="prog-fill" style="width: {(perguntaGlobal / totalPerguntas) * 100}%; background: {faixaAtual.cor}"></div>
				</div>
				<span>{perguntaGlobal + 1} / {totalPerguntas}</span>
			</div>

			<div class="faixa-label" style="--cor: {faixaAtual.cor}">
				{faixaAtual.emoji} {faixaAtual.titulo}
			</div>

			<p class="pergunta-texto">{perguntaAtual.p}</p>

			<div class="opcoes">
				{#each perguntaAtual.o as opcao, i}
					<button
						class="opcao"
						class:correta={selecionada !== null && i === perguntaAtual.c}
						class:errada={selecionada === i && i !== perguntaAtual.c}
						onclick={() => escolher(i)}
						disabled={selecionada !== null}
					>{opcao}</button>
				{/each}
			</div>

			{#if mostrarExplicacao}
				<div class="explicacao">
					<strong>{selecionada === perguntaAtual.c ? '✅ Correto!' : '❌ Incorreto.'}</strong>
					<p>{perguntaAtual.e}</p>
					<button onclick={proxima} style="background: {faixaAtual.cor}">
						{perguntaGlobal + 1 < totalPerguntas ? 'Próxima →' : 'Ver resultado'}
					</button>
				</div>
			{/if}
		</div>

	{:else}
		<div class="resultado-wrap">
			<div class="score-geral" class:aprovado class:reprovado={!aprovado}>
				<span class="score-emoji">{aprovado ? '🏆' : '📚'}</span>
				<h2>{pontuacaoTotal}/{totalPerguntas} respostas corretas</h2>
				<p class="score-pct">{percentagem}%</p>
				<p>{aprovado ? 'Parabéns! Obtiveste o certificado NavegaSeguro.' : 'Não atingiste os 60% necessários. Revê o conteúdo e tenta de novo!'}</p>
			</div>

			{#if aprovado}
				<div class="certificado" id="certificado">
					<div class="cert-header">
						<span class="cert-logo">🛡️ NavegaSeguro</span>
					</div>
					<p class="cert-titulo">Certificado de Conclusão</p>
					<p class="cert-nome">{nome || 'Participante'}</p>
					<p class="cert-texto">concluiu com sucesso o percurso completo de sensibilização para cibersegurança, abrangendo todas as faixas etárias da plataforma NavegaSeguro.</p>
					<p class="cert-score">Pontuação: {pontuacaoTotal}/{totalPerguntas} ({percentagem}%)</p>
					<p class="cert-data">{dataHoje}</p>
					<div class="cert-rodape">
						<span>🇵🇹 Em português europeu · Gratuito · Sem publicidade</span>
					</div>
				</div>
				<button class="btn-imprimir" onclick={() => window.print()}>🖨️ Imprimir / Guardar como PDF</button>
			{/if}

			<button class="btn-repetir" onclick={() => { fase='inicio'; faixaIdx=0; perguntaIdx=0; pontuacaoTotal=0; pontuacaoPorFaixa=[]; selecionada=null; }}>
				↺ Tentar de novo
			</button>
		</div>
	{/if}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 750px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); }

	main { padding: 2.5rem 1.5rem; }

	.inicio-card {
		background: #fff;
		border-radius: 1rem;
		padding: 2rem;
		margin-bottom: 2rem;
		border: 1px solid #e5e7eb;
	}

	.intro-stats {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f8faff;
		border-radius: 0.75rem;
		padding: 1rem 1.5rem;
		flex: 1;
	}

	.stat strong {
		font-family: 'Nunito', sans-serif;
		font-size: 1.75rem;
		font-weight: 900;
		color: #0984E3;
	}

	.stat span { font-size: 0.8rem; color: #666; }

	.inicio-card p { color: #444; line-height: 1.6; margin-bottom: 1.5rem; }

	.nome-campo { margin-bottom: 1.5rem; }
	.nome-campo label { display: block; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.4rem; color: #333; }
	.nome-campo input {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 2px solid #e0e7ff;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-family: inherit;
		outline: none;
	}
	.nome-campo input:focus { border-color: #0984E3; }

	.btn-iniciar {
		background: #0984E3;
		color: white;
		border: none;
		border-radius: 0.75rem;
		padding: 0.9rem 2rem;
		font-size: 1.05rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		transition: opacity 0.2s;
	}
	.btn-iniciar:hover { opacity: 0.85; }

	.faixas-preview {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.preview-item {
		background: #fff;
		border-left: 4px solid var(--cor);
		border-radius: 0.5rem;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
	}

	.preview-n { margin-left: auto; color: #555; font-size: 0.8rem; }

	.quiz-wrap {
		background: #fff;
		border-radius: 1rem;
		padding: 2rem;
		border: 1px solid #e5e7eb;
	}

	.progresso-global {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.prog-barra { flex: 1; height: 8px; background: #eee; border-radius: 999px; overflow: hidden; }
	.prog-fill { height: 100%; border-radius: 999px; transition: width 0.4s ease, background 0.3s; }
	.progresso-global span { font-size: 0.8rem; color: #555; white-space: nowrap; }

	.faixa-label {
		display: inline-block;
		background: var(--cor);
		color: white;
		font-size: 0.8rem;
		font-weight: 700;
		padding: 0.3rem 0.9rem;
		border-radius: 999px;
		margin-bottom: 1.25rem;
	}

	.pergunta-texto {
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.4;
		margin-bottom: 1.25rem;
		color: #1a1a2e;
	}

	.opcoes { display: flex; flex-direction: column; gap: 0.6rem; }

	.opcao {
		background: #f8faff;
		border: 2px solid #e0e7ff;
		border-radius: 0.6rem;
		padding: 0.8rem 1rem;
		text-align: left;
		font-size: 0.95rem;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
		font-family: inherit;
	}
	.opcao:hover:not(:disabled) { border-color: #0984E3; background: #f0f7ff; }
	.opcao:disabled { cursor: default; }
	.opcao.correta { border-color: #1DD1A1; background: #e8fff8; color: #0a7c5c; font-weight: 600; }
	.opcao.errada { border-color: #FF6B6B; background: #fff0f0; color: #c0392b; }

	.explicacao {
		margin-top: 1.25rem;
		background: #f8faff;
		border-radius: 0.75rem;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.explicacao strong { font-size: 0.95rem; }
	.explicacao p { font-size: 0.9rem; color: #444; }
	.explicacao button {
		color: white;
		border: none;
		border-radius: 0.5rem;
		padding: 0.7rem 1.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		font-family: inherit;
		align-self: flex-start;
		transition: opacity 0.2s;
	}
	.explicacao button:hover { opacity: 0.85; }

	.resultado-wrap {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.score-geral {
		background: #fff;
		border-radius: 1rem;
		padding: 2rem;
		text-align: center;
		border: 3px solid #e5e7eb;
	}
	.score-geral.aprovado { border-color: #1DD1A1; background: #e8fff8; }
	.score-geral.reprovado { border-color: #FF9F43; background: #fff9e6; }

	.score-emoji { font-size: 3.5rem; display: block; margin-bottom: 0.5rem; }
	.score-geral h2 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1.5rem; margin-bottom: 0.25rem; }
	.score-pct { font-size: 2.5rem; font-weight: 900; font-family: 'Nunito', sans-serif; color: #1DD1A1; margin: 0.25rem 0; }
	.score-geral.reprovado .score-pct { color: #FF9F43; }
	.score-geral p { color: #444; }

	.certificado {
		background: white;
		border: 3px solid #1a1a2e;
		border-radius: 1rem;
		padding: 2.5rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0,0,0,0.08);
	}

	.cert-header { margin-bottom: 1.5rem; }
	.cert-logo { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1.25rem; }

	.cert-titulo {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #555;
		margin-bottom: 1rem;
	}

	.cert-nome {
		font-family: 'Nunito', sans-serif;
		font-size: 2rem;
		font-weight: 900;
		color: #1a1a2e;
		margin-bottom: 1rem;
		border-bottom: 2px solid #e0e7ff;
		padding-bottom: 1rem;
	}

	.cert-texto { color: #444; line-height: 1.6; margin-bottom: 1rem; max-width: 450px; margin-inline: auto; }
	.cert-score { font-weight: 700; color: #0984E3; margin-bottom: 0.5rem; }
	.cert-data { color: #555; font-size: 0.9rem; margin-bottom: 1.5rem; }
	.cert-rodape { font-size: 0.75rem; color: #aaa; }

	.btn-imprimir {
		background: #1a1a2e;
		color: white;
		border: none;
		border-radius: 0.75rem;
		padding: 0.9rem 1.75rem;
		font-size: 1rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
		transition: opacity 0.2s;
		align-self: center;
	}
	.btn-imprimir:hover { opacity: 0.85; }

	.btn-repetir {
		background: #f0f4ff;
		color: #1a1a2e;
		border: 2px solid #e0e7ff;
		border-radius: 0.75rem;
		padding: 0.75rem 1.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		font-family: inherit;
		cursor: pointer;
		align-self: center;
	}

	@media print {
		.topo, .btn-imprimir, .btn-repetir, .score-geral, a { display: none !important; }
		.certificado { border: 3px solid #1a1a2e !important; box-shadow: none; }
		main { padding: 0; }
	}
</style>
