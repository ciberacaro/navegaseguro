<script>
	const exemplos = [
		{
			id: 'sms-ctt',
			etiqueta: 'SMS CTT',
			tipo: 'sms',
			remetente: 'CTT',
			conteudo: [
				{ texto: 'O seu pacote ', hotspot: false },
				{ texto: 'CTT', hotspot: true, id: 'h1', explicacao: 'Falsificação de identidade: qualquer pessoa pode usar o nome "CTT" num SMS. Verifique sempre pelo site oficial ctt.pt.' },
				{ texto: ' está retido. Pague ', hotspot: false },
				{ texto: '1.95€', hotspot: true, id: 'h2', explicacao: 'Valor baixo para parecer inofensivo — fraudes de entrega cobram pequenas taxas para baixar a guarda da vítima.' },
				{ texto: ' em: ', hotspot: false },
				{ texto: 'ctt-pagamento.xyz/pkg91827', hotspot: true, id: 'h3', explicacao: 'Domínio suspeito: o CTT usa sempre ctt.pt, nunca ctt-pagamento.xyz. O sufixo .xyz é barato e frequentemente usado em fraudes.' },
			],
			hotspots: ['h1', 'h2', 'h3'],
		},
		{
			id: 'sms-mbway',
			etiqueta: 'SMS MB WAY',
			tipo: 'sms',
			remetente: 'MB WAY',
			conteudo: [
				{ texto: 'MBWAY', hotspot: true, id: 'h1', explicacao: 'O MB WAY real nunca envia SMS a pedir confirmação de pagamentos recebidos — os pagamentos são automáticos.' },
				{ texto: ': Recebeu ', hotspot: false },
				{ texto: '250€', hotspot: true, id: 'h2', explicacao: 'Urgência financeira: quantias redondas atrativas são usadas para criar entusiasmo e reduzir o pensamento crítico.' },
				{ texto: '. Para aceitar confirme o seu ', hotspot: false },
				{ texto: 'PIN', hotspot: true, id: 'h3', explicacao: 'Nunca partilhe o seu PIN. Nenhuma entidade legítima pede o PIN por SMS, email ou chamada.' },
				{ texto: ' em: ', hotspot: false },
				{ texto: 'mbway-confirmacao.net', hotspot: true, id: 'h4', explicacao: 'Domínio falso: o MB WAY pertence à SIBS e opera apenas em mbway.pt. Qualquer outro domínio é fraude.' },
			],
			hotspots: ['h1', 'h2', 'h3', 'h4'],
		},
		{
			id: 'email-banco',
			etiqueta: 'Email Banco',
			tipo: 'email',
			de: 'seguranca@bpi-alertas.info',
			assunto: 'Ação necessária: conta suspensa',
			conteudo: [
				{ texto: 'Caro cliente,\n\n', hotspot: false },
				{ texto: 'A sua conta foi suspensa', hotspot: true, id: 'h1', explicacao: 'Criação de pânico: bancos reais nunca suspendem contas sem aviso prévio por correio registado. Esta frase visa assustar para agir sem pensar.' },
				{ texto: ' devido a atividade suspeita. Para evitar o encerramento permanente, deve ', hotspot: false },
				{ texto: 'verificar a sua identidade imediatamente', hotspot: true, id: 'h2', explicacao: 'Urgência falsa: a palavra "imediatamente" pressiona a vítima a agir sem verificar a autenticidade da mensagem.' },
				{ texto: '.\n\nClique aqui para reativar: ', hotspot: false },
				{ texto: 'bpi-seguranca.info/reativar', hotspot: true, id: 'h3', explicacao: 'Domínio fraudulento: o BPI opera em bpi.pt. O domínio bpi-seguranca.info não pertence ao banco — é uma página de phishing.' },
				{ texto: '\n\nEsta ligação expira em ', hotspot: false },
				{ texto: '24 horas', hotspot: true, id: 'h4', explicacao: 'Prazo artificial: os bancos não desativam contas em 24 horas por email. Este prazo serve para impedir que verifique a informação com calma.' },
				{ texto: '.\n\nCumprimentos,\nEquipa de Segurança BPI', hotspot: false },
			],
			hotspots: ['h1', 'h2', 'h3', 'h4'],
		},
		{
			id: 'chamada-falsa',
			etiqueta: 'Chamada Falsa',
			tipo: 'chamada',
			conteudo: [
				{ texto: '"Bom dia, falo da ', hotspot: false },
				{ texto: 'Microsoft', hotspot: true, id: 'h1', explicacao: 'Falsificação de identidade: a Microsoft nunca liga de forma não solicitada. Qualquer chamada não pedida em nome da Microsoft é fraude.' },
				{ texto: '. O nosso sistema detetou ', hotspot: false },
				{ texto: 'um vírus crítico no seu computador', hotspot: true, id: 'h2', explicacao: 'Diagnóstico falso: é impossível a Microsoft saber que tem um vírus sem ter acesso ao seu computador. Esta afirmação é inventada para criar medo.' },
				{ texto: '. Se não agir agora, ', hotspot: false },
				{ texto: 'perderá todos os seus dados', hotspot: true, id: 'h3', explicacao: 'Ameaça exagerada: esta frase visa provocar pânico imediato para que não questione a legitimidade da chamada.' },
				{ texto: '. Precisamos que instale o programa ', hotspot: false },
				{ texto: 'AnyDesk', hotspot: true, id: 'h4', explicacao: 'Acesso remoto fraudulento: pedir para instalar software de acesso remoto é o objetivo principal. Assim o burlão controla o computador e pode roubar dados bancários.' },
				{ texto: ' para resolver o problema remotamente. ', hotspot: false },
				{ texto: 'Iremos também precisar dos seus dados bancários', hotspot: true, id: 'h5', explicacao: 'Pedido de dados sensíveis: nenhum serviço técnico legítimo precisa dos seus dados bancários para resolver problemas de software. Este é o golpe final.' },
				{ texto: ' para verificar a sua identidade."', hotspot: false },
			],
			hotspots: ['h1', 'h2', 'h3', 'h4', 'h5'],
		},
	];

	let exemploAtivo = $state(0);
	let hotspotsMostrados = $state({});
	let hotspotsConcluidos = $state({});

	function clicarHotspot(exemploId, hotspotId) {
		const chave = `${exemploId}-${hotspotId}`;
		if (hotspotsMostrados[chave]) {
			hotspotsMostrados = { ...hotspotsMostrados, [chave]: false };
		} else {
			hotspotsMostrados = { ...hotspotsMostrados, [chave]: true };
			hotspotsConcluidos = { ...hotspotsConcluidos, [chave]: true };
		}
	}

	function teclaHotspot(e, exemploId, hotspotId) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			clicarHotspot(exemploId, hotspotId);
		}
	}

	function fecharTooltips(e) {
		if (e.key === 'Escape') {
			hotspotsMostrados = {};
		}
	}

	function totalConcluidos(exemplo) {
		return exemplo.hotspots.filter(h => hotspotsConcluidos[`${exemplo.id}-${h}`]).length;
	}

	let exemploAtual = $derived(exemplos[exemploAtivo]);
	let concluidos = $derived(totalConcluidos(exemploAtual));
	let todosEncontrados = $derived(concluidos === exemploAtual.hotspots.length);
</script>

<svelte:window onkeydown={fecharTooltips} />

<div class="simulador">
	<h3>🎯 Simulador de Fraude</h3>
	<p class="intro">Clique nas partes destacadas para descobrir por que são suspeitas. Use <kbd>Tab</kbd> para navegar e <kbd>Esc</kbd> para fechar.</p>

	<div class="tabs" role="tablist" aria-label="Exemplos de fraude">
		{#each exemplos as ex, i}
			<button
				role="tab"
				aria-selected={exemploAtivo === i}
				class:ativo={exemploAtivo === i}
				onclick={() => { exemploAtivo = i; }}
			>
				{ex.etiqueta}
			</button>
		{/each}
	</div>

	<div class="conteudo-exemplo">
		{#if exemploAtual.tipo === 'sms'}
			<div class="sms-wrap">
				<div class="sms-header">
					<div class="sms-avatar">{exemploAtual.remetente.charAt(0)}</div>
					<div class="sms-info">
						<strong>{exemploAtual.remetente}</strong>
						<span>Mensagem de texto</span>
					</div>
				</div>
				<div class="sms-balao">
					{#each exemploAtual.conteudo as parte}
						{#if parte.hotspot}
							{@const chave = `${exemploAtual.id}-${parte.id}`}
							<span
								class="hotspot"
								class:visto={hotspotsConcluidos[chave]}
								class:aberto={hotspotsMostrados[chave]}
								onclick={() => clicarHotspot(exemploAtual.id, parte.id)}
								role="button"
								tabindex="0"
								onkeydown={(e) => teclaHotspot(e, exemploAtual.id, parte.id)}
								aria-expanded={hotspotsMostrados[chave] ? 'true' : 'false'}
								title="Clique para saber mais"
							>{parte.texto}</span>
							{#if hotspotsMostrados[chave]}
								<span class="tooltip" role="tooltip">{parte.explicacao}</span>
							{/if}
						{:else}
							{parte.texto}
						{/if}
					{/each}
				</div>
			</div>

		{:else if exemploAtual.tipo === 'email'}
			<div class="email-wrap">
				<div class="email-cabecalho">
					<div class="email-linha"><span class="email-label">De:</span> <span class="email-de">{exemploAtual.de}</span></div>
					<div class="email-linha"><span class="email-label">Assunto:</span> <strong>{exemploAtual.assunto}</strong></div>
				</div>
				<div class="email-corpo">
					{#each exemploAtual.conteudo as parte}
						{#if parte.hotspot}
							{@const chave = `${exemploAtual.id}-${parte.id}`}
							<span
								class="hotspot"
								class:visto={hotspotsConcluidos[chave]}
								class:aberto={hotspotsMostrados[chave]}
								onclick={() => clicarHotspot(exemploAtual.id, parte.id)}
								role="button"
								tabindex="0"
								onkeydown={(e) => teclaHotspot(e, exemploAtual.id, parte.id)}
								aria-expanded={hotspotsMostrados[chave] ? 'true' : 'false'}
								title="Clique para saber mais"
							>{parte.texto}</span>
							{#if hotspotsMostrados[chave]}
								<span class="tooltip" role="tooltip">{parte.explicacao}</span>
							{/if}
						{:else}
							{parte.texto}
						{/if}
					{/each}
				</div>
			</div>

		{:else if exemploAtual.tipo === 'chamada'}
			<div class="chamada-wrap">
				<div class="chamada-header">
					<span class="chamada-icone">📞</span>
					<div>
						<strong>Chamada recebida</strong>
						<span>Número desconhecido (+00 800 000 000)</span>
					</div>
				</div>
				<div class="chamada-script">
					<p class="script-label">Transcrição da chamada:</p>
					<blockquote>
						{#each exemploAtual.conteudo as parte}
							{#if parte.hotspot}
								{@const chave = `${exemploAtual.id}-${parte.id}`}
								<span
									class="hotspot"
									class:visto={hotspotsConcluidos[chave]}
									class:aberto={hotspotsMostrados[chave]}
									onclick={() => clicarHotspot(exemploAtual.id, parte.id)}
									role="button"
									tabindex="0"
									onkeydown={(e) => teclaHotspot(e, exemploAtual.id, parte.id)}
								aria-expanded={hotspotsMostrados[chave] ? 'true' : 'false'}
									title="Clique para saber mais"
								>{parte.texto}</span>
								{#if hotspotsMostrados[chave]}
									<span class="tooltip" role="tooltip">{parte.explicacao}</span>
								{/if}
							{:else}
								{parte.texto}
							{/if}
						{/each}
					</blockquote>
				</div>
			</div>
		{/if}

		<div class="progresso-hotspots" role="status" aria-live="polite" aria-atomic="true">
			<div class="pontos" aria-hidden="true">
				{#each exemploAtual.hotspots as h}
					{@const encontrado = hotspotsConcluidos[`${exemploAtual.id}-${h}`]}
					<span class="ponto" class:encontrado>{encontrado ? '✓' : '?'}</span>
				{/each}
			</div>
			<span class="progresso-texto">{concluidos} de {exemploAtual.hotspots.length} sinais encontrados</span>
		</div>

		{#if todosEncontrados}
			<div class="sucesso" role="alert">
				🎉 Encontraste todos os sinais! Muito bem — estás mais preparado para reconhecer fraudes.
			</div>
		{/if}
	</div>

	<p class="legenda">
		<span class="hotspot-demo">texto assim</span> — clique nas partes sublinhadas para revelar a explicação
	</p>
</div>

<style>
	.simulador {
		background: #fff;
		border: 2px solid #e0e7ff;
		border-radius: 1rem;
		padding: 1.75rem;
		max-width: 680px;
	}

	.simulador h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.15rem;
		margin-bottom: 0.4rem;
		color: #1a1a2e;
	}

	.intro {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1.25rem;
	}

	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.25rem;
	}

	.tabs button {
		background: #f0f4ff;
		border: 2px solid #e0e7ff;
		border-radius: 0.5rem;
		padding: 0.45rem 0.9rem;
		font-size: 0.85rem;
		font-family: inherit;
		font-weight: 600;
		cursor: pointer;
		color: #555;
		transition: all 0.15s;
	}

	.tabs button.ativo,
	.tabs button:hover {
		background: #0984E3;
		border-color: #0984E3;
		color: #fff;
	}
	.tabs button:focus-visible {
		outline: 3px solid #0984E3;
		outline-offset: 2px;
	}

	kbd {
		display: inline-block;
		background: #f0f4ff;
		border: 1px solid #c0d0e0;
		border-radius: 0.25rem;
		padding: 0.05rem 0.4rem;
		font-family: 'Inter', monospace;
		font-size: 0.78rem;
		color: #1a1a2e;
	}

	/* SMS */
	.sms-wrap {
		background: #f5f5f5;
		border-radius: 1rem;
		padding: 1rem;
		font-size: 0.92rem;
	}

	.sms-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #ddd;
	}

	.sms-avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: #aaa;
		color: #fff;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		flex-shrink: 0;
	}

	.sms-info {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.sms-info strong {
		font-size: 0.9rem;
	}

	.sms-info span {
		font-size: 0.75rem;
		color: #555;
	}

	.sms-balao {
		background: #dcf8c6;
		border-radius: 0.75rem 0.75rem 0 0.75rem;
		padding: 0.75rem 1rem;
		display: inline-block;
		max-width: 90%;
		line-height: 1.6;
		word-break: break-word;
		position: relative;
	}

	/* Email */
	.email-wrap {
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
		overflow: hidden;
		font-size: 0.9rem;
	}

	.email-cabecalho {
		background: #f9f9f9;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #ddd;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.email-linha {
		font-size: 0.85rem;
		color: #444;
	}

	.email-label {
		color: #555;
		margin-right: 0.25rem;
	}

	.email-de {
		color: #c0392b;
		font-family: monospace;
		font-size: 0.82rem;
	}

	.email-corpo {
		padding: 1rem;
		white-space: pre-wrap;
		line-height: 1.65;
		color: #333;
	}

	/* Chamada */
	.chamada-wrap {
		background: #1a1a2e;
		border-radius: 1rem;
		overflow: hidden;
		color: #eee;
	}

	.chamada-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
		background: #16213e;
	}

	.chamada-header div {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.chamada-header strong {
		font-size: 0.9rem;
	}

	.chamada-header span {
		font-size: 0.75rem;
		color: #aaa;
	}

	.chamada-icone {
		font-size: 1.5rem;
	}

	.chamada-script {
		padding: 1rem 1.25rem;
	}

	.script-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #555;
		margin-bottom: 0.6rem;
	}

	blockquote {
		margin: 0;
		border-left: 3px solid #555;
		padding-left: 1rem;
		font-style: italic;
		line-height: 1.7;
		color: #ddd;
		font-size: 0.9rem;
	}

	/* Hotspots */
	.hotspot {
		background: #fff3cd;
		color: #7d4e00;
		border-bottom: 2px dashed #f39c12;
		border-radius: 2px;
		cursor: pointer;
		padding: 0 2px;
		transition: background 0.15s;
		position: relative;
	}

	.hotspot:hover {
		background: #fde08d;
	}

	.hotspot:focus-visible {
		outline: 3px solid #0984E3;
		outline-offset: 2px;
		background: #fde08d;
	}

	.hotspot.visto {
		background: #d4edda;
		color: #1e5631;
		border-bottom-color: #27ae60;
	}

	.hotspot.aberto {
		background: #fde08d;
	}

	.tooltip {
		display: inline-block;
		background: #1a1a2e;
		color: #fff;
		font-size: 0.8rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		margin: 0.4rem 0 0.25rem;
		line-height: 1.45;
		max-width: 340px;
		vertical-align: top;
		font-style: normal;
		box-shadow: 0 2px 8px rgba(0,0,0,0.18);
	}

	/* Progresso */
	.progresso-hotspots {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.pontos {
		display: flex;
		gap: 0.35rem;
	}

	.ponto {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: #eee;
		color: #aaa;
		font-size: 0.75rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s, color 0.2s;
	}

	.ponto.encontrado {
		background: #27ae60;
		color: #fff;
	}

	.progresso-texto {
		font-size: 0.8rem;
		color: #555;
	}

	.sucesso {
		margin-top: 0.75rem;
		background: #d4edda;
		border: 1.5px solid #27ae60;
		color: #1e5631;
		border-radius: 0.6rem;
		padding: 0.75rem 1rem;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.legenda {
		margin-top: 1rem;
		font-size: 0.78rem;
		color: #555;
	}

	.hotspot-demo {
		background: #fff3cd;
		color: #7d4e00;
		border-bottom: 2px dashed #f39c12;
		border-radius: 2px;
		padding: 0 2px;
	}
</style>
