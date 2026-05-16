<script>
	const ameacas = [
		{ icone: '📩', titulo: 'Business Email Compromise (BEC)', desc: 'Email falso do "CEO" ou de fornecedor a pedir transferência urgente. Maior fonte de perdas em PME portuguesas — média de 47k€ por incidente. Política de dupla validação por canal independente.' },
		{ icone: '🔐', titulo: 'Ransomware', desc: 'Encriptação de todos os ficheiros + pedido de resgate. Em 2025, várias autarquias e PME portuguesas foram alvo. Defesa: backups 3-2-1, segregação de rede, MFA em VPN, formação dos colaboradores.' },
		{ icone: '🎣', titulo: 'Phishing dirigido aos colaboradores', desc: '90% dos ataques começam por email. Simulações periódicas de phishing (gophish, KnowBe4) reduzem em ~70% o clique. Forneça canal interno para reportar sem medo.' },
		{ icone: '🤖', titulo: 'Engenharia social com IA', desc: 'Vozes clonadas, vídeos deepfake e textos perfeitos. Pedidos urgentes de "diretor" por chamada/vídeo: confirme sempre por canal alternativo conhecido.' },
		{ icone: '💾', titulo: 'Fuga de dados', desc: 'Notificação obrigatória à CNPD em 72h (RGPD). Tenha plano escrito de resposta a incidentes. Coimas até 20M€ ou 4% da faturação anual global.' },
		{ icone: '🔗', titulo: 'Cadeia de fornecimento', desc: 'Compromisso através de fornecedores e parceiros. Inclua cláusulas de segurança em contratos. Revise acessos de terceiros trimestralmente.' }
	];

	const checklistPME = [
		{ cat: 'Pessoas', itens: [
			'Formação anual obrigatória em cibersegurança para todos os colaboradores',
			'Política clara: o que reportar, a quem, e como (sem culpabilizar quem clica)',
			'Onboarding e offboarding com lista verificada de acessos a criar/revogar',
			'Simulação periódica de phishing (trimestral) com medição de resultados'
		]},
		{ cat: 'Acessos e autenticação', itens: [
			'MFA obrigatório em todos os serviços críticos (email, VPN, cloud)',
			'Gestor de palavras-passe corporativo (Bitwarden Teams, 1Password Business)',
			'Princípio do menor privilégio — cada pessoa só acessa o que precisa',
			'Revisão trimestral de permissões e contas inativas',
			'Migração progressiva para passkeys onde suportadas'
		]},
		{ cat: 'Sistemas', itens: [
			'Atualizações automáticas em todos os endpoints (incluindo telemóveis BYOD)',
			'EDR/antivírus corporativo gerido centralmente',
			'Encriptação de discos (BitLocker, FileVault) em todos os portáteis',
			'Inventário atualizado de dispositivos e software autorizado',
			'Segregação de rede entre sistemas administrativos e operacionais'
		]},
		{ cat: 'Backups e continuidade', itens: [
			'Backups 3-2-1: três cópias, dois suportes, uma offsite',
			'Testes de restauro pelo menos semestrais',
			'Plano de recuperação documentado e ensaiado',
			'Backups imutáveis ou air-gapped contra ransomware'
		]},
		{ cat: 'RGPD e governance', itens: [
			'Registo de atividades de tratamento (RAT) atualizado',
			'Encarregado de Proteção de Dados (DPO) onde aplicável',
			'Procedimento de resposta a pedidos de titulares (acesso, retificação, apagamento) — 30 dias',
			'Plano de notificação de violação de dados à CNPD em 72h',
			'Avaliações de impacto (AIPD) para tratamentos de alto risco'
		]}
	];

	const acoesInstituicoes = [
		{ icone: '🏛️', titulo: 'Câmaras Municipais e Juntas', desc: 'Alvo crescente — sistemas administrativos antigos, dados sensíveis de munícipes, sites de serviços online. Adira ao QUAR e ao Quadro Nacional de Referência para a Cibersegurança (CNCS).' },
		{ icone: '🏥', titulo: 'Saúde (SNS, IPSS, hospitais)', desc: 'Dados de saúde = categoria especial RGPD. Coimas máximas. Implementar segregação rigorosa de acessos clínicos, logs detalhados e plano específico para ransomware.' },
		{ icone: '🏫', titulo: 'Escolas e Universidades', desc: 'Dados de menores + investigação. Use SeguraNet e CNCS-AT&CK. Forme docentes e auxiliares — ataques entram por contas pessoais usadas no equipamento da escola.' },
		{ icone: '⚖️', titulo: 'Justiça e Forças de Segurança', desc: 'Dados ultra-sensíveis e relevância nacional. Aderir ao QNRCS (Quadro Nacional de Referência) e seguir as orientações do CNCS para infraestruturas críticas.' }
	];

	const recursos = [
		{ nome: 'CNCS — Centro Nacional de Cibersegurança', desc: 'Quadro Nacional de Referência, alertas, apoio a incidentes (CERT.PT)', url: 'https://www.cncs.gov.pt' },
		{ nome: 'CNPD — Comissão Nacional de Proteção de Dados', desc: 'Notificação de violações, orientações RGPD, queixas', url: 'https://www.cnpd.pt' },
		{ nome: 'IAPMEI', desc: 'Programas de apoio à digitalização e cibersegurança em PME', url: 'https://www.iapmei.pt' },
		{ nome: 'AMA — Agência para a Modernização Administrativa', desc: 'Diretrizes de segurança para serviços públicos digitais', url: 'https://www.ama.gov.pt' },
		{ nome: 'ENISA — European Union Agency for Cybersecurity', desc: 'Recursos europeus, NIS2, frameworks', url: 'https://www.enisa.europa.eu' }
	];
</script>

<svelte:head>
	<title>Empresas e Instituições — NavegaSeguro</title>
	<meta name="description" content="Cibersegurança para PME, autarquias e instituições públicas em Portugal. Checklist, ameaças, RGPD." />
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🏢 Empresas e Instituições</h1>
		<p>Guia prático de cibersegurança para PME, autarquias e instituições públicas em Portugal</p>
	</div>
</div>

<main class="container">
	<section class="intro">
		<p>A maioria dos ataques bem-sucedidos em Portugal não exige sofisticação técnica — explora pessoas, processos mal definidos e ausência de backups testados. Este guia foca-se no que <strong>realmente</strong> reduz risco, sem comprar produtos caros.</p>
	</section>

	<section>
		<h2>Principais ameaças em Portugal</h2>
		<div class="grelha-cards">
			{#each ameacas as a}
				<article class="card">
					<span class="icone" aria-hidden="true">{a.icone}</span>
					<h3>{a.titulo}</h3>
					<p>{a.desc}</p>
				</article>
			{/each}
		</div>
	</section>

	<section>
		<h2>Checklist para PME (auto-avaliação)</h2>
		<p class="secao-desc">Marque mentalmente o que já tem. O que falta é a sua lista de tarefas.</p>
		{#each checklistPME as bloco}
			<div class="bloco-check">
				<h3>{bloco.cat}</h3>
				<ul>
					{#each bloco.itens as item}
						<li>
							<span class="caixa" aria-hidden="true">☐</span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section>
		<h2>Instituições públicas — particularidades</h2>
		<div class="grelha-cards">
			{#each acoesInstituicoes as a}
				<article class="card-inst">
					<span class="icone" aria-hidden="true">{a.icone}</span>
					<div>
						<h3>{a.titulo}</h3>
						<p>{a.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="legislacao">
		<h2>Enquadramento legal</h2>
		<ul class="leg-lista">
			<li><strong>RGPD (Regulamento UE 2016/679)</strong> — proteção de dados pessoais. Coimas até 20M€ ou 4% da faturação mundial.</li>
			<li><strong>Lei nº 58/2019</strong> — execução do RGPD em Portugal.</li>
			<li><strong>Diretiva NIS2 (UE 2022/2555)</strong> — transposta em Portugal pelo DL 65/2021. Obrigações para entidades essenciais e importantes.</li>
			<li><strong>Lei do Cibercrime (Lei 109/2009)</strong> — quadro penal para crimes informáticos.</li>
			<li><strong>QNRCS — Quadro Nacional de Referência para a Cibersegurança</strong> — orientação técnica do CNCS para a Administração Pública e infraestruturas críticas.</li>
		</ul>
	</section>

	<section class="recursos">
		<h2>Onde pedir apoio</h2>
		<div class="grelha-recursos">
			{#each recursos as r}
				<a class="recurso" href={r.url} target="_blank" rel="noopener noreferrer">
					<strong>{r.nome}</strong>
					<span>{r.desc}</span>
					<em>{r.url.replace('https://', '')} →</em>
				</a>
			{/each}
		</div>

		<div class="apoio-direto">
			<h3>Em caso de incidente</h3>
			<p><strong>CERT.PT (CNCS)</strong> — equipa de resposta nacional. Reporte em <a href="https://www.cncs.gov.pt" target="_blank" rel="noopener noreferrer">cncs.gov.pt</a> ou através do email cert@cert.pt. Disponíveis 24/7 para incidentes graves.</p>
			<p><strong>CNPD</strong> — notificação obrigatória em 72h após conhecimento de violação de dados pessoais.</p>
		</div>
	</section>

	<section class="parceria">
		<h2>Parceria com o NavegaSeguro</h2>
		<p>Use livremente os nossos materiais em sessões de formação interna. Pode também solicitar contacto para parcerias institucionais, integrações ou personalização de conteúdos.</p>
		<a href="/contacto" class="btn-contacto">Contactar →</a>
	</section>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 980px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2.2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.5; }

	main { padding: 2.5rem 1.5rem 4rem; }

	section { margin-bottom: 3rem; }

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.4rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}
	h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}
	.secao-desc { color: #666; font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5; }

	.intro { background: #FFF5E6; border-left: 4px solid #FF9F43; padding: 1.25rem 1.5rem; border-radius: 0.5rem; }
	.intro p { color: #4a3000; font-size: 0.95rem; line-height: 1.65; margin: 0; }

	.grelha-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
	.card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.25rem 1.25rem 1.25rem;
		border-top: 4px solid #0984E3;
	}
	.card .icone { font-size: 1.75rem; display: block; margin-bottom: 0.5rem; }
	.card p { font-size: 0.88rem; color: #444; line-height: 1.6; }

	.card-inst {
		display: flex;
		gap: 0.85rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1rem 1.25rem;
		border-left: 4px solid #6C5CE7;
	}
	.card-inst .icone { font-size: 1.6rem; flex-shrink: 0; }
	.card-inst p { font-size: 0.85rem; color: #444; line-height: 1.5; margin-top: 0.2rem; }

	.bloco-check {
		background: #f8f9fa;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1rem 1.25rem;
		margin-bottom: 0.75rem;
	}
	.bloco-check h3 { color: #0984E3; text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.05em; }
	.bloco-check ul { list-style: none; padding: 0; }
	.bloco-check li {
		display: flex;
		gap: 0.6rem;
		padding: 0.4rem 0;
		font-size: 0.9rem;
		color: #333;
		line-height: 1.5;
	}
	.caixa { font-size: 1.1rem; color: #999; flex-shrink: 0; font-family: 'Courier New', monospace; }

	.leg-lista { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
	.leg-lista li {
		padding: 0.75rem 1rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-left: 3px solid #1a1a2e;
		border-radius: 0.4rem;
		font-size: 0.9rem;
		line-height: 1.55;
		color: #333;
	}

	.grelha-recursos { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.75rem; }
	.recurso {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		padding: 0.9rem 1.1rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.15s, box-shadow 0.15s;
	}
	.recurso:hover { border-color: #0984E3; box-shadow: 0 2px 8px rgba(9,132,227,0.08); }
	.recurso:focus-visible { outline: 3px solid #0984E3; outline-offset: 1px; }
	.recurso strong { font-size: 0.92rem; color: #1a1a2e; }
	.recurso span { font-size: 0.82rem; color: #555; line-height: 1.4; }
	.recurso em { font-size: 0.78rem; color: #0984E3; font-style: normal; margin-top: 0.15rem; }

	.apoio-direto {
		margin-top: 1.5rem;
		padding: 1.25rem 1.5rem;
		background: #FFF0F0;
		border-left: 4px solid #FF6B6B;
		border-radius: 0.5rem;
	}
	.apoio-direto h3 { color: #c0392b; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; }
	.apoio-direto p { font-size: 0.9rem; color: #4a0000; line-height: 1.6; margin-bottom: 0.5rem; }
	.apoio-direto a { color: #0984E3; text-decoration: underline; }

	.parceria {
		text-align: center;
		background: linear-gradient(135deg, #1a1a2e, #0f3460);
		color: white;
		padding: 2rem 1.5rem;
		border-radius: 1rem;
	}
	.parceria h2 { color: white; }
	.parceria p { color: rgba(255,255,255,0.85); max-width: 600px; margin: 0 auto 1.25rem; line-height: 1.6; font-size: 0.95rem; }
	.btn-contacto {
		display: inline-block;
		background: #48DBFB;
		color: #1a1a2e;
		font-weight: 700;
		padding: 0.7rem 1.5rem;
		border-radius: 999px;
		text-decoration: none;
	}
	.btn-contacto:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(72,219,251,0.4); }
	.btn-contacto:focus-visible { outline: 3px solid #48DBFB; outline-offset: 3px; }
</style>
