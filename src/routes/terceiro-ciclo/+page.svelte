<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '⚡',
		titulo: '3.º Ciclo',
		subtitulo: '12 – 15 anos · 7.º ao 9.º ano',
		cor: '#FF6B6B',
		fundo: '#FFF0F0',
		introducao: 'Entre os 12 e os 15 anos, a vida social passa cada vez mais pelo online. Grupos de WhatsApp, TikTok, Discord, jogos multiplayer — são espaços onde acontecem coisas boas e más. Esta secção fala de forma direta sobre os riscos reais desta fase.',
		temas: [
			{
				icone: '📷',
				titulo: 'Imagens íntimas e sextorsão',
				conteudo: 'Partilhar imagens íntimas — mesmo com alguém em quem confias — é sempre um risco. Em Portugal, divulgar imagens íntimas sem consentimento é crime (artigo 193º do Código Penal). Se alguém te ameaçar com imagens tuas, conta a um adulto ou liga para a Linha Internet Segura: 1800 21 22 23.'
			},
			{
				icone: '🤖',
				titulo: 'Deepfakes e manipulação de imagens',
				conteudo: 'Existem ferramentas gratuitas que conseguem criar imagens ou vídeos falsos muito realistas. Se vires uma imagem tua ou de um colega que não reconheces, pode ser um deepfake. Não partilhes — denuncia.'
			},
			{
				icone: '💔',
				titulo: 'Controlo em relações online',
				conteudo: 'Se alguém — namorado/a ou não — te pede que partilhes onde estás a toda a hora, que te afastes dos teus amigos online, ou que lhe dês acesso às tuas contas, isso é controlo — não é amor nem cuidado.'
			},
			{
				icone: '🎯',
				titulo: 'Aliciamento online (grooming)',
				conteudo: 'Adultos predatórios usam semanas ou meses a construir confiança online antes de pedir algo. Apresentam-se como jovens da mesma idade. Se alguém online te faz sentir "especial" de forma excessiva e pede segredos aos teus pais, alerta um adulto.'
			},
			{
				icone: '🌐',
				titulo: 'Pegada digital',
				conteudo: 'Tudo o que publicas fica registado — mesmo que apagues. Universidades e empregadores pesquisam o nome dos candidatos online. Aquilo que publicares hoje pode afetar oportunidades daqui a 5 anos.'
			}
		],
		dicas: [
			'Nunca partilhes imagens íntimas — de ti ou de outros — independentemente do nível de confiança',
			'Ativa a verificação em dois passos (2FA) em todas as tuas contas',
			'Revê regularmente quem te segue e que informação o teu perfil mostra ao público',
			'Se alguém te ameaçar com imagens, não cedas — conta a um adulto ou liga 1800 21 22 23',
			'Faz uma pesquisa do teu nome no Google — vê o que aparece sobre ti'
		],
		perguntas: [
			{
				pergunta: 'Um colega partilha no grupo da turma uma foto editada de outra colega. O que é isto?',
				opcoes: ['Uma brincadeira inofensiva', 'Cyberbullying que pode ser crime', 'Só é problema se a colega se queixar', 'Depende da foto'],
				correta: 1,
				explicacao: 'Partilhar imagens manipuladas de uma pessoa sem o seu consentimento pode constituir crime em Portugal. Mesmo que pareça uma "brincadeira", o dano emocional é real e as consequências legais também.'
			},
			{
				pergunta: 'Alguém que conheceste online há 2 semanas pede-te para guardar um segredo dos teus pais. O que sentes?',
				opcoes: ['É sinal de que confia em ti', 'É um sinal de alerta — conta a um adulto de imediato', 'Dependes do segredo — se não for grave, tudo bem', 'Pedes mais tempo para decidir'],
				correta: 1,
				explicacao: 'Pedir que guardes segredos dos teus pais é uma técnica de aliciamento (grooming). Adultos seguros nunca pedem isso a crianças ou jovens. Conta sempre a um adulto.'
			},
			{
				pergunta: 'O teu namorado/a quer ter acesso à tua conta do Instagram "para saber se és de confiança". Isto é:',
				opcoes: ['Normal numa relação séria', 'Aceitável se também deres acesso à conta dele/a', 'Controlo — não é saudável', 'Depende da idade'],
				correta: 2,
				explicacao: 'Pedir acesso às contas de outra pessoa é uma forma de controlo e possessividade. Numa relação saudável, há confiança sem necessidade de acesso às contas do outro.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} />
