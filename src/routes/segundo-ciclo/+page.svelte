<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '📱',
		titulo: '2.º Ciclo',
		subtitulo: '10 – 12 anos · 5.º e 6.º ano',
		cor: '#1DD1A1',
		fundo: '#E8FFF8',
		introducao: 'O primeiro telemóvel próprio, as primeiras contas em redes sociais, os primeiros grupos de turma no WhatsApp — o 2.º ciclo é uma fase de muitas novidades digitais. Aprender a gerir bem este espaço agora vai fazer a diferença para o resto da vida.',
		temas: [
			{
				icone: '🔒',
				titulo: 'Configurações de privacidade',
				conteudo: 'Nas redes sociais, o perfil deve ser privado — só os teus seguidores aprovados veem o que publicas. No Instagram e TikTok, vai às definições e coloca a conta como privada. Faz isto hoje se ainda não fizeste.'
			},
			{
				icone: '📸',
				titulo: 'O que publicas fica para sempre',
				conteudo: 'Mesmo que apagues uma publicação, alguém pode ter feito uma captura de ecrã. Antes de publicar qualquer coisa, pergunta-te: "Ficaria bem se a minha mãe, professora ou um futuro empregador vissem isto?"'
			},
			{
				icone: '🎮',
				titulo: 'Segurança nos jogos online',
				conteudo: 'Nos jogos online conheces pessoas de todo o mundo — mas não as conheces de facto. Não partilhes dados pessoais, não aceites presentes de estranhos e nunca te encontres com alguém que só conheces online.'
			},
			{
				icone: '📢',
				titulo: 'Publicidade vs. conteúdo real',
				conteudo: 'Muitos vídeos e posts são publicidade disfarçada. Os influencers são muitas vezes pagos para promover produtos. Aprende a distinguir o símbolo "#anúncio" ou "#publicidade" — e questiona sempre o que vês.'
			},
			{
				icone: '💬',
				titulo: 'Conversas nos grupos de turma',
				conteudo: 'O que escreves num grupo de turma pode ser partilhado fora do grupo. Nunca escrevas nada sobre um colega que não dissesses na sua cara. Se vires cyberbullying num grupo, não te rias — conta a um adulto.'
			}
		],
		dicas: [
			'Coloca já o teu perfil em modo privado no Instagram, TikTok e qualquer outra rede social',
			'Usa palavras-passe diferentes em cada aplicação — um gestor de palavras-passe ajuda a gerir',
			'Ativa a verificação em dois passos (2FA) nas contas mais importantes',
			'Pensa duas vezes antes de publicar — o que está online pode ficar para sempre',
			'Se receberes uma mensagem estranha ou assustadora, não respondas — guarda e mostra a um adulto'
		],
		perguntas: [
			{
				pergunta: 'Tens uma conta no Instagram. O que deves fazer para ser mais seguro?',
				opcoes: ['Colocar o perfil público para ter mais seguidores', 'Colocar o perfil privado e aprovar cada seguidor', 'Aceitar todos os pedidos para ser simpático', 'Não usar nome real — o resto não importa'],
				correta: 1,
				explicacao: 'Perfil privado é o primeiro passo. Assim só as pessoas que tu aprovares veem o que publicas — e podes controlar quem te segue.'
			},
			{
				pergunta: 'O teu jogo favorito online oferece-te um item raro gratuito, mas tens de dar o teu email e palavra-passe. O que fazes?',
				opcoes: ['Aceitas — é grátis!', 'Perguntas a um amigo se é seguro', 'Recusas — nenhum jogo legítimo pede a tua palavra-passe', 'Crias uma conta nova só para isso'],
				correta: 2,
				explicacao: 'Nenhum jogo ou serviço legítimo pede a tua palavra-passe. Isto é phishing — uma tentativa de roubar os teus dados. Recusa sempre e alerta um adulto.'
			},
			{
				pergunta: 'No grupo de WhatsApp da turma, alguém partilha uma foto embaraçosa de um colega. O que fazes?',
				opcoes: ['Ris e reencaminhas para outros amigos', 'Ignoras — não é problema teu', 'Contas a um professor ou adulto de confiança', 'Respondes a defender o colega no grupo'],
				correta: 2,
				explicacao: 'Contar a um adulto é a ação mais eficaz. Reagir no grupo pode piorar a situação. Partilhar imagens sem consentimento pode ser ilegal — mesmo tendo 11 ou 12 anos.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
