<svelte:head>
	<title>Sobre — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🛡️ Sobre o NavegaSeguro</h1>
		<p>Um projeto português de literacia digital, gratuito e sem publicidade</p>
	</div>
</div>

<main class="container">
	<section class="missao">
		<h2>A nossa missão</h2>
		<p>O NavegaSeguro nasceu da convicção de que a segurança online não é um tema técnico — é um tema humano. Todos os dias, pessoas de todas as idades em Portugal são vítimas de fraudes, cyberbullying e manipulação online. A maioria poderia ser evitada com informação simples e acessível.</p>
		<p>A nossa missão é disponibilizar conteúdo de cibersegurança adaptado a cada fase da vida, em português europeu, de forma gratuita e sem interesses comerciais.</p>
	</section>

	<section class="principios">
		<h2>Os nossos princípios</h2>
		<div class="grelha">
			<div class="principio">
				<span>🎯</span>
				<h3>Adaptado a cada faixa etária</h3>
				<p>Uma criança de 6 anos e um sénior de 75 têm realidades e riscos completamente diferentes. O conteúdo, a linguagem e os exemplos são sempre ajustados ao público específico.</p>
			</div>
			<div class="principio">
				<span>🇵🇹</span>
				<h3>Contextualizado para Portugal</h3>
				<p>Usamos exemplos reais que acontecem em Portugal: SMS dos CTT, fraude MB Way, falso técnico da MEO. Não traduzimos conteúdo estrangeiro — criamos para a realidade portuguesa.</p>
			</div>
			<div class="principio">
				<span>💡</span>
				<h3>Sem alarmismo</h3>
				<p>O objetivo não é assustar — é capacitar. Abordamos os riscos de forma honesta, com soluções práticas e sem catastrofismo. Internet segura é possível para toda a gente.</p>
			</div>
			<div class="principio">
				<span>♿</span>
				<h3>Acessível a todos</h3>
				<p>Letra grande para seniores, linguagem simples, alto contraste e navegação por teclado. A acessibilidade não é uma funcionalidade extra — é um requisito base.</p>
			</div>
			<div class="principio">
				<span>🔒</span>
				<h3>Sem publicidade, sem tracking</h3>
				<p>Não recolhemos dados pessoais, não usamos cookies de rastreio, não vendemos publicidade. O NavegaSeguro é um serviço público digital — não um produto.</p>
			</div>
			<div class="principio">
				<span>🏫</span>
				<h3>Pensado para instituições</h3>
				<p>Escolas, câmaras municipais, centros de dia e empresas podem usar o NavegaSeguro em sessões de formação. O conteúdo está alinhado com o currículo nacional de TIC e Cidadania.</p>
			</div>
		</div>
	</section>

	<section class="publico">
		<h2>Para quem é?</h2>
		<div class="tabela">
			<div class="linha-tabela cabecalho">
				<span>Grupo</span>
				<span>Idades</span>
				<span>Foco principal</span>
			</div>
			<div class="linha-tabela"><span>🧸 Pré-Escolar</span><span>3–5 anos</span><span>Regras básicas, permissão, tempo de ecrã</span></div>
			<div class="linha-tabela"><span>🎨 1.º Ciclo</span><span>6–10 anos</span><span>Palavra-passe, estranhos online, cyberbullying</span></div>
			<div class="linha-tabela"><span>📱 2.º Ciclo</span><span>10–12 anos</span><span>Redes sociais, privacidade, jogos online</span></div>
			<div class="linha-tabela"><span>⚡ 3.º Ciclo</span><span>12–15 anos</span><span>Reputação digital, sextorsão, grooming</span></div>
			<div class="linha-tabela"><span>🎯 Secundário</span><span>15–18 anos</span><span>Fraudes financeiras, deepfakes, pegada digital</span></div>
			<div class="linha-tabela"><span>👔 Adultos</span><span>18–59 anos</span><span>Phishing, MB Way, teletrabalho</span></div>
			<div class="linha-tabela"><span>🌟 Seniores</span><span>60+ anos</span><span>Burlas telefónicas, suporte técnico falso</span></div>
		</div>
	</section>

	<section class="contacto">
		<h2>Em caso de emergência digital</h2>
		<p>Se foi vítima de um crime online ou precisa de ajuda urgente:</p>
		<div class="emergencia">
			<div>📞 <strong>800 21 90 90</strong> — Linha Internet Segura (gratuita, 24h)</div>
			<div>🚨 <strong>112</strong> — Emergência</div>
			<div>🛡️ <strong>116</strong> — Apoio a Vítimas de Crime</div>
		</div>
	</section>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}

	.container {
		max-width: 900px;
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
		margin-bottom: 3.5rem;
	}

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.5rem;
		font-weight: 800;
		margin-bottom: 1.25rem;
		color: #1a1a2e;
	}

	.missao p {
		color: #444;
		line-height: 1.7;
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	.grelha {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.principio {
		background: #fff;
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 1px solid #e5e7eb;
	}

	.principio span {
		font-size: 1.75rem;
	}

	.principio h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1rem;
	}

	.principio p {
		font-size: 0.875rem;
		color: #555;
		line-height: 1.5;
	}

	.tabela {
		border-radius: 0.75rem;
		overflow: hidden;
		border: 1px solid #e5e7eb;
	}

	.linha-tabela {
		display: grid;
		grid-template-columns: 1.5fr 1fr 2fr;
		gap: 1rem;
		padding: 0.9rem 1.25rem;
		border-bottom: 1px solid #f0f0f0;
		font-size: 0.9rem;
		background: #fff;
	}

	.linha-tabela:last-child {
		border-bottom: none;
	}

	.cabecalho {
		background: #1a1a2e;
		color: white;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.emergencia {
		background: #FFF5E6;
		border-left: 4px solid #FF9F43;
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		font-size: 1rem;
		margin-top: 1rem;
	}

	.contacto p {
		color: #555;
		margin-bottom: 0;
	}

	@media (max-width: 600px) {
		.linha-tabela {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
		.cabecalho {
			display: none;
		}
	}
</style>
