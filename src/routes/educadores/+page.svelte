<script>
	const sessoes = [
		{
			faixa: 'Pré-Escolar',
			emoji: '🧸',
			idades: '3–5 anos',
			cor: '#FF9F43',
			contexto: 'Jardim de infância ou em casa com pais',
			materiais: ['Tablet ou computador com projetor', 'Papel e lápis de cor'],
			plano: [
				{ tempo: '5 min', atividade: 'Acolhimento', desc: 'Perguntar às crianças: "Já usaram o tablet hoje? O que viram?"' },
				{ tempo: '10 min', atividade: 'História narrada', desc: 'Contar uma história simples com personagens (ex: "A Ana e o tablet mágico") onde a personagem pede sempre permissão ao adulto antes de usar.' },
				{ tempo: '15 min', atividade: 'Quiz com imagens', desc: 'Mostrar imagens: um estranho, um pai, um amigo — perguntar "com quem falamos online?". Usar o quiz da secção Pré-Escolar do NavegaSeguro no projetor.' },
				{ tempo: '10 min', atividade: 'Desenho', desc: 'Cada criança desenha a "regra favorita" que aprendeu. Exposição na sala.' },
				{ tempo: '5 min', atividade: 'Conclusão', desc: 'Recapitular: "O que precisamos de fazer antes de usar o tablet?" Resposta em coro.' }
			],
			dicas_educador: [
				'Não use linguagem de medo — "pode ser perigoso" vs "pedimos sempre ao adulto"',
				'Envolva os pais: envie um resumo da sessão para casa',
				'Repita as regras em semanas seguintes — repetição é fundamental nesta idade'
			]
		},
		{
			faixa: '1.º Ciclo',
			emoji: '🎨',
			idades: '6–10 anos',
			cor: '#48DBFB',
			contexto: 'Sala de aula ou sala de informática',
			materiais: ['Computadores ou tablets por aluno/par', 'Quadro interativo'],
			plano: [
				{ tempo: '5 min', atividade: 'Abertura', desc: '"Quem tem conta num jogo online? Já alguma vez viram uma mensagem estranha?" Levantar o braço.' },
				{ tempo: '10 min', atividade: 'Debate guiado', desc: 'Mostrar 3 exemplos de mensagens (normal, phishing simples, pedido de dados). Pedir às crianças que identifiquem qual parece suspeita.' },
				{ tempo: '15 min', atividade: 'Quiz NavegaSeguro', desc: 'Abrir navegaseguro.pages.dev/primeiro-ciclo — fazer o quiz em conjunto no projetor, com votação por braço levantado.' },
				{ tempo: '10 min', atividade: 'Role-play', desc: 'Pares: um faz de "desconhecido online" que pede dados, outro pratica recusar e chamar adulto.' },
				{ tempo: '5 min', atividade: 'Compromisso', desc: 'Cada aluno assina um "Contrato de Navegador Seguro" (folha simples com as 3 regras e assinatura).' }
			],
			dicas_educador: [
				'O role-play é a atividade mais eficaz — não a salte por falta de tempo',
				'O "Contrato" pode ser levado para casa e assinado também pelos pais',
				'Ligue à área de Cidadania e Desenvolvimento do currículo'
			]
		},
		{
			faixa: '2.º Ciclo',
			emoji: '📱',
			idades: '10–12 anos • 5.º e 6.º ano',
			cor: '#1DD1A1',
			contexto: 'Aula de TIC ou Cidadania',
			materiais: ['Telemóveis dos alunos (com permissão)', 'Quadro interativo'],
			plano: [
				{ tempo: '5 min', atividade: 'Sondagem', desc: '"Quantos têm conta no Instagram? No TikTok? No Discord?" Levantamento rápido. Quantos têm o perfil privado?' },
				{ tempo: '10 min', atividade: 'Configuração em direto', desc: 'Pedir voluntário para mostrar as definições de privacidade do Instagram no projetor. Percorrer as opções juntos.' },
				{ tempo: '15 min', atividade: 'Caso prático', desc: 'Mostrar 5 situações reais (sem identificar pessoas): compra em jogo, seguidor desconhecido, mensagem num grupo. Discussão em grupo sobre o que fazer em cada.' },
				{ tempo: '10 min', atividade: 'Quiz individual', desc: 'Cada aluno faz o quiz de navegaseguro.pages.dev/segundo-ciclo no seu telemóvel. Comparar pontuações anonimamente.' },
				{ tempo: '5 min', atividade: 'Takeaway', desc: 'Cada aluno escreve numa post-it a coisa mais importante que aprendeu. Colar na porta da sala.' }
			],
			dicas_educador: [
				'A configuração em direto é mais impactante do que qualquer slide sobre privacidade',
				'Não force a identificação de situações pessoais — o objetivo é reflexão, não exposição',
				'Sugestão: semana seguinte, pedir quem mudou o perfil para privado'
			]
		},
		{
			faixa: '3.º Ciclo',
			emoji: '⚡',
			idades: '12–15 anos • 7.º ao 9.º ano',
			cor: '#FF6B6B',
			contexto: 'Aula de Cidadania, TIC ou Educação para a Saúde',
			materiais: ['Computadores ou telemóveis', 'Casos impressos para análise'],
			plano: [
				{ tempo: '5 min', atividade: 'Abertura sem julgamento', desc: 'Contexto anónimo: "Já receberam uma mensagem que vos fez sentir desconfortáveis? Não precisam de dizer qual." Normalizar a experiência.' },
				{ tempo: '15 min', atividade: 'Análise de casos reais', desc: 'Distribuir 2 casos reais anonimizados (grooming, sextorsão) impressos. Em grupos de 3-4, identificar os sinais de alarme e o que deveria ter acontecido.' },
				{ tempo: '10 min', atividade: 'Apresentação', desc: 'Cada grupo partilha 1 sinal de alarme identificado. Sistematizar no quadro.' },
				{ tempo: '10 min', atividade: 'Recursos e ajuda', desc: 'Mostrar a Linha Internet Segura (800 21 90 90) e como denunciar. Simular uma denúncia online (sem dados reais).' },
				{ tempo: '5 min', atividade: 'Encerramento', desc: '"Se um amigo vos contasse uma situação assim, o que diriam?" Respostas em papel, anónimas.' }
			],
			dicas_educador: [
				'Tenha o contacto do psicólogo da escola disponível — esta sessão pode despoletar partilhas pessoais',
				'Não moralize — apresente factos e consequências reais, deixe os alunos concluir',
				'Se um aluno partilhar situação pessoal, siga o protocolo da escola para situações de risco'
			]
		},
		{
			faixa: 'Secundário',
			emoji: '🎯',
			idades: '15–18 anos • 10.º ao 12.º ano',
			cor: '#A29BFE',
			contexto: 'Aula de TIC, Economia ou Formação Cívica',
			materiais: ['Computadores', 'Acesso à CMVM e VirusTotal'],
			plano: [
				{ tempo: '5 min', atividade: 'Provocação', desc: 'Mostrar um anúncio real de investimento (copy, não link). "Quem investia 100€ aqui? Porquê sim ou porquê não?"' },
				{ tempo: '15 min', atividade: 'Investigação em grupo', desc: 'Grupos de 3: pesquisar a empresa do anúncio no registo da CMVM, no VirusTotal e no Google. Verificar se existe. Apresentar conclusão em 2 min.' },
				{ tempo: '10 min', atividade: 'IA e academia', desc: 'Debate: "É batota usar ChatGPT num trabalho?" Apresentar a perspetiva da escola, da universidade e do mercado de trabalho. O que acontece na prática?' },
				{ tempo: '10 min', atividade: 'Auditoria à pegada digital', desc: 'Cada aluno pesquisa o seu próprio nome no Google e em Imagens. O que aparece? É o que querem que apareça?' },
				{ tempo: '5 min', atividade: 'Plano de ação', desc: 'Cada aluno escreve 1 coisa que vai fazer esta semana para melhorar a sua segurança digital.' }
			],
			dicas_educador: [
				'A auditoria à pegada digital é sempre surpreendente — reserve tempo para reação',
				'O debate sobre IA deve ser aberto: evite posições absolutas, explore nuances',
				'Ligue a Economia: fraudes financeiras online são tema transversal ao currículo'
			]
		},
		{
			faixa: 'Adultos & Seniores',
			emoji: '🌟',
			idades: 'Formação de adultos, centros de dia, IPSS',
			cor: '#6C5CE7',
			contexto: 'Centro de dia, junta de freguesia, universidade sénior ou empresa',
			materiais: ['Projetor ou televisão grande', 'Folheto impresso com números de emergência'],
			plano: [
				{ tempo: '10 min', atividade: 'Quebra-gelo', desc: '"Alguém aqui recebeu um SMS estranho ultimamente?" Partilha de experiências. Normalizar — acontece a toda a gente.' },
				{ tempo: '15 min', atividade: 'Os 3 esquemas mais comuns', desc: 'Apresentar com imagens reais: SMS falso dos CTT, chamada do "técnico", SMS do "filho". Para cada um: como funciona, como reconhecer, o que fazer.' },
				{ tempo: '10 min', atividade: 'Simulação prática', desc: 'Formador simula uma chamada telefónica de "burla". O grupo decide em tempo real o que o participante deve fazer.' },
				{ tempo: '5 min', atividade: 'Recursos e contactos', desc: 'Entregar folheto impresso com: 800 21 90 90, 112, número do banco. Explicar como guardar no telemóvel.' },
				{ tempo: '5 min', atividade: 'Compromisso familiar', desc: '"Esta semana, conta a um familiar o que aprendeste." A disseminação oral é o canal mais eficaz neste grupo.' }
			],
			dicas_educador: [
				'Letra grande em todos os slides — mínimo 24pt',
				'Deixe tempo para perguntas: este grupo tem muito para partilhar e aprender uns com os outros',
				'O folheto impresso é essencial — não confie só no digital',
				'Evite jargão: "palavra-passe" em vez de "password", "ligação" em vez de "link"'
			]
		}
	];

	let sessaoAberta = $state(null);
</script>

<svelte:head>
	<title>Pais e Educadores — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🏫 Pais e Educadores</h1>
		<p>Planos de sessão de 45 minutos para usar em casa, sala de aula ou centros de formação</p>
	</div>
</div>

<main class="container">
	<section class="intro">
		<p>O NavegaSeguro foi desenhado para ser usado em contexto educativo sem necessidade de instalações, licenças ou formação técnica. Cada plano de sessão abaixo é autónomo — pode usá-lo como está ou adaptar ao seu contexto.</p>
		<div class="principios">
			<div class="principio"><span>⏱️</span><div><strong>45 minutos</strong><p>Cada plano cabe numa aula padrão</p></div></div>
			<div class="principio"><span>🆓</span><div><strong>Gratuito</strong><p>Sem licenças, sem registo, sem publicidade</p></div></div>
			<div class="principio"><span>📱</span><div><strong>Funciona offline</strong><p>Instale como PWA para usar sem internet</p></div></div>
			<div class="principio"><span>🖨️</span><div><strong>Imprimível</strong><p>Use Ctrl+P para imprimir qualquer plano</p></div></div>
		</div>
	</section>

	<section class="sessoes">
		<h2>Planos de sessão por faixa etária</h2>
		<p class="secao-desc">Clique numa faixa para ver o plano completo de 45 minutos.</p>

		{#each sessoes as s, i}
			<div class="sessao-wrap">
				<button
					class="sessao-header"
					style="--cor: {s.cor}"
					onclick={() => sessaoAberta = sessaoAberta === i ? null : i}
				>
					<span class="sessao-emoji">{s.emoji}</span>
					<div class="sessao-info">
						<strong>{s.faixa}</strong>
						<span>{s.idades}</span>
					</div>
					<span class="sessao-chevron">{sessaoAberta === i ? '▲' : '▼'}</span>
				</button>

				{#if sessaoAberta === i}
					<div class="sessao-corpo">
						<div class="meta-info">
							<div><strong>Contexto sugerido</strong><p>{s.contexto}</p></div>
							<div>
								<strong>Materiais necessários</strong>
								<ul>{#each s.materiais as m}<li>{m}</li>{/each}</ul>
							</div>
						</div>

						<h3>Plano de sessão (45 min)</h3>
						<div class="plano">
							{#each s.plano as passo}
								<div class="passo">
									<span class="tempo">{passo.tempo}</span>
									<div class="passo-conteudo">
										<strong>{passo.atividade}</strong>
										<p>{passo.desc}</p>
									</div>
								</div>
							{/each}
						</div>

						<div class="dicas-educador">
							<h3>💡 Notas para o educador</h3>
							<ul>
								{#each s.dicas_educador as d}<li>{d}</li>{/each}
							</ul>
						</div>

						<a href="/{s.faixa === 'Pré-Escolar' ? 'pre-escolar' : s.faixa === '1.º Ciclo' ? 'primeiro-ciclo' : s.faixa === '2.º Ciclo' ? 'segundo-ciclo' : s.faixa === '3.º Ciclo' ? 'terceiro-ciclo' : s.faixa === 'Secundário' ? 'secundario' : s.faixa === 'Adultos & Seniores' ? 'seniores' : 'adultos'}" class="btn-ver-faixa" style="background: {s.cor}">
							Ver conteúdo da faixa →
						</a>
					</div>
				{/if}
			</div>
		{/each}
	</section>

	<section class="recursos-extra">
		<h2>Recursos adicionais</h2>
		<div class="recursos-grid">
			<div class="recurso-item">
				<span>🖨️</span>
				<h3>Imprimir um plano</h3>
				<p>Abra o plano que quer imprimir, expanda-o e use Ctrl+P (ou Cmd+P no Mac). Escolha "Guardar como PDF" para ter um ficheiro.</p>
			</div>
			<div class="recurso-item">
				<span>📱</span>
				<h3>Instalar offline (PWA)</h3>
				<p>No Chrome/Edge, clique no ícone de instalação na barra de endereço. O NavegaSeguro fica disponível sem internet — ideal para salas sem ligação.</p>
			</div>
			<div class="recurso-item">
				<span>🤝</span>
				<h3>Parceria institucional</h3>
				<p>Escola, câmara ou IPSS que quer uma versão adaptada, co-branding ou formação de formadores? <a href="/contacto">Contacte-nos.</a></p>
			</div>
			<div class="recurso-item">
				<span>🔗</span>
				<h3>Currículo nacional</h3>
				<p>O conteúdo está alinhado com as metas de TIC, Cidadania e Desenvolvimento e Educação para a Saúde do currículo português (DGE).</p>
			</div>
		</div>
	</section>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); }

	main { padding: 2.5rem 1.5rem; }

	.intro {
		background: #f8faff;
		border-radius: 0.75rem;
		padding: 1.5rem;
		margin-bottom: 3rem;
	}
	.intro > p { color: #333; line-height: 1.7; margin-bottom: 1.25rem; }

	.principios {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 1rem;
	}
	.principio {
		display: flex;
		gap: 0.75rem;
		align-items: flex-start;
	}
	.principio span { font-size: 1.5rem; }
	.principio strong { display: block; font-size: 0.95rem; margin-bottom: 0.1rem; }
	.principio p { font-size: 0.8rem; color: #666; margin: 0; }

	section { margin-bottom: 3rem; }
	h2 { font-family: 'Nunito', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: #1a1a2e; }
	.secao-desc { color: #666; margin-bottom: 1.5rem; }

	.sessao-wrap {
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		overflow: hidden;
		margin-bottom: 0.75rem;
	}

	.sessao-header {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.1rem 1.25rem;
		background: #fff;
		border: none;
		cursor: pointer;
		font-family: inherit;
		border-left: 4px solid var(--cor);
		transition: background 0.15s;
	}
	.sessao-header:hover { background: #f8faff; }

	.sessao-emoji { font-size: 1.5rem; }
	.sessao-info { text-align: left; flex: 1; }
	.sessao-info strong { display: block; font-size: 0.95rem; color: #1a1a2e; }
	.sessao-info span { font-size: 0.8rem; color: #888; }
	.sessao-chevron { color: #999; font-size: 0.8rem; }

	.sessao-corpo {
		padding: 1.5rem;
		border-top: 1px solid #f0f0f0;
		background: #fafafa;
	}

	.meta-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
		background: #fff;
		padding: 1rem;
		border-radius: 0.5rem;
	}
	.meta-info strong { display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; color: #888; margin-bottom: 0.3rem; }
	.meta-info p, .meta-info ul { font-size: 0.875rem; color: #333; margin: 0; }
	.meta-info ul { padding-left: 1.1rem; }

	.sessao-corpo h3 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.05rem; margin-bottom: 1rem; }

	.plano { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem; }

	.passo {
		display: flex;
		gap: 1rem;
		background: #fff;
		border-radius: 0.5rem;
		padding: 0.9rem 1rem;
		align-items: flex-start;
	}

	.tempo {
		background: #1a1a2e;
		color: white;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		border-radius: 0.3rem;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.passo-conteudo strong { display: block; font-size: 0.9rem; margin-bottom: 0.2rem; }
	.passo-conteudo p { font-size: 0.85rem; color: #555; line-height: 1.4; margin: 0; }

	.dicas-educador {
		background: #fff9e6;
		border-left: 3px solid #FF9F43;
		border-radius: 0.5rem;
		padding: 1rem 1.25rem;
		margin-bottom: 1.25rem;
	}
	.dicas-educador h3 { font-family: 'Nunito', sans-serif; font-size: 0.9rem; font-weight: 800; margin-bottom: 0.5rem; }
	.dicas-educador ul { padding-left: 1.25rem; margin: 0; }
	.dicas-educador li { font-size: 0.85rem; color: #444; line-height: 1.5; margin-bottom: 0.3rem; }

	.btn-ver-faixa {
		display: inline-block;
		color: white;
		font-weight: 700;
		padding: 0.7rem 1.5rem;
		border-radius: 0.5rem;
		font-size: 0.9rem;
		transition: opacity 0.2s;
	}
	.btn-ver-faixa:hover { opacity: 0.85; }

	.recursos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.25rem;
	}
	.recurso-item {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.25rem;
	}
	.recurso-item span { font-size: 1.75rem; display: block; margin-bottom: 0.5rem; }
	.recurso-item h3 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 0.95rem; margin-bottom: 0.4rem; }
	.recurso-item p { font-size: 0.85rem; color: #555; line-height: 1.4; margin: 0; }
	.recurso-item a { color: #0984E3; }

	@media (max-width: 600px) {
		.meta-info { grid-template-columns: 1fr; }
	}
</style>
