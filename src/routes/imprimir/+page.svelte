<script>
	function imprimir() {
		window.print();
	}
</script>

<svelte:head>
	<title>Cartão de Bolso Anti-Burlas — NavegaSeguro</title>
	<meta name="description" content="Imprima este cartão de bolso e dê a um familiar sénior. Sinais de alerta de burlas e números de emergência." />
</svelte:head>

<!-- Secção visível apenas no ecrã (não imprime) -->
<div class="pagina-ecrã">
	<div class="intro-bloco">
		<h1>🃏 Cartão de Bolso Anti-Burlas</h1>
		<p class="intro-texto">
			Este cartão foi criado para <strong>séniores e as suas famílias</strong>. Imprime-o,
			dobra-o ao meio e guarda-o na carteira ou junto ao telefone. Tem os sinais de alerta
			mais importantes e os números a ligar em caso de dúvida.
		</p>
		<div class="instrucoes-impressao">
			<p>📄 <strong>Como imprimir:</strong> Clique no botão abaixo. O cartão será impresso em meia folha A4 (formato A5). Dobre ao meio para obter o cartão frente/verso.</p>
		</div>
		<button class="botao-imprimir" onclick={imprimir}>
			🖨️ Imprimir Cartão
		</button>
	</div>

	<div class="partilhar-bloco">
		<h2>💌 Partilhar com familiares</h2>
		<p>Imprima e dê a um familiar sénior. Coloque bem visível em casa — junto ao telefone, no frigorífico ou na carteira.</p>
		<ul>
			<li>Imprime numa folha A4 normal</li>
			<li>Dobra ao meio — fica do tamanho de um cartão de visita grande</li>
			<li>A frente tem os sinais de alerta, o verso tem os números de emergência</li>
		</ul>
	</div>
</div>

<!-- O cartão em si — visível no ecrã e na impressão -->
<div class="cartao-container">
	<div class="cartao-wrapper">

		<!-- FRENTE DO CARTÃO -->
		<div class="cartao frente">
			<div class="cartao-cabecalho">
				<span class="cartao-escudo">🛡️</span>
				<h2 class="cartao-titulo">CUIDADO<br />COM BURLAS</h2>
			</div>

			<div class="cartao-subtitulo">SINAIS DE ALERTA — DESCONFIE SEMPRE</div>

			<ol class="sinais-lista">
				<li>
					<span class="sinal-icone">⚠️</span>
					<span class="sinal-texto">Pedem <strong>URGÊNCIA</strong> — <em>"é agora ou perde tudo"</em></span>
				</li>
				<li>
					<span class="sinal-icone">💸</span>
					<span class="sinal-texto">Pedem pagamento em <strong>MB Way</strong> ou transferência</span>
				</li>
				<li>
					<span class="sinal-icone">🏦</span>
					<span class="sinal-texto">Dizem ser do <strong>banco, polícia ou Microsoft</strong></span>
				</li>
				<li>
					<span class="sinal-icone">🔢</span>
					<span class="sinal-texto">Pedem <strong>códigos</strong> do telemóvel ou do cartão</span>
				</li>
				<li>
					<span class="sinal-icone">🎁</span>
					<span class="sinal-texto">Oferecem <strong>prémios, heranças ou amor</strong></span>
				</li>
				<li>
					<span class="sinal-icone">🤫</span>
					<span class="sinal-texto">Pedem <strong>segredo</strong> — <em>"não digas a ninguém"</em></span>
				</li>
			</ol>

			<div class="cartao-rodape-frente">
				Se reconhecer qualquer um destes sinais — <strong>desligue</strong>
			</div>
		</div>

		<!-- VERSO DO CARTÃO -->
		<div class="cartao verso">
			<div class="verso-cabecalho">
				<h2 class="verso-titulo">SE TIVER DÚVIDAS:</h2>
			</div>

			<div class="numeros-lista">
				<div class="numero-item destaque">
					<div class="numero-label">📞 Linha Internet Segura</div>
					<div class="numero-valor">800 21 90 90</div>
					<div class="numero-nota">Gratuita · Disponível todos os dias</div>
				</div>

				<div class="numero-item">
					<div class="numero-label">🏦 O meu banco</div>
					<div class="numero-valor numero-pequeno">Número no verso do cartão</div>
				</div>

				<div class="numero-item">
					<div class="numero-label">👨‍👩‍👧 Familiar de confiança</div>
					<div class="numero-linha-preencher">
						<span class="numero-prefixo">Nº:</span>
						<span class="linha-preenchimento">___________________________</span>
					</div>
				</div>
			</div>

			<div class="alerta-burla">
				<div class="alerta-titulo">🚨 EM CASO DE BURLA:</div>
				<div class="alerta-passos">
					<span class="passo">1. Não transfira dinheiro</span>
					<span class="separador">·</span>
					<span class="passo">2. Desligue o telefone</span>
					<span class="separador">·</span>
					<span class="passo">3. Ligue ao seu banco</span>
				</div>
			</div>

			<div class="verso-rodape">
				navegaseguro.pt
			</div>
		</div>

	</div>
</div>

<style>
	/* ===== ECRÃ: estrutura geral ===== */
	.pagina-ecrã {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.intro-bloco {
		background: #f0f4ff;
		border: 2px solid #3b5bdb;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		margin-bottom: 1.5rem;
	}

	.intro-bloco h1 {
		font-size: 1.75rem;
		color: #1a1a2e;
		margin: 0 0 0.75rem 0;
	}

	.intro-texto {
		font-size: 1.05rem;
		color: #333;
		line-height: 1.6;
		margin: 0 0 1rem 0;
	}

	.instrucoes-impressao {
		background: #fff;
		border-left: 4px solid #3b5bdb;
		padding: 0.75rem 1rem;
		margin-bottom: 1.25rem;
		border-radius: 0 8px 8px 0;
		font-size: 0.95rem;
		color: #333;
	}

	.instrucoes-impressao p {
		margin: 0;
	}

	.botao-imprimir {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #3b5bdb;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 0.85rem 2rem;
		font-size: 1.1rem;
		font-weight: 700;
		cursor: pointer;
		transition: background 0.15s;
	}

	.botao-imprimir:hover {
		background: #2f4abf;
	}

	.botao-imprimir:active {
		background: #253da0;
	}

	.partilhar-bloco {
		background: #fff8e1;
		border: 2px solid #f59f00;
		border-radius: 12px;
		padding: 1.25rem 2rem;
		margin-bottom: 2rem;
	}

	.partilhar-bloco h2 {
		font-size: 1.2rem;
		color: #1a1a2e;
		margin: 0 0 0.5rem 0;
	}

	.partilhar-bloco p {
		margin: 0 0 0.75rem 0;
		color: #333;
		font-size: 0.95rem;
	}

	.partilhar-bloco ul {
		margin: 0;
		padding-left: 1.25rem;
		color: #333;
		font-size: 0.95rem;
	}

	.partilhar-bloco li {
		margin-bottom: 0.25rem;
	}

	/* ===== CARTÃO: container ===== */
	.cartao-container {
		display: flex;
		justify-content: center;
		padding: 1rem 1rem 3rem;
	}

	.cartao-wrapper {
		display: flex;
		flex-direction: row;
		gap: 0;
		width: 100%;
		max-width: 740px;
		border: 3px solid #1a1a2e;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0,0,0,0.15);
	}

	/* ===== CARTÃO: base ===== */
	.cartao {
		flex: 1;
		background: #fff;
		padding: 1.25rem 1.5rem;
		box-sizing: border-box;
		font-family: Georgia, 'Times New Roman', serif;
		color: #0a0a0a;
	}

	.frente {
		border-right: 3px dashed #aaa;
	}

	/* ===== FRENTE DO CARTÃO ===== */
	.cartao-cabecalho {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		border-bottom: 3px solid #0a0a0a;
		padding-bottom: 0.6rem;
		margin-bottom: 0.5rem;
	}

	.cartao-escudo {
		font-size: 2rem;
		line-height: 1;
	}

	.cartao-titulo {
		font-size: 1.3rem;
		font-weight: 900;
		line-height: 1.15;
		margin: 0;
		color: #0a0a0a;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.cartao-subtitulo {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #555;
		margin-bottom: 0.75rem;
	}

	.sinais-lista {
		list-style: none;
		padding: 0;
		margin: 0 0 0.75rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.sinais-lista li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		font-size: 0.88rem;
		line-height: 1.4;
		padding: 0.3rem 0.5rem;
		background: #f8f8f8;
		border-left: 3px solid #e63946;
		border-radius: 0 4px 4px 0;
	}

	.sinal-icone {
		flex-shrink: 0;
		font-size: 1rem;
		line-height: 1.4;
	}

	.sinal-texto {
		flex: 1;
	}

	.sinal-texto strong {
		color: #c0392b;
	}

	.cartao-rodape-frente {
		font-size: 0.78rem;
		font-weight: 700;
		text-align: center;
		background: #e63946;
		color: #fff;
		padding: 0.4rem 0.75rem;
		border-radius: 4px;
		margin-top: 0.25rem;
	}

	/* ===== VERSO DO CARTÃO ===== */
	.verso-cabecalho {
		border-bottom: 3px solid #0a0a0a;
		padding-bottom: 0.6rem;
		margin-bottom: 0.75rem;
	}

	.verso-titulo {
		font-size: 1.15rem;
		font-weight: 900;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #0a0a0a;
	}

	.numeros-lista {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-bottom: 0.75rem;
	}

	.numero-item {
		padding: 0.4rem 0.6rem;
		border: 2px solid #ddd;
		border-radius: 4px;
		background: #fafafa;
	}

	.numero-item.destaque {
		border-color: #2b7a0b;
		background: #f0fff0;
	}

	.numero-label {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: #555;
		margin-bottom: 0.15rem;
	}

	.numero-valor {
		font-size: 1.45rem;
		font-weight: 900;
		color: #0a0a0a;
		letter-spacing: 0.04em;
		line-height: 1.2;
	}

	.numero-pequeno {
		font-size: 0.95rem;
		font-style: italic;
		font-weight: 600;
		letter-spacing: 0;
	}

	.numero-nota {
		font-size: 0.68rem;
		color: #2b7a0b;
		font-weight: 600;
		margin-top: 0.1rem;
	}

	.numero-linha-preencher {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		margin-top: 0.2rem;
	}

	.numero-prefixo {
		font-size: 0.85rem;
		font-weight: 700;
		flex-shrink: 0;
	}

	.linha-preenchimento {
		font-size: 1rem;
		letter-spacing: 0.08em;
		color: #aaa;
		flex: 1;
		border-bottom: 2px solid #333;
		line-height: 1;
		padding-bottom: 1px;
	}

	.alerta-burla {
		background: #1a1a2e;
		color: #fff;
		border-radius: 4px;
		padding: 0.5rem 0.75rem;
		margin-bottom: 0.5rem;
	}

	.alerta-titulo {
		font-size: 0.78rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.3rem;
	}

	.alerta-passos {
		font-size: 0.74rem;
		font-weight: 600;
		line-height: 1.5;
		display: flex;
		flex-wrap: wrap;
		gap: 0.2rem 0.3rem;
		align-items: center;
	}

	.separador {
		color: #aaa;
		font-weight: 300;
	}

	.verso-rodape {
		text-align: center;
		font-size: 0.68rem;
		color: #888;
		font-style: italic;
		margin-top: 0.25rem;
	}

	/* ===== RESPONSIVO: ecrãs pequenos ===== */
	@media (max-width: 560px) {
		.cartao-wrapper {
			flex-direction: column;
		}

		.frente {
			border-right: none;
			border-bottom: 3px dashed #aaa;
		}

		.pagina-ecrã {
			padding: 1rem;
		}

		.intro-bloco {
			padding: 1.25rem;
		}

		.partilhar-bloco {
			padding: 1.25rem;
		}
	}

	/* ===== IMPRESSÃO ===== */
	@media print {
		/* Ocultar tudo excepto o cartão */
		.pagina-ecrã,
		.partilhar-bloco {
			display: none !important;
		}

		/* Reset de margens da página */
		@page {
			size: A5 landscape;
			margin: 5mm;
		}

		body {
			margin: 0 !important;
			padding: 0 !important;
			background: #fff !important;
		}

		/* O cartão ocupa toda a página */
		.cartao-container {
			padding: 0;
			margin: 0;
			display: block;
		}

		.cartao-wrapper {
			display: flex;
			flex-direction: row;
			width: 100%;
			max-width: 100%;
			height: 100%;
			border: 2px solid #000;
			border-radius: 0;
			box-shadow: none;
		}

		.cartao {
			flex: 1;
			padding: 6mm 7mm;
		}

		.frente {
			border-right: 2px dashed #999;
		}

		/* Forçar tamanhos mínimos de letra na impressão */
		.cartao-titulo {
			font-size: 14pt !important;
		}

		.sinais-lista li {
			font-size: 9.5pt !important;
		}

		.numero-valor {
			font-size: 16pt !important;
		}

		.numero-label {
			font-size: 8pt !important;
		}

		.alerta-passos {
			font-size: 8.5pt !important;
		}

		.verso-titulo {
			font-size: 13pt !important;
		}

		.cartao-rodape-frente {
			font-size: 9pt !important;
		}

		/* Garantir alto contraste na impressão */
		.sinais-lista li {
			background: #f5f5f5 !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.alerta-burla {
			background: #1a1a2e !important;
			color: #fff !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.cartao-rodape-frente {
			background: #e63946 !important;
			color: #fff !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.numero-item.destaque {
			background: #f0fff0 !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
	}
</style>
