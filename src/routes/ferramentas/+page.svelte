<script>
	const categorias = [
		{
			titulo: 'Gestores de Palavras-passe',
			ferramentas: [
				{
					nome: 'Bitwarden',
					desc: 'Open-source, gratuito, sincroniza entre dispositivos. A melhor opção para a maioria das pessoas.',
					url: 'https://bitwarden.com',
					gratis: true,
					recomendado: true
				},
				{
					nome: '1Password',
					desc: 'Interface excelente, muito polido. Plano pago mas vale o investimento para famílias.',
					url: 'https://1password.com',
					gratis: false,
					recomendado: false
				},
				{
					nome: 'KeePassXC',
					desc: 'Totalmente local, sem cloud. Ideal se não queres que os dados saiam do teu dispositivo.',
					url: 'https://keepassxc.org',
					gratis: true,
					recomendado: false
				}
			]
		},
		{
			titulo: 'Autenticação de Dois Fatores (2FA)',
			ferramentas: [
				{
					nome: 'Aegis Authenticator',
					desc: 'App Android open-source para códigos TOTP. Faz backups encriptados.',
					url: 'https://getaegis.app',
					gratis: true,
					recomendado: true
				},
				{
					nome: 'Raivo OTP',
					desc: 'Alternativa open-source para iOS. Simples e funcional.',
					url: 'https://raivootp.com',
					gratis: true,
					recomendado: false
				}
			]
		},
		{
			titulo: 'VPN',
			ferramentas: [
				{
					nome: 'Mullvad VPN',
					desc: 'Sem registo de dados, aceita pagamento anónimo. Foco total em privacidade.',
					url: 'https://mullvad.net',
					gratis: false,
					recomendado: true
				},
				{
					nome: 'ProtonVPN',
					desc: 'Plano gratuito disponível, sem logs, auditado de forma independente.',
					url: 'https://protonvpn.com',
					gratis: true,
					recomendado: false
				}
			]
		},
		{
			titulo: 'Email Seguro',
			ferramentas: [
				{
					nome: 'ProtonMail',
					desc: 'Email encriptado ponta a ponta, servidores na Suíça. Plano gratuito disponível.',
					url: 'https://proton.me',
					gratis: true,
					recomendado: true
				},
				{
					nome: 'SimpleLogin',
					desc: 'Cria aliases de email descartáveis para não expores o teu endereço real.',
					url: 'https://simplelogin.io',
					gratis: true,
					recomendado: false
				}
			]
		},
		{
			titulo: 'Verificação & Diagnóstico',
			ferramentas: [
				{
					nome: 'Have I Been Pwned',
					desc: 'Verifica se o teu email apareceu em fugas de dados conhecidas.',
					url: 'https://haveibeenpwned.com',
					gratis: true,
					recomendado: true
				},
				{
					nome: 'VirusTotal',
					desc: 'Analisa ficheiros e URLs suspeitos com mais de 70 motores antivírus.',
					url: 'https://virustotal.com',
					gratis: true,
					recomendado: false
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Ferramentas — NavegaSeguro</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16">
	<h1 class="text-3xl font-extrabold text-white md:text-4xl">Ferramentas Recomendadas</h1>
	<p class="mt-3 text-gray-400">
		Ferramentas testadas e usadas pela comunidade de segurança. Priorizamos opções gratuitas e open-source.
	</p>

	<div class="mt-12 space-y-12">
		{#each categorias as cat}
			<section>
				<h2 class="mb-4 text-lg font-bold text-white">{cat.titulo}</h2>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each cat.ferramentas as f}
						<a
							href={f.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative rounded-xl border bg-gray-900 p-5 transition hover:bg-gray-800 {f.recomendado ? 'border-cyan-800' : 'border-gray-800'}"
						>
							{#if f.recomendado}
								<span class="absolute right-3 top-3 rounded-full bg-cyan-950 px-2 py-0.5 text-xs text-cyan-400">
									Recomendado
								</span>
							{/if}
							<div class="flex items-start gap-3">
								<div>
									<h3 class="font-semibold text-white group-hover:text-cyan-400">{f.nome}</h3>
									<p class="mt-1 text-sm text-gray-400">{f.desc}</p>
									<div class="mt-3 flex items-center gap-2">
										{#if f.gratis}
											<span class="rounded-full border border-green-900 bg-green-950/50 px-2 py-0.5 text-xs text-green-400">Gratuito</span>
										{:else}
											<span class="rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">Pago</span>
										{/if}
										<span class="text-xs text-gray-600">↗ {f.url.replace('https://', '')}</span>
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
