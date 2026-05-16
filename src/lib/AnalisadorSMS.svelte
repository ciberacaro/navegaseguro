<script>
	let texto = $state('');

	const padroesUrgencia = [
		/urgente/i, /imediato/i, /imediata/i, /agora/i, /24h/i, /24 horas/i,
		/expira/i, /último aviso/i, /antes que/i, /último prazo/i, /ação requerida/i,
		/conta será/i, /serviço será/i, /suspens(o|a|ão)/i, /bloque(io|ada|ado)/i,
		/encerrad(o|a)/i, /restringid(o|a)/i, /penaliz/i, /multa/i
	];

	const padroesMarcas = [
		{ marca: 'CTT', regex: /\bctt\b|correios/i },
		{ marca: 'Finanças / AT', regex: /finan[çc]as|autoridade tribut/i },
		{ marca: 'EDP', regex: /\bedp\b/i },
		{ marca: 'Galp', regex: /\bgalp\b/i },
		{ marca: 'MEO', regex: /\bmeo\b/i },
		{ marca: 'NOS', regex: /\bnos\b/i },
		{ marca: 'Vodafone', regex: /vodafone/i },
		{ marca: 'Banco', regex: /banco|cgd|millennium|bcp|santander|novobanco|bpi|crédito agrícola/i },
		{ marca: 'Via Verde', regex: /via verde|viaverde/i },
		{ marca: 'MB Way', regex: /mb ?way/i },
		{ marca: 'Segurança Social', regex: /segurança social|seg-social/i },
		{ marca: 'IRN / Justiça', regex: /\birn\b|cartão de cidadão|justi[çc]a/i }
	];

	const padroesAcao = [
		/clique|click/i, /aceda|acesse/i, /confirme|confirmar/i, /valide|validar/i,
		/atualize|atualizar/i, /verifique|verificar/i, /regularize|regularizar/i,
		/pague|pagar|paguemos/i, /transfira|transferir/i, /complete|completar/i
	];

	const padroesDados = [
		/dados banc/i, /\bnif\b/i, /\biban\b/i, /cartão de cr[ée]dito/i,
		/\bpin\b/i, /palavra-passe|password|senha/i, /\bcvv\b/i, /\bmb way\b/i,
		/c[óo]digo de seguran[çc]a/i, /credenciais/i
	];

	const padroesPagamento = [
		/[€$] ?\d/, /\d[,.] ?\d{1,2} ?€/, /pagamento de \d/i,
		/taxa de \d/i, /multa de \d/i, /valor pendente/i
	];

	const padroesEncurtador = /(bit\.ly|tinyurl\.com|goo\.gl|t\.co|is\.gd|ow\.ly|cutt\.ly|short\.io)/i;
	const padraoURL = /(https?:\/\/[^\s]+|\b[a-z0-9-]+\.(com|net|info|xyz|online|top|click|pt|gov|org|app)[\/a-z0-9?=&._-]*)/gi;

	const padraoFamiliar = /(mãe|m[ãa]e|pai|filho|filha|neto|neta|av[óo]|av[óo]s|tia|tio|namorad[oa]|amig[oa])/i;
	const padraoNovoNumero = /(mudei de número|novo número|este é o meu novo|trocou de número)/i;

	const analise = $derived.by(() => {
		const t = texto.trim();
		if (!t) return null;
		if (t.length < 15) return { aviso: 'Texto demasiado curto para análise.' };

		const sinais = [];
		let pontuacao = 0;

		// 1. Urgência
		const urgencias = padroesUrgencia.filter(r => r.test(t));
		if (urgencias.length >= 2) {
			sinais.push({ tipo: 'erro', txt: 'Linguagem de urgência forte (várias palavras: "urgente", "imediato", "expira", etc.) — táctica clássica de phishing.' });
			pontuacao += 3;
		} else if (urgencias.length === 1) {
			sinais.push({ tipo: 'aviso', txt: 'Contém pelo menos uma palavra de urgência — táctica comum.' });
			pontuacao += 1;
		}

		// 2. Imita marca conhecida
		const marcas = padroesMarcas.filter(m => m.regex.test(t)).map(m => m.marca);
		if (marcas.length) {
			sinais.push({ tipo: 'aviso', txt: `Identifica-se como: ${marcas.join(', ')}. Estas instituições não comunicam pedidos sensíveis por SMS.` });
			pontuacao += 1;
		}

		// 3. Pede ação imediata
		if (padroesAcao.some(r => r.test(t))) {
			sinais.push({ tipo: 'aviso', txt: 'Pede uma ação imediata (clicar, confirmar, validar, pagar).' });
			pontuacao += 1;
		}

		// 4. Pede dados sensíveis
		const dados = padroesDados.filter(r => r.test(t));
		if (dados.length) {
			sinais.push({ tipo: 'erro', txt: 'Menciona dados sensíveis (NIF, IBAN, PIN, password, cartão). Nenhuma instituição pede estes dados por SMS.' });
			pontuacao += 3;
		}

		// 5. Tem URL?
		const urls = t.match(padraoURL) || [];
		if (urls.length) {
			sinais.push({ tipo: 'aviso', txt: `Contém link: ${urls[0]}${urls.length > 1 ? ` (+${urls.length - 1})` : ''}. Verifique no Verificador de URL acima antes de clicar.` });
			pontuacao += 1;
			// Encurtador?
			if (padroesEncurtador.test(t)) {
				sinais.push({ tipo: 'erro', txt: 'Usa um encurtador de URL — o destino real está escondido.' });
				pontuacao += 2;
			}
		}

		// 6. Valor monetário pequeno
		if (padroesPagamento.some(r => r.test(t))) {
			sinais.push({ tipo: 'aviso', txt: 'Menciona um valor monetário — frequente em SMS fraudulentos (taxa pequena para baixar a guarda).' });
			pontuacao += 1;
		}

		// 7. Falso filho/familiar com novo número
		if (padraoFamiliar.test(t) && padraoNovoNumero.test(t)) {
			sinais.push({ tipo: 'erro', txt: 'Diz ser familiar com "novo número" — esquema clássico do "falso filho/filha" em Portugal. Ligue ao número antigo antes de fazer fosse o que for.' });
			pontuacao += 4;
		}

		// 8. Sem assinatura ou remetente claro
		if (t.length > 100 && !/(at[ée] já|com os melhores|cumpriment|att\.|assina)/i.test(t)) {
			sinais.push({ tipo: 'aviso', txt: 'Não tem assinatura ou despedida formal — invulgar em comunicações reais de instituições.' });
		}

		// Veredicto baseado em pontuação
		let veredicto;
		if (pontuacao >= 6) veredicto = 'fraude';
		else if (pontuacao >= 3) veredicto = 'suspeito';
		else if (pontuacao >= 1) veredicto = 'cautela';
		else veredicto = 'sem-sinais';

		return { sinais, veredicto, pontuacao };
	});

	function limpar() { texto = ''; }

	const veredictoConfig = {
		fraude: { cor: '#C0392B', emoji: '🚨', label: 'MUITO PROVAVELMENTE FRAUDE', desc: 'Múltiplos sinais fortes — não responda, não clique, apague.' },
		suspeito: { cor: '#E67E22', emoji: '⚠️', label: 'SUSPEITO', desc: 'Sinais consistentes com phishing. Recomenda-se ignorar.' },
		cautela: { cor: '#F39C12', emoji: '⚠️', label: 'CAUTELA', desc: 'Alguns sinais — verifique pelo canal oficial antes de agir.' },
		'sem-sinais': { cor: '#7F8C8D', emoji: 'ℹ️', label: 'POUCOS SINAIS DETETADOS', desc: 'Não é diagnóstico — continue atento. Em caso de dúvida, valide pelo canal oficial.' }
	};
</script>

<div class="analisador">
	<label for="sms-input">
		<strong>Cola aqui o texto do SMS, email ou mensagem suspeita</strong>
		<span class="hint">(sem dados pessoais teus)</span>
	</label>
	<textarea
		id="sms-input"
		bind:value={texto}
		rows="5"
		placeholder='Exemplo: "CTT informa: pacote retido. Pague 1,99€ em ctt-entrega.com/pagar antes de 24h."'
		spellcheck="false"
	></textarea>

	<div class="acoes">
		{#if texto}
			<button onclick={limpar} class="btn-limpar">Limpar</button>
		{/if}
		<p class="privacidade">🔒 Analisado localmente. Nada é enviado para qualquer servidor.</p>
	</div>

	{#if analise}
		{#if analise.aviso}
			<div class="resultado erro-input" role="status">
				<strong>ℹ️ {analise.aviso}</strong>
			</div>
		{:else}
			{@const vc = veredictoConfig[analise.veredicto]}
			<div class="resultado" style="--cor: {vc.cor}" role="region" aria-label="Resultado da análise">
				<div class="topo-resultado">
					<span class="badge-veredicto" aria-hidden="true">{vc.emoji}</span>
					<div>
						<strong class="label-veredicto">{vc.label}</strong>
						<p class="desc-veredicto">{vc.desc}</p>
					</div>
				</div>

				{#if analise.sinais.length}
					<ul class="sinais" aria-label="Sinais detetados">
						{#each analise.sinais as s}
							<li class="sinal {s.tipo}">
								<span aria-hidden="true">{s.tipo === 'erro' ? '✕' : s.tipo === 'aviso' ? '!' : '✓'}</span>
								{s.txt}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="vazio">Não foram detetados sinais óbvios. Mas continue atento — fraudes evoluem.</p>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<style>
	.analisador {
		background: #f8f9fa;
		border: 1px solid #e0e0e0;
		border-radius: 1rem;
		padding: 1.5rem;
	}
	label { display: block; margin-bottom: 0.5rem; font-size: 0.95rem; color: #1a1a2e; }
	.hint { color: #666; font-weight: 400; font-size: 0.85rem; margin-left: 0.4rem; }
	textarea {
		width: 100%;
		padding: 0.85rem 1rem;
		border: 2px solid #d0d0d0;
		border-radius: 0.5rem;
		font-size: 0.95rem;
		font-family: inherit;
		background: white;
		resize: vertical;
		min-height: 100px;
	}
	textarea:focus-visible { outline: 3px solid #0984E3; outline-offset: 1px; border-color: #0984E3; }
	.acoes { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap; }
	.btn-limpar {
		background: white;
		border: 1px solid #d0d0d0;
		padding: 0.4rem 0.85rem;
		border-radius: 999px;
		font-size: 0.82rem;
		cursor: pointer;
		color: #555;
	}
	.btn-limpar:hover { background: #f0f0f0; }
	.btn-limpar:focus-visible { outline: 2px solid #0984E3; }
	.privacidade { font-size: 0.78rem; color: #666; margin: 0; }

	.resultado {
		margin-top: 1.25rem;
		border: 2px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.1rem 1.25rem;
		background: white;
	}
	.erro-input { color: #555; --cor: #7F8C8D; }
	.topo-resultado { display: flex; gap: 0.85rem; align-items: flex-start; margin-bottom: 1rem; }
	.badge-veredicto {
		font-size: 1.6rem;
		background: var(--cor);
		color: white;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.label-veredicto { display: block; color: var(--cor); font-size: 1rem; }
	.desc-veredicto { font-size: 0.88rem; color: #444; margin-top: 0.2rem; line-height: 1.4; }

	.sinais { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
	.sinal {
		display: flex;
		gap: 0.6rem;
		align-items: flex-start;
		font-size: 0.88rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.4rem;
		line-height: 1.45;
	}
	.sinal span { font-weight: 700; flex-shrink: 0; width: 18px; }
	.sinal.erro { background: #ffeaea; color: #8B0000; }
	.sinal.erro span { color: #C0392B; }
	.sinal.aviso { background: #fff5e6; color: #7a4a00; }
	.sinal.aviso span { color: #E67E22; }
	.vazio { font-size: 0.88rem; color: #555; text-align: center; padding: 0.5rem; }
</style>
