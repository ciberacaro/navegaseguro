<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '⚡',
		titulo: '3.º Ciclo',
		subtitulo: '12 – 15 anos · 7.º ao 9.º ano',
		cor: '#FF6B6B',
		fundo: '#FFF0F0',
		variante: 'juvenil',
		introducao: 'Vamos ser diretos: nesta idade já lidas com situações sérias online. Sextorsão, deepfakes, grooming, controlo em relações — tudo isto acontece a gente da tua idade em Portugal. Esta secção não vai disfarçar nem tentar assustar. Vai dizer-te o que sabemos, para tu decidires bem.',
		temas: [
			{
				icone: '📷',
				titulo: 'Imagens íntimas: o que precisas mesmo de saber',
				conteudo: 'Partilhar imagens íntimas é sempre arriscado — mesmo com alguém em quem confias hoje. Em Portugal, divulgar imagens íntimas sem consentimento é crime (art. 193º-A do Código Penal). Se já enviaste ou estás a ser pressionado, há ajuda: 1800 21 22 23 (Linha Internet Segura, gratuita e confidencial).'
			},
			{
				icone: '🎭',
				titulo: 'Sextorsão',
				conteudo: 'Alguém ameaça partilhar imagens tuas se não pagares ou enviares mais. Conselho de quem sabe: NÃO PAGUES. Pagar nunca para a chantagem — só confirma que estás vulnerável. Bloqueia, guarda as provas (capturas de ecrã) e fala com um adulto ou liga 1800 21 22 23.'
			},
			{
				icone: '🤖',
				titulo: 'Deepfakes e imagens falsas',
				conteudo: 'Hoje há apps que criam imagens íntimas falsas a partir de fotos vestidas — uma pessoa vê uma foto tua na praia e pode gerar uma versão nua. Se aconteceu contigo ou com um colega, é crime. Denuncia à GNR/PSP e faz queixa.'
			},
			{
				icone: '🎯',
				titulo: 'Grooming: como funciona',
				conteudo: 'Adultos predatórios não chegam logo a pedir coisas. Levam semanas: tornam-se "amigos especiais", fingem ter a tua idade, fazem-te sentir único, conquistam confiança. Depois isolam-te e começam os pedidos. Se um "amigo" online te pede para guardares segredos dos pais, é alarme grave.'
			},
			{
				icone: '💔',
				titulo: 'Controlo em relações',
				conteudo: 'Se o teu namorado/a pede acesso às tuas contas, quer saber onde estás a toda a hora, manda-te bloquear amigos ou exige fotos como "prova de amor" — isso não é amor. É controlo. Numa relação saudável, há confiança sem vigilância.'
			},
			{
				icone: '🌐',
				titulo: 'A tua pegada digital tem 10 anos pela frente',
				conteudo: 'Universidades, empregadores e até pessoas que namorares fazem buscas no Google sobre ti. O que publicares hoje pode aparecer numa entrevista daqui a 5 anos. Faz já uma pesquisa do teu nome — vê o que aparece.'
			}
		],
		dicas: [
			'NUNCA partilhes imagens íntimas — de ti ou de outros',
			'Se receberes imagens íntimas de um colega, não reencaminhes (mesmo "por brincadeira") — pode ser crime',
			'Ativa a verificação em dois passos em todas as tuas contas (Instagram, TikTok, Discord, email)',
			'Se alguém te ameaçar com imagens, NÃO PAGUES e NÃO ENVIES MAIS — fala com um adulto ou 1800 21 22 23',
			'Faz hoje uma pesquisa do teu nome no Google e remove o que não queres',
			'Numa relação saudável, ninguém pede acesso às contas do outro'
		],
		historias: [
			{
				titulo: 'A Carolina e o "namorado virtual"',
				narrativa: 'A Carolina, 14 anos, namorou online durante 3 meses com alguém que dizia ter 15 anos e morar no Porto. Ele dizia coisas lindas, fazia-a sentir-se especial. Pediu uma foto sem t-shirt — só uma, "para guardar com carinho". A Carolina enviou. Duas semanas depois, ele começou a ameaçar: "Manda mais fotos ou envio esta aos teus pais e à escola". Era um adulto de 40 anos. A Carolina contou à tia, ligaram à Linha Internet Segura, fizeram queixa à Polícia Judiciária. Conseguiram apanhar o predador — ele já tinha feito o mesmo a outras 8 raparigas.',
				licao: 'Se já enviaste uma imagem íntima e estás a ser chantageada, não estás sozinha e não tens culpa. Fala. A polícia ajuda — não te julga.'
			},
			{
				titulo: 'O Rafael e o deepfake do 9.º ano',
				narrativa: 'Alguém pegou em fotos das redes sociais de uma colega do Rafael e usou uma app para criar imagens íntimas falsas. Espalharam-se pela escola pelo WhatsApp. A colega não tinha feito nada — mas o estrago foi enorme. O Rafael recebeu as imagens mas não reencaminhou — fez captura e mostrou ao diretor de turma. A polícia investigou e identificou o autor (um colega do 9.º ano). Foi instaurado processo. As imagens, segundo a lei portuguesa, foram tratadas como pornografia de menores — mesmo sendo falsas.',
				licao: 'Imagens falsas são crime. Se receberes, não partilhes — mostra a um adulto. Quem reencaminha também pode ser responsabilizado.'
			},
			{
				titulo: 'A Inês e o "amor controlador"',
				narrativa: 'A Inês, 15 anos, namorava o Pedro, do mesmo ano. O Pedro pediu a palavra-passe do Instagram dela "porque se gostavam não havia segredos". Depois começou a ler as conversas dela com as amigas e a chatear-se quando ela falava com outros rapazes. Pedia localização em tempo real. A Inês começou a perder amigas. A mãe notou e conversou com ela: aquilo não era amor, era controlo. A Inês terminou. O Pedro precisou de ajuda — comportamento controlador na adolescência é sinal de problemas mais profundos.',
				licao: 'Amor não tem palavra-passe partilhada nem localização ao minuto. Tem confiança e espaço para ambos.'
			}
		],
		perguntas: [
			{
				pergunta: 'Um colega partilha no grupo da turma uma foto editada com a cara de uma colega num corpo nu. Isto é:',
				opcoes: ['Uma brincadeira inofensiva', 'Cyberbullying que pode ser crime', 'Só é problema se ela se queixar', 'Depende se ela conhece o autor'],
				correta: 1,
				explicacao: 'Imagens íntimas falsas de menores podem ser equiparadas a pornografia de menores em Portugal. É crime mesmo sendo "brincadeira". Quem reencaminha também responde.'
			},
			{
				pergunta: 'Alguém online ameaça publicar imagens tuas se não enviares mais. Tu...',
				opcoes: ['Envio mais para ele parar', 'Pago o que ele pedir', 'Não envio nem pago — bloqueio, guardo provas e ligo 1800 21 22 23', 'Apago tudo e finjo que não aconteceu'],
				correta: 2,
				explicacao: 'Ceder NUNCA para a chantagem — só prova que estás vulnerável. Guardar as provas (capturas) é essencial para a polícia. A Linha Internet Segura é gratuita e confidencial.'
			},
			{
				pergunta: 'O teu namorado quer a palavra-passe do teu Instagram "para se gostarem não há segredos". É:',
				opcoes: ['Normal entre quem se ama', 'Aceitável se também deres acesso', 'Sinal de controlo — não é saudável', 'Depende se há motivos para confiar'],
				correta: 2,
				explicacao: 'Pedir contas privadas de outra pessoa é uma forma de controlo. Numa relação saudável, há confiança sem vigilância.'
			},
			{
				pergunta: 'Conheceste alguém online há 2 meses. Pede para guardar segredo dos teus pais sobre a "vossa amizade". Sentes que...',
				opcoes: ['Confia em ti — é um sinal positivo', 'É um sinal grave de aliciamento (grooming) — conta a um adulto JÁ', 'Depende do tipo de segredo', 'Faz sentido — os pais não percebem essas coisas'],
				correta: 1,
				explicacao: 'Esta é a tática clássica de grooming. Adultos predatórios isolam as vítimas dos pais. Conta sempre — não estás a "denunciar um amigo", estás a proteger-te.'
			},
			{
				pergunta: 'Recebes uma imagem íntima de uma colega no WhatsApp da turma. O que NÃO deves fazer?',
				opcoes: ['Mostrar a um adulto', 'Reencaminhar para outros amigos', 'Apagar do telemóvel', 'Avisar a colega'],
				correta: 1,
				explicacao: 'Reencaminhar imagens íntimas de menores é crime — mesmo que tu não tenhas feito a foto. Em Portugal, isto enquadra-se em pornografia de menores.'
			},
			{
				pergunta: 'A tua pegada digital aos 14 anos pode afetar...',
				opcoes: ['Só o que tu vês', 'Candidaturas a universidades, empregos e bolsas daqui a anos', 'Nada — quando fizeres 18, apaga-se tudo', 'Só se ficares famoso'],
				correta: 1,
				explicacao: 'Universidades e empregadores pesquisam candidatos. Uma publicação hoje pode aparecer numa entrevista em 2030. Pensa antes de publicar.'
			},
			{
				pergunta: 'Recebes uma mensagem: "Estou a fazer um trabalho da escola sobre cibersegurança. Podes responder a este formulário com o teu nome, idade e morada?". Tu...',
				opcoes: ['Respondo — é para um trabalho', 'Respondo só com nome', 'Não respondo — pode ser phishing', 'Pergunto que escola é'],
				correta: 2,
				explicacao: 'Pedidos de dados pessoais por mensagem são quase sempre fraudes — mesmo com pretexto inocente. Trabalhos escolares não precisam da tua morada.'
			},
			{
				pergunta: 'Um "amigo" do Discord, que diz ter 14, manda fotos a torso nu. Sentes que devolveres uma seria normal porque...',
				opcoes: ['É justo — ele mandou primeiro', 'Não. Não há "regras" sobre isto — tens sempre direito a recusar', 'Só se ele insistir muito', 'Se ele for de Portugal, sim'],
				correta: 1,
				explicacao: 'Nunca é "obrigação". Quem usa "eu fiz, agora tu fazes" está a manipular. O teu corpo, a tua decisão — sempre.'
			},
			{
				pergunta: 'A verificação em dois passos (2FA) serve para...',
				opcoes: ['Tornar o login mais lento', 'Proteger a conta mesmo que alguém saiba a tua palavra-passe', 'Receberes mais notificações', 'Só funciona em emails'],
				correta: 1,
				explicacao: 'Com 2FA, mesmo que alguém roube a tua palavra-passe, precisa também do código do teu telemóvel. É a maior defesa que tens.'
			},
			{
				pergunta: 'Se uma imagem tua íntima já está a circular, tu...',
				opcoes: ['A culpa é tua por teres enviado', 'Não tens culpa — quem divulgou cometeu o crime. Pede ajuda imediata', 'Não tens nada a fazer', 'Tens de mudar de escola'],
				correta: 1,
				explicacao: 'Culpar a vítima é uma das maiores injustiças. Mesmo que tenhas enviado, a divulgação SEM consentimento é o crime. Pede ajuda: 1800 21 22 23 ou Polícia Judiciária.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
