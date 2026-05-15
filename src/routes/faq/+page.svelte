<script>
	const categorias = [
		{
			titulo: 'Palavras-passe',
			perguntas: [
				{
					q: 'Qual é uma palavra-passe segura?',
					a: 'Uma palavra-passe com pelo menos 12 caracteres, que misture maiúsculas, minúsculas, números e símbolos, e que não contenha palavras do dicionário, nomes próprios ou datas pessoais. Uma frase longa ("ouvi-pingos-na-janela-2024") é tão ou mais segura que uma palavra curta complexa.'
				},
				{
					q: 'Devo mudar a palavra-passe regularmente?',
					a: 'Não, a não ser que suspeite que foi comprometida. A recomendação atual (NIST, CNCS) é manter palavras-passe únicas e fortes para cada conta, em vez de as alterar a cada 90 dias — práticas que levam as pessoas a escolher senhas mais fracas.'
				},
				{
					q: 'É seguro usar um gestor de palavras-passe?',
					a: 'Sim. Gestores como o Bitwarden (gratuito e open-source) são auditados e usam encriptação ponta-a-ponta. Mesmo que o serviço seja atacado, as suas palavras-passe ficam protegidas pela palavra-passe mestra. É muito mais seguro do que reutilizar a mesma palavra-passe em vários sites.'
				}
			]
		},
		{
			titulo: 'Phishing e burlas',
			perguntas: [
				{
					q: 'Recebi um SMS dos CTT/Finanças/MB WAY. É verdadeiro?',
					a: 'Quase sempre é falso. Os CTT não pedem pagamento de taxas por SMS. As Finanças não enviam reembolsos por SMS. O MB WAY não pede confirmação para receber dinheiro. Em caso de dúvida, vá diretamente ao site oficial (escrevendo o endereço no browser) ou ligue à entidade.'
				},
				{
					q: 'Como verifico se um link é seguro antes de clicar?',
					a: 'Passe o rato por cima (ou pressione e segure no telemóvel) para ver o endereço completo. Confirme que o domínio é o oficial — ctt.pt, não ctt-portugal.com. Se tem dúvidas, copie o link e analise em urlscan.io ou virustotal.com sem o abrir.'
				},
				{
					q: 'Caí numa fraude. O que faço agora?',
					a: 'Mantenha a calma. Se forneceu dados bancários: ligue imediatamente ao banco a bloquear cartões e contas. Apresente queixa em queixaselectronicas.mai.gov.pt ou na PJ (UNC3T). Guarde todas as provas (capturas, SMS, emails). A APAV (116 006) presta apoio gratuito.'
				},
				{
					q: 'O burlão tem o meu nome e contacto. Como sabe?',
					a: 'Provavelmente os seus dados foram expostos numa fuga anterior. Verifique em haveibeenpwned.com. As bases de dados de fugas (do LinkedIn, Facebook, etc.) circulam livremente. Conhecer o seu nome não significa que a mensagem é legítima.'
				}
			]
		},
		{
			titulo: 'Crianças e jovens',
			perguntas: [
				{
					q: 'A partir de que idade posso dar telemóvel ao meu filho?',
					a: 'Não há resposta única. O que importa é a maturidade, não a idade. Antes de dar, defina regras claras: aplicações permitidas, horários, controlo parental ativo, locais de uso (não no quarto). A maioria das redes sociais exige 13+ anos por lei.'
				},
				{
					q: 'Devo ler as conversas do meu filho?',
					a: 'A monitorização total pode quebrar a confiança e empurrar a criança para canais escondidos. O equilíbrio: conhecer as aplicações que usa, ter acesso ao dispositivo para verificações ocasionais, conversar regularmente. Ferramentas como o Family Link (Google) ou Tempo de Ecrã (Apple) ajudam.'
				},
				{
					q: 'O meu filho foi vítima de cyberbullying. O que fazer?',
					a: 'Não desvalorize. Guarde provas (capturas com data e hora). Reporte à plataforma. Contacte a escola — em Portugal, cyberbullying entre alunos é tratado no plano de prevenção da escola. Ligue 800 21 90 90 ou consulte a APAV. Em casos graves, apresente queixa na PSP/GNR.'
				}
			]
		},
		{
			titulo: 'Compras e pagamentos',
			perguntas: [
				{
					q: 'Comprei numa loja online e não chegou nada. O que fazer?',
					a: 'Tente contactar o vendedor. Se pagou por cartão, peça estorno ao banco (chargeback) — tem 120 dias. Se pagou por MB WAY ou transferência, é muito mais difícil recuperar. Denuncie em queixaselectronicas.mai.gov.pt e na DECO. Pesquise o nome da loja para alertar outros.'
				},
				{
					q: 'É seguro guardar o cartão de crédito em sites de compras?',
					a: 'Em sites grandes e estabelecidos (Amazon, El Corte Inglés), é razoavelmente seguro — os dados são tokenizados. Em sites pequenos ou desconhecidos, prefira pagamento único. Considere usar cartões virtuais (MB NET, Revolut) com limite e validade curtos.'
				}
			]
		},
		{
			titulo: 'Privacidade e dados',
			perguntas: [
				{
					q: 'Sou obrigado a aceitar cookies em todos os sites?',
					a: 'Não. Só os cookies essenciais (funcionamento do site) podem ser usados sem consentimento. Os de publicidade e estatísticas exigem aceitação explícita. Pode recusar — embora alguns sites tornem essa opção propositadamente difícil. A CNPD em Portugal supervisiona estes pedidos.'
				},
				{
					q: 'Uma empresa usou os meus dados sem autorização. O que fazer?',
					a: 'Pode apresentar reclamação à CNPD em cnpd.pt. Tem direito a aceder aos seus dados, corrigi-los, apagá-los ("direito ao esquecimento") e à portabilidade. A empresa tem 30 dias para responder a um pedido de acesso. Multas por incumprimento podem atingir 4% do volume de negócios.'
				},
				{
					q: 'O Wi-Fi público é seguro?',
					a: 'Para navegação básica, sim. Sites com HTTPS (cadeado na barra) protegem os dados durante o tráfego. Evite homebanking ou inserir dados de cartão em Wi-Fi público. Se precisar, use uma VPN — soluções como o ProtonVPN têm plano gratuito.'
				}
			]
		}
	];

	let aberta = $state(null);

	function alternar(id) {
		aberta = aberta === id ? null : id;
	}
</script>

<svelte:head>
	<title>Perguntas frequentes — NavegaSeguro</title>
	<meta name="description" content="As 15 perguntas mais frequentes sobre cibersegurança em Portugal: palavras-passe, phishing, crianças, compras online e privacidade." />
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>❓ Perguntas frequentes</h1>
		<p>Respostas claras às 15 dúvidas mais comuns em Portugal sobre cibersegurança.</p>
	</div>
</div>

<main class="container">
	{#each categorias as cat, idxCat}
		<section class="cat" aria-labelledby="cat-{idxCat}">
			<h2 id="cat-{idxCat}">{cat.titulo}</h2>

			<ul class="perguntas">
				{#each cat.perguntas as p, idxP}
					{@const id = `${idxCat}-${idxP}`}
					{@const aberto = aberta === id}
					<li>
						<button
							class="pergunta"
							class:aberto
							aria-expanded={aberto}
							aria-controls="r-{id}"
							onclick={() => alternar(id)}
						>
							<span class="q-texto">{p.q}</span>
							<span class="q-icone" aria-hidden="true">{aberto ? '−' : '+'}</span>
						</button>
						{#if aberto}
							<div id="r-{id}" class="resposta" role="region" aria-label="Resposta">
								<p>{p.a}</p>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<section class="ajuda">
		<h2>Não encontrou a sua resposta?</h2>
		<p>Estes recursos podem ajudar:</p>
		<ul>
			<li><a href="/glossario">📖 Glossário de termos</a> — explicação de cada conceito técnico</li>
			<li><a href="/emergencia">🚨 Estou a ser burlado agora</a> — passos imediatos por situação</li>
			<li><a href="/recursos">🔗 Recursos oficiais</a> — entidades onde pode denunciar</li>
			<li><a href="tel:800219090">📞 Linha Internet Segura — 800 21 90 90</a> (gratuita, 24h)</li>
		</ul>
	</section>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 3rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.85); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.voltar:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; border-radius: 2px; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.85); max-width: 580px; margin: 0 auto; }

	main { padding: 2rem 1.5rem 4rem; }

	.cat { margin-bottom: 2.5rem; }
	.cat h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.15rem;
		font-weight: 800;
		color: #1a1a2e;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #f0f0f0;
		margin-bottom: 0.75rem;
	}

	.perguntas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }

	.pergunta {
		width: 100%;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		padding: 0.95rem 1.1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		font-family: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		text-align: left;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
	}
	.pergunta:hover { border-color: #0984E3; background: #f8faff; }
	.pergunta:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.pergunta.aberto {
		border-color: #0984E3;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.q-icone {
		flex-shrink: 0;
		font-size: 1.4rem;
		line-height: 1;
		color: #0984E3;
		font-weight: 700;
		min-width: 1.2rem;
		text-align: center;
	}

	.resposta {
		background: #f8faff;
		border: 1px solid #0984E3;
		border-top: none;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		padding: 1rem 1.1rem 1.1rem;
	}
	.resposta p { color: #333; line-height: 1.65; font-size: 0.92rem; }

	.ajuda {
		background: #fffaf5;
		border: 1px solid #ffe0c0;
		border-radius: 0.75rem;
		padding: 1.5rem;
		margin-top: 2rem;
	}
	.ajuda h2 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.1rem; color: #1a1a2e; margin-bottom: 0.5rem; }
	.ajuda p { color: #555; margin-bottom: 0.75rem; }
	.ajuda ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
	.ajuda li { font-size: 0.92rem; color: #333; }
	.ajuda a { color: #0984E3; font-weight: 600; }
	.ajuda a:hover { text-decoration: underline; }
	.ajuda a:focus-visible { outline: 2px solid #0984E3; outline-offset: 2px; border-radius: 2px; }
</style>
