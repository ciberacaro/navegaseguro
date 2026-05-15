<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🌟',
		titulo: 'Seniores',
		subtitulo: '60+ anos',
		cor: '#6C5CE7',
		fundo: '#F0EEFF',
		variante: 'senior',
		introducao: 'Esta secção é para si. Está escrita em letra grande, com linguagem simples e exemplos verdadeiros. Não é sobre ter medo da internet — é sobre saber as três ou quatro coisas que protegem das burlas mais comuns em Portugal. Em meia hora de leitura, fica preparado para reconhecer 90% das tentativas de engano.',
		temas: [
			{
				icone: '📞',
				titulo: 'A chamada do "filho" ou "neto"',
				conteudo: 'Toca o telefone. Voz com voz embargada: "Avó, sou eu, tive um acidente, preciso de dinheiro urgente. Não digas ao pai." É uma das burlas mais comuns em Portugal. Faça sempre o seguinte: desligue e ligue você mesma para o número do seu filho ou neto que já tem na agenda. Se for verdade, atende. Se for burla, salvou as suas poupanças.'
			},
			{
				icone: '🖥️',
				titulo: 'O falso técnico de informática',
				conteudo: 'Recebe uma chamada (ou aparece um aviso no computador) a dizer que tem vírus e que precisam de "acesso remoto" para resolver. NUNCA permita. A Microsoft, a MEO, a NOS — nenhuma destas empresas faz chamadas não solicitadas. Quem pede acesso remoto ao seu computador é sempre um burlão.'
			},
			{
				icone: '👮',
				titulo: 'O falso polícia ou bancário',
				conteudo: '"Senhora, é da Polícia Judiciária. A sua conta está envolvida num crime. Precisamos que transfira o dinheiro para uma conta segura." A polícia NUNCA faz isto. Nem o banco. Nem ninguém. Desligue e, se quiser confirmar, ligue para o 112 ou para o número do banco do verso do cartão.'
			},
			{
				icone: '💳',
				titulo: 'Compras pela internet com segurança',
				conteudo: 'Comprar online é seguro se seguir três regras: 1) Compre só em sites que já conhece (Fnac, Worten, El Corte Inglés, Amazon, Continente). 2) Verifique se o endereço começa por "https" e tem um cadeado. 3) Se o preço parece bom demais para ser verdade, é porque é mentira.'
			},
			{
				icone: '🏆',
				titulo: 'Falsos prémios, heranças e ofertas',
				conteudo: '"Ganhou 50.000€!" "Recebeu uma herança de um parente longínquo." "Tem direito a um reembolso." Nunca ganhou nada. Ninguém recebe heranças de desconhecidos. Reembolsos não chegam por SMS. Apague a mensagem. Se pagar "taxas para receber", perde o dinheiro — nunca recebe coisa nenhuma.'
			},
			{
				icone: '📱',
				titulo: 'WhatsApp e mensagens',
				conteudo: '"Mãe, mudei de número, é o teu filho. Preciso 600€ para pagar uma coisa urgente." Esta mensagem está a ser enviada a milhares de pais e avós em Portugal. Antes de fazer qualquer coisa, ligue para o número antigo do seu filho. Se for ele, atende.'
			},
			{
				icone: '🏥',
				titulo: 'Falsos médicos, advogados ou seguradoras',
				conteudo: 'Ligações a dizer que um familiar teve acidente, ou que ganhou uma indemnização, ou que precisa de pagar taxa urgente — antes de fazer fosse o que fosse, ligue para a pessoa que disse estar em apuros, ou para a entidade pelo número oficial. Nunca pelos números que lhe deram pela chamada.'
			}
		],
		dicas: [
			'Desconfie SEMPRE de chamadas não solicitadas — banco, polícia, técnico, operadora, hospital',
			'Em qualquer dúvida: desligue e ligue você mesmo para o número oficial que já conhece',
			'NUNCA transfira dinheiro nem entregue cartões a pedido de uma chamada telefónica',
			'NUNCA permita que alguém aceda ao seu computador à distância',
			'Combine com a família uma palavra-código secreta — para confirmar emergências verdadeiras',
			'Em caso de dúvida, fale com um familiar ANTES de tomar qualquer decisão financeira',
			'Se já caiu numa burla, não tenha vergonha — ligue 800 21 90 90 ou queixe-se na PSP/GNR',
			'Mantenha o telemóvel e o computador atualizados — as atualizações são protecção'
		],
		historias: [
			{
				titulo: 'A Sra. Maria, 72 anos, e o "neto" no hospital',
				narrativa: 'A Sra. Maria recebeu uma chamada às 22h. Voz aflita: "Avó, sou o Diogo. Tive um acidente, estou no hospital, preciso 1.500€ urgente para a operação. Não digas ao pai, ele zanga-se. Manda por MB Way para este número." A Sra. Maria, em pânico, ligou imediatamente à filha (mãe do Diogo). A filha ligou ao Diogo — estava em casa, sem acidente nenhum. Era burla. A Sra. Maria não perdeu nada. Hoje conta a história nas aulas da Universidade Sénior.',
				licao: 'O instinto da Sra. Maria salvou-a: antes de qualquer coisa, ligou a outro familiar. Pânico é o que os burlões querem — paragem para verificar é o que os derrota.'
			},
			{
				titulo: 'O Sr. António, 68 anos, e o "técnico da Microsoft"',
				narrativa: 'Recebeu chamada de "técnico da Microsoft" a dizer que o computador tinha vírus a roubar dinheiro do banco. Pediram para instalar um programa "para limpar". O Sr. António, confuso mas preocupado, fez tudo o que pediram. O "técnico" mostrou-lhe ecrãs assustadores e disse que precisava transferir 3.000€ para uma "conta protegida" enquanto resolviam. Transferiu. Quando o filho passou para almoçar e percebeu, ligaram ao banco — tarde demais. Dinheiro perdido. Queixa à PJ, processo aberto, mas o dinheiro nunca voltou.',
				licao: 'A Microsoft nunca liga. Nem a EDP, nem a MEO. Quem liga a pedir acesso ou transferências é sempre burlão. Não há excepção.'
			},
			{
				titulo: 'A Dona Isabel, 80 anos, e o "advogado da herança"',
				narrativa: 'Recebeu carta e depois chamada: tinha herdado 180.000€ de um parente distante que vivia no Canadá. Só precisava pagar "taxas notariais" de 1.200€ para receber. Pagou. Depois pediram "taxa de transferência internacional", 2.500€. Pagou. Depois "imposto canadiano", 4.000€. Aí a sobrinha, que veio visitar, percebeu. Total perdido: 7.700€. Nunca houve herança. Era a clássica burla 419 (também chamada nigeriana). A sobrinha ajudou a denunciar à PSP.',
				licao: 'Heranças verdadeiras nunca pedem taxas adiantadas. Nem prémios. Nem reembolsos. Se pedem dinheiro para receber dinheiro — é burla, sempre.'
			}
		],
		perguntas: [
			{
				pergunta: 'Recebe uma chamada: "Avó, sou o Tiago, tive um acidente, preciso 800€". O que faz?',
				opcoes: ['Transfere imediatamente — é o neto', 'Pede dados bancários e transfere', 'Desliga e liga ao Tiago pelo número que tem na agenda', 'Pergunta detalhes do acidente'],
				correta: 2,
				explicacao: 'A burla do "falso neto" é das mais comuns em Portugal. Desligar e ligar ao número que já conhece é a forma certa. Se for verdade, atende. Se for burla, salva as poupanças.'
			},
			{
				pergunta: 'Liga-lhe alguém dizendo ser "técnico da Microsoft", pede para instalar um programa para "limpar vírus". O que faz?',
				opcoes: ['Instalo — a Microsoft é fiável', 'Peço o nome do técnico antes', 'Desligo — a Microsoft nunca faz chamadas não solicitadas', 'Desligo o computador para proteger'],
				correta: 2,
				explicacao: 'Nem a Microsoft nem nenhuma empresa de informática faz chamadas não solicitadas. Quem pede acesso ao seu computador é sempre burlão.'
			},
			{
				pergunta: '"Ganhou 25.000€ num sorteio. Pague 150€ de taxas para receber". É:',
				opcoes: ['Provavelmente verdade — vale a pena', 'Burla — prémios verdadeiros nunca pedem taxas adiantadas', 'Depende de quem organizou', 'Vou perguntar ao banco'],
				correta: 1,
				explicacao: 'Nunca participou em sorteio, nunca ganhou nada. Os 150€ é o que perde. Os 25.000€ nunca chegam — não existem.'
			},
			{
				pergunta: 'O banco liga-lhe a pedir o código do cartão "para confirmar movimentos". Faz?',
				opcoes: ['Confirmo — é o banco', 'Peço o nome do funcionário e dou', 'Desligo e ligo ao número do verso do cartão', 'Confirmo só os últimos 4 dígitos'],
				correta: 2,
				explicacao: 'O banco NUNCA pede códigos por telefone. Desligue e ligue você ao número do verso do cartão — assim tem a certeza de falar com o banco real.'
			},
			{
				pergunta: 'SMS: "AT - tem reembolso de 437€. Clique aqui [link]". O que faz?',
				opcoes: ['Clico para receber', 'Apago — as Finanças não enviam reembolsos por SMS', 'Reencaminho a um filho para ver', 'Respondo a pedir mais informação'],
				correta: 1,
				explicacao: 'Nem as Finanças, nem o banco, nem ninguém manda dinheiro por SMS com link. Apague. Se tem dúvida sobre reembolsos, vá ao Portal das Finanças com o seu cartão de cidadão.'
			},
			{
				pergunta: 'WhatsApp: "Mãe, mudei de número, este é o meu novo. Preciso 600€ para uma urgência". O que faz?',
				opcoes: ['Transfiro — é o meu filho', 'Ligo ao número antigo do meu filho antes de mais nada', 'Respondo a perguntar o que aconteceu', 'Transfiro metade'],
				correta: 1,
				explicacao: 'Esquema "falso filho" no WhatsApp — está a ser usado massivamente em Portugal. Ligue sempre ao número antigo primeiro. Se for o seu filho, atende.'
			},
			{
				pergunta: 'Para comprar online com segurança, deve...',
				opcoes: ['Procurar o preço mais barato', 'Comprar em sites conhecidos (Fnac, Continente, Amazon) com cadeado e "https"', 'Comprar em qualquer site que pareça profissional', 'Pagar sempre por transferência bancária'],
				correta: 1,
				explicacao: 'Sites conhecidos + endereço com "https" e cadeado = compra segura. Sites desconhecidos com preços muito baixos = quase sempre burla.'
			},
			{
				pergunta: 'Recebeu uma carta a dizer que tem uma herança de 200.000€ de um parente desconhecido. Só tem de pagar 800€ de taxas. Faz?',
				opcoes: ['Pago — vale a pena pelos 200.000€', 'Não pago — heranças verdadeiras nunca pedem taxas', 'Pago metade', 'Pergunto ao advogado da família'],
		    correta: 1,
				explicacao: 'A burla 419 — clássica. Heranças, prémios, reembolsos: NUNCA pedem dinheiro para "receber". Se pedem, é burla — sempre.'
			},
			{
				pergunta: 'Já caiu numa burla e perdeu 2.000€. O que deve fazer?',
				opcoes: ['Ter vergonha e não contar a ninguém', 'Ligar para 800 21 90 90 e queixar-se na PSP/GNR — sem vergonha', 'Tentar resolver sozinho', 'Esperar para ver se o dinheiro volta'],
				correta: 1,
				explicacao: 'Vergonha é o que os burlões querem — para você não denunciar. Milhões de pessoas caem todos os anos, em todas as idades. A queixa ajuda-o e ajuda outros.'
			},
			{
				pergunta: 'O que ajuda a proteger-se de quase todas as burlas?',
				opcoes: ['Não usar a internet', 'Verificar SEMPRE antes de pagar ou dar dados — pelo telefone oficial', 'Confiar nas chamadas dos números portugueses', 'Pagar pequenas quantias para testar'],
				correta: 1,
				explicacao: 'Verificar antes de agir — pelo canal oficial que você conhece — protege de 90% das burlas. Os burlões dependem da urgência. Você decide o tempo.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="editorial" />
