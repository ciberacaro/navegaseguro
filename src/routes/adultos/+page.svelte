<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '👔',
		titulo: 'Adultos',
		subtitulo: '18 – 59 anos',
		cor: '#0984E3',
		fundo: '#EBF5FF',
		introducao: 'Os adultos são o principal alvo das fraudes mais sofisticadas — porque têm contas bancárias, cartões de crédito, acesso a sistemas de trabalho e responsabilidade por outras pessoas. Esta secção é prática e direta: saber reconhecer ameaças reais que acontecem em Portugal hoje.',
		temas: [
			{
				icone: '📩',
				titulo: 'Phishing: emails e SMS falsos',
				conteudo: 'Em Portugal, os esquemas mais comuns são: SMS falsos dos CTT ("taxa de importação pendente"), emails das Finanças ("reembolso disponível"), SMS do banco ("conta suspensa"). Padrão: urgência + link. Nunca cliques. Vai diretamente ao site oficial.'
			},
			{
				icone: '📲',
				titulo: 'Fraude MB Way',
				conteudo: 'Vês um anúncio de venda online, o "comprador" diz que vai pagar por MB Way mas precisa do teu número e NIF para "enviar o pagamento". Resultado: em vez de receber, tu é que envias. O MB Way funciona ao contrário — quem paga é quem envia, não quem recebe.'
			},
			{
				icone: '💼',
				titulo: 'Segurança no teletrabalho',
				conteudo: 'Em casa, a rede Wi-Fi pode não ter a segurança da rede da empresa. Usa sempre VPN se a empresa disponibilizar, não uses o computador de trabalho para fins pessoais, e nunca abras ficheiros de remetentes desconhecidos no email profissional.'
			},
			{
				icone: '📞',
				titulo: 'Vishing: burlas por telefone',
				conteudo: 'Ligas a receber de alguém que diz ser do banco, da MEO, da Segurança Social ou até da Polícia Judiciária. Pedem dados, ou que transferas dinheiro "por segurança". Nenhuma destas entidades faz isto. Desliga e liga tu para o número oficial.'
			},
			{
				icone: '🏠',
				titulo: 'Burlas em arrendamento e compras online',
				conteudo: 'Casas ou carros a preços muito abaixo do mercado em OLX ou Idealista com vendedor "no estrangeiro" são quase sempre fraudes. Nunca pagues antes de ver o bem em pessoa, e nunca uses transferência bancária para desconhecidos.'
			}
		],
		dicas: [
			'O banco NUNCA te liga a pedir pin, palavra-passe ou código de segurança — desliga e liga para o número do cartão',
			'Antes de clicar num link, passa o rato por cima e verifica o endereço real que aparece',
			'Ativa o alerta de movimentos na aplicação do banco — assim sabes imediatamente de qualquer débito',
			'Usa palavras-passe diferentes no email pessoal e profissional — e ativa sempre o 2FA',
			'Desconfia de qualquer pedido de urgência — fraudes usam pressa para impedir que penses'
		],
		perguntas: [
			{
				pergunta: 'Recebes um SMS: "O seu pacote CTT foi retido. Taxa de 2,99€ pendente. Pague em: [link]". O que fazes?',
				opcoes: ['Pagas — é só 2,99€', 'Clicas para ver se é verdade', 'Ignoras e apaga — é phishing', 'Reencaminhas para amigos'],
				correta: 2,
				explicacao: 'Este é um dos esquemas mais comuns em Portugal. Os CTT nunca pedem pagamentos por SMS com link. Se tiveres dúvidas sobre uma encomenda, vai diretamente a ctt.pt e consulta com o número de rastreio.'
			},
			{
				pergunta: 'Estás a vender um sofá no OLX. O comprador diz que paga por MB Way e pede o teu número e NIF. O que acontece a seguir?',
				opcoes: ['Recebes o dinheiro normalmente', 'Ele usa os teus dados para enviar um pedido de dinheiro — tu é que pagas', 'É a forma normal de receber por MB Way', 'Podes verificar se é real antes de aceitar'],
				correta: 1,
				explicacao: 'Esta é a fraude MB Way mais comum. O vendedor partilha o número e NIF, o "comprador" envia um pedido de pagamento disfarçado de transferência, e a vítima aprova sem perceber. Para receber por MB Way, basta dares o teu número de telemóvel — nunca o NIF.'
			},
			{
				pergunta: 'Recebes uma chamada de alguém que diz ser do teu banco, a pedir que confirmes os dados do cartão "por segurança". O que fazes?',
				opcoes: ['Confirmas — o banco tem direito a pedir', 'Perguntas o nome do funcionário antes de responder', 'Desligas e ligas para o número do cartão bancário', 'Dizes que ligas de volta e esperas'],
				correta: 2,
				explicacao: 'Desligar e ligar para o número oficial do cartão é a única resposta correta. Os bancos nunca pedem dados completos por telefone de forma não solicitada. Ao ligares tu, tens a certeza de estar a falar com o banco real.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
