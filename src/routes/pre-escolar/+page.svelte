<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🧸',
		titulo: 'Pré-Escolar',
		subtitulo: '3 – 5 anos · Para crianças e os seus pais',
		cor: '#FF9F43',
		fundo: '#FFF5E6',
		introducao: 'As crianças pequenas ainda não usam dispositivos sozinhas, mas já veem os pais, irmãos e avós a usar o telemóvel e o tablet. É nesta fase que se formam os primeiros hábitos digitais. O objetivo não é assustar — é criar rotinas simples e seguras.',
		temas: [
			{
				icone: '🔒',
				titulo: 'Pedir sempre permissão',
				conteudo: 'Antes de pegar no telemóvel ou tablet de um adulto, a criança deve sempre pedir. Não porque seja perigoso, mas porque é uma regra da casa — como lavar as mãos antes de comer.'
			},
			{
				icone: '🧑‍🤝‍🧑',
				titulo: 'Estranhos online também são estranhos',
				conteudo: 'Tal como não falamos com estranhos na rua, não falamos com pessoas que não conhecemos no ecrã. Se aparecer alguém desconhecido, chamamos um adulto.'
			},
			{
				icone: '⏰',
				titulo: 'Tempo de ecrã',
				conteudo: 'Os especialistas recomendam máximo de 1 hora por dia para crianças desta idade, sempre com supervisão de um adulto. Ecrãs na hora de dormir perturbam o sono.'
			},
			{
				icone: '📸',
				titulo: 'Sem fotos sem permissão',
				conteudo: 'Não se tiram fotos a outras pessoas — nem a outras crianças — sem pedir autorização. Esta regra começa cedo e fica para a vida.'
			}
		],
		dicas: [
			'Usa aplicações e plataformas com controlo parental ativo (ex.: YouTube Kids, perfis de criança no tablet)',
			'Estabelece zonas e horários sem ecrãs — refeições, hora de dormir, espaço exterior',
			'Senta-te ao lado da criança enquanto ela usa o dispositivo — usa esse tempo para conversar sobre o que vê',
			'Explica as regras com exemplos simples: "O tablet vai dormir às 19h, tal como tu"',
			'Nunca uses o ecrã como recompensa ou castigo — isso aumenta o desejo pelo dispositivo'
		],
		perguntas: [
			{
				pergunta: 'O que deve a criança fazer se quiser usar o tablet?',
				opcoes: ['Pegar sem dizer nada', 'Pedir permissão a um adulto', 'Esperar que o adulto esteja distraído', 'Usar só uns minutinhos'],
				correta: 1,
				explicacao: 'Pedir permissão é a regra fundamental. Cria o hábito de respeito pelo dispositivo e pelo adulto responsável.'
			},
			{
				pergunta: 'Uma pessoa desconhecida fala com a criança num jogo online. O que deve acontecer?',
				opcoes: ['Responder normalmente', 'Ignorar e continuar a jogar', 'Chamar um adulto de imediato', 'Dar o nome e a escola'],
				correta: 2,
				explicacao: 'Estranhos online são como estranhos na rua. A criança deve sempre chamar um adulto — sem vergonha nem medo de se meter em sarilhos.'
			},
			{
				pergunta: 'Até que horas é recomendado usar ecrãs antes de dormir?',
				opcoes: ['Até adormecer', 'Parar pelo menos 1 hora antes de dormir', 'Usar no quarto com volume baixo está bem', 'Depende do conteúdo'],
				correta: 1,
				explicacao: 'A luz azul dos ecrãs engana o cérebro e dificulta o sono. Desligar pelo menos 1 hora antes de dormir ajuda a ter uma noite mais tranquila.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
