<script>
	const mensagens = [
		{
			canal: 'SMS',
			remetente: 'CTT',
			texto: 'CTT: O seu pacote está retido por falta de pagamento de 1,49€. Regularize em https://ctt-pt.info/pagar antes de 24h ou será devolvido.',
			fraude: true,
			explicacao: 'Domínio "ctt-pt.info" não é o oficial (ctt.pt). CTT nunca pedem pagamentos por SMS com link. Pressão de 24h é táctica clássica.'
		},
		{
			canal: 'Email',
			remetente: 'noreply@bportugal.pt',
			texto: 'O Banco de Portugal informa: a sua candidatura ao concurso público para auditor está aberta. Consulte detalhes em www.bportugal.pt/recrutamento.',
			fraude: false,
			explicacao: 'Email de domínio oficial (bportugal.pt) sobre matéria pública (concursos), sem pedir dados sensíveis nem urgência. Sinais de legitimidade.'
		},
		{
			canal: 'WhatsApp',
			remetente: '+351 91X XXX XXX (desconhecido)',
			texto: 'Mãe, parti o telemóvel e estou a usar o número de um amigo. Este é o meu novo número. Preciso 600€ urgente para pagar uma fatura. Manda por MB Way para 91XXXXXXXX.',
			fraude: true,
			explicacao: 'Esquema clássico do "falso filho" em Portugal. Reconheça os 3 sinais: novo número + pedido de dinheiro + urgência + não atende chamada. Ligue sempre ao número antigo primeiro.'
		},
		{
			canal: 'SMS',
			remetente: 'MEO',
			texto: 'MEO: a sua fatura de Abril está disponível na área de cliente. Aceda em meo.pt/cliente. Para qualquer questão, contacte 16200.',
			fraude: false,
			explicacao: 'Domínio oficial (meo.pt), sem link curto suspeito, sem urgência, sem pedido de dados. É a forma habitual como a MEO comunica.'
		},
		{
			canal: 'Email',
			remetente: 'reembolso@portal-financas.info',
			texto: 'AT — Tem um reembolso de 437,82€ pendente. Confirme os seus dados bancários em portal-financas.info/reembolsos para receber em 3 dias úteis.',
			fraude: true,
			explicacao: 'Domínio falso (portal-financas.info ≠ portaldasfinancas.gov.pt). As Finanças NUNCA enviam reembolsos por email com link. NIF/IBAN nunca se confirmam por email.'
		},
		{
			canal: 'SMS',
			remetente: 'MB Way',
			texto: 'MB Way: a sua conta vai ser desativada por inatividade. Revalide em mbway-pt.com/reativar antes de 48h para manter o serviço.',
			fraude: true,
			explicacao: 'MB Way não desativa contas por inatividade nem comunica por SMS com link externo. Domínio (mbway-pt.com) não é oficial (mbway.pt).'
		},
		{
			canal: 'Email',
			remetente: 'newsletter@cncs.gov.pt',
			texto: 'Boletim semanal do CNCS: alertas de cibersegurança da semana, atualizações de software críticas e dicas de prevenção. Para cancelar a subscrição: link no rodapé.',
			fraude: false,
			explicacao: 'Domínio oficial (.gov.pt), conteúdo informativo, opção de cancelamento de subscrição (RGPD). Boletim legítimo.'
		},
		{
			canal: 'WhatsApp',
			remetente: 'Patrícia (Tinder)',
			texto: 'Amor, estou retida no aeroporto da Síria. A alfândega exige 3.500€ para libertar a bagagem. Podes adiantar e devolvo quando chegar?',
			fraude: true,
			explicacao: 'Burla romântica clássica: contacto online longo + nunca videochamada real + emergência longe + pedido de dinheiro. Pesquisa de imagem inversa às fotos revela quase sempre o engano.'
		},
		{
			canal: 'SMS',
			remetente: 'EDP',
			texto: 'EDP — a sua fatura de electricidade já está disponível na área de cliente. Total: 78,45€. Débito directo a 15/06. Dúvidas: 800 50 50 50.',
			fraude: false,
			explicacao: 'Comunicação padrão da EDP: sem link, sem pressão, valor concreto, número oficial. É a forma normal como a EDP avisa de faturas.'
		},
		{
			canal: 'Telefone',
			remetente: 'Banco (alegado)',
			texto: '"Senhor, é do departamento anti-fraude do seu banco. Detetámos uma transferência suspeita de 2.300€. Para a bloquear, preciso que confirme o seu código MB e os 3 dígitos do verso do cartão."',
			fraude: true,
			explicacao: 'Bancos NUNCA pedem PIN, código de cartão, CVV ou passwords por telefone. Mesmo que apareça "Banco X" no identificador de chamada (spoofing) — desligue e ligue ao número impresso no cartão.'
		},
		{
			canal: 'Email',
			remetente: 'departamento.rh@minhaempresa.pt',
			texto: 'Bom dia, segue em anexo o recibo de vencimento de Abril. Para confirmação, abra o ficheiro PDF e siga as instruções. Cumprimentos, Departamento de Recursos Humanos.',
			fraude: false,
			explicacao: 'Email interno de RH é uma das comunicações mais comuns em empresas. Confirme contudo o anexo é PDF (não .pdf.exe) e que o remetente exato é o de sempre. Aqui não há sinais de fraude.'
		},
		{
			canal: 'SMS',
			remetente: 'Govt',
			texto: 'Governo informa: tem direito a subsídio de energia de 240€. Confirme dados em https://gov-portugal.online/subsidio antes de 31/05.',
			fraude: true,
			explicacao: 'Governo português usa domínios .gov.pt. "gov-portugal.online" é falso. Subsídios não se atribuem por SMS — exigem candidatura formal via Segurança Social ou Portal das Finanças.'
		}
	];

	let etapa = $state(0);
	let respostas = $state([]);
	let revelado = $state(false);

	function responder(escolhaFraude) {
		if (revelado) return;
		const correto = escolhaFraude === mensagens[etapa].fraude;
		respostas[etapa] = { escolha: escolhaFraude, correto };
		revelado = true;
	}

	function proxima() {
		revelado = false;
		etapa = Math.min(etapa + 1, mensagens.length);
	}

	function reiniciar() {
		etapa = 0;
		respostas = [];
		revelado = false;
	}

	const acertos = $derived(respostas.filter(r => r?.correto).length);
	const percentagem = $derived(Math.round((acertos / mensagens.length) * 100));

	function teclas(e) {
		if (etapa >= mensagens.length) return;
		if (e.key === 'f' || e.key === 'F') responder(true);
		else if (e.key === 'r' || e.key === 'R') responder(false);
		else if (e.key === 'Enter' && revelado) proxima();
	}

	const nivel = $derived.by(() => {
		if (percentagem >= 90) return { cor: '#27AE60', txt: 'Excelente — está muito bem preparado', icone: '🛡️' };
		if (percentagem >= 70) return { cor: '#16A085', txt: 'Bom — domina os principais sinais', icone: '✓' };
		if (percentagem >= 50) return { cor: '#F39C12', txt: 'Suficiente — vale a pena rever os erros', icone: '!' };
		return { cor: '#C0392B', txt: 'A melhorar — leia as explicações com calma', icone: '⚠️' };
	});
</script>

<svelte:head>
	<title>Quiz: Real ou Fraude? — NavegaSeguro</title>
	<meta name="description" content="Treine a identificar mensagens fraudulentas. 12 mensagens reais e falsas para classificar." />
</svelte:head>

<svelte:window onkeydown={teclas} />

<div class="topo">
	<div class="container">
		<a href="/ferramentas" class="voltar">← Ferramentas</a>
		<h1>🎯 Real ou Fraude?</h1>
		<p>12 mensagens — diz para cada uma se é <strong>real</strong> ou <strong>fraude</strong>. No final, vê os teus erros e o que os denuncia.</p>
	</div>
</div>

<main class="container">
	{#if etapa < mensagens.length}
		{@const m = mensagens[etapa]}
		<div class="progresso" role="status" aria-live="polite">
			<span>Mensagem {etapa + 1} de {mensagens.length}</span>
			<span class="placar">{acertos} certas</span>
		</div>

		<article class="mensagem" aria-labelledby="msg-label">
			<header>
				<span class="canal">{m.canal}</span>
				<span class="remetente">de <strong>{m.remetente}</strong></span>
			</header>
			<p id="msg-label" class="texto">{m.texto}</p>
		</article>

		{#if !revelado}
			<div class="acoes" role="group" aria-label="A tua escolha">
				<button class="btn-fraude" onclick={() => responder(true)} aria-label="É fraude (tecla F)">
					<span>🚨</span> É FRAUDE
					<kbd>F</kbd>
				</button>
				<button class="btn-real" onclick={() => responder(false)} aria-label="É real (tecla R)">
					<span>✓</span> É REAL
					<kbd>R</kbd>
				</button>
			</div>
		{:else}
			{@const r = respostas[etapa]}
			<div class="resultado {r.correto ? 'certo' : 'errado'}" role="region" aria-label="Resultado">
				<strong>{r.correto ? '✓ Certo!' : '✕ Errado.'}</strong>
				<span class="real">Resposta: <strong>{m.fraude ? 'É FRAUDE' : 'É REAL'}</strong></span>
				<p class="explic">{m.explicacao}</p>
				<button class="btn-prox" onclick={proxima}>
					{etapa + 1 < mensagens.length ? 'Próxima mensagem →' : 'Ver resultado final →'}
					<kbd>Enter</kbd>
				</button>
			</div>
		{/if}
	{:else}
		<div class="final" role="region" aria-label="Resultado final" style="--cor: {nivel.cor}">
			<div class="medalha" aria-hidden="true">{nivel.icone}</div>
			<h2>Resultado: {acertos} / {mensagens.length}</h2>
			<p class="pct">{percentagem}%</p>
			<p class="nivel-txt">{nivel.txt}</p>

			<h3>Revisão</h3>
			<ol class="revisao">
				{#each mensagens as m, i}
					<li class={respostas[i]?.correto ? 'rev-ok' : 'rev-err'}>
						<span aria-hidden="true">{respostas[i]?.correto ? '✓' : '✕'}</span>
						<div>
							<strong>{i + 1}. {m.remetente} ({m.canal})</strong>
							<p>{m.explicacao}</p>
						</div>
					</li>
				{/each}
			</ol>

			<div class="acoes-fim">
				<button class="btn-reiniciar" onclick={reiniciar}>↻ Repetir o quiz</button>
				<a href="/ferramentas" class="btn-outra">Ver outras ferramentas →</a>
			</div>
		</div>
	{/if}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5; }

	main { padding: 2.5rem 1.5rem 4rem; }

	.progresso { display: flex; justify-content: space-between; font-size: 0.85rem; color: #666; margin-bottom: 0.85rem; }
	.placar { color: #16A085; font-weight: 700; }

	.mensagem {
		background: white;
		border: 2px solid #1a1a2e;
		border-radius: 1rem;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 4px 14px rgba(0,0,0,0.05);
	}
	.mensagem header { display: flex; gap: 0.5rem; align-items: center; font-size: 0.78rem; color: #555; margin-bottom: 0.85rem; }
	.canal { background: #1a1a2e; color: white; padding: 0.15rem 0.65rem; border-radius: 999px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
	.remetente strong { color: #1a1a2e; }
	.texto { font-size: 1rem; line-height: 1.6; color: #1a1a2e; white-space: pre-wrap; }

	.acoes { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.25rem; }
	.acoes button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem;
		font-size: 1rem;
		font-weight: 800;
		border: 2px solid;
		border-radius: 0.75rem;
		cursor: pointer;
		transition: transform 0.1s, box-shadow 0.15s;
		font-family: inherit;
	}
	.btn-fraude { background: #fff; color: #C0392B; border-color: #C0392B; }
	.btn-fraude:hover { background: #C0392B; color: white; transform: translateY(-2px); }
	.btn-real { background: #fff; color: #16A085; border-color: #16A085; }
	.btn-real:hover { background: #16A085; color: white; transform: translateY(-2px); }
	.acoes button:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }

	kbd {
		background: #f5f5f5;
		border: 1px solid #d0d0d0;
		border-bottom-width: 2px;
		border-radius: 0.3rem;
		padding: 0.1rem 0.5rem;
		font-family: 'Courier New', monospace;
		font-size: 0.78rem;
		color: #555;
	}
	.acoes button:hover kbd, .btn-prox kbd { background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.4); color: white; }

	.resultado {
		margin-top: 1.25rem;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		border: 2px solid;
	}
	.resultado.certo { background: #e8f5e9; border-color: #16A085; }
	.resultado.errado { background: #ffeaea; border-color: #C0392B; }
	.resultado > strong { font-size: 1.2rem; }
	.resultado.certo > strong { color: #16A085; }
	.resultado.errado > strong { color: #C0392B; }
	.real { display: block; font-size: 0.9rem; margin-top: 0.4rem; color: #444; }
	.explic { font-size: 0.92rem; line-height: 1.55; margin: 0.75rem 0 1.25rem; color: #333; }

	.btn-prox {
		background: #1a1a2e;
		color: white;
		border: none;
		font-weight: 700;
		padding: 0.75rem 1.25rem;
		border-radius: 0.5rem;
		cursor: pointer;
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
		font-family: inherit;
	}
	.btn-prox:hover { background: #0f3460; }
	.btn-prox:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }

	.final {
		text-align: center;
		background: white;
		border: 2px solid var(--cor);
		border-radius: 1rem;
		padding: 2rem 1.5rem;
	}
	.medalha {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: var(--cor);
		color: white;
		font-size: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 0.85rem;
	}
	.final h2 { font-family: 'Nunito', sans-serif; font-size: 1.5rem; color: #1a1a2e; }
	.pct { font-size: 3rem; font-weight: 900; color: var(--cor); margin: 0.4rem 0; }
	.nivel-txt { font-size: 1rem; color: #444; margin-bottom: 1.5rem; }

	.final h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #555;
		margin: 1.5rem 0 0.75rem;
	}
	.revisao { list-style: none; padding: 0; text-align: left; }
	.revisao li {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #f0f0f0;
		align-items: flex-start;
	}
	.revisao li > span {
		font-weight: 800;
		font-size: 1.2rem;
		flex-shrink: 0;
		width: 1.5rem;
	}
	.rev-ok > span { color: #16A085; }
	.rev-err > span { color: #C0392B; }
	.revisao strong { display: block; font-size: 0.92rem; color: #1a1a2e; margin-bottom: 0.2rem; }
	.revisao p { font-size: 0.85rem; color: #555; line-height: 1.5; }

	.acoes-fim { display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; }
	.btn-reiniciar, .btn-outra {
		padding: 0.7rem 1.25rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.9rem;
		font-family: inherit;
		cursor: pointer;
		text-decoration: none;
	}
	.btn-reiniciar { background: #1a1a2e; color: white; border: none; }
	.btn-reiniciar:hover { background: #0f3460; }
	.btn-outra { background: white; color: #1a1a2e; border: 2px solid #1a1a2e; }
	.btn-outra:hover { background: #1a1a2e; color: white; }
	.btn-reiniciar:focus-visible, .btn-outra:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }

	@media (max-width: 480px) {
		.acoes { grid-template-columns: 1fr; }
	}
</style>
