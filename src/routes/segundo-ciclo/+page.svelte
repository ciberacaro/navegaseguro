<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '📱',
		titulo: '2.º Ciclo',
		subtitulo: '10 – 12 anos · 5.º e 6.º ano',
		cor: '#1DD1A1',
		fundo: '#E8FFF8',
		variante: 'juvenil',
		introducao: 'Primeiro telemóvel, primeira conta no Instagram ou TikTok, grupos de WhatsApp da turma — bem-vindo ao mundo digital "a sério". Esta é a fase em que aprendes a gerir a tua presença online. As decisões que tomares agora vão afetar os próximos anos da tua vida.',
		temas: [
			{
				icone: '🔒',
				titulo: 'Conta privada vs. pública',
				conteudo: 'No Instagram, TikTok e outras redes, o teu perfil deve ser privado. Assim, só os seguidores que aprovares veem o que publicas. Vai já às definições e muda — leva 30 segundos.'
			},
			{
				icone: '📸',
				titulo: 'O que publicas fica',
				conteudo: 'Mesmo que apagues uma publicação, alguém pode ter feito captura de ecrã. Pergunta-te sempre: "Ficaria bem se a minha mãe, professora ou treinador vissem isto?"'
			},
			{
				icone: '🎮',
				titulo: 'Jogos online: cuidado com os "amigos"',
				conteudo: 'Em Roblox, Fortnite, Minecraft, Discord — conheces pessoas, mas não as conheces de verdade. Não partilhes dados pessoais, não aceites "presentes" de estranhos e nunca te encontres com alguém que só conheces online.'
			},
			{
				icone: '🎬',
				titulo: 'Publicidade disfarçada',
				conteudo: 'Muitos influencers são pagos para promover produtos — sem dizer claramente. Aprende a ver os sinais: "#anúncio", "#ad", "#publi". Não acreditas em tudo o que vês.'
			},
			{
				icone: '💬',
				titulo: 'Grupos de turma',
				conteudo: 'O que escreves num grupo pode ser partilhado fora. Antes de mandar uma mensagem sobre um colega, pensa: "Diria isto na cara dele?". Se não, não escrevas. Se vires bullying, conta a um adulto.'
			},
			{
				icone: '🛒',
				titulo: 'Compras dentro de apps',
				conteudo: 'Muitos jogos pedem dinheiro para "skins" ou vidas extra. Estas compras podem custar centenas de euros sem dares conta. Pede sempre autorização aos pais antes de qualquer compra.'
			}
		],
		dicas: [
			'Coloca já o teu perfil em modo privado no Instagram, TikTok e em qualquer rede social',
			'Usa palavras-passe diferentes em cada conta — e ativa a verificação em dois passos',
			'Nunca te encontres pessoalmente com alguém que só conheces online',
			'Antes de publicar, pensa nas pessoas que NÃO queres que vejam — se houver alguma, não publiques',
			'Se receberes uma mensagem estranha, guarda (não apagues) e mostra a um adulto',
			'Nunca dês os dados do cartão dos teus pais — nem aos teus melhores amigos'
		],
		historias: [
			{
				titulo: 'O Diogo e os 240€ no Roblox',
				narrativa: 'O Diogo, 11 anos, jogava Roblox no telemóvel da mãe. Sem perceber, fez compras dentro do jogo durante duas semanas — Robux para skins do avatar. No fim do mês, a mãe recebeu uma fatura de 240€. O Diogo não tinha pensado que cada compra de 4,99€ era dinheiro a sério. Os pais conseguiram reaver parte do dinheiro junto da loja de aplicações, mas a maioria perdeu-se.',
				licao: 'Antes de comprar dentro de uma app, pede sempre. Os 4,99€ parecem pouco, mas somam depressa.'
			},
			{
				titulo: 'A Sofia e o pedido estranho',
				narrativa: 'A Sofia, 12 anos, fez "amizade" no Discord com alguém que dizia ter 13 anos. Ao fim de duas semanas, esse "amigo" pediu-lhe uma foto sem t-shirt "só para confirmar que tinha mesmo a idade". A Sofia sentiu que algo estava errado e mostrou a mensagem à irmã mais velha. Descobriram que era um adulto. A conta foi denunciada e bloqueada.',
				licao: 'Pedir fotos íntimas é sempre um sinal de alarme — mesmo de pessoas que dizem ser da tua idade.'
			}
		],
		perguntas: [
			{
				pergunta: 'Tens conta no Instagram. Qual destas é a configuração mais segura?',
				opcoes: ['Perfil público com nome falso', 'Perfil privado com aprovação manual de seguidores', 'Perfil público mas com poucos seguidores', 'Não há diferença'],
				correta: 1,
				explicacao: 'Perfil privado + aprovação manual = só vê quem tu queres. É a base da segurança online.'
			},
			{
				pergunta: 'Um jogo oferece um item lendário grátis se introduzires o teu email e palavra-passe. Tu...',
				opcoes: ['Aceito — é grátis!', 'Crio uma conta nova só para isso', 'Recuso — jogos legítimos não pedem palavra-passe', 'Pergunto aos colegas se já receberam'],
				correta: 2,
				explicacao: 'Nenhum jogo legítimo pede a tua palavra-passe. Isto é phishing — uma tentativa de roubar a tua conta.'
			},
			{
				pergunta: 'No grupo de turma, alguém envia uma foto embaraçosa de um colega. Tu...',
				opcoes: ['Reencaminho para outros amigos', 'Rio mas não respondo', 'Conto a um adulto de confiança', 'Apago da minha conversa'],
				correta: 2,
				explicacao: 'Contar a um adulto é o mais eficaz. Reencaminhar pode ser crime, mesmo com 11/12 anos. E ignorar deixa o colega sozinho.'
			},
			{
				pergunta: 'Conheceste alguém num jogo há um mês. Pede para te encontrar no centro comercial. Tu...',
				opcoes: ['Aceito se for num sítio público', 'Aceito se ele mandar uma foto primeiro', 'Recuso sempre — nunca me encontro com alguém que só conheço online', 'Aceito e levo um amigo'],
				correta: 2,
				explicacao: 'Nunca te encontres pessoalmente com alguém que só conheces online. As pessoas mentem sobre quem são.'
			},
			{
				pergunta: 'Vês um vídeo de uma influencer a recomendar uma marca de roupa. Provavelmente...',
				opcoes: ['Ela usa porque é boa', 'É publicidade paga — mesmo que ela não diga', 'É a sua roupa favorita', 'Quer ajudar os fãs'],
				correta: 1,
				explicacao: 'Grande parte das recomendações de influencers são pagas. Aprende a procurar "#publi" ou "#ad" — e desconfia mesmo quando não estão.'
			},
			{
				pergunta: 'Para ter palavras-passe seguras, deves...',
				opcoes: ['Usar a mesma em todo o lado para não esqueceres', 'Ter palavras-passe diferentes em cada conta', 'Usar a tua data de nascimento', 'Pôr só letras minúsculas'],
				correta: 1,
				explicacao: 'Se usares a mesma palavra-passe em todo o lado e uma for roubada, perdes acesso a tudo. Usa diferentes — um gestor ajuda.'
			},
			{
				pergunta: 'Recebes um pedido de seguidor de uma conta desconhecida com 0 seguidores. Tu...',
				opcoes: ['Aceito — não tem mal nenhum', 'Aceito e vejo se ele me segue de volta', 'Recuso — provavelmente é uma conta falsa', 'Aceito mas bloqueio'],
				correta: 2,
				explicacao: 'Contas novas sem seguidores são muitas vezes contas falsas criadas para espiar ou enganar. Recusa.'
			},
			{
				pergunta: 'O que NUNCA deves publicar nas redes sociais?',
				opcoes: ['Uma foto do teu cão', 'Fotos com o uniforme da escola', 'Uma foto do teu jantar', 'Fotos de férias'],
				correta: 1,
				explicacao: 'Fotos com o uniforme mostram a tua escola — informação que pode ser usada por estranhos para te encontrarem.'
			},
			{
				pergunta: 'Antes de comprar algo numa aplicação, deves...',
				opcoes: ['Comprar rápido antes que pareça caro', 'Pedir aos pais — mesmo que pareça pouco dinheiro', 'Usar o cartão dos pais sem perguntar — depois explicas', 'Aproveitar enquanto eles não veem'],
				correta: 1,
				explicacao: 'Pequenas compras somam muito depressa. Pede sempre — evita surpresas desagradáveis na fatura do mês.'
			},
			{
				pergunta: 'Alguém online te pede para enviares uma foto tua em roupa interior ou nu. O que fazes?',
				opcoes: ['Envio se ele enviar primeiro', 'Envio se confiar nele', 'Não envio NUNCA e conto a um adulto imediatamente', 'Envio mas com filtro para não se ver bem'],
				correta: 2,
				explicacao: 'Nunca, mesmo que pareça inofensivo. Pedir fotos íntimas a menores é crime em Portugal. Conta sempre a um adulto.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
