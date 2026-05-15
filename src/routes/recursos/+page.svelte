<script>
	const categorias = [
		{
			titulo: 'Entidades oficiais',
			recursos: [
				{ nome: 'CNCS', desc: 'Centro Nacional de Cibersegurança — alertas, relatórios e apoio a incidentes.', url: 'https://www.cncs.gov.pt', tag: 'Oficial' },
				{ nome: 'SeguraNet', desc: 'Portal de segurança online para crianças, jovens, pais e professores.', url: 'https://www.seguranet.pt', tag: 'Educação' },
				{ nome: 'CNPD', desc: 'Comissão Nacional de Proteção de Dados — queixas sobre uso indevido de dados pessoais.', url: 'https://www.cnpd.pt', tag: 'RGPD' },
				{ nome: 'CMVM', desc: 'Verifica se uma plataforma de investimento tem autorização legal em Portugal.', url: 'https://www.cmvm.pt', tag: 'Finanças' },
				{ nome: 'Banco de Portugal', desc: 'Portal do cliente bancário — direitos e como reclamar.', url: 'https://clientebancario.bportugal.pt', tag: 'Banca' },
				{ nome: 'DGE — Ministério da Educação', desc: 'Recursos sobre cidadania digital e literacia mediática para escolas.', url: 'https://www.dge.mec.pt', tag: 'Educação' },
			]
		},
		{
			titulo: 'Denúncia e apoio',
			recursos: [
				{ nome: 'PJ — UNC3T', desc: 'Unidade Nacional de Combate ao Cibercrime. Para crimes informáticos graves.', url: 'https://www.policiajudiciaria.pt', tag: 'Denúncia' },
				{ nome: 'PSP — Queixa eletrónica', desc: 'Denúncia de crimes online diretamente à PSP, sem sair de casa.', url: 'https://queixaselectronicas.mai.gov.pt', tag: 'Denúncia' },
				{ nome: 'GNR', desc: 'Investigação de crimes informáticos. Queixa na esquadra ou via formulário online.', url: 'https://www.gnr.pt', tag: 'Denúncia' },
				{ nome: 'APAV', desc: 'Apoio jurídico, psicológico e social a vítimas de crime. Gratuito e confidencial.', url: 'https://apav.pt', tag: 'Apoio' },
				{ nome: 'DECO Proteste', desc: 'Defesa do consumidor — fraudes em compras online e serviços digitais.', url: 'https://www.deco.proteste.pt', tag: 'Consumidor' },
			]
		},
		{
			titulo: 'Ferramentas gratuitas',
			recursos: [
				{ nome: 'Bitwarden', desc: 'Gestor de palavras-passe gratuito, open-source e auditado.', url: 'https://bitwarden.com', tag: 'Ferramenta' },
				{ nome: 'Have I Been Pwned?', desc: 'Verifica se o teu email foi exposto em fugas de dados.', url: 'https://haveibeenpwned.com', tag: 'Verificação' },
				{ nome: 'VirusTotal', desc: 'Analisa ficheiros e links suspeitos com 70+ antivírus. Sem instalação.', url: 'https://www.virustotal.com', tag: 'Análise' },
				{ nome: 'Proton Mail', desc: 'Email gratuito com encriptação de ponta-a-ponta. Baseado na Suíça.', url: 'https://proton.me', tag: 'Privacidade' },
				{ nome: 'Signal', desc: 'Mensagens com encriptação de ponta-a-ponta. Open-source, sem publicidade.', url: 'https://signal.org', tag: 'Privacidade' },
				{ nome: 'URLscan.io', desc: 'Analisa um link suspeito sem o abrir. Mostra capturas e ameaças.', url: 'https://urlscan.io', tag: 'Análise' },
			]
		},
	];

	const linhas = [
		{ numero: '800 21 90 90', nome: 'Linha Internet Segura', desc: 'Gratuita · 24h', cor: '#1DD1A1' },
		{ numero: '116 006', nome: 'APAV', desc: 'Apoio à vítima', cor: '#A29BFE' },
		{ numero: '112', nome: 'Emergência', desc: 'Perigo imediato', cor: '#FF6B6B' },
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

	<div class="ferramentas-cta">
		<span>🛠️</span>
		<div>
			<strong>Ferramentas interativas</strong>
			<p>Simulador de fraudes, verificador de palavras-passe, gerador por frase e mais.</p>
		</div>
		<a href="/ferramentas">Ver ferramentas →</a>
	</div>

	{#each categorias as cat}
		<section>
			<h2>{cat.titulo}</h2>
			<div class="lista">
				{#each cat.recursos as r}
					<a href={r.url} target="_blank" rel="noopener noreferrer" class="recurso-item">
						<div class="recurso-info">
							<span class="recurso-tag">{r.tag}</span>
							<strong>{r.nome}</strong>
							<p>{r.desc}</p>
						</div>
						<span class="seta" aria-hidden="true">→</span>
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
	.container { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); }

	main { padding: 2rem 1.5rem; }
	section { margin-bottom: 2.5rem; }

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	/* ── Linhas de apoio ── */
	.linhas-secao { margin-bottom: 1.5rem; }
	.linhas { display: flex; gap: 0.75rem; flex-wrap: wrap; }
	.linha-card {
		flex: 1;
		min-width: 140px;
		background: #fff;
		border: 2px solid var(--cor);
		border-radius: 0.875rem;
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}
	.linha-card strong { font-family: 'Nunito', sans-serif; font-size: 1.2rem; font-weight: 900; color: var(--cor); }
	.linha-nome { font-weight: 600; font-size: 0.85rem; color: #1a1a2e; }
	.linha-desc { font-size: 0.75rem; color: #555; }

	/* ── CTA ferramentas ── */
	.ferramentas-cta {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #f0f4ff;
		border: 1px solid #d0daff;
		border-radius: 0.875rem;
		padding: 1rem 1.25rem;
		margin-bottom: 2rem;
	}
	.ferramentas-cta span { font-size: 1.75rem; flex-shrink: 0; }
	.ferramentas-cta div { flex: 1; }
	.ferramentas-cta strong { display: block; font-size: 0.95rem; color: #1a1a2e; margin-bottom: 0.15rem; }
	.ferramentas-cta p { font-size: 0.82rem; color: #555; }
	.ferramentas-cta a { font-size: 0.875rem; font-weight: 700; color: #0984E3; white-space: nowrap; }

	/* ── Lista de recursos ── */
	.lista { display: flex; flex-direction: column; gap: 0.5rem; }
	.recurso-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 0.875rem 1rem;
		transition: border-color 0.2s;
	}
	.recurso-item:hover { border-color: #0984E3; }
	.recurso-info { flex: 1; display: flex; flex-direction: column; gap: 0.15rem; }
	.recurso-tag {
		font-size: 0.7rem;
		font-weight: 700;
		color: #0984E3;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.recurso-info strong { font-size: 0.9rem; color: #1a1a2e; }
	.recurso-info p { font-size: 0.82rem; color: #666; line-height: 1.4; }
	.seta { color: #ccc; font-size: 1rem; flex-shrink: 0; }
</style>
