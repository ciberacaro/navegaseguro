<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🎨',
		titulo: '1.º Ciclo',
		subtitulo: '6 – 10 anos · 1.º ao 4.º ano',
		cor: '#48DBFB',
		fundo: '#E8FAFF',
		variante: 'infantil',
		introducao: 'Olá! Já usas o tablet, o telemóvel e talvez tenhas começado a jogar online. Nesta página vais aprender umas regras fixes para usares a internet em segurança. Não é difícil — é como aprender a atravessar a rua!',
		temas: [
			{
				icone: '🔑',
				titulo: 'A palavra-passe é só tua',
				conteudo: 'A tua palavra-passe é como a chave de casa. Não se dá a NINGUÉM — nem ao teu melhor amigo, nem ao teu primo, nem àquele colega muito fixe da turma. Só aos teus pais.'
			},
			{
				icone: '🚫',
				titulo: 'Segredos pessoais',
				conteudo: 'O teu nome completo, onde moras, em que escola andas e o número de telefone são segredos importantes. Nunca dizes isto a quem não conheces — em jogos, vídeos ou aplicações.'
			},
			{
				icone: '🎮',
				titulo: 'Pessoas nos jogos online',
				conteudo: 'Quando jogas online, podes falar com pessoas de todo o mundo. Mas há pessoas más que se disfarçam de crianças. Se alguém te pedir fotos ou para guardar segredos dos pais, conta logo a um adulto.'
			},
			{
				icone: '😢',
				titulo: 'Quando alguém te magoa',
				conteudo: 'Se um colega te disser coisas más por mensagem ou nos jogos, isso é cyberbullying. Não respondas, não apagues as mensagens (servem de prova) e mostra a um adulto de confiança.'
			},
			{
				icone: '📸',
				titulo: 'Fotos: pensa duas vezes',
				conteudo: 'Antes de mandares uma foto, pensa: "Ficaria bem se a professora ou os meus avós vissem?". Se a resposta for "não", então não envies. As fotos podem ser partilhadas para sítios onde não queres.'
			}
		],
		dicas: [
			'A tua palavra-passe é segredo — só os teus pais podem saber',
			'Em jogos online, usa sempre um nome inventado (nunca o teu nome verdadeiro)',
			'Se algo te fizer sentir mal, fala com um adulto — nunca tens culpa de nada',
			'Não cliques em mensagens estranhas — mostra a um adulto primeiro',
			'Antes de mandar uma foto, pergunta-te se ficaria bem mostrá-la aos teus pais'
		],
		historias: [
			{
				titulo: 'O Tomás e o "amigo" do jogo',
				narrativa: 'O Tomás tem 9 anos e adora o seu jogo online. Conheceu um jogador chamado "MegaCraque07" que disse ter a mesma idade. Após algumas semanas, o "MegaCraque" pediu para o Tomás enviar uma foto da sua escola e guardar segredo dos pais. O Tomás achou estranho — porque um amigo precisaria disso? — e contou tudo ao pai. O pai descobriu que era um adulto que se fazia passar por criança. Bloquearam a conta e fizeram queixa.',
				licao: 'Se um "amigo" online te pede para esconderes coisas dos teus pais, é um sinal grave de alarme. Conta sempre.'
			},
			{
				titulo: 'A Beatriz e o grupo da turma',
				narrativa: 'No grupo de WhatsApp da turma do 3.º ano, alguns colegas começaram a gozar com a Beatriz por causa dos óculos novos. Ela ficou muito triste e chorou. A mãe disse para não responder mas guardar todas as mensagens. Mostraram à professora, que falou com os colegas e com os pais deles. As mensagens pararam e a Beatriz voltou a sentir-se bem.',
				licao: 'Guardar as mensagens e contar a um adulto é a melhor forma de resolver o cyberbullying.'
			}
		],
		perguntas: [
			{
				pergunta: 'O teu melhor amigo pede-te a tua palavra-passe do jogo. O que fazes?',
				opcoes: ['Dou — é meu amigo', 'Digo que não, é segredo', 'Dou se ele prometer não contar', 'Trocamos as palavras-passe um do outro'],
				correta: 1,
				explicacao: 'A palavra-passe é sempre segredo, mesmo entre amigos. Hoje são amigos, amanhã podem zangar-se.'
			},
			{
				pergunta: 'Num jogo online, alguém pergunta-te em que escola andas. Tu...',
				opcoes: ['Digo, sem problema', 'Digo só o nome', 'Não digo e conto a um adulto', 'Pergunto onde é que ele anda'],
				correta: 2,
				explicacao: 'Nunca dizemos o nome da escola a desconhecidos. E contamos a um adulto para ele perceber se há perigo.'
			},
			{
				pergunta: 'No grupo da turma, alguém manda uma mensagem feia sobre um colega. Tu...',
				opcoes: ['Junto-me para não ficar de fora', 'Ignoro porque não é comigo', 'Conto a um professor ou pai', 'Respondo sozinho a defender'],
				correta: 2,
				explicacao: 'Contar a um adulto é a forma mais corajosa e eficaz. Os adultos podem parar o cyberbullying.'
			},
			{
				pergunta: 'Qual destas coisas NUNCA se diz online a desconhecidos?',
				opcoes: ['A tua cor favorita', 'O nome do teu cão', 'A tua morada e escola', 'O nome do teu jogo'],
				correta: 2,
				explicacao: 'A morada e a escola permitem a um estranho encontrar-te no mundo real. São informações muito privadas.'
			},
			{
				pergunta: 'Um "amigo" online de 10 anos pede para tu não contares aos teus pais o que falam. Isso...',
				opcoes: ['É normal entre amigos', 'É sinal de alarme — pode ser um adulto disfarçado', 'Faz parte do jogo', 'Só é mau se for sobre coisas más'],
				correta: 1,
				explicacao: 'Crianças verdadeiras não pedem segredos dos pais. Quem pede isso pode ser um adulto a fingir — é a maior pista de perigo.'
			},
			{
				pergunta: 'Recebes uma mensagem a dizer que ganhaste 1000 brindes no jogo se clicares no link. Tu...',
				opcoes: ['Clico rapidamente', 'Mostro a um adulto antes de clicar', 'Mando aos amigos', 'Clico mas não digo a ninguém'],
				correta: 1,
				explicacao: 'Mensagens de prémios fáceis são quase sempre fraudes. Mostra a um adulto — ele consegue ver se é verdade.'
			},
			{
				pergunta: 'Um colega quer tirar-te uma foto a fazer uma cara engraçada. Tu...',
				opcoes: ['Deixo sempre', 'Decido se quero ou não — é o meu corpo', 'Deixo se ele me der um doce', 'Tiro eu uma a ele primeiro'],
				correta: 1,
				explicacao: 'O teu corpo e a tua imagem são tuas. Podes sempre dizer que não, mesmo que seja uma brincadeira.'
			},
			{
				pergunta: 'Antes de pedir um jogo novo, deves...',
				opcoes: ['Descarregar primeiro e mostrar depois', 'Pedir a um adulto para ver se é seguro', 'Pedir aos colegas se já jogaram', 'Comprar com o telemóvel dos pais'],
				correta: 1,
				explicacao: 'Há jogos com conteúdo inadequado ou com fraudes. Um adulto pode confirmar se o jogo é seguro.'
			},
			{
				pergunta: 'A tua palavra-passe deve ser...',
				opcoes: ['O teu nome', 'A tua data de nascimento', 'Algo que só tu te lembres, com letras, números e símbolos', '"1234" porque é fácil'],
				correta: 2,
				explicacao: 'Uma palavra-passe forte é difícil de adivinhar. "Bola-Azul-Doce-72" é melhor do que "joao2017".'
			},
			{
				pergunta: 'Se alguém te ameaçar online ("se não fizeres X, faço Y"), tu...',
				opcoes: ['Faço o que pedem para não ter problemas', 'Conto logo a um adulto — nunca cedo a ameaças', 'Bloqueio e finjo que não aconteceu', 'Respondo com ameaças também'],
				correta: 1,
				explicacao: 'Ceder a uma ameaça nunca para a ameaça — só piora. Contar a um adulto é a única forma de te protegerem a sério.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
