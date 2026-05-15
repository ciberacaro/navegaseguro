<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🧸',
		titulo: 'Pré-Escolar',
		subtitulo: '3 – 5 anos · Uma ajudinha para os pais',
		cor: '#FF9F43',
		fundo: '#FFF5E6',
		variante: 'infantil',
		introducao: 'Olá! Esta página é para ler com um adulto. Os mais pequeninos ainda não usam o telemóvel sozinhos, mas já gostam de ver vídeos, jogar e mexer no tablet. Vamos aprender juntos algumas regras simples para que tudo corra bem!',
		temas: [
			{
				icone: '🤝',
				titulo: 'Pergunta primeiro',
				conteudo: 'Antes de pegares no telemóvel ou no tablet, pede sempre a um adulto. É como pedir para abrir o frigorífico: pede-se primeiro!'
			},
			{
				icone: '👀',
				titulo: 'Vê com um grande',
				conteudo: 'Os vídeos e jogos divertidos veem-se sempre com um adulto perto. Se vires algo que te assuste, chama logo o pai, a mãe ou os avós.'
			},
			{
				icone: '🚫',
				titulo: 'Pessoas que não conheces',
				conteudo: 'Se alguém que tu não conheces aparecer no ecrã a falar contigo, chama um adulto. Não falas com estranhos na rua — também não falas com estranhos no telemóvel.'
			},
			{
				icone: '⏰',
				titulo: 'Hora de parar',
				conteudo: 'Quando o adulto disser que está na hora de parar, paramos! Os olhos também precisam de descansar e brincar com os brinquedos a sério.'
			}
		],
		dicas: [
			'Pede sempre a um adulto antes de usar o telemóvel ou tablet',
			'Vê sempre vídeos com um adulto por perto',
			'Se vires alguma coisa que te assuste, chama logo um grande',
			'Quando o adulto disser para parar, paramos sem chorar',
			'Não falas com pessoas que não conheces, nem na rua nem no ecrã'
		],
		historias: [
			{
				titulo: 'A Maria e o vídeo estranho',
				narrativa: 'A Maria tem 4 anos. Estava a ver vídeos de gatinhos no telemóvel da mãe e, de repente, apareceu um vídeo com sons assustadores. A Maria não se assustou sozinha — chamou logo a mãe: "Mãe, vê isto!". A mãe fechou o vídeo e mostrou à Maria como pedir ajuda sempre que algo a deixa triste ou assustada.',
				licao: 'Quando algo no ecrã te faz sentir mal, chama logo um adulto. Ele resolve tudo.'
			},
			{
				titulo: 'O João e a hora de parar',
				narrativa: 'O João, 5 anos, estava a jogar no tablet há muito tempo. O pai disse "está na hora de parar, vamos brincar lá fora". O João ficou chateado, mas lembrou-se de que os olhos também precisam de descansar. Foi brincar com a bicicleta — e até teve mais piada do que o tablet!',
				licao: 'O telemóvel e o tablet não fogem. Brincar lá fora também é muito divertido.'
			}
		],
		perguntas: [
			{
				pergunta: 'Queres ver vídeos no telemóvel. O que fazes primeiro?',
				opcoes: ['Pego e começo a ver', 'Peço a um adulto', 'Escondo-me debaixo da cama', 'Espero que o adulto esteja distraído'],
				correta: 1,
				explicacao: 'Pedimos sempre a um adulto antes de mexer no telemóvel. É a regra mais importante!'
			},
			{
				pergunta: 'Aparece uma pessoa que não conheces a falar contigo no jogo. O que fazes?',
				opcoes: ['Falo com ela', 'Chamo logo um adulto', 'Conto-lhe onde moro', 'Pergunto o nome dela'],
				correta: 1,
				explicacao: 'Chamamos sempre um adulto. Estranhos no ecrã são como estranhos na rua.'
			},
			{
				pergunta: 'O telemóvel mostra uma coisa que te assusta. Tu...',
				opcoes: ['Choro sozinho', 'Continuo a ver', 'Chamo logo a mãe, o pai ou os avós', 'Tapo os olhos'],
				correta: 2,
				explicacao: 'Chamar um adulto resolve tudo. Eles ajudam-te e tiram o que te assustou.'
			},
			{
				pergunta: 'O adulto diz "está na hora de parar". Tu fazes...',
				opcoes: ['Continuo mais um bocadinho às escondidas', 'Faço uma grande birra', 'Paro e vou brincar com outra coisa', 'Escondo o tablet'],
				correta: 2,
				explicacao: 'Quando o adulto diz para parar, paramos. Os olhinhos cansam-se e há tantas coisas divertidas para fazer!'
			},
			{
				pergunta: 'Podes dar o teu nome e a tua morada a alguém que conheceste num jogo?',
				opcoes: ['Sim, se for simpático', 'Só o nome', 'Nunca — isso é segredo', 'Só se for amigo dos meus pais'],
				correta: 2,
				explicacao: 'O teu nome e a tua morada nunca se dizem a desconhecidos. São coisas tuas e da família.'
			},
			{
				pergunta: 'Um vídeo está a fazer barulhos esquisitos e palavras feias. Tu...',
				opcoes: ['Continuo a ver porque é engraçado', 'Mostro aos amigos', 'Chamo um adulto', 'Aumento o volume'],
				correta: 2,
				explicacao: 'Vídeos com coisas feias não são para crianças. Chamamos sempre um adulto para ele tirar.'
			},
			{
				pergunta: 'Os teus olhos depois de muito tempo no ecrã ficam...',
				opcoes: ['Mais bonitos', 'Cansados e a arder', 'Maiores', 'Mais fortes'],
				correta: 1,
				explicacao: 'Os olhos cansam-se de olhar para o ecrã muito tempo. Por isso fazemos pausas para descansar!'
			},
			{
				pergunta: 'Antes de dormir, vês um vídeo emocionante no telemóvel. O que pode acontecer?',
				opcoes: ['Durmo melhor', 'Fico mais inteligente', 'Tenho dificuldade em adormecer', 'Tenho sonhos com gatinhos'],
				correta: 2,
				explicacao: 'A luz do telemóvel engana o cérebro. Antes de dormir, é melhor um livro com a família!'
			},
			{
				pergunta: 'Posso tirar uma foto sem pedir autorização à pessoa?',
				opcoes: ['Sim, se ela estiver a sorrir', 'Não, pedimos sempre primeiro', 'Só se for um animal', 'Sim, se for engraçado'],
				correta: 1,
				explicacao: 'Pedimos sempre antes de tirar uma foto a alguém. É uma regra de respeito por todos.'
			},
			{
				pergunta: 'O que é mais divertido?',
				opcoes: ['Estar no tablet 5 horas seguidas', 'Brincar lá fora, ler com a família e usar o tablet pouquinho', 'Ver televisão até muito tarde', 'Comer enquanto se vê vídeos'],
				correta: 1,
				explicacao: 'A vida é cheia de coisas divertidas! O tablet é só uma delas. Brincar, ler e estar com a família é o melhor.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
