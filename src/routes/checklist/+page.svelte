<script>
	import VerificadorPassword from '$lib/VerificadorPassword.svelte';

	const perguntas = [
		{
			id: 1,
			pergunta: 'Tens verificação em dois passos (2FA) ativada no teu email principal?',
			categoria: 'Contas',
			recomendacao: 'Ativa 2FA no teu email agora. Vai a Definições → Segurança → Verificação em dois passos. Usa uma app como Authy em vez de SMS.'
		},
		{
			id: 2,
			pergunta: 'Usas palavras-passe diferentes em cada conta importante?',
			categoria: 'Palavras-passe',
			recomendacao: 'Instala o Bitwarden (gratuito). Gera palavras-passe únicas para cada conta automaticamente — nunca mais precisas de te lembrar delas.'
		},
		{
			id: 3,
			pergunta: 'Já verificaste se o teu email foi exposto em fugas de dados?',
			categoria: 'Dados pessoais',
			recomendacao: 'Vai a haveibeenpwned.com, introduz o teu email e verifica. Se foi exposto, muda a palavra-passe dos serviços afetados imediatamente.'
		},
		{
			id: 4,
			pergunta: 'Tens os teus ficheiros importantes com cópia de segurança?',
			categoria: 'Backup',
			recomendacao: 'Ativa o backup automático: Google Drive, iCloud ou OneDrive têm planos gratuitos que chegam para fotos e documentos essenciais.'
		},
		{
			id: 5,
			pergunta: 'Consegues identificar um email ou SMS de phishing?',
			categoria: 'Phishing',
			recomendacao: 'Sinais de phishing: urgência, remetente estranho, link que não termina no domínio oficial. Visita a secção de Adultos ou Secundário para exemplos reais.'
		},
		{
			id: 6,
			pergunta: 'O teu sistema operativo e aplicações estão atualizados?',
			categoria: 'Atualizações',
			recomendacao: 'Ativa as atualizações automáticas. As atualizações corrigem falhas de segurança — não as adiares. Aplica-se ao telemóvel, tablet e computador.'
		},
		{
			id: 7,
			pergunta: 'A tua rede Wi-Fi de casa tem uma palavra-passe forte e encriptação WPA2/WPA3?',
			categoria: 'Rede',
			recomendacao: 'Acede ao router (normalmente 192.168.1.1 no browser), entra com as credenciais (estão na etiqueta do router), muda a palavra-passe do Wi-Fi para algo com 12+ caracteres e confirma que a encriptação é WPA2 ou WPA3.'
		},
		{
			id: 8,
			pergunta: 'Sabes o que fazer se te roubarem ou perderes o telemóvel?',
			categoria: 'Emergência',
			recomendacao: 'Activa já: Encontrar o Meu iPhone (iOS) ou Encontrar o meu dispositivo (Android). Sabe como apagar remotamente. Guarda o IMEI do telemóvel (*#06# no teclado de chamada).'
		},
		{
			id: 9,
			pergunta: 'Evitas fazer compras ou homebanking em redes Wi-Fi públicas?',
			categoria: 'Rede',
			recomendacao: 'Wi-Fi público pode ser intercetado. Se precisares de usar, ativa uma VPN. Para operações bancárias, usa sempre os dados móveis.'
		},
		{
			id: 10,
			pergunta: 'Os teus perfis nas redes sociais têm as definições de privacidade revistas recentemente?',
			categoria: 'Privacidade',
			recomendacao: 'Vai às Definições → Privacidade em cada rede social e verifica: quem vê os teus posts, quem te pode contactar, que dados a plataforma partilha com terceiros. Faz isto uma vez por ano.'
		}
	];

	let respostas = $state({});
	let fase = $state('quiz'); // 'quiz' | 'resultado'

	let respondidas = $derived(Object.keys(respostas).length);
	let concluido = $derived(respondidas === perguntas.length);

	let naoOk = $derived(
		perguntas.filter(p => respostas[p.id] === 'nao' || respostas[p.id] === 'naosei')
	);

	let pontuacao = $derived(
		perguntas.filter(p => respostas[p.id] === 'sim').length
	);

	function ver() { fase = 'resultado'; }
	function reiniciar() { respostas = {}; fase = 'quiz'; }
</script>

<svelte:head>
	<title>Checklist de Segurança — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>✅ Checklist de Segurança Digital</h1>
		<p>10 perguntas para avaliar o teu nível de proteção — com recomendações personalizadas</p>
	</div>
</div>

<main class="container">
	{#if fase === 'quiz'}
		<div class="progresso-linha">
			<div class="prog-barra">
				<div class="prog-fill" style="width: {(respondidas / perguntas.length) * 100}%"></div>
			</div>
			<span>{respondidas}/{perguntas.length} respondidas</span>
		</div>

		<div class="perguntas">
			{#each perguntas as p}
				<div class="pergunta-card" class:respondida={respostas[p.id]}>
					<div class="pergunta-topo">
						<span class="cat-badge">{p.categoria}</span>
					</div>
					<p class="pergunta-texto">{p.pergunta}</p>
					<div class="botoes-resposta">
						<button
							class="btn-r sim"
							class:ativo={respostas[p.id] === 'sim'}
							onclick={() => respostas = { ...respostas, [p.id]: 'sim' }}
						>✓ Sim</button>
						<button
							class="btn-r nao"
							class:ativo={respostas[p.id] === 'nao'}
							onclick={() => respostas = { ...respostas, [p.id]: 'nao' }}
						>✗ Não</button>
						<button
							class="btn-r naosei"
							class:ativo={respostas[p.id] === 'naosei'}
							onclick={() => respostas = { ...respostas, [p.id]: 'naosei' }}
						>? Não sei</button>
					</div>
				</div>
			{/each}
		</div>

		<div class="verificador-secao">
			<h2>🔐 Verifica a força da tua palavra-passe</h2>
			<p>Testa uma palavra-passe de exemplo (nunca a tua real) para perceber o que torna uma palavra-passe segura.</p>
			<VerificadorPassword />
		</div>

		{#if concluido}
			<div class="btn-wrap">
				<button class="btn-ver" onclick={ver}>Ver o meu relatório →</button>
			</div>
		{/if}

	{:else}
		<div class="resultado">
			<div class="score-card" class:bom={pontuacao >= 8} class:medio={pontuacao >= 5 && pontuacao < 8} class:fraco={pontuacao < 5}>
				<span class="score-emoji">
					{#if pontuacao >= 8}🛡️{:else if pontuacao >= 5}⚠️{:else}🔓{/if}
				</span>
				<h2>{pontuacao}/10</h2>
				<p class="score-nivel">
					{#if pontuacao >= 8}Boa proteção{:else if pontuacao >= 5}Proteção razoável{:else}Proteção insuficiente{/if}
				</p>
				<p>
					{#if pontuacao >= 8}
						A tua segurança digital está bem encaminhada. Revê as recomendações abaixo para chegar aos 10/10.
					{:else if pontuacao >= 5}
						Há melhorias importantes a fazer. As recomendações abaixo são a tua lista de ação prioritária.
					{:else}
						A tua proteção digital tem falhas críticas. Começa pelas recomendações mais simples — cada uma conta.
					{/if}
				</p>
			</div>

			{#if naoOk.length > 0}
				<div class="recomendacoes">
					<h2>A tua lista de ação ({naoOk.length} {naoOk.length === 1 ? 'item' : 'itens'})</h2>
					{#each naoOk as p}
						<div class="rec-card" class:naosei={respostas[p.id] === 'naosei'}>
							<div class="rec-topo">
								<span class="cat-badge">{p.categoria}</span>
								<span class="rec-estado">{respostas[p.id] === 'naosei' ? '❓ Não sei' : '❌ Não'}</span>
							</div>
							<p class="rec-pergunta">{p.pergunta}</p>
							<div class="rec-acao">
								<strong>O que fazer:</strong>
								<p>{p.recomendacao}</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="perfeito">
					<p>🎉 Respondeste "Sim" a tudo! Partilha o NavegaSeguro com alguém que possa precisar.</p>
				</div>
			{/if}

			<div class="verificador-secao">
				<h2>🔐 Verifica a força da tua palavra-passe</h2>
				<VerificadorPassword />
			</div>

			<button class="btn-reiniciar" onclick={reiniciar}>↺ Fazer de novo</button>
		</div>
	{/if}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 750px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.7); }

	main { padding: 2.5rem 1.5rem; }

	.progresso-linha {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}
	.prog-barra { flex: 1; height: 8px; background: #eee; border-radius: 999px; overflow: hidden; }
	.prog-fill { height: 100%; background: #0984E3; border-radius: 999px; transition: width 0.3s; }
	.progresso-linha span { font-size: 0.8rem; color: #555; white-space: nowrap; }

	.perguntas { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }

	.pergunta-card {
		background: #fff;
		border: 2px solid #e0e7ff;
		border-radius: 0.75rem;
		padding: 1.25rem;
		transition: border-color 0.2s;
	}
	.pergunta-card.respondida { border-color: #1DD1A1; }

	.pergunta-topo { margin-bottom: 0.5rem; }

	.cat-badge {
		background: #f0f4ff;
		color: #0984E3;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
	}

	.pergunta-texto { font-size: 0.95rem; font-weight: 600; color: #1a1a2e; margin-bottom: 1rem; line-height: 1.4; }

	.botoes-resposta { display: flex; gap: 0.5rem; }

	.btn-r {
		flex: 1;
		padding: 0.6rem 0.5rem;
		border-radius: 0.5rem;
		border: 2px solid transparent;
		font-size: 0.85rem;
		font-weight: 600;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.15s;
		background: #f8faff;
		color: #555;
	}
	.btn-r:hover { background: #f0f4ff; }
	.btn-r:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.btn-r.sim.ativo { background: #e8fff8; border-color: #1DD1A1; color: #0a7c5c; }
	.btn-r.nao.ativo { background: #fff0f0; border-color: #FF6B6B; color: #c0392b; }
	.btn-r.naosei.ativo { background: #fff9e6; border-color: #FF9F43; color: #8a5a00; }
	.btn-ver:focus-visible { outline: 3px solid #48DBFB; outline-offset: 3px; }

	.verificador-secao {
		margin: 2.5rem 0;
	}
	.verificador-secao h2 { font-family: 'Nunito', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 0.4rem; }
	.verificador-secao > p { font-size: 0.9rem; color: #666; margin-bottom: 1rem; }

	.btn-wrap { text-align: center; margin-top: 1rem; }
	.btn-ver {
		background: #0984E3;
		color: white;
		border: none;
		border-radius: 0.75rem;
		padding: 0.9rem 2rem;
		font-size: 1.05rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
	}

	.resultado { display: flex; flex-direction: column; gap: 1.5rem; }

	.score-card {
		background: #fff;
		border-radius: 1rem;
		padding: 2rem;
		text-align: center;
		border: 3px solid #e5e7eb;
	}
	.score-card.bom { border-color: #1DD1A1; background: #e8fff8; }
	.score-card.medio { border-color: #FF9F43; background: #fff9e6; }
	.score-card.fraco { border-color: #FF6B6B; background: #fff0f0; }

	.score-emoji { font-size: 3rem; display: block; margin-bottom: 0.5rem; }
	.score-card h2 { font-family: 'Nunito', sans-serif; font-size: 2.5rem; font-weight: 900; margin-bottom: 0.25rem; }
	.score-nivel { font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem; }
	.score-card p { color: #444; }

	.recomendacoes h2 { font-family: 'Nunito', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem; }

	.rec-card {
		background: #fff;
		border: 2px solid #FFE0E0;
		border-radius: 0.75rem;
		padding: 1.25rem;
		margin-bottom: 1rem;
	}
	.rec-card.naosei { border-color: #FFE9CC; }

	.rec-topo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	.rec-estado { font-size: 0.8rem; font-weight: 600; color: #555; }
	.rec-pergunta { font-size: 0.95rem; font-weight: 600; color: #1a1a2e; margin-bottom: 0.75rem; }

	.rec-acao { background: #f8faff; border-radius: 0.5rem; padding: 0.75rem 1rem; }
	.rec-acao strong { display: block; font-size: 0.8rem; color: #0984E3; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.3rem; }
	.rec-acao p { font-size: 0.875rem; color: #333; line-height: 1.5; }

	.perfeito {
		background: #e8fff8;
		border: 2px solid #1DD1A1;
		border-radius: 0.75rem;
		padding: 1.5rem;
		text-align: center;
		font-size: 1rem;
	}

	.btn-reiniciar {
		background: #f0f4ff;
		color: #1a1a2e;
		border: 2px solid #e0e7ff;
		border-radius: 0.75rem;
		padding: 0.75rem 1.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		font-family: inherit;
		cursor: pointer;
		align-self: center;
	}
</style>
