<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🎯',
		titulo: 'Secundário',
		subtitulo: '15 – 18 anos · 10.º ao 12.º ano',
		cor: '#A29BFE',
		fundo: '#F3F0FF',
		introducao: 'No secundário, tens mais autonomia digital — e mais exposição a riscos sérios. Primeira conta bancária, candidatura à universidade, primeiros empregos a tempo parcial. A tua reputação online já importa, e as fraudes financeiras já têm o teu nome.',
		temas: [
			{
				icone: '🔍',
				titulo: 'A tua reputação digital',
				conteudo: 'Universidades e empregadores pesquisam o nome dos candidatos. Uma foto, um comentário agressivo ou uma publicação de há 3 anos pode fechar portas. Pesquisa já o teu nome no Google e vê o que aparece. O que não quiseres que exista, tenta remover.'
			},
			{
				icone: '💸',
				titulo: 'Esquemas de investimento falsos',
				conteudo: 'Promessas de "ganhar dinheiro fácil" em criptomoedas, Forex ou trading de ações com retornos garantidos são, na esmagadora maioria, esquemas. Em Portugal, a CMVM regula os investimentos — verifica sempre se a empresa tem licença antes de dar qualquer dinheiro.'
			},
			{
				icone: '🤖',
				titulo: 'IA generativa e trabalhos académicos',
				conteudo: 'Usar IA para fazer trabalhos académicos sem indicar que o fizeste é desonestidade académica — e as universidades têm detetores. Aprende a usar IA como ferramenta de apoio, não como substituto do teu pensamento.'
			},
			{
				icone: '🛡️',
				titulo: 'Phishing financeiro',
				conteudo: 'Com uma conta bancária própria, és alvo de phishing bancário. SMS falsos do Banco de Portugal, emails do "Governo" com reembolsos fiscais, notificações da "Netflix" a pedir dados do cartão — todos têm um padrão: urgência + link + dados pessoais.'
			},
			{
				icone: '🔐',
				titulo: 'Gestores de palavras-passe',
				conteudo: 'Com dezenas de contas online, usar a mesma palavra-passe em todo o lado é perigoso. Um gestor de palavras-passe (Bitwarden é gratuito e seguro) gera e guarda palavras-passe fortes para cada conta automaticamente.'
			}
		],
		dicas: [
			'Pesquisa o teu nome no Google — vê o que aparece e remove o que não queres',
			'Nunca investas dinheiro em plataformas que não estejam registadas na CMVM (cmvm.pt)',
			'Usa um gestor de palavras-passe — o Bitwarden é gratuito e fiável',
			'Ativa sempre a verificação em dois passos (2FA) — preferir aplicação de autenticação a SMS',
			'Desconfia de qualquer mensagem com urgência + link + pedido de dados — é quase sempre fraude'
		],
		perguntas: [
			{
				pergunta: 'Recebes um email do "Banco de Portugal" a dizer que tens um reembolso de 240€ pendente e tens de clicar num link para receber. O que fazes?',
				opcoes: ['Clicas rapidamente — pode expirar', 'Verificas se o email é do domínio oficial e contactas o banco por outro canal', 'Respondes a pedir mais informações', 'Encaminhas para amigos para verem se é real'],
				correta: 1,
				explicacao: 'O Banco de Portugal não envia reembolsos por email com links. Abre o site do banco manualmente (sem clicar no link) ou liga para o número oficial para verificar.'
			},
			{
				pergunta: 'Um anúncio no Instagram promete que podes ganhar 500€/semana em criptomoedas sem experiência. É:',
				opcoes: ['Uma oportunidade legítima se a empresa parecer séria', 'Quase certamente um esquema — investimentos legítimos não garantem retornos', 'Arriscado mas pode funcionar', 'Legal se a empresa estiver registada'],
				correta: 1,
				explicacao: 'Nenhum investimento legítimo garante retornos fixos. Estes anúncios são quase sempre esquemas Ponzi ou fraudes de phishing. Verifica sempre em cmvm.pt antes de qualquer investimento.'
			},
			{
				pergunta: 'Qual é a melhor forma de gerir dezenas de palavras-passe diferentes?',
				opcoes: ['Usar a mesma palavra-passe em todo o lado', 'Usar variações da mesma palavra-passe', 'Usar um gestor de palavras-passe como o Bitwarden', 'Guardar numa folha de papel em casa'],
				correta: 2,
				explicacao: 'Um gestor de palavras-passe gera palavras-passe únicas e fortes para cada conta e guarda-as de forma cifrada. O Bitwarden é gratuito, de código aberto e auditado por terceiros.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
