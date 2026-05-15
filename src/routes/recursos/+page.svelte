<script>
	import VerificadorPassword from '$lib/VerificadorPassword.svelte';
	import GeradorFrase from '$lib/GeradorFrase.svelte';
	import SimuladorFraude from '$lib/SimuladorFraude.svelte';

	const categorias = [
		{
			titulo: 'Entidades oficiais portuguesas',
			recursos: [
				{ nome: 'CNCS — Centro Nacional de Cibersegurança', desc: 'Autoridade nacional de cibersegurança. Alertas, relatórios, recursos educativos e apoio a incidentes.', url: 'https://www.cncs.gov.pt', tag: 'Oficial' },
				{ nome: 'SeguraNet', desc: 'Portal de segurança online para crianças, jovens, pais e professores. Criado pela FCT.', url: 'https://www.seguranet.pt', tag: 'Educação' },
				{ nome: 'Linha Internet Segura', desc: 'Linha gratuita de apoio a situações de risco online: 800 21 90 90 (gratuita, 24h).', url: 'https://www.seguranet.pt/pt/linha-internet-segura', tag: 'Apoio' },
				{ nome: 'GNR — Núcleo de Investigação Criminal', desc: 'Para reportar crimes informáticos e cibercrime. Pode fazer queixa na esquadra ou online.', url: 'https://www.gnr.pt', tag: 'Denúncia' },
				{ nome: 'Polícia Judiciária — Unidade de Cibercrime', desc: 'Para crimes informáticos graves (hacking, fraudes bancárias, predadores online).', url: 'https://www.policiajudiciaria.pt', tag: 'Denúncia' },
				{ nome: 'CMVM — Comissão do Mercado de Valores Mobiliários', desc: 'Verifica se uma plataforma de investimento tem autorização legal para operar em Portugal.', url: 'https://www.cmvm.pt', tag: 'Finanças' }
			]
		},
		{
			titulo: 'Ferramentas gratuitas de proteção',
			recursos: [
				{ nome: 'Bitwarden', desc: 'Gestor de palavras-passe gratuito, de código aberto e auditado. Disponível para todos os dispositivos.', url: 'https://bitwarden.com', tag: 'Ferramenta' },
				{ nome: 'Have I Been Pwned?', desc: 'Verifica se o teu email ou palavra-passe foi exposto em alguma fuga de dados conhecida.', url: 'https://haveibeenpwned.com', tag: 'Verificação' },
				{ nome: 'VirusTotal', desc: 'Analisa ficheiros e links suspeitos com mais de 70 antivírus. Gratuito e sem instalação.', url: 'https://www.virustotal.com', tag: 'Análise' },
				{ nome: 'Proton Mail', desc: 'Email gratuito com encriptação de ponta-a-ponta. Baseado na Suíça, com forte política de privacidade.', url: 'https://proton.me', tag: 'Privacidade' }
			]
		},
		{
			titulo: 'Verificação de fraudes',
			recursos: [
				{ nome: 'PSP — Portal de Denúncia Online', desc: 'Denúncia de crimes online diretamente à PSP, sem sair de casa.', url: 'https://www.psp.pt', tag: 'Denúncia' },
				{ nome: 'DECO Proteste', desc: 'Associação de defesa do consumidor — apoio em fraudes de compras online e serviços digitais.', url: 'https://www.deco.proteste.pt', tag: 'Consumidor' }
			]
		}
	];

	const linhas = [
		{ numero: '800 21 90 90', nome: 'Linha Internet Segura', desc: 'Gratuita, 24 horas', cor: '#1DD1A1' },
		{ numero: '112', nome: 'Emergência', desc: 'Situações de perigo imediato', cor: '#FF6B6B' },
		{ numero: '116', nome: 'Apoio a Vítimas de Crime', desc: 'Linha de apoio nacional', cor: '#A29BFE' },
		{ numero: '800 202 156', nome: 'APAV — Apoio à Vítima', desc: 'Gratuita, confidencial', cor: '#0984E3' }
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
			{#if cat.titulo === 'Ferramentas gratuitas de proteção'}
				<div class="verificador-bloco">
					<h3>🔐 Verificador de força de palavra-passe</h3>
					<p class="verificador-intro">Testa uma palavra-passe de exemplo — <strong>nunca a tua real.</strong> Calculado localmente, nada é enviado para qualquer servidor.</p>
					<VerificadorPassword />
				</div>
				<div class="verificador-bloco">
					<h3>🔑 Gerador de palavra-passe por frase</h3>
					<p class="verificador-intro">Transforma uma frase memorável numa palavra-passe forte — e aprende como funciona a técnica.</p>
					<GeradorFrase />
				</div>
			{/if}
			{#if cat.titulo === 'Verificação de fraudes'}
				<div class="verificador-bloco">
					<h3>🎣 Simulador de fraudes</h3>
					<p class="verificador-intro">Aprende a identificar SMS, emails e chamadas fraudulentas. Clica nas partes suspeitas para perceber porquê.</p>
					<SimuladorFraude />
				</div>
			{/if}
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

	.verificador-bloco {
		margin-top: 1.5rem;
		padding: 1.5rem;
		background: #f8faff;
		border: 1px solid #e0e7ff;
		border-radius: 0.75rem;
	}

	.verificador-bloco h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		color: #1a1a2e;
	}

	.verificador-intro {
		font-size: 0.875rem;
		color: #555;
		margin-bottom: 1.25rem;
		background: #fff9e6;
		border: 1px solid #FFE9CC;
		border-radius: 0.5rem;
		padding: 0.6rem 0.9rem;
	}
</style>
