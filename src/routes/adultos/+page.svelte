<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '👔',
		titulo: 'Adultos',
		subtitulo: '18 – 59 anos',
		cor: '#0984E3',
		fundo: '#EBF5FF',
		variante: 'adulto',
		introducao: 'És o alvo principal das fraudes sofisticadas: tens contas bancárias, cartão de crédito, acesso a sistemas profissionais e responsabilidade por outras pessoas (filhos, pais idosos). Esta secção é prática, direta e adaptada à realidade portuguesa. Aprenda a reconhecer o que os criminosos fazem hoje em Portugal — antes de o sentir na pele.',
		temas: [
			{
				icone: '📩',
				titulo: 'Phishing: o padrão português',
				conteudo: 'CTT, Finanças, AT, MEO, banco, Segurança Social, EDP, Via Verde — todas estas marcas são imitadas em SMS e emails. O padrão é sempre: urgência + link + dados pessoais. Pague já, regularize já, confirme já. A pressa é o sintoma — abrande, valide pelo canal oficial.'
			},
			{
				icone: '📲',
				titulo: 'Fraude MB Way (a mais comum)',
				conteudo: 'Está a vender no OLX/Custojusto. "Comprador" diz que paga por MB Way e pede o seu número + NIF. Resultado: ele envia um pedido de pagamento e você aprova sem perceber. MB Way funciona ao contrário do que pensa: quem paga é quem envia. Para receber, basta o nº de telemóvel — nunca NIF.'
			},
			{
				icone: '📞',
				titulo: 'Vishing: burlas por telefone',
				conteudo: '"É do banco, detetámos uma transferência suspeita". "Sou da PJ, a sua conta está envolvida em branqueamento". "Da MEO, a sua internet vai ser cortada". Padrão: criam pânico, pedem dados ou ação imediata. Bancos, polícia e operadoras NUNCA pedem assim. Desligue e ligue ao número oficial.'
			},
			{
				icone: '💼',
				titulo: 'Segurança no teletrabalho',
				conteudo: 'Computador profissional só para trabalho, computador pessoal só para vida pessoal. Use VPN da empresa. Nunca abra anexos de remetentes desconhecidos no email profissional — é o vetor nº 1 de ransomware empresarial.'
			},
			{
				icone: '🏠',
				titulo: 'Compras e arrendamentos online',
				conteudo: 'Casa muito abaixo do mercado, "dono no estrangeiro", insiste em pagamento por transferência antes de visitar — fraude clássica. Nunca pague antes de ver pessoalmente. No OLX/Idealista, prefira pagamento contra entrega ou plataformas com proteção.'
			},
			{
				icone: '💕',
				titulo: 'Burlas românticas e apps de namoro',
				conteudo: 'Pessoa "perfeita" no Tinder/Bumble, conversa por semanas, nunca quer videochamada (ou só faz uma rápida), depois aparece uma emergência: hospital, viagem cancelada, oportunidade de investimento conjunto. Pede dinheiro. Em Portugal há milhões de euros perdidos anualmente assim. Regra: nunca empreste a quem nunca conheceu pessoalmente.'
			},
			{
				icone: '⚖️',
				titulo: 'RGPD: os seus direitos como cidadão',
				conteudo: 'Tem direito a saber que dados as empresas têm sobre si, a corrigi-los, a pedir apagamento, a portar para outro fornecedor. As empresas têm 30 dias para responder, gratuitamente. Em caso de incumprimento, queixa à CNPD (cnpd.pt). Aplica-se a empresas em Portugal e fora — desde que tratem dados de portugueses.'
			},
			{
				icone: '🛡️',
				titulo: 'Proteção dos seus pais e filhos',
				conteudo: 'É frequentemente a ponte entre dois grupos vulneráveis: filhos (que sabem mais que os pais) e idosos (que sabem menos). Verifique periodicamente as contas dos pais idosos. Configure o telemóvel deles para bloquear chamadas desconhecidas. Tenha uma palavra-código familiar para validar emergências por telefone.'
			}
		],
		dicas: [
			'O banco NUNCA pede pin, palavra-passe ou códigos de segurança por telefone, SMS ou email',
			'Antes de clicar num link, passe o rato em cima — veja o endereço real no canto do browser',
			'Ative alertas de movimentos na app do banco — sabe ao segundo qualquer débito',
			'Use 2FA por aplicação (Authy) em vez de SMS — protege contra SIM swap',
			'Cuidado especial com pedidos urgentes — a fraude depende de te impedir de pensar',
			'Para receber por MB Way, só precisa do nº de telemóvel — quem pede NIF está a tentar burlá-lo',
			'Faça pesquisa de imagem inversa (Google Images) de perfis de namoro suspeitos — fotos roubadas aparecem',
			'Tenha uma palavra-código familiar — quando um familiar pedir dinheiro urgente por mensagem, peça a palavra'
		],
		historias: [
			{
				titulo: 'A Engª Catarina, 38 anos, e o "diretor financeiro"',
				narrativa: 'Catarina é gestora numa empresa em Lisboa. Recebe um email do "CEO" a pedir transferência urgente de 47.000€ para um fornecedor — fechar negócio antes do fim do dia. Email idêntico ao do CEO real, assinatura igual. Catarina autoriza. Era Business Email Compromise — atacantes infiltraram-se semanas antes, perceberam quem autoriza pagamentos, criaram domínio parecido (1 letra diferente). Empresa perdeu os 47.000€. Catarina não foi despedida mas a empresa nunca recuperou o dinheiro.',
				licao: 'Pedidos urgentes de transferência por email têm sempre de ser validados por outro canal (telefone, presencial). Política de "dupla validação" salva empresas.'
			},
			{
				titulo: 'O João, 52 anos, e o amor online',
				narrativa: 'João, divorciado, conheceu a "Patricia" no Facebook. Médica norte-americana destacada na Síria. Conversaram 4 meses, mensagens lindas todos os dias. Sempre evitou videochamada — má rede na zona de guerra. Pediu 3.500€ para "taxa militar" para sair da Síria e vir a Portugal. João pagou. Depois pediu 8.000€ para "libertar bagagem na alfândega". Pagou. Pediu mais. Aí desconfiou e fez pesquisa de imagem inversa: as fotos eram de uma médica espanhola sem qualquer ligação. Total perdido: 14.500€.',
				licao: 'Quem nunca quer videochamada, vive longe e tem emergências que pedem dinheiro — é fraude. A pesquisa de imagem inversa (Google Images, TinEye) é rápida e revela quase tudo.'
			},
			{
				titulo: 'A Família Silva e o ransomware',
				narrativa: 'Pedro abriu um anexo "Fatura.pdf.exe" no email profissional. Em 20 minutos, todos os ficheiros do portátil — fotos de família, documentos, declarações de IRS — ficaram encriptados. Pediram 800€ em Bitcoin. Sem cópia de segurança, a família perdeu 15 anos de fotos. A empresa não tinha backup do portátil dele. Pedro não pagou (não há garantia de recuperar) e perdeu tudo.',
				licao: 'Backup automático na nuvem (Google Drive, iCloud, OneDrive) é gratuito até certo limite — chega para fotos essenciais. Configure hoje. Ransomware afeta sobretudo quem não tem backup.'
			}
		],
		perguntas: [
			{
				pergunta: 'SMS: "CTT — pacote retido, 2,99€ pendente. Pague em [link]". O que faz?',
				opcoes: ['Pago — são só 2,99€', 'Clico para verificar', 'Ignoro e apago — é phishing', 'Reencaminho para amigos'],
				correta: 2,
				explicacao: 'O esquema mais comum em Portugal. Os CTT nunca pedem pagamentos por SMS. Em dúvida, vá a ctt.pt diretamente com o nº de rastreio.'
			},
			{
				pergunta: 'Vende um sofá no OLX. Comprador pede nº de telemóvel + NIF para pagar por MB Way. O que acontece?',
				opcoes: ['Recebe normalmente', 'Ele envia pedido de pagamento e você aprova sem perceber', 'É a forma padrão de receber MB Way', 'É preciso confirmar antes de ser cobrado'],
				correta: 1,
				explicacao: 'Para receber MB Way basta o nº de telemóvel. Quem pede NIF está a configurar a fraude — o "comprador" envia um pedido e você aprova pensando estar a receber.'
			},
			{
				pergunta: 'Telefonema: "É do seu banco, confirme os dados do cartão por segurança". O que faz?',
				opcoes: ['Confirmo — o banco tem direito', 'Peço o nome do funcionário e confirmo', 'Desligo e ligo ao número do verso do cartão', 'Ligo depois ao banco para reclamar do empregado'],
				correta: 2,
				explicacao: 'A única resposta segura. Bancos nunca pedem dados completos por chamada não solicitada. Ao ligar você ao número oficial, garante que fala com o banco real.'
			},
			{
				pergunta: 'Email do "CEO" a pedir transferência urgente de 30.000€. Email parece legítimo. Faz?',
				opcoes: ['Transfiro — é o CEO', 'Confirmo por telefone com o CEO antes de transferir', 'Pergunto por email novo se é mesmo ele', 'Transfiro mas peço comprovativo'],
				correta: 1,
				explicacao: 'Business Email Compromise é uma das fraudes mais lucrativas. Validação por outro canal (telefone, presencial) é obrigatória. Política de dupla validação salva empresas.'
			},
			{
				pergunta: 'Conheceu alguém numa app de namoro. Há 3 meses só por mensagem. Pede 2.000€ por "emergência médica". Faz?',
				opcoes: ['Empresto — está em apuros', 'Empresto se ele assinar um contrato', 'Recuso e bloqueio — é burla romântica', 'Mando metade'],
				correta: 2,
				explicacao: 'Padrão clássico de burla romântica: sempre evita encontro real, "emergência" pede dinheiro. Em Portugal perdem-se milhões assim. Nunca empreste a quem nunca conheceu pessoalmente.'
			},
			{
				pergunta: 'Pelo RGPD, pede a uma empresa os seus dados. Quanto tempo têm para responder?',
				opcoes: ['Quando quiserem', 'Até 30 dias, gratuitamente', '6 meses', 'Apenas a clientes ativos'],
				correta: 1,
				explicacao: 'O direito de acesso é teu — 30 dias para resposta, sem custos. Se não responderem, queixa à CNPD (cnpd.pt). A coima para empresas pode chegar aos 20M€.'
			},
			{
				pergunta: 'A sua mãe (75 anos) recebe SMS: "Mãe, é o João, mudei de número. Preciso 600€ urgente". Você é o João. O que aconselha?',
				opcoes: ['Ela transfere se for pouco', 'Ela liga para o seu nº antigo antes de fazer nada', 'Ela responde a pedir confirmação', 'Ela transfere mas pede comprovativo'],
				correta: 1,
				explicacao: 'Esquema "falso filho" — muito comum em Portugal. Validação por canal seguro (telefone para o nº conhecido) é essencial. Combinem uma palavra-código familiar.'
			},
			{
				pergunta: 'Email com anexo "Fatura_Janeiro.pdf.exe" de remetente que não conhece. Faz?',
				opcoes: ['Abro para ver o que é', 'Apago sem abrir', 'Reenvio ao departamento financeiro', 'Salvo no desktop para depois'],
				correta: 1,
				explicacao: 'Extensão dupla (.pdf.exe) é truque clássico — o ficheiro é executável, não PDF. Apague. Ransomware empresarial entra quase sempre por anexos de email.'
			},
			{
				pergunta: 'O que é mais seguro como 2FA?',
				opcoes: ['SMS para o telemóvel', 'App de autenticação (Authy, Google Authenticator)', 'Pergunta de segurança', 'Email de recuperação'],
				correta: 1,
				explicacao: 'SMS é vulnerável a SIM swap (criminoso convence operadora a transferir o seu nº). App de autenticação resolve isso. Para contas críticas (banco, email principal) — sempre app.'
			},
			{
				pergunta: 'Anúncio: "Casa em Lisboa, T2, 600€/mês. Dono em França. Transfira sinal antes de visitar". É:',
				opcoes: ['Oportunidade — preço bom', 'Burla clássica de arrendamento — nunca pague antes de visitar', 'Aceitável se for por transferência segura', 'Depende das fotos'],
				correta: 1,
				explicacao: 'Padrão repetido em mil casos. Casas a preço abaixo do mercado + dono no estrangeiro + pedido de sinal antes de visitar = fraude garantida. Nunca pague antes de ver pessoalmente.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="editorial" />
