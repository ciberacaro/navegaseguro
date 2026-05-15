<script>
	const termos = [
		{ termo: '2FA / Verificação em dois passos', def: 'Método de segurança que exige dois elementos para aceder a uma conta: a sua palavra-passe + um código temporário enviado para o telemóvel ou gerado por uma aplicação. Mesmo que alguém saiba a sua palavra-passe, não consegue entrar sem o segundo código.' },
		{ termo: 'Phishing', def: 'Tentativa de enganar uma pessoa para que revele dados pessoais ou bancários, geralmente através de emails, SMS ou sites falsos que imitam empresas reais (bancos, CTT, Finanças). O nome vem de "fishing" (pesca) — o burlão lança o isco e espera que alguém morda.' },
		{ termo: 'Vishing', def: 'Phishing feito por chamada telefónica. O burlão liga a fingir ser do banco, da polícia ou de uma empresa de tecnologia, e tenta convencer a vítima a fornecer dados ou transferir dinheiro.' },
		{ termo: 'Smishing', def: 'Phishing feito por SMS. Mensagens falsas que parecem vir dos CTT, do banco ou do Governo, com links para sites falsos.' },
		{ termo: 'Malware', def: 'Software malicioso criado para danificar, espiar ou controlar um dispositivo sem o conhecimento do utilizador. Inclui vírus, ransomware, spyware e trojans.' },
		{ termo: 'Ransomware', def: 'Tipo de malware que encripta todos os ficheiros do computador e exige um pagamento (resgate) para os devolver. Afeta tanto particulares como empresas e hospitais.' },
		{ termo: 'Engenharia Social', def: 'Técnica de manipulação psicológica usada por burlões para levar as vítimas a revelar informações ou a tomar ações prejudiciais. Baseia-se na confiança, medo ou urgência — não em falhas técnicas.' },
		{ termo: 'Deepfake', def: 'Vídeo, imagem ou áudio criado ou manipulado por inteligência artificial para parecer real. Pode colocar o rosto de uma pessoa noutro corpo ou criar áudio falso com a voz de alguém.' },
		{ termo: 'VPN', def: 'Rede Privada Virtual — encripta a sua ligação à internet e esconde o seu endereço IP. Útil em redes Wi-Fi públicas (cafés, aeroportos) e em teletrabalho. Não é ilegal nem é só para hackers.' },
		{ termo: 'Palavra-passe forte', def: 'Uma palavra-passe segura tem pelo menos 12 caracteres, mistura letras maiúsculas e minúsculas, números e símbolos, e não contém palavras do dicionário nem informações pessoais (nome, data de nascimento).' },
		{ termo: 'Gestor de palavras-passe', def: 'Aplicação que cria e guarda palavras-passe únicas e fortes para cada conta, protegidas por uma única palavra-passe mestra. Exemplos gratuitos e seguros: Bitwarden, KeePassXC.' },
		{ termo: 'Cookies', def: 'Pequenos ficheiros que os sites guardam no seu browser para se lembrarem das suas preferências, sessão de login ou comportamento de navegação. Alguns cookies rastreiam-no em múltiplos sites para mostrar publicidade direcionada.' },
		{ termo: 'RGPD', def: 'Regulamento Geral sobre a Proteção de Dados — lei europeia que define como as empresas podem recolher, usar e guardar os seus dados pessoais. Dá-lhe o direito de saber que dados têm sobre si, de os corrigir ou apagar.' },
		{ termo: 'Cyberbullying', def: 'Intimidação, assédio ou humilhação feita através de meios digitais — mensagens, redes sociais, jogos online. Pode ser tão ou mais prejudicial que o bullying presencial, e em casos graves é crime em Portugal.' },
		{ termo: 'Grooming', def: 'Processo em que um adulto constrói gradualmente uma relação de confiança com uma criança ou jovem online, com o objetivo de os explorar sexualmente. Pode demorar semanas ou meses.' },
		{ termo: 'Pegada digital', def: 'O registo de tudo o que faz online — publicações, pesquisas, compras, localizações. A pegada passiva é criada sem ação direta (dados de navegação); a ativa é o que publica deliberadamente.' },
		{ termo: 'Autenticação', def: 'Processo de verificar que você é quem diz ser antes de aceder a um sistema. Pode ser por palavra-passe, impressão digital, reconhecimento facial ou código temporário.' },
		{ termo: 'Encriptação', def: 'Processo de converter informação em código ilegível para quem não tem a chave de decifração. O WhatsApp usa encriptação de ponta-a-ponta — só o remetente e o destinatário conseguem ler as mensagens.' }
	];

	let pesquisa = $state('');

	let filtrados = $derived(
		pesquisa.trim() === ''
			? termos
			: termos.filter(t =>
					t.termo.toLowerCase().includes(pesquisa.toLowerCase()) ||
					t.def.toLowerCase().includes(pesquisa.toLowerCase())
			  )
	);
</script>

<svelte:head>
	<title>Glossário — NavegaSeguro</title>
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>📖 Glossário</h1>
		<p>Termos de cibersegurança explicados em linguagem simples</p>
		<input
			type="search"
			placeholder="Pesquisar termo..."
			bind:value={pesquisa}
		/>
	</div>
</div>

<main class="container">
	{#if filtrados.length === 0}
		<p class="sem-resultados">Nenhum termo encontrado para "<strong>{pesquisa}</strong>".</p>
	{:else}
		<p class="total">{filtrados.length} {filtrados.length === 1 ? 'termo' : 'termos'}</p>
		<dl class="glossario">
			{#each filtrados as item}
				<div class="entrada">
					<dt>{item.termo}</dt>
					<dd>{item.def}</dd>
				</div>
			{/each}
		</dl>
	{/if}
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}

	.container {
		max-width: 800px;
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
		margin-bottom: 1.5rem;
	}

	input[type="search"] {
		width: 100%;
		max-width: 480px;
		padding: 0.8rem 1.25rem;
		border-radius: 999px;
		border: none;
		font-size: 1rem;
		font-family: inherit;
		outline: none;
	}

	main {
		padding: 2.5rem 1.5rem;
	}

	.total {
		color: #888;
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
	}

	.sem-resultados {
		text-align: center;
		color: #666;
		padding: 2rem;
	}

	.glossario {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.entrada {
		background: #fff;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		border-left: 4px solid #0984E3;
	}

	dt {
		font-weight: 700;
		font-size: 1rem;
		color: #1a1a2e;
		margin-bottom: 0.4rem;
	}

	dd {
		font-size: 0.92rem;
		color: #444;
		line-height: 1.6;
		margin: 0;
	}
</style>
