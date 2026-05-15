<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🌟',
		titulo: 'Seniores',
		subtitulo: '60+ anos',
		cor: '#6C5CE7',
		fundo: '#F0EEFF',
		introducao: 'Os seniores são cada vez mais ativos online — WhatsApp com a família, compras, homebanking, notícias. E são também o alvo preferido de burlões, porque em geral são mais confiantes, mais educados ao telefone, e muitas vezes gerem as poupanças de uma vida. Esta secção usa linguagem simples e exemplos reais.',
		temas: [
			{
				icone: '📞',
				titulo: 'A chamada do "falso filho" ou "falso neto"',
				conteudo: 'Tocam ao telefone. Uma voz diz: "Avó, sou eu, o Tiago — tive um acidente e preciso de dinheiro urgente. Não digas nada ao pai." Desliga imediatamente e liga tu diretamente ao filho ou neto pelo número que já conheces. Nenhum familiar de confiança pede dinheiro assim.'
			},
			{
				icone: '🖥️',
				titulo: 'O falso técnico de informática',
				conteudo: 'Recebe uma chamada ou mensagem a dizer que o seu computador tem um vírus e que precisam de acesso remoto para resolver. Nunca permita que um desconhecido aceda ao seu computador. Empresas como a Microsoft nunca fazem chamadas não solicitadas.'
			},
			{
				icone: '💳',
				titulo: 'O falso agente bancário ou policial',
				conteudo: 'Alguém liga a dizer ser do banco ou da polícia, a pedir que transfira dinheiro "para uma conta segura" ou que entregue o cartão a um "mensageiro". Nenhum banco nem a polícia faz isto. Desligue e ligue para o número oficial.'
			},
			{
				icone: '🛒',
				titulo: 'Compras seguras online',
				conteudo: 'Antes de comprar numa loja online, verifique se o endereço começa com "https://" e se tem o cadeado. Prefira sites conhecidos (Fnac, El Corte Inglés, Amazon). Se o preço parece bom demais para ser verdade, provavelmente é uma fraude.'
			},
			{
				icone: '🏆',
				titulo: 'Falsos prémios e heranças',
				conteudo: '"Ganhou 50.000€ num sorteio — só tem de pagar as taxas de levantamento." Não ganhou nada. Ninguém recebe heranças de desconhecidos nem prémios de concursos em que não participou. Apague a mensagem.'
			}
		],
		dicas: [
			'Desconfie de qualquer chamada não solicitada — banco, polícia, operadora ou técnico de informática',
			'Se tiver dúvidas, desligue e ligue você mesmo para o número oficial que já conhece',
			'Nunca transfira dinheiro nem entregue cartões a pedido de uma chamada telefónica',
			'Nunca deixe ninguém aceder ao seu computador de forma remota sem saber exatamente quem é',
			'Em caso de dúvida, fale com um familiar antes de tomar qualquer decisão financeira'
		],
		perguntas: [
			{
				pergunta: 'Recebe uma chamada. Uma voz diz "Avó, sou o Ricardo, tive um acidente, não digas ao pai, preciso de 800€". O que faz?',
				opcoes: ['Pede os dados bancários para transferir', 'Desliga e liga diretamente ao Ricardo pelo número que já tem', 'Pede mais detalhes do acidente', 'Envia por MB Way para ser mais rápido'],
				correta: 1,
				explicacao: 'Esta é a burla do "falso neto" — uma das mais comuns em Portugal. Desligue sempre e ligue você mesmo para o número do familiar. Se for verdade, saberá em segundos. Se for burla, protegeu as suas poupanças.'
			},
			{
				pergunta: 'Recebe um telefonema de alguém que diz ser técnico da Microsoft e que o seu computador tem vírus. Pedem para instalar um programa para "resolver". O que faz?',
				opcoes: ['Instala o programa — a Microsoft é uma empresa séria', 'Pede o nome do técnico e depois instala', 'Desliga — a Microsoft nunca faz chamadas não solicitadas', 'Desliga o computador para proteger'],
				correta: 2,
				explicacao: 'A Microsoft (e qualquer outra empresa de tecnologia) nunca liga a clientes de forma não solicitada. Se instalar o programa pedido, o burlão terá acesso total ao seu computador e poderá roubar dados bancários e poupanças.'
			},
			{
				pergunta: 'Recebe uma mensagem a dizer que ganhou 25.000€ num sorteio e que só tem de pagar 150€ de taxas para receber. É:',
				opcoes: ['Provavelmente real — os 25.000€ cobrem bem os 150€', 'Uma burla — nunca se pagam taxas para receber prémios legítimos', 'Depende de quem organizou o sorteio', 'Pode perguntar ao banco se é seguro'],
				correta: 1,
				explicacao: 'Esta é a burla dos "falsos prémios" — nunca existiu nenhum sorteio. Prémios legítimos nunca exigem pagamento prévio. Os 150€ que pagar, perde. Os 25.000€ nunca chegam.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
