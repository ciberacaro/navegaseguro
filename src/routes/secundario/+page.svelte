<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🎯',
		titulo: 'Secundário',
		subtitulo: '15 – 18 anos · 10.º ao 12.º ano',
		cor: '#A29BFE',
		fundo: '#F3F0FF',
		variante: 'jovem-adulto',
		introducao: 'Tens autonomia digital quase de adulto e exposição a riscos quase de adulto — mas sem a experiência. Esta secção trata os temas que a maioria das pessoas só aprende depois de serem prejudicadas: fraudes financeiras, manipulação por IA, reputação online a longo prazo, RGPD aplicado a ti.',
		temas: [
			{
				icone: '💸',
				titulo: 'Esquemas de "investimento rápido"',
				conteudo: 'Anúncios no Instagram e TikTok prometem retornos garantidos em crypto, Forex ou trading. Estatística: 90%+ destas plataformas são fraudes ou pirâmides. Em Portugal, qualquer entidade que ofereça investimentos tem de estar registada na CMVM (cmvm.pt). Se não estiver — é fraude.'
			},
			{
				icone: '💳',
				titulo: 'Primeira conta bancária = primeiro alvo',
				conteudo: 'Mal abres a conta, começam a chegar SMS falsos do "banco", emails das "Finanças" com reembolsos, ligações da "polícia". Regra de ouro: o teu banco NUNCA pede credenciais por telefone, email ou SMS. Se duvidas, fecha tudo e liga diretamente ao número impresso no cartão.'
			},
			{
				icone: '🤖',
				titulo: 'IA generativa: ferramenta, não atalho',
				conteudo: 'ChatGPT, Gemini, Claude — ótimas ferramentas. Mas: 1) podem inventar informação ("alucinações"), 2) universidades usam detetores de IA e desonestidade académica pode anular o teu acesso ao ensino superior, 3) tudo o que escreves pode ser usado para treino. Aprende a usar como assistente — nunca como substituto.'
			},
			{
				icone: '🎭',
				titulo: 'Deepfakes e identidade roubada',
				conteudo: 'A tua imagem (e voz) podem ser usadas em deepfakes — vídeos falsos. Já há casos de jovens com vídeos íntimos falsos a circular nas escolas. Se aconteceu contigo: guarda provas, denuncia à plataforma e à Polícia Judiciária. É crime.'
			},
			{
				icone: '🔍',
				titulo: 'Reputação digital de longo prazo',
				conteudo: 'Empresas e universidades pesquisam candidatos. Uma publicação racista, uma foto comprometedora ou um comentário agressivo de há 3 anos pode fechar portas. Faz hoje uma auditoria: pesquisa o teu nome no Google e em imagens.'
			},
			{
				icone: '🔐',
				titulo: 'Os teus direitos sob o RGPD',
				conteudo: 'Já és titular de dados com direitos: saber que dados as empresas têm sobre ti, pedir cópia, exigir correção, pedir apagamento (direito ao esquecimento). Aprende a usar — empresas em Portugal têm 30 dias para responder, sem custos.'
			}
		],
		dicas: [
			'Antes de qualquer investimento, verifica em cmvm.pt se a entidade tem autorização',
			'Usa um gestor de palavras-passe (Bitwarden é gratuito e auditado)',
			'Ativa 2FA por aplicação (Authy, Google Authenticator) — evita 2FA por SMS quando possível',
			'Para trabalhos académicos com IA, escreve sempre tu o output final — usa IA para ideias, não para escrever',
			'Faz uma auditoria semestral à tua pegada digital — pesquisa o teu nome em Google e Imagens',
			'Quando uma empresa pede dados, exige saber para quê — é teu direito pelo RGPD'
		],
		historias: [
			{
				titulo: 'O Rui e os 1.200€ em "trading"',
				narrativa: 'O Rui, 17 anos, viu um anúncio no Instagram: um suposto trader português a mostrar lucros de 800€/dia. Entrou no grupo de Telegram, falou com um "mentor" simpático. Pagou 50€ para começar, viu o saldo subir para 320€ na plataforma. Decidiu investir mais — pôs 1.200€ das poupanças do trabalho de verão. Quando tentou levantar, pediram "taxa de levantamento" de 600€. Pagou. Pediram mais. Aí percebeu. Total perdido: 1.800€. A plataforma não estava na CMVM. Não havia para quem queixar — servidor no estrangeiro.',
				licao: 'Lucros consistentes nunca são garantidos. Plataformas legítimas estão registadas na CMVM e nunca pedem "taxas de levantamento".'
			},
			{
				titulo: 'A Mariana, o ChatGPT e a chumbada',
				narrativa: 'A Mariana, 12.º ano, usou ChatGPT para escrever uma redação de Português. Trabalho entregue, 18 valores. Uma semana depois, a professora ligou os pais: o trabalho foi assinalado pelo sistema antiplágio da escola como "94% gerado por IA". A Mariana levou 0 valores, falta disciplinar e processo de desonestidade académica. A nota afetou a média de candidatura à faculdade. Resultado: não entrou em Direito como queria.',
				licao: 'IA é ótima como ferramenta para gerar ideias, criar esquemas, rever texto teu. Não para substituir o teu trabalho. Os detetores funcionam — cada vez melhor.'
			},
			{
				titulo: 'O Henrique e o "reembolso das Finanças"',
				narrativa: 'O Henrique, 18 anos, recebeu um SMS: "AT informa: tem reembolso de 437,82€. Aceda a [link] para receber". Tinha acabado de receber o primeiro recibo verde do trabalho — fazia sentido. Clicou. O site era idêntico ao das Finanças. Introduziu NIF, dados do MB. Em 2 minutos, foram-lhe debitados 1.700€ do banco. O banco recusou estornar — "introduziu voluntariamente os dados". Queixa à PJ, processo aberto, mas dinheiro perdido.',
				licao: 'Nem AT, nem CTT, nem bancos comunicam reembolsos por SMS com links. Se duvidares, vai diretamente a portaldasfinancas.gov.pt — nunca por link.'
			}
		],
		perguntas: [
			{
				pergunta: 'Recebes um email do "Banco de Portugal" sobre um reembolso de 240€ — clica num link. Tu...',
				opcoes: ['Clico rapidamente — pode expirar', 'Verifico o domínio e ligo ao banco por outro canal', 'Respondo a pedir mais dados', 'Reencaminho a amigos para verem'],
				correta: 1,
				explicacao: 'O Banco de Portugal não envia reembolsos. E bancos verdadeiros não usam links de SMS/email. Vai ao site oficial, abrindo o browser tu.'
			},
			{
				pergunta: 'Um anúncio promete 500€/semana em crypto sem experiência. Probabilidade de ser legítimo?',
				opcoes: ['Alta — há trades bons', 'Quase zero — é Ponzi ou phishing', 'Médio se a empresa parecer profissional', 'Depende do país'],
				correta: 1,
				explicacao: 'Investimentos legítimos nunca garantem retornos. Os anúncios "passa de 100€ a 1000€" são esquemas — sempre.'
			},
			{
				pergunta: 'Para verificar se uma plataforma de investimento é legítima em Portugal, consultas...',
				opcoes: ['Avaliações no Google', 'O Instagram da empresa', 'O site da CMVM (cmvm.pt)', 'Outros utilizadores em fóruns'],
				correta: 2,
				explicacao: 'A CMVM é o regulador. Se não está no registo da CMVM, não pode operar legalmente em Portugal — independentemente das críticas em redes sociais.'
			},
			{
				pergunta: 'O ChatGPT escreve-te um ensaio inteiro para Filosofia. O que arriscas se entregares como teu?',
				opcoes: ['Nada — os professores não conseguem detetar', 'Detetores de IA + sanção disciplinar + possível anulação de candidatura', 'Só perdes pontos na avaliação', 'Só há risco em universidade'],
				correta: 1,
				explicacao: 'Os detetores são cada vez mais eficazes. Em Portugal, a desonestidade académica pode levar a anulação de exames, suspensão e impacto no acesso ao superior.'
			},
			{
				pergunta: 'O melhor uso académico de IA é...',
				opcoes: ['Pedir o trabalho completo e copiar', 'Usar para gerar ideias, estruturar e rever — escrevendo tu', 'Não usar nada', 'Pedir e mudar algumas palavras'],
				correta: 1,
				explicacao: 'IA é assistente, não substituto. Brainstorming, estrutura, revisão de gramática — tudo válido. Escrever o conteúdo por ti — não.'
			},
			{
				pergunta: 'Aos 18, candidatas-te a um estágio. O empregador faz busca no Google. O que provavelmente vai encontrar?',
				opcoes: ['Nada — sou jovem', 'Tudo o que publiquei desde os 12 anos com o meu nome', 'Só o que está no LinkedIn', 'Só posts recentes'],
				correta: 1,
				explicacao: 'Tudo o que está indexado fica. Por isso é importante revisar a tua pegada digital agora — apagar, ajustar privacidade, remover tags.'
			},
			{
				pergunta: 'Que tipo de 2FA é mais seguro?',
				opcoes: ['SMS', 'Aplicação de autenticação (Authy, Google Authenticator)', 'Email', 'Não faz diferença'],
				correta: 1,
				explicacao: 'Aplicações de autenticação são imunes a SIM swap (troca fraudulenta de cartão SIM). SMS é o método mais fraco — mas melhor do que nada.'
			},
			{
				pergunta: 'Pelo RGPD, podes pedir a uma empresa portuguesa que apague os teus dados. A empresa tem...',
				opcoes: ['Direito a recusar sempre', 'Até 30 dias para responder, sem custos', '6 meses', '1 ano'],
				correta: 1,
				explicacao: 'O direito ao esquecimento é teu pelo RGPD. Empresas têm 30 dias para responder, gratuitamente. Há exceções (obrigações legais, p.e. faturação), mas as razões têm de ser justificadas.'
			},
			{
				pergunta: 'Um "trader profissional" no Telegram convida-te para um grupo VIP. Tu...',
				opcoes: ['Aceito — pode ser oportunidade', 'Pago a entrada se for barata', 'Recuso — grupos "VIP" de trading no Telegram são quase sempre fraude', 'Aceito mas com cuidado'],
				correta: 2,
				explicacao: 'Grupos VIP de trading no Telegram são esquemas testados e provados. Pagam-se "entradas", vê-se "ganhos falsos" e perde-se tudo. Ninguém ganha dinheiro a sério neste modelo.'
			},
			{
				pergunta: 'Para ter palavras-passe seguras em dezenas de contas, a melhor solução é...',
				opcoes: ['Mesma palavra-passe em todo o lado', 'Variações da mesma palavra-passe', 'Gestor de palavras-passe (ex.: Bitwarden)', 'Folha de papel em casa'],
				correta: 2,
				explicacao: 'Um gestor gera palavras-passe únicas e fortes, encriptadas localmente. Bitwarden é open-source, auditado e gratuito. Único compromisso: uma palavra-passe mestra forte.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
