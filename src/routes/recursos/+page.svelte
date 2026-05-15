<script>
	const categorias = [
		{
			titulo: 'Entidades oficiais portuguesas',
			recursos: [
				{ nome: 'CNCS — Centro Nacional de Cibersegurança', desc: 'Autoridade nacional de cibersegurança. Alertas, relatórios, recursos educativos e apoio a incidentes.', url: 'https://www.cncs.gov.pt', tag: 'Oficial' },
				{ nome: 'CNPD — Comissão Nacional de Proteção de Dados', desc: 'Entidade que fiscaliza o cumprimento do RGPD em Portugal. Para queixas sobre uso indevido dos seus dados pessoais.', url: 'https://www.cnpd.pt', tag: 'RGPD' },
				{ nome: 'SeguraNet', desc: 'Portal de segurança online para crianças, jovens, pais e professores. Criado pela DGE com apoio europeu.', url: 'https://www.seguranet.pt', tag: 'Educação' },
				{ nome: 'Linha Internet Segura', desc: 'Linha gratuita de apoio a situações de risco online: 800 21 90 90 (gratuita, 24h). Confidencial.', url: 'https://www.internetsegura.pt', tag: 'Apoio' },
				{ nome: 'CMVM — Comissão do Mercado de Valores Mobiliários', desc: 'Verifica se uma plataforma de investimento tem autorização legal para operar em Portugal.', url: 'https://www.cmvm.pt', tag: 'Finanças' },
				{ nome: 'Banco de Portugal — Portal do Cliente Bancário', desc: 'Informação sobre direitos dos clientes bancários e como reclamar de bancos em Portugal.', url: 'https://clientebancario.bportugal.pt', tag: 'Banca' },
				{ nome: 'ANACOM', desc: 'Reguladora das comunicações em Portugal. Para queixas sobre operadoras de telecomunicações.', url: 'https://www.anacom.pt', tag: 'Telecom' },
				{ nome: 'DECO Proteste', desc: 'Associação de defesa do consumidor — apoio em fraudes de compras online, serviços digitais e telecomunicações.', url: 'https://www.deco.proteste.pt', tag: 'Consumidor' }
			]
		},
		{
			titulo: 'Forças de segurança e denúncia',
			recursos: [
				{ nome: 'Polícia Judiciária — UNC3T', desc: 'Unidade Nacional de Combate ao Cibercrime e à Criminalidade Tecnológica. Crimes informáticos graves, fraudes bancárias, predadores online.', url: 'https://www.policiajudiciaria.pt', tag: 'Denúncia' },
				{ nome: 'GNR — Núcleo de Investigação Criminal', desc: 'Investigação de crimes informáticos. Queixa na esquadra ou via formulário online.', url: 'https://www.gnr.pt', tag: 'Denúncia' },
				{ nome: 'PSP — Portal Queixa Eletrónica', desc: 'Denúncia de crimes online diretamente à PSP, sem sair de casa.', url: 'https://queixaselectronicas.mai.gov.pt', tag: 'Denúncia' },
				{ nome: 'Ministério Público — Portal de Denúncias', desc: 'Para crimes públicos. Denúncia online sem identificação obrigatória.', url: 'https://denuncias.ministeriopublico.pt', tag: 'Denúncia' }
			]
		},
		{
			titulo: 'Apoio a vítimas',
			recursos: [
				{ nome: 'APAV — Associação Portuguesa de Apoio à Vítima', desc: 'Apoio jurídico, psicológico e social a vítimas de crime. Gratuito e confidencial. Linha: 116 006.', url: 'https://apav.pt', tag: 'Apoio' },
				{ nome: 'APAV — Linha Internet Segura', desc: 'Vertente da APAV especializada em violência online. Ajuda em sextorsão, cyberbullying, partilha não consentida de imagens íntimas.', url: 'https://www.internetsegura.pt', tag: 'Apoio' },
				{ nome: 'Centro de Internet Segura', desc: 'Recursos educativos para vítimas de cyberbullying e situações de risco online. Inclui guias para pais e jovens.', url: 'https://www.internetsegura.pt', tag: 'Educação' },
				{ nome: 'SOS Voz Amiga', desc: 'Linha gratuita de apoio emocional. Útil em situações de sextorsão e bullying com forte impacto psicológico. Linha: 213 544 545.', url: 'https://www.sosvozamiga.org', tag: 'Apoio' }
			]
		},
		{
			titulo: 'Ferramentas gratuitas de proteção',
			recursos: [
				{ nome: 'Bitwarden', desc: 'Gestor de palavras-passe gratuito, open-source e auditado. Funciona em todos os dispositivos.', url: 'https://bitwarden.com', tag: 'Ferramenta' },
				{ nome: 'KeePassXC', desc: 'Gestor de palavras-passe totalmente offline e gratuito. Para quem prefere não usar a nuvem.', url: 'https://keepassxc.org', tag: 'Ferramenta' },
				{ nome: 'Have I Been Pwned?', desc: 'Verifica se o seu email ou palavra-passe foi exposto em alguma fuga de dados conhecida.', url: 'https://haveibeenpwned.com', tag: 'Verificação' },
				{ nome: 'VirusTotal', desc: 'Analisa ficheiros e links suspeitos com mais de 70 antivírus. Gratuito, sem instalação.', url: 'https://www.virustotal.com', tag: 'Análise' },
				{ nome: 'Proton Mail', desc: 'Email gratuito com encriptação de ponta-a-ponta. Baseado na Suíça, política de privacidade forte.', url: 'https://proton.me', tag: 'Privacidade' },
				{ nome: 'Signal', desc: 'Aplicação de mensagens com encriptação de ponta-a-ponta. Open-source, sem publicidade.', url: 'https://signal.org', tag: 'Privacidade' },
				{ nome: 'Authy', desc: 'Aplicação de autenticação em dois passos (2FA). Mais segura que SMS, sincroniza entre dispositivos.', url: 'https://authy.com', tag: 'Ferramenta' },
				{ nome: 'Mozilla Firefox', desc: 'Browser open-source com foco em privacidade. Bloqueia rastreadores por defeito.', url: 'https://www.mozilla.org/firefox', tag: 'Privacidade' }
			]
		},
		{
			titulo: 'Verificação de fraudes',
			recursos: [
				{ nome: 'Google Images — Pesquisa Inversa', desc: 'Verifique se uma foto de um perfil de namoro ou anúncio é real ou roubada.', url: 'https://images.google.com', tag: 'Verificação' },
				{ nome: 'TinEye', desc: 'Pesquisa de imagem inversa alternativa ao Google. Útil para detetar burlas românticas.', url: 'https://tineye.com', tag: 'Verificação' },
				{ nome: 'URLscan.io', desc: 'Analisa um link suspeito sem o abrir no seu dispositivo. Mostra capturas, redirecionamentos e ameaças.', url: 'https://urlscan.io', tag: 'Análise' },
				{ nome: 'WHOIS Lookup', desc: 'Descobre quem registou um domínio e quando. Domínios recentes (poucos dias) são frequentemente usados para fraudes.', url: 'https://lookup.icann.org', tag: 'Verificação' }
			]
		},
		{
			titulo: 'Educação e formação',
			recursos: [
				{ nome: 'C-Academy (CNCS)', desc: 'Academia gratuita de cibersegurança em português, com cursos para todos os níveis. Certificada pelo CNCS.', url: 'https://www.cncs.gov.pt/pt/c-academy', tag: 'Educação' },
				{ nome: 'DGE — Direção-Geral da Educação', desc: 'Portal oficial do Ministério da Educação com recursos sobre cidadania digital, literacia mediática e segurança online para escolas.', url: 'https://www.dge.mec.pt', tag: 'Educação' },
				{ nome: 'Better Internet for Kids', desc: 'Portal europeu de internet segura para crianças. Material multilingue, incluindo português.', url: 'https://www.betterinternetforkids.eu', tag: 'Educação' }
			]
		}
	];

	const linhas = [
		{ numero: '800 21 90 90', nome: 'Linha Internet Segura', desc: 'Gratuita, 24 horas', cor: '#1DD1A1' },
		{ numero: '112', nome: 'Emergência', desc: 'Situações de perigo imediato', cor: '#FF6B6B' },
		{ numero: '116 006', nome: 'APAV — Apoio à Vítima', desc: 'Gratuita, confidencial', cor: '#A29BFE' },
		{ numero: '213 544 545', nome: 'SOS Voz Amiga', desc: 'Apoio emocional', cor: '#0984E3' }
	];
</script>

<svelte:head>
	<title>Recursos — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🔗 Recursos</h1>
		<p>Entidades, ferramentas e linhas de apoio em Portugal</p>
	</div>
</div>

<main class="container">
	<section class="linhas-secao">
		<h2>Linhas de apoio</h2>
		<div class="linhas">
			{#each linhas as l}
				<a href="tel:{l.numero.replace(/\s/g, '')}" class="linha-card" style="--cor: {l.cor}">
					<strong>{l.numero}</strong>
					<span class="linha-nome">{l.nome}</span>
					<span class="linha-desc">{l.desc}</span>
				</a>
			{/each}
		</div>
	</section>

	{#each categorias as cat}
		<section>
			<h2>{cat.titulo}</h2>
			<div class="grelha">
				{#each cat.recursos as r}
					<a href={r.url} target="_blank" rel="noopener noreferrer" class="recurso-card">
						<div class="recurso-top">
							<span class="recurso-tag">{r.tag}</span>
						</div>
						<h3>{r.nome}</h3>
						<p>{r.desc}</p>
						<span class="recurso-link">Visitar site →</span>
					</a>
				{/each}
			</div>
		</section>
	{/each}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.voltar {
		display: inline-block;
		color: rgba(255,255,255,0.6);
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		transition: color 0.2s;
	}

	.voltar:hover { color: white; }

	.topo h1 {
		font-family: 'Nunito', sans-serif;
		font-size: 2.2rem;
		font-weight: 900;
		margin-bottom: 0.5rem;
	}

	.topo p {
		color: rgba(255,255,255,0.7);
	}

	main {
		padding: 2.5rem 1.5rem;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.4rem;
		font-weight: 800;
		margin-bottom: 1.25rem;
		color: #1a1a2e;
	}

	.linhas {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.linha-card {
		background: #fff;
		border: 2px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		min-width: 180px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.linha-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(0,0,0,0.1);
	}

	.linha-card strong {
		font-family: 'Nunito', sans-serif;
		font-size: 1.3rem;
		font-weight: 900;
		color: var(--cor);
	}

	.linha-nome {
		font-weight: 600;
		font-size: 0.9rem;
		color: #1a1a2e;
	}

	.linha-desc {
		font-size: 0.8rem;
		color: #888;
	}

	.grelha {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.recurso-card {
		background: #fff;
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 1px solid #e5e7eb;
		transition: border-color 0.2s, transform 0.2s;
	}

	.recurso-card:hover {
		border-color: #0984E3;
		transform: translateY(-2px);
	}

	.recurso-top {
		display: flex;
		justify-content: flex-end;
	}

	.recurso-tag {
		background: #EBF5FF;
		color: #0984E3;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
	}

	.recurso-card h3 {
		font-weight: 700;
		font-size: 0.95rem;
		color: #1a1a2e;
		line-height: 1.3;
	}

	.recurso-card p {
		font-size: 0.875rem;
		color: #555;
		line-height: 1.5;
		flex: 1;
	}

	.recurso-link {
		font-size: 0.85rem;
		font-weight: 600;
		color: #0984E3;
	}
</style>
