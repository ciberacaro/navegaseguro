<script>
	const termos = [
		{ termo: '2FA / Verificação em dois passos', def: 'Método de segurança que exige dois elementos para aceder a uma conta: a sua palavra-passe + um código temporário enviado para o telemóvel ou gerado por uma aplicação. Mesmo que alguém saiba a sua palavra-passe, não consegue entrar sem o segundo código.' },
		{ termo: 'Adware', def: 'Software que exibe publicidade indesejada no dispositivo, frequentemente vindo agregado a aplicações gratuitas. Pode tornar o sistema lento e recolher dados de navegação.' },
		{ termo: 'Antivírus', def: 'Programa que detecta, bloqueia e remove software malicioso. Atualmente, os sistemas operativos modernos (Windows 10/11, macOS) já incluem antivírus integrado de qualidade.' },
		{ termo: 'API', def: 'Interface de Programação de Aplicações — forma como diferentes programas comunicam entre si. Por exemplo, quando usa "Iniciar sessão com Google", a aplicação usa a API do Google para verificar a sua identidade.' },
		{ termo: 'Aplicação maliciosa', def: 'App aparentemente inofensiva (jogo, lanterna, editor de fotos) que esconde funcionalidades de espionagem, fraude ou roubo de dados. Mais comum em lojas não oficiais (fora da Google Play ou App Store).' },
		{ termo: 'Autenticação', def: 'Processo de verificar que você é quem diz ser antes de aceder a um sistema. Pode ser por palavra-passe, impressão digital, reconhecimento facial ou código temporário.' },
		{ termo: 'Backup / Cópia de segurança', def: 'Cópia dos seus ficheiros guardada noutro local (disco externo, nuvem) para os recuperar em caso de avaria, roubo ou ransomware. A regra 3-2-1: 3 cópias, em 2 suportes diferentes, com 1 fora de casa.' },
		{ termo: 'Biometria', def: 'Autenticação por características físicas únicas — impressão digital, reconhecimento facial, íris. Mais conveniente que palavras-passe e, na maioria dos casos, mais segura.' },
		{ termo: 'Bluetooth', def: 'Tecnologia de comunicação sem fios de curto alcance. Pode representar risco se estiver sempre ligado em locais públicos — desligue quando não estiver a usar.' },
		{ termo: 'Botnet', def: 'Rede de computadores infetados controlados remotamente por criminosos, sem o conhecimento dos donos. Usados para ataques em massa, envio de spam ou mineração de criptomoedas.' },
		{ termo: 'Burla 419 (Burla nigeriana)', def: 'Esquema clássico em que a vítima é contactada com promessa de herança, prémio ou negócio milionário — mas tem de pagar "taxas" para receber. Nunca chega nada; o dinheiro pago perde-se.' },
		{ termo: 'Burla romântica', def: 'Fraude em apps de namoro ou redes sociais. O criminoso cria perfil falso, conquista a vítima durante semanas/meses, depois pede dinheiro alegando emergências. Nunca quer videochamada nem encontros reais.' },
		{ termo: 'CAPTCHA', def: 'Teste para distinguir humanos de programas automatizados — caixas para clicar, imagens para identificar. Protege sites de ataques em massa por bots.' },
		{ termo: 'CDN', def: 'Rede de Distribuição de Conteúdos — servidores espalhados pelo mundo que servem conteúdo de sites mais rapidamente. Cloudflare, Akamai e Fastly são exemplos.' },
		{ termo: 'Cibercrime', def: 'Crime cometido através de meios digitais — fraude online, hacking, roubo de identidade, exploração de menores. Em Portugal, é investigado pela Polícia Judiciária (UNC3T) e pela GNR.' },
		{ termo: 'CNCS', def: 'Centro Nacional de Cibersegurança — autoridade portuguesa de cibersegurança. Emite alertas, presta apoio a incidentes e produz recursos educativos. Sítio: cncs.gov.pt.' },
		{ termo: 'CNPD', def: 'Comissão Nacional de Proteção de Dados — entidade que fiscaliza o cumprimento do RGPD em Portugal. Para reclamações sobre uso indevido de dados pessoais: cnpd.pt.' },
		{ termo: 'Cookies', def: 'Pequenos ficheiros que os sites guardam no seu browser para se lembrarem das suas preferências, sessão de login ou comportamento de navegação. Alguns cookies rastreiam-no em múltiplos sites para mostrar publicidade direcionada.' },
		{ termo: 'Criptomoeda', def: 'Moeda digital baseada em criptografia (Bitcoin, Ethereum, etc.). Permite transações sem intermediários bancários, mas é também usada em fraudes — pagamentos em criptomoeda são quase irreversíveis.' },
		{ termo: 'Cyberbullying', def: 'Intimidação, assédio ou humilhação feita através de meios digitais — mensagens, redes sociais, jogos online. Pode ser tão ou mais prejudicial que o bullying presencial, e em casos graves é crime em Portugal.' },
		{ termo: 'Dark Web', def: 'Parte da internet acessível apenas através de software específico (como o Tor). Inclui usos legítimos (jornalismo, ativismo em regimes opressivos) e ilegítimos (mercados ilegais, fóruns criminosos).' },
		{ termo: 'Data breach / Fuga de dados', def: 'Incidente em que dados pessoais são acedidos ou divulgados sem autorização. Verifique se o seu email foi exposto em haveibeenpwned.com.' },
		{ termo: 'DDoS', def: 'Ataque de Negação de Serviço Distribuído — milhares de pedidos simultâneos para sobrecarregar um site e o tornar inacessível. Costuma vir de uma botnet.' },
		{ termo: 'Deepfake', def: 'Vídeo, imagem ou áudio criado ou manipulado por inteligência artificial para parecer real. Pode colocar o rosto de uma pessoa noutro corpo ou criar áudio falso com a voz de alguém.' },
		{ termo: 'Domínio', def: 'O nome de um site (ex.: cgd.pt, ctt.pt). Atenção a domínios parecidos com pequenas alterações (cgd-pt.com, ctt-portugal.com) — são uma técnica de phishing.' },
		{ termo: 'Encriptação', def: 'Processo de converter informação em código ilegível para quem não tem a chave de decifração. O WhatsApp usa encriptação de ponta-a-ponta — só o remetente e o destinatário conseguem ler as mensagens.' },
		{ termo: 'Engenharia Social', def: 'Técnica de manipulação psicológica usada por burlões para levar as vítimas a revelar informações ou a tomar ações prejudiciais. Baseia-se na confiança, medo ou urgência — não em falhas técnicas.' },
		{ termo: 'Firewall', def: 'Sistema que filtra o tráfego de rede entre um dispositivo (ou rede) e a internet, bloqueando comunicações suspeitas. Está integrado em Windows, macOS e routers domésticos.' },
		{ termo: 'Gestor de palavras-passe', def: 'Aplicação que cria e guarda palavras-passe únicas e fortes para cada conta, protegidas por uma única palavra-passe mestra. Exemplos gratuitos e seguros: Bitwarden, KeePassXC.' },
		{ termo: 'Grooming / Aliciamento online', def: 'Processo em que um adulto constrói gradualmente uma relação de confiança com uma criança ou jovem online, com o objetivo de os explorar sexualmente. Pode demorar semanas ou meses.' },
		{ termo: 'HTTPS', def: 'Versão segura do protocolo HTTP. Garante que a comunicação entre o seu browser e o site é encriptada. Verifique sempre o cadeado e o "https://" antes de introduzir dados sensíveis.' },
		{ termo: 'IA generativa', def: 'Inteligência artificial que cria conteúdo novo — texto, imagens, código, voz. Exemplos: ChatGPT, Gemini, Claude, Midjourney. Pode ser usada para fins legítimos e para fraudes (deepfakes, phishing personalizado).' },
		{ termo: 'IP / Endereço IP', def: 'Identificador único do seu dispositivo na internet. Pode revelar aproximadamente onde está localizado. VPN esconde o endereço IP real.' },
		{ termo: 'Keylogger', def: 'Software espião que regista tudo o que escreve no teclado — incluindo palavras-passe. Costuma ser instalado por malware ou em computadores partilhados.' },
		{ termo: 'Linha Internet Segura', def: 'Linha de apoio portuguesa gratuita e confidencial, 24h, para situações de risco online: 1800 21 22 23. Apoiada pelo CNCS, APAV e outras entidades.' },
		{ termo: 'Login social', def: 'Iniciar sessão num site usando contas de Google, Facebook, Apple ou outras. É cómodo mas concentra risco — se a conta principal for comprometida, todas as outras ficam acessíveis.' },
		{ termo: 'Malware', def: 'Software malicioso criado para danificar, espiar ou controlar um dispositivo sem o conhecimento do utilizador. Inclui vírus, ransomware, spyware e trojans.' },
		{ termo: 'MB Way', def: 'Sistema português de pagamentos por telemóvel. Para RECEBER basta o seu nº de telemóvel. Para PAGAR, precisa de aprovar na app. Fraude comum: burlão finge ser comprador e pede NIF para "configurar pagamento" — na realidade está a enviar-lhe um pedido de pagamento.' },
		{ termo: 'Metadados', def: 'Dados sobre dados. Numa foto, incluem localização GPS, data, dispositivo usado. Quando partilha fotos em redes sociais, normalmente os metadados são removidos — mas em emails ou apps, podem ser revelados.' },
		{ termo: 'Modo incógnito', def: 'Modo do browser que não guarda histórico, cookies ou sessões. NÃO o torna anónimo — o seu fornecedor de internet, empresa ou ISP continuam a ver a sua atividade.' },
		{ termo: 'Open source', def: 'Software cujo código é público e auditável. Como qualquer pessoa pode verificar, costuma ser mais transparente em questões de segurança. Exemplos: Linux, Firefox, Bitwarden, Signal.' },
		{ termo: 'Palavra-passe forte', def: 'Uma palavra-passe segura tem pelo menos 12 caracteres, mistura letras maiúsculas e minúsculas, números e símbolos, e não contém palavras do dicionário nem informações pessoais (nome, data de nascimento).' },
		{ termo: 'Passkey / Chave de acesso', def: 'Substituto moderno da palavra-passe — usa a biometria do dispositivo (impressão digital, Face ID) para autenticação. Mais seguro e mais cómodo. Apoiado por Google, Apple, Microsoft.' },
		{ termo: 'Pegada digital', def: 'O registo de tudo o que faz online — publicações, pesquisas, compras, localizações. A pegada passiva é criada sem ação direta (dados de navegação); a ativa é o que publica deliberadamente.' },
		{ termo: 'Pharming', def: 'Variante de phishing que redireciona automaticamente o utilizador para um site falso, mesmo digitando o endereço correto. Resulta de DNS comprometido ou malware no dispositivo.' },
		{ termo: 'Phishing', def: 'Tentativa de enganar uma pessoa para que revele dados pessoais ou bancários, geralmente através de emails, SMS ou sites falsos que imitam empresas reais (bancos, CTT, Finanças). O nome vem de "fishing" (pesca) — o burlão lança o isco e espera que alguém morda.' },
		{ termo: 'PIN', def: 'Personal Identification Number — código numérico para validar identidade (cartão bancário, cartão SIM, NIF móvel). Nunca partilhe o PIN, nem com familiares.' },
		{ termo: 'Ransomware', def: 'Tipo de malware que encripta todos os ficheiros do computador e exige um pagamento (resgate) para os devolver. Afeta tanto particulares como empresas e hospitais.' },
		{ termo: 'RGPD', def: 'Regulamento Geral sobre a Proteção de Dados — lei europeia que define como as empresas podem recolher, usar e guardar os seus dados pessoais. Dá-lhe o direito de saber que dados têm sobre si, de os corrigir ou apagar.' },
		{ termo: 'Sextorsão', def: 'Chantagem com base em imagens íntimas (reais ou falsas). O criminoso ameaça divulgar a familiares, amigos ou redes sociais a não ser que a vítima pague ou envie mais. Em Portugal: 1800 21 22 23.' },
		{ termo: 'SIM swap', def: 'Fraude em que o criminoso convence a operadora a transferir o seu nº de telemóvel para um cartão SIM controlado por ele. Resultado: intercepta SMS de 2FA e acede a contas bancárias. Por isso 2FA por app é mais seguro que por SMS.' },
		{ termo: 'Smishing', def: 'Phishing feito por SMS. Mensagens falsas que parecem vir dos CTT, do banco ou do Governo, com links para sites falsos.' },
		{ termo: 'Spyware', def: 'Software que espia silenciosamente a atividade do utilizador — sites visitados, mensagens escritas, fotos. Pode ser instalado por familiares controladores ("stalkerware") ou por criminosos.' },
		{ termo: 'SSID', def: 'Nome da sua rede Wi-Fi. Mude o nome padrão do router e a palavra-passe — os nomes padrão dão pistas sobre o modelo, facilitando ataques.' },
		{ termo: 'Token', def: 'Pequeno dispositivo ou ficheiro que comprova a sua identidade. Pode ser físico (token bancário) ou digital (token de sessão num site).' },
		{ termo: 'Trojan / Cavalo de Tróia', def: 'Malware disfarçado de software legítimo. Aparenta ser um jogo, atualização ou anexo de email, mas no fundo dá controlo do dispositivo a um atacante.' },
		{ termo: 'Verificação por imagem inversa', def: 'Técnica para descobrir se uma foto é real ou roubada de outro lado. Útil para detetar burlas românticas. Use Google Images, TinEye ou Yandex.' },
		{ termo: 'Vishing', def: 'Phishing feito por chamada telefónica. O burlão liga a fingir ser do banco, da polícia ou de uma empresa de tecnologia, e tenta convencer a vítima a fornecer dados ou transferir dinheiro.' },
		{ termo: 'VPN', def: 'Rede Privada Virtual — encripta a sua ligação à internet e esconde o seu endereço IP. Útil em redes Wi-Fi públicas (cafés, aeroportos) e em teletrabalho. Não é ilegal nem é só para hackers.' },
		{ termo: 'Wi-Fi público', def: 'Rede sem fios disponível em locais públicos. Pode ser intercetada por atacantes na mesma rede. Evite operações sensíveis (banco, compras) ou use VPN.' },
		{ termo: 'Zero-day', def: 'Vulnerabilidade de segurança ainda desconhecida pelo fabricante — sem correção disponível. Atacantes que descobrem zero-days podem explorá-los antes de existir defesa.' }
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
