<script>
	import VerificadorPassword from '$lib/VerificadorPassword.svelte';
	import GeradorFrase from '$lib/GeradorFrase.svelte';
	import SimuladorFraude from '$lib/SimuladorFraude.svelte';
	import VerificadorURL from '$lib/VerificadorURL.svelte';
	import AnalisadorSMS from '$lib/AnalisadorSMS.svelte';
</script>

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
		<div class="grelha-links">
			<a href="/checklist" class="card-link">
				<span>✅</span>
				<div>
					<strong>Checklist de Segurança</strong>
					<p>10 perguntas com recomendações personalizadas</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/quiz-completo" class="card-link">
				<span>🏆</span>
				<div>
					<strong>Quiz Completo</strong>
					<p>35 perguntas por todas as faixas — com certificado</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/arquivo" class="card-link">
				<span>📁</span>
				<div>
					<strong>Arquivo de Casos Reais</strong>
					<p>35 burlas documentadas em Portugal, com filtros</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/educadores" class="card-link">
				<span>🏫</span>
				<div>
					<strong>Pais e Educadores</strong>
					<p>Planos de sessão, fichas e avaliação de turma</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/noticias" class="card-link">
				<span>📰</span>
				<div>
					<strong>Notícias e alertas</strong>
					<p>Os alertas mais recentes em Portugal — CNCS, PJ, CMVM</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/faq" class="card-link">
				<span>❓</span>
				<div>
					<strong>Perguntas frequentes</strong>
					<p>As 15 dúvidas mais comuns sobre cibersegurança</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/imprimir" class="card-link">
				<span>🖨️</span>
				<div>
					<strong>Cartão Imprimível</strong>
					<p>Cartão de bolso A5 com sinais de alerta para seniores</p>
				</div>
				<span class="seta">→</span>
			</a>
			<a href="/emergencia" class="card-link urgente">
				<span>🚨</span>
				<div>
					<strong>Estou a ser burlado agora</strong>
					<p>Passos concretos para cada situação de emergência</p>
				</div>
				<span class="seta">→</span>
			</a>
		</div>
	</section>

	<section>
		<h2>Verificador de URL / QR Code</h2>
		<p class="secao-desc">Cola um link suspeito (ou o destino de um QR code) e analisa heuristicamente o domínio — lookalikes de bancos PT, encurtadores, TLDs de risco e sinais de phishing.</p>
		<VerificadorURL />
	</section>

	<section>
		<h2>Analisador de SMS / mensagem suspeita</h2>
		<p class="secao-desc">Cola o texto de um SMS, email ou WhatsApp suspeito. A análise sinaliza padrões típicos de fraude — urgência, marcas imitadas, pedido de dados, falso familiar.</p>
		<AnalisadorSMS />
	</section>

	<section>
		<h2>Simulador de fraudes</h2>
		<p class="secao-desc">Clica nas partes suspeitas de cada mensagem para perceber o que as torna perigosas.</p>
		<SimuladorFraude />
	</section>

	<section>
		<h2>Verificador de força de palavra-passe</h2>
		<p class="secao-desc">Testa uma palavra-passe de exemplo — <strong>nunca a tua real.</strong> Calculado localmente, nada é enviado para qualquer servidor.</p>
		<VerificadorPassword />
	</section>

	<section>
		<h2>Gerador de palavra-passe por frase</h2>
		<p class="secao-desc">Transforma uma frase memorável numa palavra-passe forte. Aprende a técnica passo a passo.</p>
		<GeradorFrase />
	</section>

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

	main { padding: 2.5rem 1.5rem; }

	section { margin-bottom: 3rem; }

	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	.secao-desc {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 1.25rem;
		line-height: 1.5;
	}

	.grelha-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-link {
		display: flex;
		align-items: center;
		gap: 0.875rem;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 0.875rem 1rem;
		transition: border-color 0.2s, box-shadow 0.15s;
	}
	.card-link:hover {
		border-color: #0984E3;
		box-shadow: 0 2px 8px rgba(9,132,227,0.08);
	}
	.card-link.urgente { border-color: #FFD0D0; }
	.card-link.urgente:hover { border-color: #FF6B6B; }

	.card-link > span:first-child { font-size: 1.5rem; flex-shrink: 0; }
	.card-link div { flex: 1; }
	.card-link strong { display: block; font-size: 0.9rem; color: #1a1a2e; margin-bottom: 0.1rem; }
	.card-link p { font-size: 0.8rem; color: #666; }
	.card-link.urgente strong { color: #c0392b; }

	.seta { color: #bbb; font-size: 1rem; flex-shrink: 0; }
</style>
