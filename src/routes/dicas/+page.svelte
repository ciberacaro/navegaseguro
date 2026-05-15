<script>
	const categorias = [
		{
			titulo: 'Palavras-passe',
			cor: 'cyan',
			dicas: [
				{
					titulo: 'Usa palavras-passe longas e únicas',
					desc: 'Cria palavras-passe com pelo menos 16 caracteres. Nunca reutilizes a mesma palavra-passe em dois sítios diferentes.',
					nivel: 'Básico'
				},
				{
					titulo: 'Usa um gestor de palavras-passe',
					desc: 'Ferramentas como Bitwarden ou 1Password guardam e geram palavras-passe seguras para ti — não precisas de as memorizar.',
					nivel: 'Básico'
				},
				{
					titulo: 'Ativa autenticação de dois fatores (2FA)',
					desc: 'Mesmo que alguém descubra a tua password, sem o segundo fator (ex: código no telemóvel) não consegue entrar.',
					nivel: 'Básico'
				}
			]
		},
		{
			titulo: 'Phishing & Fraudes',
			cor: 'orange',
			dicas: [
				{
					titulo: 'Verifica sempre o remetente dos emails',
					desc: 'Presta atenção ao endereço completo — "suporte@paypa1.com" não é o mesmo que "suporte@paypal.com". Uma letra diferente é suficiente.',
					nivel: 'Básico'
				},
				{
					titulo: 'Não cliques em links suspeitos',
					desc: 'Passa o rato por cima do link antes de clicar para ver o destino real. Em caso de dúvida, vai diretamente ao site escrevendo o endereço.',
					nivel: 'Básico'
				},
				{
					titulo: 'Desconfia de urgência e pressão',
					desc: '"A tua conta será encerrada em 24h" é uma táctica clássica. Empresas legítimas não te pressionam assim.',
					nivel: 'Intermédio'
				}
			]
		},
		{
			titulo: 'Dispositivos & Redes',
			cor: 'purple',
			dicas: [
				{
					titulo: 'Mantém o software atualizado',
					desc: 'A maioria dos ataques explora vulnerabilidades em software desatualizado. Ativa as atualizações automáticas.',
					nivel: 'Básico'
				},
				{
					titulo: 'Evita Wi-Fi público sem VPN',
					desc: 'Redes abertas permitem que alguém intercepte o teu tráfego. Usa uma VPN ou evita fazer login em contas importantes.',
					nivel: 'Intermédio'
				},
				{
					titulo: 'Bloqueia o ecrã quando te afastas',
					desc: 'Um simples atalho (Windows+L ou Cmd+Ctrl+Q no Mac) impede acessos físicos ao teu dispositivo.',
					nivel: 'Básico'
				}
			]
		},
		{
			titulo: 'Privacidade',
			cor: 'green',
			dicas: [
				{
					titulo: 'Revê as permissões das apps',
					desc: 'Uma lanterna não precisa de acesso aos teus contactos. Verifica regularmente o que as apps podem aceder.',
					nivel: 'Intermédio'
				},
				{
					titulo: 'Usa um browser focado em privacidade',
					desc: 'Firefox com uBlock Origin ou Brave bloqueiam rastreadores e anúncios maliciosos automaticamente.',
					nivel: 'Intermédio'
				},
				{
					titulo: 'Limita o que partilhas nas redes sociais',
					desc: 'Data de nascimento, morada, rotinas diárias — são dados que atacantes usam em ataques dirigidos.',
					nivel: 'Básico'
				}
			]
		}
	];

	const corClasses = {
		cyan: { badge: 'border-cyan-900 bg-cyan-950/50 text-cyan-400', dot: 'bg-cyan-500' },
		orange: { badge: 'border-orange-900 bg-orange-950/50 text-orange-400', dot: 'bg-orange-500' },
		purple: { badge: 'border-purple-900 bg-purple-950/50 text-purple-400', dot: 'bg-purple-500' },
		green: { badge: 'border-green-900 bg-green-950/50 text-green-400', dot: 'bg-green-500' }
	};
</script>

<svelte:head>
	<title>Dicas de Segurança — NavegaSeguro</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16">
	<h1 class="text-3xl font-extrabold text-white md:text-4xl">Dicas de Segurança</h1>
	<p class="mt-3 text-gray-400">
		Conselhos práticos organizados por tema. Começa pelo nível Básico — faz uma diferença enorme.
	</p>

	<div class="mt-12 space-y-12">
		{#each categorias as cat}
			<section>
				<div class="mb-4 flex items-center gap-3">
					<span class="h-1 w-6 rounded-full {corClasses[cat.cor].dot}"></span>
					<h2 class="text-lg font-bold text-white">{cat.titulo}</h2>
				</div>
				<div class="space-y-4">
					{#each cat.dicas as dica}
						<div class="rounded-xl border border-gray-800 bg-gray-900 p-5">
							<div class="flex items-start justify-between gap-4">
								<h3 class="font-semibold text-white">{dica.titulo}</h3>
								<span class="shrink-0 rounded-full border px-2 py-0.5 text-xs {corClasses[cat.cor].badge}">
									{dica.nivel}
								</span>
							</div>
							<p class="mt-2 text-sm text-gray-400">{dica.desc}</p>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
