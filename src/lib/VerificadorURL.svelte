<script>
	let url = $state('');

	// Domínios oficiais de instituições portuguesas — para detetar lookalikes
	const dominiosOficiais = [
		{ nome: 'CTT', dominio: 'ctt.pt' },
		{ nome: 'Finanças / Autoridade Tributária', dominio: 'portaldasfinancas.gov.pt' },
		{ nome: 'Segurança Social', dominio: 'seg-social.pt' },
		{ nome: 'EDP', dominio: 'edp.pt' },
		{ nome: 'Galp', dominio: 'galp.pt' },
		{ nome: 'MEO', dominio: 'meo.pt' },
		{ nome: 'NOS', dominio: 'nos.pt' },
		{ nome: 'Vodafone', dominio: 'vodafone.pt' },
		{ nome: 'Caixa Geral de Depósitos', dominio: 'cgd.pt' },
		{ nome: 'Millennium BCP', dominio: 'millenniumbcp.pt' },
		{ nome: 'Santander', dominio: 'santander.pt' },
		{ nome: 'Novobanco', dominio: 'novobanco.pt' },
		{ nome: 'BPI', dominio: 'bancobpi.pt' },
		{ nome: 'Continente', dominio: 'continente.pt' },
		{ nome: 'EMEL', dominio: 'emel.pt' },
		{ nome: 'Via Verde', dominio: 'viaverde.pt' },
		{ nome: 'MB Way', dominio: 'mbway.pt' },
		{ nome: 'IRN', dominio: 'irn.justica.gov.pt' }
	];

	// Encurtadores comuns
	const encurtadores = ['bit.ly', 'tinyurl.com', 'goo.gl', 't.co', 'is.gd', 'ow.ly', 'rebrand.ly', 'cutt.ly', 'short.io'];

	// TLDs frequentemente usados para fraude
	const tldsSuspeitos = ['.xyz', '.top', '.click', '.online', '.info', '.work', '.zip', '.review', '.country', '.gq', '.tk', '.ml', '.ga', '.cf'];

	function distanciaLevenshtein(a, b) {
		const m = a.length, n = b.length;
		if (!m) return n;
		if (!n) return m;
		const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
		for (let i = 0; i <= m; i++) dp[i][0] = i;
		for (let j = 0; j <= n; j++) dp[0][j] = j;
		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				dp[i][j] = a[i - 1] === b[j - 1]
					? dp[i - 1][j - 1]
					: 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
			}
		}
		return dp[m][n];
	}

	const analise = $derived.by(() => {
		const texto = url.trim();
		if (!texto) return null;

		let urlObj;
		try {
			const comProtocolo = texto.match(/^https?:\/\//i) ? texto : 'http://' + texto;
			urlObj = new URL(comProtocolo);
		} catch {
			return { erro: 'Não é um URL válido. Inclua o domínio (ex: exemplo.pt).' };
		}

		const sinais = [];
		const hostname = urlObj.hostname.toLowerCase();
		const protocolo = urlObj.protocol;
		const caminho = urlObj.pathname + urlObj.search;
		const dominioPrincipal = hostname.split('.').slice(-2).join('.');

		// 1. HTTPS?
		if (protocolo !== 'https:' && !texto.match(/^https?:\/\//i)) {
			// não tinha protocolo — não penalizar, só assumir
		} else if (protocolo === 'http:') {
			sinais.push({ tipo: 'erro', txt: 'Não usa HTTPS (sem cadeado) — dados enviados não são encriptados' });
		}

		// 2. Endereço IP em vez de domínio?
		if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) {
			sinais.push({ tipo: 'erro', txt: 'O endereço é um IP numérico — sites legítimos usam domínios' });
		}

		// 3. Encurtador?
		if (encurtadores.some(e => hostname === e || hostname.endsWith('.' + e))) {
			sinais.push({ tipo: 'aviso', txt: 'É um encurtador de URL — o destino real está escondido. Cuidado.' });
		}

		// 4. TLD suspeito?
		const tld = '.' + hostname.split('.').pop();
		if (tldsSuspeitos.includes(tld)) {
			sinais.push({ tipo: 'aviso', txt: `Termina em ${tld} — TLD frequentemente usado em fraudes` });
		}

		// 5. Subdomínio enganador (ex: ctt.pt.entrega.com)
		const partes = hostname.split('.');
		if (partes.length >= 4) {
			sinais.push({ tipo: 'aviso', txt: 'Muitos subdomínios — possível tentativa de mascarar o domínio real' });
		}

		// 6. Lookalike de domínios oficiais
		for (const oficial of dominiosOficiais) {
			if (hostname === oficial.dominio || hostname.endsWith('.' + oficial.dominio)) {
				sinais.push({ tipo: 'ok', txt: `Domínio oficial de ${oficial.nome}` });
				break;
			}
			// Distância pequena = possível lookalike
			const dist = distanciaLevenshtein(dominioPrincipal, oficial.dominio);
			if (dist > 0 && dist <= 2 && oficial.dominio.length > 5) {
				sinais.push({ tipo: 'erro', txt: `Parece muito com "${oficial.dominio}" (${oficial.nome}) mas NÃO é o domínio oficial — possível imitação` });
			}
			// Contém nome da instituição mas não é o domínio
			const nomeMarca = oficial.dominio.split('.')[0];
			if (nomeMarca.length >= 4 && hostname.includes(nomeMarca) && !hostname.endsWith(oficial.dominio)) {
				sinais.push({ tipo: 'erro', txt: `Contém "${nomeMarca}" no nome mas NÃO é ${oficial.dominio} — provável imitação` });
			}
		}

		// 7. Caracteres unicode/punycode
		if (hostname.includes('xn--')) {
			sinais.push({ tipo: 'erro', txt: 'Contém caracteres Unicode (punycode) — pode imitar visualmente letras latinas' });
		}

		// 8. Sinais de phishing no caminho
		const palavrasSuspeitas = ['login', 'verify', 'verificar', 'confirmar', 'pagamento', 'pagar', 'reembolso', 'urgente'];
		const caminhoMin = caminho.toLowerCase();
		if (palavrasSuspeitas.some(p => caminhoMin.includes(p))) {
			sinais.push({ tipo: 'aviso', txt: 'O caminho contém palavras típicas de phishing (login, verificar, pagamento)' });
		}

		// Veredicto
		const erros = sinais.filter(s => s.tipo === 'erro').length;
		const avisos = sinais.filter(s => s.tipo === 'aviso').length;
		const okSinais = sinais.filter(s => s.tipo === 'ok').length;

		let veredicto;
		if (erros >= 2 || (erros >= 1 && avisos >= 2)) veredicto = 'perigoso';
		else if (erros >= 1 || avisos >= 2) veredicto = 'suspeito';
		else if (okSinais > 0 && !erros) veredicto = 'seguro';
		else if (!sinais.length) veredicto = 'neutro';
		else veredicto = 'cautela';

		return { hostname, protocolo, sinais, veredicto };
	});

	function limpar() { url = ''; }

	const veredictoConfig = {
		perigoso: { cor: '#C0392B', emoji: '🚨', label: 'PERIGOSO — não introduza dados', desc: 'Vários sinais fortes de fraude.' },
		suspeito: { cor: '#E67E22', emoji: '⚠️', label: 'SUSPEITO — não recomendado', desc: 'Tem sinais que merecem cautela.' },
		cautela: { cor: '#F39C12', emoji: '⚠️', label: 'CAUTELA', desc: 'Verifique antes de prosseguir.' },
		neutro: { cor: '#7F8C8D', emoji: 'ℹ️', label: 'SEM SINAIS CLAROS', desc: 'Não foram detetados sinais óbvios — mas continue com cuidado.' },
		seguro: { cor: '#27AE60', emoji: '✓', label: 'DOMÍNIO OFICIAL CONHECIDO', desc: 'Corresponde a uma instituição portuguesa reconhecida.' }
	};
</script>

<div class="verificador">
	<label for="url-input">
		<strong>Cola o URL ou link aqui</strong>
		<span class="hint">(também aceita o destino de um QR code)</span>
	</label>
	<div class="entrada">
		<input
			id="url-input"
			type="text"
			bind:value={url}
			placeholder="https://exemplo.pt/pagina"
			autocomplete="off"
			spellcheck="false"
		/>
		{#if url}
			<button class="limpar" onclick={limpar} aria-label="Limpar">✕</button>
		{/if}
	</div>

	<p class="privacidade">🔒 Analisado localmente no teu browser. Nada é enviado para qualquer servidor.</p>

	{#if analise}
		{#if analise.erro}
			<div class="resultado erro-input" role="alert">
				<strong>⚠️ {analise.erro}</strong>
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

				<dl class="meta">
					<dt>Domínio</dt><dd>{analise.hostname}</dd>
					<dt>Protocolo</dt><dd>{analise.protocolo}</dd>
				</dl>

				{#if analise.sinais.length}
					<ul class="sinais" aria-label="Sinais detetados">
						{#each analise.sinais as s}
							<li class="sinal {s.tipo}">
								<span aria-hidden="true">{s.tipo === 'erro' ? '✕' : s.tipo === 'aviso' ? '!' : '✓'}</span>
								{s.txt}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<style>
	.verificador {
		background: #f8f9fa;
		border: 1px solid #e0e0e0;
		border-radius: 1rem;
		padding: 1.5rem;
	}
	label { display: block; margin-bottom: 0.5rem; font-size: 0.95rem; color: #1a1a2e; }
	.hint { color: #666; font-weight: 400; font-size: 0.85rem; margin-left: 0.4rem; }
	.entrada { position: relative; }
	input {
		width: 100%;
		padding: 0.85rem 2.5rem 0.85rem 1rem;
		border: 2px solid #d0d0d0;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-family: 'Courier New', monospace;
		background: white;
	}
	input:focus-visible { outline: 3px solid #0984E3; outline-offset: 1px; border-color: #0984E3; }
	.limpar {
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		font-size: 1.2rem;
		color: #666;
		cursor: pointer;
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
	.limpar:hover { background: #e0e0e0; }
	.limpar:focus-visible { outline: 2px solid #0984E3; }
	.privacidade { font-size: 0.78rem; color: #666; margin-top: 0.5rem; }

	.resultado {
		margin-top: 1.25rem;
		border: 2px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.1rem 1.25rem;
		background: white;
	}
	.erro-input { color: #C0392B; --cor: #C0392B; }
	.topo-resultado { display: flex; gap: 0.85rem; align-items: flex-start; }
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
	.desc-veredicto { font-size: 0.88rem; color: #444; margin-top: 0.2rem; }

	.meta {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.35rem 0.85rem;
		margin: 1rem 0;
		font-size: 0.85rem;
	}
	.meta dt { color: #666; font-weight: 600; }
	.meta dd { color: #1a1a2e; font-family: 'Courier New', monospace; word-break: break-all; }

	.sinais { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
	.sinal {
		display: flex;
		gap: 0.6rem;
		align-items: flex-start;
		font-size: 0.88rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.4rem;
		line-height: 1.4;
	}
	.sinal span { font-weight: 700; flex-shrink: 0; width: 18px; }
	.sinal.erro { background: #ffeaea; color: #8B0000; }
	.sinal.erro span { color: #C0392B; }
	.sinal.aviso { background: #fff5e6; color: #7a4a00; }
	.sinal.aviso span { color: #E67E22; }
	.sinal.ok { background: #e8f5e9; color: #1e6f30; }
	.sinal.ok span { color: #27AE60; }
</style>
