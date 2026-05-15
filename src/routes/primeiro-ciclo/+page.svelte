<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🎨',
		titulo: '1.º Ciclo',
		subtitulo: '6 – 10 anos · 1.º ao 4.º ano',
		cor: '#48DBFB',
		fundo: '#E8FAFF',
		introducao: 'Nesta fase, as crianças começam a usar tablets para trabalhos de casa, a ver vídeos no YouTube e a jogar online. É a altura certa para aprender as regras básicas de segurança — de forma divertida e sem alarmismo.',
		temas: [
			{
				icone: '🔑',
				titulo: 'A palavra-passe é secreta',
				conteudo: 'A palavra-passe é como a chave de casa — não se dá a ninguém, nem aos melhores amigos. Se alguma vez tiveres de partilhar, diz sempre a um adulto da família.'
			},
			{
				icone: '🚫',
				titulo: 'Não partilhar dados pessoais',
				conteudo: 'O teu nome completo, morada, escola e número de telefone são informações privadas. Nunca as partilhes em jogos, aplicações ou com pessoas que não conheces.'
			},
			{
				icone: '😢',
				titulo: 'Cyberbullying não é normal',
				conteudo: 'Se alguém te magoar com palavras ou imagens online, ou se vires isso acontecer a um colega, não é "normal" — é bullying. Conta sempre a um adulto de confiança.'
			},
			{
				icone: '✋',
				titulo: 'Dizer não a pedidos estranhos',
				conteudo: 'Se alguém online te pedir fotos, para te encontrares ou para guardares um segredo dos pais — esse segredo pode ser perigoso. Conta sempre a um adulto.'
			}
		],
		dicas: [
			'A tua palavra-passe não se dá a ninguém — nem ao teu melhor amigo',
			'Se algo online te fizer sentir desconfortável, fala com um adulto — nunca é problema teu',
			'Antes de publicar ou partilhar uma foto, pergunta sempre a um adulto',
			'Em jogos online, usa sempre um nome inventado — nunca o teu nome real',
			'Se receberes uma mensagem estranha, não cliques em nenhum link — mostra a um adulto'
		],
		perguntas: [
			{
				pergunta: 'O teu amigo pede-te a palavra-passe do teu jogo favorito. O que fazes?',
				opcoes: ['Dás, porque ele é teu amigo', 'Dizes que não, a palavra-passe é segredo', 'Dás só se ele prometer não contar a ninguém', 'Mudas a palavra-passe depois'],
				correta: 1,
				explicacao: 'A palavra-passe é sempre secreta, mesmo com os melhores amigos. As amizades mudam, mas se alguém souber a tua palavra-passe pode fazer coisas no teu nome.'
			},
			{
				pergunta: 'Estás a jogar online e um desconhecido pergunta em que escola andas. O que fazes?',
				opcoes: ['Respondes, não faz mal nenhum', 'Dizes o nome da escola mas não a morada', 'Não respondes e contas a um adulto', 'Bloqueias e não dizes nada a ninguém'],
				correta: 2,
				explicacao: 'Não respondes E contas a um adulto — a segunda parte é muito importante. O adulto pode verificar se há perigo e proteger-te.'
			},
			{
				pergunta: 'Um colega teu está a ser gozado em mensagens de grupo na turma. O que fazes?',
				opcoes: ['Não fazes nada, não é contigo', 'Juntas-te ao grupo para não ficares de fora', 'Contas a um professor ou pai', 'Respondes a defender o colega sozinho'],
				correta: 2,
				explicacao: 'Contar a um adulto é a coisa mais corajosa que podes fazer. O cyberbullying piora quando ninguém faz nada. O teu professor ou pais podem ajudar.'
			},
			{
				pergunta: 'Qual destas informações NUNCA deves partilhar online?',
				opcoes: ['A tua cor favorita', 'O nome do teu animal de estimação', 'A tua morada e escola', 'O nome do teu jogo favorito'],
				correta: 2,
				explicacao: 'A tua morada e escola são informações que permitem a um estranho encontrar-te na vida real. Nunca as partilhes online — em jogos, aplicações ou redes sociais.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
