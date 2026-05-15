<script>
	const cenarios = [
		{
			id: 'dinheiro',
			emoji: '💸',
			titulo: 'Transferi dinheiro',
			subtitulo: 'MB Way, transferência bancária',
			passos: [
				'Não faças mais transferências — para tudo agora mesmo.',
				'Liga imediatamente ao teu banco (número no verso do cartão) e pede o bloqueio da transferência.',
				'Liga 800 21 90 90 (Linha Internet Segura, gratuita, 24 horas) para orientação.',
				'Faz queixa na Polícia Judiciária: presencialmente ou em politiciajudiciaria.pt/queixa.',
				'Guarda todas as provas: screenshots, mensagens, emails, recibos de transferência.',
				'Se fizeste transferência para conta de terceiro, contacta também o banco de destino através do teu banco.'
			]
		},
		{
			id: 'conta',
			emoji: '🔓',
			titulo: 'Acederam à minha conta',
			subtitulo: 'Email, redes sociais, banco',
			passos: [
				'Muda imediatamente a palavra-passe da conta afetada e de todos os serviços onde usas a mesma password.',
				'Ativa a verificação em dois passos (2FA) em todos os serviços afetados.',
				'Liga ao banco se acederam à tua conta bancária — pede bloqueio preventivo.',
				'Reporta o acesso não autorizado diretamente ao serviço (Google, Facebook, Instagram, etc.).',
				'Liga 800 21 90 90 (Linha Internet Segura) para orientação e apoio.',
				'Faz queixa na PJ se houve dano financeiro ou publicação de conteúdos ilegais.'
			]
		},
		{
			id: 'ransomware',
			emoji: '💻',
			titulo: 'Recebi ransomware / vírus',
			subtitulo: 'Ficheiros bloqueados, mensagem a pedir pagamento',
			passos: [
				'NÃO PAGARES o resgate — o pagamento não garante a recuperação dos ficheiros e financia os criminosos.',
				'Desliga o computador da internet (cabo e Wi-Fi) imediatamente para evitar a propagação.',
				'Não reinicies nem desligues o computador — isso pode dificultar a recuperação.',
				'Liga 800 21 90 90 (Linha Internet Segura) — têm técnicos especializados para este tipo de situação.',
				'Faz queixa na Polícia Judiciária: politiciajudiciaria.pt/queixa.',
				'Consulta o site nomoreransom.org — pode existir uma ferramenta gratuita para desencriptar os teus ficheiros.'
			]
		},
		{
			id: 'romantica',
			emoji: '💔',
			titulo: 'Fui vítima de burla romântica',
			subtitulo: 'Pessoa online pediu dinheiro',
			passos: [
				'Para de enviar dinheiro imediatamente, mesmo que a pessoa apresente justificações urgentes.',
				'Corta o contacto com essa pessoa — bloqueia em todas as plataformas.',
				'Liga ao banco para tentar reverter transferências recentes e alertar para futuros pedidos.',
				'Fala com alguém de confiança — família ou amigo próximo — não te isolares.',
				'Liga 116 006 (APAV — Apoio à Vítima) para apoio emocional e orientação.',
				'Faz queixa na PJ: politiciajudiciaria.pt/queixa — guarda todas as conversas e fotos como prova.'
			]
		}
	];

	let cenarioAtivo = $state('dinheiro');

	const cenarioSelecionado = $derived(cenarios.find(c => c.id === cenarioAtivo));
</script>

<svelte:head>
	<title>🚨 Estou a ser burlado — o que fazer agora | NavegaSeguro</title>
	<meta name="description" content="Fui burlado — o que faço agora? Passos concretos para cada tipo de burla online: transferência bancária, acesso à conta, ransomware e burla romântica." />
	<meta name="robots" content="index, follow" />
</svelte:head>

<main>
	<!-- Hero de emergência -->
	<section class="hero" aria-labelledby="titulo-principal">
		<div class="hero-inner">
			<div class="alerta-badge" aria-hidden="true">🚨 EMERGÊNCIA</div>
			<h1 id="titulo-principal">Estou a ser burlado — o que fazer agora</h1>
			<p class="subtitulo">PARE. Respire. Siga estes passos.</p>
		</div>
	</section>

	<!-- Seletor de cenários -->
	<section class="secao-cenarios" aria-labelledby="titulo-cenarios">
		<div class="container">
			<h2 id="titulo-cenarios" class="secao-titulo">Qual é a tua situação?</h2>
			<div class="cenarios-grid" role="tablist" aria-label="Seleciona o tipo de burla">
				{#each cenarios as cenario}
					<button
						role="tab"
						aria-selected={cenarioAtivo === cenario.id}
						aria-controls="passos-{cenario.id}"
						id="tab-{cenario.id}"
						class="cenario-btn"
						class:ativo={cenarioAtivo === cenario.id}
						onclick={() => cenarioAtivo = cenario.id}
					>
						<span class="cenario-emoji" aria-hidden="true">{cenario.emoji}</span>
						<span class="cenario-titulo-btn">{cenario.titulo}</span>
						<span class="cenario-sub">{cenario.subtitulo}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Passos do cenário selecionado -->
	{#each cenarios as cenario}
		<section
			id="passos-{cenario.id}"
			role="tabpanel"
			aria-labelledby="tab-{cenario.id}"
			class="secao-passos"
			class:visivel={cenarioAtivo === cenario.id}
			hidden={cenarioAtivo !== cenario.id}
			aria-label="Passos para: {cenario.titulo}"
		>
			<div class="container">
				<div class="passos-cabecalho">
					<span class="passos-emoji" aria-hidden="true">{cenario.emoji}</span>
					<div>
						<h2 class="passos-titulo">{cenario.titulo}</h2>
						<p class="passos-sub">{cenario.subtitulo}</p>
					</div>
				</div>

				<ol class="passos-lista" aria-label="Passos a seguir">
					{#each cenario.passos as passo, i}
						<li class="passo-item">
							<span class="passo-numero" aria-hidden="true">{i + 1}</span>
							<p class="passo-texto">{passo}</p>
						</li>
					{/each}
				</ol>
			</div>
		</section>
	{/each}

	<!-- Números de emergência -->
	<section class="secao-contactos" aria-labelledby="titulo-contactos">
		<div class="container">
			<h2 id="titulo-contactos" class="secao-titulo claro">Contactos de emergência</h2>
			<div class="contactos-grid">
				<a href="tel:800219090" class="contacto-card destaque" aria-label="Liga para a Linha Internet Segura: 800 21 90 90, gratuita 24 horas">
					<span class="contacto-emoji" aria-hidden="true">📞</span>
					<span class="contacto-numero">800 21 90 90</span>
					<span class="contacto-nome">Linha Internet Segura</span>
					<span class="contacto-detalhe">Gratuita · 24 horas · 7 dias</span>
				</a>

				<a href="tel:112" class="contacto-card urgente" aria-label="Liga para o número de emergência: 112">
					<span class="contacto-emoji" aria-hidden="true">🚨</span>
					<span class="contacto-numero">112</span>
					<span class="contacto-nome">Emergência</span>
					<span class="contacto-detalhe">Polícia · Bombeiros · INEM</span>
				</a>

				<a href="tel:116006" class="contacto-card apoio" aria-label="Liga para a APAV: 116 006">
					<span class="contacto-emoji" aria-hidden="true">🤝</span>
					<span class="contacto-numero">116 006</span>
					<span class="contacto-nome">APAV</span>
					<span class="contacto-detalhe">Apoio à Vítima · Gratuita</span>
				</a>

				<a
					href="https://www.politiciajudiciaria.pt/queixa"
					target="_blank"
					rel="noopener noreferrer"
					class="contacto-card queixa"
					aria-label="Fazer queixa online na Polícia Judiciária (abre em nova janela)"
				>
					<span class="contacto-emoji" aria-hidden="true">📋</span>
					<span class="contacto-numero" style="font-size: 1.1rem; word-break: break-all;">politiciajudiciaria.pt</span>
					<span class="contacto-nome">Polícia Judiciária</span>
					<span class="contacto-detalhe">Queixa online · /queixa</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Nota de rodapé -->
	<section class="secao-nota" aria-label="Nota importante">
		<div class="container">
			<div class="nota-box">
				<p class="nota-texto">
					<strong>Lembra-te:</strong> não és o único. As burlas online afetam milhares de pessoas em Portugal. Reportar o crime ajuda a proteger outras vítimas.
					Não te envergonhes de pedir ajuda.
				</p>
				<a href="/checklist" class="nota-link">Verifica a tua segurança digital depois →</a>
			</div>
		</div>
	</section>
</main>

<style>
	/* ── Variáveis ── */
	:root {
		--vermelho: #e53e3e;
		--laranja: #dd6b20;
		--navy: #1a1a2e;
		--navy-claro: #16213e;
		--azul: #0984e3;
		--verde: #1dd1a1;
		--texto-claro: #f0f4ff;
		--texto-muted: #a0aec0;
	}

	/* ── Hero ── */
	.hero {
		background: linear-gradient(135deg, var(--navy) 0%, #2d1b4e 60%, #1a0a0a 100%);
		padding: 4rem 1.5rem 3rem;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 40px,
			rgba(229, 62, 62, 0.04) 40px,
			rgba(229, 62, 62, 0.04) 80px
		);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		max-width: 700px;
		margin: 0 auto;
	}

	.alerta-badge {
		display: inline-block;
		background: var(--vermelho);
		color: #fff;
		font-weight: 800;
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		padding: 0.35rem 1rem;
		border-radius: 999px;
		margin-bottom: 1.25rem;
		animation: piscar 1.5s ease-in-out infinite;
	}

	@keyframes piscar {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.6; }
	}

	.hero h1 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.75rem, 5vw, 2.75rem);
		font-weight: 900;
		color: #fff;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.subtitulo {
		font-size: clamp(1.1rem, 3vw, 1.4rem);
		font-weight: 700;
		color: #ffd32a;
		letter-spacing: 0.05em;
	}

	/* ── Container ── */
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* ── Títulos de secção ── */
	.secao-titulo {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.25rem, 3vw, 1.6rem);
		font-weight: 800;
		color: var(--navy);
		text-align: center;
		margin-bottom: 1.75rem;
	}

	.secao-titulo.claro {
		color: var(--texto-claro);
	}

	/* ── Seletor de cenários ── */
	.secao-cenarios {
		background: #f0f4ff;
		padding: 3rem 0;
	}

	.cenarios-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
		gap: 1rem;
	}

	.cenario-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		background: #fff;
		border: 2.5px solid #e2e8f0;
		border-radius: 1rem;
		padding: 1.25rem 1rem;
		cursor: pointer;
		font-family: inherit;
		transition: border-color 0.2s, background 0.2s, transform 0.15s, box-shadow 0.2s;
		text-align: center;
	}

	.cenario-btn:hover {
		border-color: var(--laranja);
		background: #fff8f3;
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(221, 107, 32, 0.15);
	}

	.cenario-btn.ativo {
		border-color: var(--vermelho);
		background: #fff5f5;
		box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.2);
	}

	.cenario-emoji {
		font-size: 2rem;
		line-height: 1;
	}

	.cenario-titulo-btn {
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--navy);
		line-height: 1.3;
	}

	.cenario-sub {
		font-size: 0.75rem;
		color: #718096;
		line-height: 1.4;
	}

	.cenario-btn.ativo .cenario-titulo-btn {
		color: var(--vermelho);
	}

	/* ── Passos ── */
	.secao-passos {
		padding: 3rem 0;
		background: #fff;
	}

	.secao-passos.visivel {
		display: block;
	}

	.passos-cabecalho {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 2px solid #f0f4ff;
	}

	.passos-emoji {
		font-size: 2.5rem;
		flex-shrink: 0;
	}

	.passos-titulo {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.3rem, 3vw, 1.7rem);
		font-weight: 900;
		color: var(--navy);
		margin-bottom: 0.2rem;
	}

	.passos-sub {
		font-size: 0.9rem;
		color: #718096;
	}

	.passos-lista {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.passo-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background: #f8faff;
		border: 1.5px solid #e8edf8;
		border-radius: 0.875rem;
		padding: 1.1rem 1.25rem;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	.passo-item:hover {
		border-color: var(--azul);
		box-shadow: 0 2px 12px rgba(9, 132, 227, 0.1);
	}

	.passo-numero {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		min-width: 2.25rem;
		background: var(--vermelho);
		color: #fff;
		font-weight: 900;
		font-size: 1rem;
		border-radius: 50%;
		font-family: 'Nunito', sans-serif;
	}

	.passo-texto {
		font-size: clamp(0.95rem, 2.5vw, 1.05rem);
		color: #2d3748;
		line-height: 1.6;
		padding-top: 0.2rem;
	}

	/* ── Contactos de emergência ── */
	.secao-contactos {
		background: var(--navy);
		padding: 3.5rem 0;
	}

	.contactos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.contacto-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 1.5rem 1rem;
		border-radius: 1rem;
		text-decoration: none;
		font-family: inherit;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
		cursor: pointer;
	}

	.contacto-card:hover,
	.contacto-card:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.contacto-card.destaque {
		background: linear-gradient(135deg, #1565c0, #1976d2);
		color: #fff;
	}

	.contacto-card.urgente {
		background: linear-gradient(135deg, #b71c1c, var(--vermelho));
		color: #fff;
	}

	.contacto-card.apoio {
		background: linear-gradient(135deg, #1b5e20, #2e7d32);
		color: #fff;
	}

	.contacto-card.queixa {
		background: linear-gradient(135deg, #4a148c, #6a1b9a);
		color: #fff;
	}

	.contacto-emoji {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}

	.contacto-numero {
		font-family: 'Nunito', sans-serif;
		font-size: 1.75rem;
		font-weight: 900;
		letter-spacing: 0.03em;
		line-height: 1.1;
	}

	.contacto-nome {
		font-size: 0.95rem;
		font-weight: 700;
		opacity: 0.95;
	}

	.contacto-detalhe {
		font-size: 0.78rem;
		opacity: 0.8;
		line-height: 1.4;
	}

	/* ── Nota ── */
	.secao-nota {
		padding: 2.5rem 0 3rem;
		background: #f0f4ff;
	}

	.nota-box {
		background: #fff;
		border: 1.5px solid #e2e8f0;
		border-left: 4px solid var(--azul);
		border-radius: 0.875rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.nota-texto {
		font-size: 1rem;
		color: #4a5568;
		line-height: 1.7;
	}

	.nota-texto strong {
		color: var(--navy);
	}

	.nota-link {
		display: inline-flex;
		align-items: center;
		color: var(--azul);
		font-weight: 700;
		font-size: 0.95rem;
		transition: color 0.2s;
	}

	.nota-link:hover {
		color: #0773c5;
		text-decoration: underline;
	}

	/* ── Responsivo ── */
	@media (max-width: 600px) {
		.hero {
			padding: 2.5rem 1rem 2rem;
		}

		.cenarios-grid {
			grid-template-columns: 1fr 1fr;
		}

		.contactos-grid {
			grid-template-columns: 1fr 1fr;
		}

		.contacto-numero {
			font-size: 1.35rem;
		}

		.passos-cabecalho {
			gap: 0.75rem;
		}

		.passo-numero {
			width: 2rem;
			height: 2rem;
			min-width: 2rem;
			font-size: 0.9rem;
		}
	}

	@media (max-width: 380px) {
		.cenarios-grid {
			grid-template-columns: 1fr;
		}

		.contactos-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
