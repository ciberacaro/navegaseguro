<script>
	const termos = [
		{
			termo: '2FA / MFA',
			def: 'Autenticação de Dois Fatores (ou Multi-Fator). Além da palavra-passe, é necessário um segundo método de verificação — como um código enviado ao telemóvel ou gerado por uma app.'
		},
		{
			termo: 'Backdoor',
			def: 'Acesso secreto a um sistema, instalado por um atacante (ou deliberadamente pelo fabricante), que permite entrar sem autenticação normal.'
		},
		{
			termo: 'Brute Force',
			def: 'Ataque em que o atacante tenta todas as combinações possíveis de palavras-passe até encontrar a correta. Por isso palavras-passe longas são importantes.'
		},
		{
			termo: 'Certificado SSL/TLS',
			def: 'Tecnologia que encripta a comunicação entre o teu browser e o servidor. Websites com "https://" e o cadeado têm este certificado.'
		},
		{
			termo: 'Credential Stuffing',
			def: 'Ataque que usa listas de usernames e passwords roubados noutros sites para tentar aceder a outros serviços. Por isso nunca deves reutilizar palavras-passe.'
		},
		{
			termo: 'Encriptação',
			def: 'Processo de transformar dados legíveis em código ilegível, que só pode ser decifrado com a chave correta. Protege os teus dados mesmo que sejam intercetados.'
		},
		{
			termo: 'Exploit',
			def: 'Código ou técnica que aproveita uma vulnerabilidade (bug) num software para executar ações não autorizadas.'
		},
		{
			termo: 'Firewall',
			def: 'Sistema que monitoriza e controla o tráfego de rede, bloqueando ligações não autorizadas com base em regras definidas.'
		},
		{
			termo: 'Keylogger',
			def: 'Programa malicioso que regista tudo o que escreves no teclado, incluindo palavras-passe e dados bancários.'
		},
		{
			termo: 'Malware',
			def: 'Software malicioso — termo que engloba vírus, ransomware, spyware, trojans e outros programas criados para prejudicar ou obter acesso não autorizado.'
		},
		{
			termo: 'Phishing',
			def: 'Tentativa de enganar o utilizador para que revele informações sensíveis (palavras-passe, cartão de crédito) através de emails, SMS ou sites falsos que imitam entidades legítimas.'
		},
		{
			termo: 'Ransomware',
			def: 'Tipo de malware que encripta os ficheiros da vítima e exige um resgate (ransom) para os desbloquear. Muito comum em ataques a empresas.'
		},
		{
			termo: 'Smishing',
			def: 'Phishing feito através de SMS. Mensagens falsas que simulam entregas de encomendas, bancos ou serviços do estado são um exemplo comum.'
		},
		{
			termo: 'Social Engineering',
			def: 'Manipulação psicológica para levar pessoas a revelar informações confidenciais ou a realizar ações prejudiciais. O phishing é uma forma de social engineering.'
		},
		{
			termo: 'TOTP',
			def: 'Time-based One-Time Password — código de 6 dígitos que muda a cada 30 segundos, usado em apps de 2FA como Aegis ou Google Authenticator.'
		},
		{
			termo: 'VPN',
			def: 'Virtual Private Network — cria um túnel encriptado entre o teu dispositivo e um servidor, ocultando o teu IP e protegendo o tráfego em redes públicas.'
		},
		{
			termo: 'Vulnerabilidade',
			def: 'Falha ou fraqueza num sistema, software ou processo que pode ser explorada por um atacante para comprometer a segurança.'
		},
		{
			termo: 'Zero-Day',
			def: 'Vulnerabilidade descoberta por atacantes antes de o fabricante ter conhecimento ou ter lançado uma correção. Muito perigosa porque não há defesa imediata.'
		}
	];

	let filtro = $state('');

	let termosFiltrados = $derived(
		filtro.trim() === ''
			? termos
			: termos.filter(
					(t) =>
						t.termo.toLowerCase().includes(filtro.toLowerCase()) ||
						t.def.toLowerCase().includes(filtro.toLowerCase())
				)
	);
</script>

<svelte:head>
	<title>Glossário — NavegaSeguro</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16">
	<h1 class="text-3xl font-extrabold text-white md:text-4xl">Glossário</h1>
	<p class="mt-3 text-gray-400">
		Termos de cibersegurança explicados em português simples.
	</p>

	<div class="mt-8">
		<input
			type="search"
			bind:value={filtro}
			placeholder="Pesquisar termo..."
			class="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
		/>
	</div>

	<dl class="mt-6 space-y-3">
		{#each termosFiltrados as item}
			<div class="rounded-xl border border-gray-800 bg-gray-900 px-5 py-4">
				<dt class="font-semibold text-cyan-400">{item.termo}</dt>
				<dd class="mt-1 text-sm text-gray-400">{item.def}</dd>
			</div>
		{:else}
			<p class="text-center text-sm text-gray-500 py-8">Nenhum resultado para "{filtro}".</p>
		{/each}
	</dl>
</div>
