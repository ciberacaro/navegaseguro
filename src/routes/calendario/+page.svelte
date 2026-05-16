<script>
	const eventos = [
		{
			data: '28 de Janeiro',
			mes: 1,
			titulo: 'Dia Europeu da Proteção de Dados',
			origem: 'Conselho da Europa',
			tag: 'RGPD',
			cor: '#0984E3',
			desc: 'Comemora a abertura para assinatura da Convenção 108 (1981), primeiro instrumento internacional de proteção de dados. Em Portugal, a CNPD publica recursos e organiza eventos.',
			fazer: [
				'Reveja as definições de privacidade das suas contas (Google, Apple, Facebook)',
				'Faça uma auditoria à sua "pegada digital" — pesquise o seu nome no Google',
				'Solicite a uma empresa, ao abrigo do RGPD, que dados tem sobre si (tem 30 dias para responder)'
			],
			oficial: 'https://www.cnpd.pt'
		},
		{
			data: '2.ª feira de Fevereiro',
			mes: 2,
			titulo: 'Dia da Internet Segura (Safer Internet Day)',
			origem: 'União Europeia — InSafe / DG CONNECT',
			tag: 'Educação',
			cor: '#1DD1A1',
			desc: 'Evento mundial coordenado em Portugal pela Linha Internet Segura e SeguraNet (DGE). Foco: utilização segura, responsável e crítica da internet por crianças e jovens.',
			fazer: [
				'Escolas: organize uma sessão com materiais SeguraNet (gratuitos)',
				'Pais: conversem em casa sobre regras de uso de dispositivos',
				'Partilhe o NavegaSeguro com a comunidade escolar'
			],
			oficial: 'https://www.internetsegura.pt'
		},
		{
			data: 'Maio',
			mes: 5,
			titulo: 'Dia Mundial da Palavra-Passe (1.ª quinta-feira)',
			origem: 'Iniciativa global da indústria',
			tag: 'Passwords',
			cor: '#FF9F43',
			desc: 'Lembrete anual para auditar palavras-passe. Em 2026 o tema é a migração para passkeys — chaves de acesso biométricas resistentes a phishing.',
			fazer: [
				'Audite as suas passwords num gestor (Bitwarden, 1Password)',
				'Ative 2FA por aplicação (Authy) nas contas críticas',
				'Verifique se algum email seu apareceu em fugas de dados em haveibeenpwned.com',
				'Ative passkeys onde disponíveis (Google, Apple, Microsoft, bancos)'
			],
			oficial: 'https://www.cncs.gov.pt'
		},
		{
			data: '25 de Maio',
			mes: 5,
			titulo: 'Aniversário do RGPD (entrada em vigor em 2018)',
			origem: 'União Europeia',
			tag: 'RGPD',
			cor: '#A29BFE',
			desc: 'Marco da proteção de dados na UE. Bom momento para escolas, PME e instituições reverem as suas práticas de tratamento de dados pessoais.',
			fazer: [
				'Reveja a sua política de privacidade e termos & condições',
				'Confirme que os pedidos de consentimento são granulares e revogáveis',
				'Audite quem tem acesso aos dados pessoais que processa'
			],
			oficial: 'https://www.cnpd.pt'
		},
		{
			data: '17 de Maio',
			mes: 5,
			titulo: 'Dia Mundial da Sociedade da Informação',
			origem: 'ONU / União Internacional das Telecomunicações',
			tag: 'Inclusão',
			cor: '#48DBFB',
			desc: 'Em 2026 com foco na inclusão digital de seniores e literacia de IA. Em Portugal, várias câmaras municipais e Universidades Sénior promovem sessões.',
			fazer: [
				'Visite um sénior da sua família — ensine uma coisa nova (videochamada, foto, mapa)',
				'Identifique pessoas próximas que precisem de apoio digital',
				'Partilhe a secção /seniores do NavegaSeguro'
			],
			oficial: 'https://www.itu.int'
		},
		{
			data: 'Outubro (mês completo)',
			mes: 10,
			titulo: 'Mês Europeu da Cibersegurança (#CyberSecMonth)',
			origem: 'ENISA + Comissão Europeia',
			tag: 'Awareness',
			cor: '#FF6B6B',
			desc: 'O maior evento europeu de awareness de cibersegurança. Em Portugal, o CNCS coordena com escolas, empresas, autarquias e media. Tema rotativo todos os anos.',
			fazer: [
				'PME: organize um momento de formação com a equipa (1h chega)',
				'Escolas: integre o tema nas aulas de TIC e Cidadania',
				'Autarquias: campanha local — folhetos, sessões em centros de dia',
				'Particulares: aproveite para limpar contas antigas e ativar 2FA'
			],
			oficial: 'https://cybersecuritymonth.eu'
		},
		{
			data: '30 de Novembro',
			mes: 11,
			titulo: 'Dia Internacional da Segurança da Informação',
			origem: 'ACM (1988, em memória do worm Morris)',
			tag: 'Segurança',
			cor: '#6C5CE7',
			desc: 'Comemora a primeira grande ameaça de malware da era da internet. Foco: práticas técnicas de segurança em sistemas de informação.',
			fazer: [
				'Verifique que todos os dispositivos têm atualizações automáticas ativas',
				'Faça um backup de fotos e documentos importantes (regra 3-2-1)',
				'Reveja permissões de apps no telemóvel'
			],
			oficial: 'https://www.cncs.gov.pt'
		},
		{
			data: 'Permanente',
			mes: 99,
			titulo: 'Linha Internet Segura — 800 21 90 90',
			origem: 'CNCS / SeguraNet',
			tag: 'Apoio',
			cor: '#27AE60',
			desc: 'Não é uma data, mas uma referência permanente. Gratuita, confidencial, 24/7 (dias úteis, 9h–18h para apoio direto; outras horas para denúncia).',
			fazer: [
				'Memorize o número e tenha-o à mão',
				'Partilhe com a família — especialmente com seniores e jovens',
				'Em caso de fraude em curso, ligue ANTES de qualquer ação'
			],
			oficial: 'https://www.internetsegura.pt'
		}
	];

	const eventosOrdenados = eventos.toSorted((a, b) => a.mes - b.mes);
</script>

<svelte:head>
	<title>Calendário de Cibersegurança — NavegaSeguro</title>
	<meta name="description" content="Datas importantes de cibersegurança em Portugal e na União Europeia — Dia da Internet Segura, Mês Europeu da Cibersegurança, RGPD..." />
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>📅 Calendário de Cibersegurança</h1>
		<p>Datas internacionais e portuguesas para escolas, empresas, autarquias e particulares</p>
	</div>
</div>

<main class="container">
	<div class="lista" role="list">
		{#each eventosOrdenados as e}
			<article class="evento" style="--cor: {e.cor}" role="listitem">
				<header>
					<div class="data-bloco">
						<span class="data">{e.data}</span>
						<span class="tag" style="background: {e.cor}">{e.tag}</span>
					</div>
					<h2>{e.titulo}</h2>
					<p class="origem">Promoção: {e.origem}</p>
				</header>

				<p class="desc">{e.desc}</p>

				<details>
					<summary>O que pode fazer</summary>
					<ul>
						{#each e.fazer as f}<li>{f}</li>{/each}
					</ul>
					<a href={e.oficial} target="_blank" rel="noopener noreferrer" class="link-oficial">
						Site oficial →
					</a>
				</details>
			</article>
		{/each}
	</div>

	<aside class="aside">
		<h2>Para escolas e instituições</h2>
		<p>Use estas datas como âncoras para sessões de awareness. As páginas de <a href="/educadores">educadores</a> e <a href="/empresas">empresas/instituições</a> incluem materiais imprimíveis.</p>
	</aside>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); font-size: 0.95rem; }

	main { padding: 2.5rem 1.5rem 4rem; }

	.lista { display: flex; flex-direction: column; gap: 1rem; }

	.evento {
		background: white;
		border: 1px solid #e5e7eb;
		border-left: 4px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
	}
	.evento header { margin-bottom: 0.5rem; }
	.data-bloco { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem; flex-wrap: wrap; }
	.data {
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--cor);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.tag {
		color: white;
		font-size: 0.7rem;
		font-weight: 700;
		padding: 0.18rem 0.6rem;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.evento h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.2rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
		line-height: 1.3;
	}
	.origem { font-size: 0.78rem; color: #777; }
	.desc { font-size: 0.92rem; color: #333; line-height: 1.6; margin: 0.85rem 0; }

	details { margin-top: 0.5rem; }
	summary {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--cor);
		cursor: pointer;
		padding: 0.3rem 0;
	}
	summary:focus-visible { outline: 2px solid var(--cor); outline-offset: 2px; }

	details ul { padding-left: 1.25rem; margin: 0.5rem 0 0.75rem; font-size: 0.88rem; color: #444; line-height: 1.55; }
	details li { margin-bottom: 0.3rem; }

	.link-oficial {
		display: inline-block;
		font-size: 0.85rem;
		color: var(--cor);
		font-weight: 600;
		margin-top: 0.5rem;
		text-decoration: underline;
	}

	.aside {
		margin-top: 2.5rem;
		padding: 1.25rem 1.5rem;
		background: #f8f9fa;
		border-left: 4px solid #1a1a2e;
		border-radius: 0.5rem;
	}
	.aside h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}
	.aside p { font-size: 0.9rem; color: #444; line-height: 1.6; }
	.aside a { color: #0984E3; text-decoration: underline; }
</style>
