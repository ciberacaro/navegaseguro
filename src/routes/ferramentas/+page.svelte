<svelte:head>
	<title>Ferramentas — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>🛠️ Ferramentas</h1>
		<p>Testes interativos, simuladores e recursos práticos — tudo gratuito e sem registo</p>
	</div>
</div>

<main class="container">
	<section>
		<h2>Avalia a tua segurança</h2>
		<div class="grelha">
			<a href="/checklist" class="card">
				<span class="card-emoji">✅</span>
				<div>
					<h3>Checklist de Segurança</h3>
					<p>10 perguntas para avaliar o teu nível de proteção digital e receberes recomendações personalizadas.</p>
					<span class="link">Fazer checklist →</span>
				</div>
			</a>
			<a href="/quiz-completo" class="card">
				<span class="card-emoji">🏆</span>
				<div>
					<h3>Quiz Completo</h3>
					<p>35 perguntas por todas as faixas etárias. Obtém o teu certificado NavegaSeguro no final.</p>
					<span class="link">Fazer quiz →</span>
				</div>
			</a>
		</div>
	</section>

	<section>
		<h2>Aprende a reconhecer fraudes</h2>
		<div class="grelha">
			<a href="/ferramentas" class="card">
				<span class="card-emoji">🎣</span>
				<div>
					<h3>Simulador de Fraudes</h3>
					<p>SMS, emails e chamadas falsas com hotspots clicáveis — descobre os sinais de alerta em exemplos reais.</p>
					<span class="link">Experimentar →</span>
				</div>
			</a>
			<a href="/arquivo" class="card">
				<span class="card-emoji">📁</span>
				<div>
					<h3>Arquivo de Casos Reais</h3>
					<p>20 casos documentados em Portugal — filtra por tipo, canal e pesquisa por palavra-chave.</p>
					<span class="link">Ver arquivo →</span>
				</div>
			</a>
		</div>
	</section>

	<section>
		<h2>Palavras-passe</h2>
		<div class="grelha">
			<a href="/ferramentas" class="card">
				<span class="card-emoji">🔐</span>
				<div>
					<h3>Verificador de Força</h3>
					<p>Testa a força de uma palavra-passe de exemplo. Calculado localmente — nada vai ao servidor.</p>
					<span class="link">Verificar →</span>
				</div>
			</a>
			<a href="/ferramentas" class="card">
				<span class="card-emoji">🔑</span>
				<div>
					<h3>Gerador por Frase</h3>
					<p>Transforma uma frase memorável numa palavra-passe forte. Aprende a técnica passo a passo.</p>
					<span class="link">Gerar →</span>
				</div>
			</a>
		</div>
	</section>

	<section>
		<h2>Para educadores e famílias</h2>
		<div class="grelha">
			<a href="/educadores" class="card">
				<span class="card-emoji">🏫</span>
				<div>
					<h3>Pais e Educadores</h3>
					<p>6 planos de sessão de 45 minutos, adaptados a cada faixa etária — prontos a usar em sala ou em casa.</p>
					<span class="link">Ver planos →</span>
				</div>
			</a>
			<a href="/imprimir" class="card">
				<span class="card-emoji">🖨️</span>
				<div>
					<h3>Cartão Imprimível</h3>
					<p>Cartão de bolso A5 com 6 sinais de alerta e números de apoio — para dar a um familiar sénior.</p>
					<span class="link">Imprimir →</span>
				</div>
			</a>
		</div>
	</section>

	<div class="emergencia-bloco">
		<span>🚨</span>
		<div>
			<strong>Está a ser burlado agora?</strong>
			<p>Passos concretos para cada situação de emergência — transferência, acesso à conta, ransomware.</p>
		</div>
		<a href="/emergencia" class="btn-emergencia">O que fazer →</a>
	</div>
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
	.topo p { color: rgba(255,255,255,0.7); font-size: 0.95rem; }

	main { padding: 2.5rem 1.5rem; }
	section { margin-bottom: 2.5rem; }

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.1rem;
		font-weight: 800;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	.grelha { display: flex; flex-direction: column; gap: 0.75rem; }

	.card {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.875rem;
		padding: 1.25rem;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.card:hover {
		border-color: #0984E3;
		box-shadow: 0 2px 12px rgba(9,132,227,0.1);
	}
	.card-emoji { font-size: 2rem; flex-shrink: 0; line-height: 1; }
	.card h3 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1rem; color: #1a1a2e; margin-bottom: 0.25rem; }
	.card p { font-size: 0.875rem; color: #555; line-height: 1.5; margin-bottom: 0.5rem; }
	.link { font-size: 0.85rem; font-weight: 600; color: #0984E3; }

	.emergencia-bloco {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #fff0f0;
		border: 2px solid #FF6B6B;
		border-radius: 0.875rem;
		padding: 1.25rem;
		flex-wrap: wrap;
	}
	.emergencia-bloco span { font-size: 2rem; flex-shrink: 0; }
	.emergencia-bloco div { flex: 1; min-width: 200px; }
	.emergencia-bloco strong { display: block; font-size: 1rem; color: #1a1a2e; margin-bottom: 0.2rem; }
	.emergencia-bloco p { font-size: 0.875rem; color: #555; }
	.btn-emergencia {
		background: #FF6B6B;
		color: white;
		font-weight: 700;
		font-size: 0.9rem;
		padding: 0.6rem 1.25rem;
		border-radius: 999px;
		white-space: nowrap;
		flex-shrink: 0;
	}
	.btn-emergencia:hover { background: #e55a5a; }
</style>
