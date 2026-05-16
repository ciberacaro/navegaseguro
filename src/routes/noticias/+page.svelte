<script>
	const noticias = [
		{
			id: 'n16',
			data: '2026-05-14',
			nivel: 'alto',
			fonte: 'CNCS / Câmaras Municipais',
			fonteUrl: 'https://www.cncs.gov.pt',
			titulo: 'Quishing: QR codes falsos detetados em parquímetros e carregadores de VE em Lisboa e Porto',
			resumo: 'Autoridades municipais e o CNCS alertam para autocolantes com QR codes fraudulentos sobrepostos sobre os originais em parquímetros e postos de carregamento de veículos elétricos. A técnica — "quishing" (phishing via QR code) — redireciona para páginas de pagamento falsas que capturam dados de cartão.',
			como_reconhecer: [
				'QR code parece um autocolante colocado por cima de outro',
				'A página de destino não tem o domínio esperado (câmara, EDP, Galp, EMEL)',
				'URL usa http:// (sem "s") ou domínio inventado como "pagamento-parque.com"',
				'Pede número e CVV do cartão em vez de abrir app oficial'
			],
			o_que_fazer: 'Não pague por QR code com aparência suspeita. Verifique fisicamente se o código está sobreposto. Use as apps oficiais ou escreva o endereço no browser. Denuncie autocolantes suspeitos ao estabelecimento ou à câmara municipal.',
			tags: ['quishing', 'QR code', 'pagamento', 'novo']
		},
		{
			id: 'n15',
			data: '2026-05-05',
			nivel: 'alto',
			fonte: 'PJ — UNC3T',
			fonteUrl: 'https://www.policiajudiciaria.pt',
			titulo: 'SIM Swap em Portugal: criminosos convencem operadoras a transferir números de telemóvel',
			resumo: 'A Polícia Judiciária registou um aumento de 40% em casos de SIM swap no primeiro trimestre de 2026. Os atacantes contactam a operadora da vítima com dados pessoais obtidos por phishing, convencem a transferir o número para um novo SIM, e intercetam todos os SMS de autenticação bancária.',
			como_reconhecer: [
				'O telemóvel perde repentinamente o sinal sem razão aparente',
				'Notificações de SMS de autenticação que não pediu',
				'Alertas de movimentos bancários não autorizados',
				'Impossibilidade de fazer chamadas ou aceder a dados móveis'
			],
			o_que_fazer: 'Se o telemóvel perder sinal subitamente, contacte de imediato a operadora e o banco. Prefira app de autenticação (Authy, Google Authenticator) em vez de SMS para 2FA. Para contas críticas, peça à operadora para bloquear portabilidade de número sem presença em loja.',
			tags: ['SIM swap', '2FA', 'Banca', 'Operadoras']
		},
		{
			id: 'n14',
			data: '2026-04-20',
			nivel: 'baixo',
			fonte: 'SIBS / Banco de Portugal',
			fonteUrl: 'https://www.bportugal.pt',
			titulo: 'Bancos portugueses começam a implementar passkeys — adeus às passwords bancárias',
			resumo: 'Vários bancos portugueses anunciaram a adoção progressiva de passkeys (chaves de acesso) para homebanking em substituição de passwords. Passkeys são resistentes a phishing por natureza: são criptograficamente vinculadas ao domínio legítimo e não podem ser roubadas por sites falsos.',
			como_reconhecer: [
				'Este é um desenvolvimento positivo — não há sinais de fraude associados',
				'Verifique na app do seu banco se já tem a opção "chave de acesso" ou "passkey"',
				'A ativação é feita na app oficial, nunca por SMS ou email'
			],
			o_que_fazer: 'Ative a passkey na app oficial do seu banco quando disponível. Se receber email ou SMS a "convidá-lo" a ativar passkeys com link externo — é phishing. A ativação é sempre feita dentro da app.',
			tags: ['passkeys', 'banca', 'segurança', 'positivo']
		},
		{
			id: 'n13',
			data: '2026-04-08',
			nivel: 'medio',
			fonte: 'Meta / Linha Internet Segura',
			fonteUrl: 'https://www.internetsegura.pt',
			titulo: 'Sequestro de contas WhatsApp pelo código de 6 dígitos — casos triplicaram',
			resumo: 'A Linha Internet Segura reporta triplicação de casos de sequestro de contas WhatsApp em 2026. O método: a vítima recebe SMS com código de verificação não solicitado, seguido de mensagem de "amigo" a pedir para reencaminhar "por engano". Ao partilhar o código, entrega o acesso completo à conta.',
			como_reconhecer: [
				'SMS com código WhatsApp que não pediu',
				'Mensagem de contacto conhecido a pedir para reencaminhar um código',
				'Pedido urgente e com desculpa de "enviei para o número errado"'
			],
			o_que_fazer: 'NUNCA partilhe códigos de verificação — com ninguém. Ative a verificação em dois passos no WhatsApp (Definições > Conta > Verificação em dois passos). Se a conta foi comprometida, contacte o suporte da Meta em wa.me/faq.',
			tags: ['WhatsApp', 'sequestro de conta', 'código OTP']
		},
		{
			id: 'n12',
			data: '2026-05-12',
			nivel: 'alto',
			fonte: 'CNCS',
			fonteUrl: 'https://www.cncs.gov.pt',
			titulo: 'Onda de SMS falsos da Autoridade Tributária a anunciar reembolsos',
			resumo: 'O CNCS reportou um aumento significativo de SMS que se fazem passar pela AT, indicando um reembolso pendente e exigindo "validação" dos dados bancários num link externo. O domínio usado é parecido com portaldasfinancas mas inclui sufixos como .info ou .online.',
			como_reconhecer: [
				'A AT nunca contacta por SMS para reembolsos',
				'O Portal das Finanças usa apenas portaldasfinancas.gov.pt',
				'Pedido de dados bancários por mensagem é sempre fraude'
			],
			o_que_fazer: 'Não clique no link. Apague o SMS. Para confirmar qualquer situação fiscal, aceda diretamente ao Portal das Finanças escrevendo o endereço no browser.',
			tags: ['phishing', 'SMS', 'Finanças']
		},
		{
			id: 'n11',
			data: '2026-04-28',
			nivel: 'alto',
			fonte: 'PJ — UNC3T',
			fonteUrl: 'https://www.policiajudiciaria.pt',
			titulo: 'Burla com IA: chamadas a imitar a voz de familiares em apuros',
			resumo: 'Detidos em Lisboa elementos de rede que usava IA generativa para clonar vozes de filhos/netos a partir de áudios públicos das redes sociais. As chamadas pedem dinheiro urgente alegando acidente ou detenção.',
			como_reconhecer: [
				'Chamada de número desconhecido a imitar familiar',
				'Voz parece-se com a real mas pode ter pequenas pausas estranhas',
				'Pedido de absoluto segredo "para não preocupar a família"',
				'Terceiro vai ao local levantar dinheiro'
			],
			o_que_fazer: 'Desligue. Ligue diretamente ao familiar pelo número que conhece. Combine uma palavra-código familiar para usar em emergências reais.',
			tags: ['IA', 'deepfake', 'Telefone', 'Sénior']
		},
		{
			id: 'n10',
			data: '2026-04-15',
			nivel: 'medio',
			fonte: 'CMVM',
			fonteUrl: 'https://www.cmvm.pt',
			titulo: 'Plataformas falsas de investimento em cripto promovidas no Instagram',
			resumo: 'A CMVM acrescentou 14 plataformas à lista de entidades não autorizadas a operar em Portugal. Anunciam rendimentos de 8–15% ao mês e usam testemunhos falsos de figuras públicas.',
			como_reconhecer: [
				'Promessa de rendimentos garantidos acima de 5% ao ano',
				'Entidade ausente do registo público da CMVM',
				'Pressão para depósitos rápidos e impossibilidade de levantar lucros'
			],
			o_que_fazer: 'Consulte sempre o registo na CMVM antes de investir. Se já depositou, pare imediatamente e apresente queixa na PJ.',
			tags: ['investimento', 'cripto', 'CMVM']
		},
		{
			id: 'n9',
			data: '2026-03-22',
			nivel: 'medio',
			fonte: 'SeguraNet',
			fonteUrl: 'https://www.seguranet.pt',
			titulo: 'Aplicações de mensagens efémeras a ser usadas para extorsão sexual de jovens',
			resumo: 'A linha Internet Segura registou aumento de pedidos de ajuda relacionados com sextorsão em apps como Snapchat e Telegram, sobretudo em jovens dos 13 aos 17 anos.',
			como_reconhecer: [
				'Pedido inesperado de fotos íntimas a uma pessoa "interessada"',
				'Ameaça de divulgação após envio',
				'Conta com poucos seguidores e historial recente'
			],
			o_que_fazer: 'Não pague. Bloqueie. Guarde capturas como prova. Ligue 800 21 90 90 ou denuncie em queixaselectronicas.mai.gov.pt.',
			tags: ['sextorsão', 'jovens', 'redes sociais']
		},
		{
			id: 'n8',
			data: '2026-03-08',
			nivel: 'medio',
			fonte: 'CNCS',
			fonteUrl: 'https://www.cncs.gov.pt',
			titulo: 'Atualização crítica de segurança: routers domésticos com senha por defeito',
			resumo: 'Investigação revelou que dezenas de milhares de routers em Portugal mantêm a senha de fábrica, sendo recrutados para botnets que atacam infraestruturas.',
			como_reconhecer: [
				'Senha do Wi-Fi ainda é a que vinha no autocolante do router',
				'Painel de administração acessível por "admin/admin"',
				'Wi-Fi mais lento que o habitual sem causa aparente'
			],
			o_que_fazer: 'Aceda ao painel do router (normalmente 192.168.1.1) e mude a senha de administração e do Wi-Fi. Ative WPA3 se disponível.',
			tags: ['router', 'Wi-Fi', 'casa']
		},
		{
			id: 'n7',
			data: '2026-02-19',
			nivel: 'baixo',
			fonte: 'DECO Proteste',
			fonteUrl: 'https://www.deco.proteste.pt',
			titulo: 'Lojas online falsas a aproveitar promoções de Carnaval',
			resumo: 'Identificadas dezenas de lojas online aparentemente portuguesas que vendem roupa de marca a preços muito baixos. Os artigos nunca chegam ou são falsificações de baixa qualidade.',
			como_reconhecer: [
				'Preços 70%+ abaixo do mercado',
				'Site sem morada nem NIF visível',
				'Únicos métodos de pagamento: MB WAY ou transferência',
				'Domínio criado há poucos meses'
			],
			o_que_fazer: 'Verifique o NIF da loja no Portal das Finanças. Prefira pagamento por cartão (permite estornar). Pesquise o nome da loja + "burla".',
			tags: ['compras', 'lojas falsas']
		}
	];

	const nivelCor = { alto: '#FF6B6B', medio: '#FF9F43', baixo: '#1DD1A1' };
	const nivelLabel = { alto: 'Alerta alto', medio: 'Alerta médio', baixo: 'Informação' };

	function formatarData(d) {
		const [ano, mes, dia] = d.split('-');
		const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${ano}`;
	}
</script>

<svelte:head>
	<title>Notícias e alertas — NavegaSeguro</title>
	<meta name="description" content="Alertas recentes de cibersegurança em Portugal, curados a partir do CNCS, PJ, CMVM e outras fontes oficiais." />
</svelte:head>

<div class="topo">
	<div class="container">
		<a href="/" class="voltar">← Início</a>
		<h1>📰 Notícias e alertas</h1>
		<p>Os alertas mais recentes de cibersegurança em Portugal — atualizado manualmente a partir de fontes oficiais.</p>
	</div>
</div>

<main class="container">
	<p class="aviso-fontes">
		<strong>Fontes:</strong> CNCS, Polícia Judiciária (UNC3T), CMVM, SeguraNet, DECO Proteste. Esta página não substitui a consulta direta às entidades oficiais.
	</p>

	<ol class="lista-noticias" aria-label="Lista de notícias e alertas">
		{#each noticias as n}
			<li class="noticia" style="--cor: {nivelCor[n.nivel]}">
				<article aria-labelledby="t-{n.id}">
					<header class="noticia-topo">
						<span class="badge" style="background: {nivelCor[n.nivel]}">{nivelLabel[n.nivel]}</span>
						<time datetime={n.data} class="data">{formatarData(n.data)}</time>
					</header>
					<h2 id="t-{n.id}">{n.titulo}</h2>
					<p class="resumo">{n.resumo}</p>

					<details class="detalhe">
						<summary>Ver detalhes</summary>
						<div class="detalhe-conteudo">
							<div>
								<h3>Como reconhecer</h3>
								<ul>
									{#each n.como_reconhecer as r}<li>{r}</li>{/each}
								</ul>
							</div>
							<div>
								<h3>O que fazer</h3>
								<p>{n.o_que_fazer}</p>
							</div>
						</div>
					</details>

					<footer class="noticia-rodape">
						<span class="fonte">
							Fonte: <a href={n.fonteUrl} target="_blank" rel="noopener noreferrer">{n.fonte}<span class="sr-only"> (abre em nova janela)</span></a>
						</span>
						<ul class="tags" aria-label="Categorias">
							{#each n.tags as t}<li>{t}</li>{/each}
						</ul>
					</footer>
				</article>
			</li>
		{/each}
	</ol>

	<section class="ctas">
		<h2>Quer reportar um alerta?</h2>
		<p>Se identificou uma fraude em curso, denuncie nas entidades oficiais. O NavegaSeguro não substitui as autoridades competentes.</p>
		<div class="ctas-grelha">
			<a href="https://www.policiajudiciaria.pt" target="_blank" rel="noopener noreferrer">PJ — UNC3T<span class="sr-only"> (abre em nova janela)</span></a>
			<a href="https://queixaselectronicas.mai.gov.pt" target="_blank" rel="noopener noreferrer">Queixa eletrónica<span class="sr-only"> (abre em nova janela)</span></a>
			<a href="tel:800219090">📞 800 21 90 90</a>
		</div>
	</section>
</main>

<style>
	.topo {
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		color: white;
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}
	.container { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
	.voltar { display: inline-block; color: rgba(255,255,255,0.85); font-size: 0.85rem; margin-bottom: 1.5rem; }
	.voltar:hover { color: white; }
	.voltar:focus-visible { outline: 2px solid #48DBFB; outline-offset: 3px; border-radius: 2px; }
	.topo h1 { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
	.topo p { color: rgba(255,255,255,0.85); max-width: 580px; margin: 0 auto; }

	main { padding: 2rem 1.5rem 4rem; }

	.aviso-fontes {
		background: #f8faff;
		border-left: 4px solid #0984E3;
		padding: 0.9rem 1.1rem;
		border-radius: 0.5rem;
		font-size: 0.88rem;
		color: #333;
		margin-bottom: 2rem;
	}

	.lista-noticias {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.noticia {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-left: 4px solid var(--cor);
		border-radius: 0.75rem;
		padding: 1.25rem 1.4rem;
	}

	.noticia-topo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		color: white;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.2rem 0.65rem;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.data { font-size: 0.82rem; color: #555; }

	.noticia h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.1rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 0.4rem;
		line-height: 1.35;
	}

	.resumo { color: #333; line-height: 1.55; font-size: 0.95rem; margin-bottom: 0.75rem; }

	.detalhe { margin-top: 0.5rem; }
	.detalhe summary {
		font-size: 0.88rem;
		font-weight: 600;
		color: #0984E3;
		cursor: pointer;
		padding: 0.3rem 0;
		border-radius: 0.25rem;
	}
	.detalhe summary:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }
	.detalhe summary::marker { content: ''; }
	.detalhe summary::before { content: '▸ '; display: inline-block; transition: transform 0.15s; }
	.detalhe[open] summary::before { content: '▾ '; }

	.detalhe-conteudo {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid #f0f0f0;
	}
	.detalhe-conteudo h3 {
		font-size: 0.78rem;
		font-weight: 700;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.4rem;
	}
	.detalhe-conteudo ul { padding-left: 1.2rem; font-size: 0.9rem; color: #333; line-height: 1.6; }
	.detalhe-conteudo p { font-size: 0.9rem; color: #333; line-height: 1.6; }

	.noticia-rodape {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 0.85rem;
		padding-top: 0.85rem;
		border-top: 1px solid #f0f0f0;
		flex-wrap: wrap;
	}
	.fonte { font-size: 0.82rem; color: #555; }
	.fonte a { color: #0984E3; text-decoration: underline; }
	.fonte a:focus-visible { outline: 2px solid #0984E3; outline-offset: 2px; border-radius: 2px; }

	.tags { list-style: none; padding: 0; display: flex; gap: 0.4rem; flex-wrap: wrap; }
	.tags li {
		background: #f0f4ff;
		color: #555;
		font-size: 0.72rem;
		padding: 0.18rem 0.6rem;
		border-radius: 999px;
	}

	.ctas {
		background: #fffaf5;
		border: 1px solid #ffe0c0;
		border-radius: 0.75rem;
		padding: 1.5rem;
		margin-top: 2.5rem;
		text-align: center;
	}
	.ctas h2 { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem; }
	.ctas p { color: #555; font-size: 0.92rem; margin-bottom: 1rem; }
	.ctas-grelha { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
	.ctas-grelha a {
		background: #fff;
		border: 1px solid #ddd;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		color: #1a1a2e;
		transition: border-color 0.15s;
	}
	.ctas-grelha a:hover { border-color: #0984E3; }
	.ctas-grelha a:focus-visible { outline: 3px solid #0984E3; outline-offset: 2px; }

	.sr-only {
		position: absolute;
		width: 1px; height: 1px;
		padding: 0; margin: -1px;
		overflow: hidden; clip: rect(0, 0, 0, 0);
		white-space: nowrap; border: 0;
	}

	@media (max-width: 600px) {
		.detalhe-conteudo { grid-template-columns: 1fr; }
	}
</style>
