<script>
	const casos = [
		{
			id: 1,
			data: '2024-03',
			tipo: 'phishing',
			canal: 'SMS',
			titulo: 'SMS falso dos CTT com cobrança de taxa de entrega',
			descricao: 'A vítima recebeu um SMS a dizer que havia uma encomenda retida nos CTT por falta de pagamento de 1,49€ de taxa aduaneira. O link levava a um site falso dos CTT que solicitava dados do cartão de crédito.',
			sinais: [
				'Remetente era um número de telemóvel comum, não um ID oficial dos CTT',
				'O link não terminava em ctt.pt — usava um domínio como ctt-entrega.com',
				'Criava urgência: "último aviso antes de devolução"',
				'Pequeno valor de pagamento para baixar a guarda'
			],
			desfecho: 'A vítima introduziu os dados do cartão. Foram debitados 89€ antes de bloquear o cartão.',
			prejuizo: '89€'
		},
		{
			id: 2,
			data: '2023-11',
			tipo: 'falso-tecnico',
			canal: 'Telefone',
			titulo: 'Falso técnico da Microsoft a pedir acesso remoto',
			descricao: 'A vítima recebeu uma chamada de alguém que se identificou como técnico da Microsoft, alegando que o computador estava a enviar "alertas de vírus" para os servidores da empresa. Pediu que instalasse o AnyDesk para "resolver o problema".',
			sinais: [
				'A Microsoft nunca contacta utilizadores por iniciativa própria por telefone',
				'Insistência em instalar software de acesso remoto',
				'Tom urgente e autoritário para apressar a vítima',
				'Pediu para abrir o "Visualizador de Eventos" do Windows e apontou para erros normais como "prova" de infeção'
			],
			desfecho: 'A vítima instalou o software. Os atacantes acederam ao homebanking e transferiram dinheiro. Credenciais bancárias e 1.340€ comprometidos.',
			prejuizo: 'Credenciais bancárias + 1.340€'
		},
		{
			id: 3,
			data: '2023-08',
			tipo: 'burla-romantica',
			canal: 'Redes sociais',
			titulo: 'Burla romântica no Facebook — engenheiro offshore',
			descricao: 'Perfil falso de homem norte-americano, engenheiro a trabalhar numa plataforma petrolífera, contactou a vítima no Facebook. Ao longo de 6 meses construiu uma relação de confiança e afeto. Pediu sucessivas transferências para "emergências médicas" e bilhete de avião para se encontrarem.',
			sinais: [
				'Perfil com poucas fotos, todas de qualidade profissional (roubadas de outra pessoa)',
				'Nunca disponível para videochamada em tempo real',
				'Desculpas contínuas para adiar o encontro presencial',
				'Pedidos de dinheiro sempre com grande urgência emocional',
				'Nunca tinha amigos portugueses comuns'
			],
			desfecho: 'A vítima transferiu 4.800€ ao longo de vários meses antes de ser alertada por familiar.',
			prejuizo: '4.800€'
		},
		{
			id: 4,
			data: '2024-01',
			tipo: 'ransomware',
			canal: 'Email',
			titulo: 'Ransomware em empresa familiar via email com fatura falsa',
			descricao: 'Um funcionário de uma empresa familiar abriu um anexo PDF de uma suposta fatura em atraso. O ficheiro continha um macro malicioso que encriptou todos os ficheiros da rede interna, incluindo backups locais.',
			sinais: [
				'Email de remetente desconhecido mas com aparência profissional',
				'Anexo com nome como "Fatura_pendente_2024.pdf.exe"',
				'Urgência na mensagem: "prazo de pagamento expirado, ação imediata necessária"',
				'Ausência de backups na nuvem (apenas em disco local ligado à rede)'
			],
			desfecho: 'Ficheiros encriptados. A empresa pagou 800€ em Bitcoin para recuperar o acesso. Sem garantia de recuperação total.',
			prejuizo: '800€ em Bitcoin + dados potencialmente perdidos'
		},
		{
			id: 5,
			data: '2024-02',
			tipo: 'burla-familiar',
			canal: 'Telefone',
			titulo: 'Falso sobrinho em apuros a ligar à avó',
			descricao: 'A vítima recebeu uma chamada de alguém a fingir ser o neto, em pânico, a dizer que tinha tido um acidente de carro e precisava urgentemente de dinheiro antes que a família soubesse. Pediu para não contar a ninguém e que um "amigo" passaria a casa para levantar o dinheiro.',
			sinais: [
				'Chamada de número desconhecido',
				'Voz alterada ou pouco clara (desculpa: "estou engripado")',
				'Pedido de segredo absoluto — "não contes a ninguém da família"',
				'Terceiro vai levantar o dinheiro em mão',
				'Grande urgência emocional para impedir verificação'
			],
			desfecho: 'A vítima entregou 1.500€ em numerário ao suposto "amigo do neto". O neto real nunca soube do incidente até a família perceber.',
			prejuizo: '1.500€ em numerário'
		},
		{
			id: 6,
			data: '2023-10',
			tipo: 'mb-way',
			canal: 'WhatsApp',
			titulo: 'Falso comprador OLX a pedir pagamento por MB WAY',
			descricao: 'A vítima anunciou um sofá no OLX. Recebeu mensagem no WhatsApp de um suposto comprador que dizia estar fora do país e querer pagar por MB WAY. Pediu o número de telemóvel para "enviar" o pagamento, que na verdade era um pedido de recebimento.',
			sinais: [
				'Comprador nunca quis ver o artigo pessoalmente nem por videochamada',
				'Propôs pagar mais do que o preço (para "facilidade de transporte")',
				'Enviou um link que imitava o site do MB WAY',
				'Pediu o PIN do MB WAY para "confirmar identidade"',
				'Urgência: precisava do artigo "ainda hoje"'
			],
			desfecho: 'A vítima autorizou dois pedidos de pagamento. Perdeu 250€ sem vender o artigo.',
			prejuizo: '250€'
		},
		{
			id: 7,
			data: '2024-04',
			tipo: 'investimento',
			canal: 'Redes sociais',
			titulo: 'Falso gestor de investimentos em criptomoedas no Instagram',
			descricao: 'Um perfil com milhares de seguidores no Instagram mostrava capturas de ecrã de "lucros diários" em criptomoedas. Após contacto, um suposto gestor ofereceu gerir o dinheiro da vítima com "retorno garantido de 30% ao mês". Os primeiros "lucros" foram pagos para criar confiança.',
			sinais: [
				'Promessas de retorno garantido — nenhum investimento legítimo garante retorno',
				'Perfil criado recentemente com muitos seguidores comprados',
				'Capturas de ecrã de lucros facilmente falsificáveis',
				'Pressão para investir mais ("a janela de oportunidade fecha hoje")',
				'Pedido de transferência para conta pessoal ou carteira crypto não regulada'
			],
			desfecho: 'A vítima transferiu 3.200€ em várias tranches. Quando pediu o levantamento, o gestor pediu "taxas de libertação de fundos". O perfil foi eliminado.',
			prejuizo: '3.200€'
		},
		{
			id: 8,
			data: '2024-03',
			tipo: 'phishing',
			canal: 'SMS',
			titulo: 'SMS falso da EDP com alerta de corte de fornecimento',
			descricao: 'SMS a informar que a conta de eletricidade estava em atraso e o fornecimento seria cortado em 24 horas. Incluía link para "regularizar a situação". A vítima clicou no link mas desconfiou antes de introduzir qualquer dado.',
			sinais: [
				'SMS de número desconhecido, não de ID "EDP"',
				'Link com domínio suspeito (edp-pagamento.net em vez de edp.pt)',
				'Urgência de 24 horas para criar pânico',
				'Pediu dados do cartão para pagamento imediato'
			],
			desfecho: 'A vítima clicou no link mas não introduziu dados. Denunciou à EDP e ao CERT.PT.',
			prejuizo: 'Sem prejuízo (detetou a tempo)'
		},
		{
			id: 9,
			data: '2023-09',
			tipo: 'phishing',
			canal: 'Email',
			titulo: 'Email falso do BPI a pedir confirmação de credenciais',
			descricao: 'Email aparentemente enviado pelo BPI a informar de "acesso suspeito à conta". Para "confirmar a identidade e proteger a conta", a vítima devia clicar num link e introduzir as credenciais do homebanking e um código SMS recebido.',
			sinais: [
				'Endereço de email do remetente era bpi-seguranca@bpi-alertas.com (não bpi.pt)',
				'Link redirecionava para domínio semelhante ao oficial mas diferente',
				'Pediu código SMS — os bancos nunca pedem códigos de autenticação por email',
				'Design ligeiramente diferente do site real do BPI'
			],
			desfecho: 'A vítima introduziu as credenciais e o código SMS. Foram efetuadas duas transferências no total de 2.100€ antes de o banco bloquear a conta.',
			prejuizo: '2.100€'
		},
		{
			id: 10,
			data: '2024-02',
			tipo: 'phishing',
			canal: 'SMS',
			titulo: 'Falso concurso do Continente — ganhou um vale de 500€',
			descricao: 'SMS a informar que a vítima tinha sido selecionada aleatoriamente para receber um vale de compras de 500€ no Continente. Para "resgatar", tinha de preencher um formulário com nome, morada, NIF e dados do cartão para "cobrir custos de envio de 2,50€".',
			sinais: [
				'O Continente não realiza sorteios por SMS não solicitados',
				'Pedido de dados pessoais completos para um simples vale',
				'Cobrança simbólica para parecer legítimo',
				'Link com domínio continente-premios.com em vez de continente.pt',
				'Urgência: "oferta válida apenas 48 horas"'
			],
			desfecho: 'A vítima preencheu o formulário com dados pessoais e do cartão. Dados vendidos em mercados ilegais online; cartão usado para compras fraudulentas.',
			prejuizo: 'Dados pessoais + cartão comprometido'
		},
		{
			id: 11,
			data: '2023-12',
			tipo: 'falso-tecnico',
			canal: 'Site falso',
			titulo: 'Pop-up de vírus falso com número de suporte técnico',
			descricao: 'Enquanto navegava, apareceu um ecrã com alarme sonoro a dizer que o computador estava infetado com vírus e que os dados bancários estavam em risco. Exibia um número de telefone para "suporte técnico da Microsoft" e bloqueava o browser.',
			sinais: [
				'Sites legítimos nunca mostram alertas de vírus com sons de alarme',
				'O browser pode ser fechado com Alt+F4 ou gestor de tarefas',
				'Número de telefone exibido não é oficial da Microsoft',
				'Pressão para ligar "imediatamente antes de mais danos"'
			],
			desfecho: 'A vítima ligou para o número. Foi convencida a comprar vales de Google Play de 200€ para pagar pelo "serviço de remoção de vírus".',
			prejuizo: '200€ em vales Google Play'
		},
		{
			id: 12,
			data: '2024-05',
			tipo: 'mb-way',
			canal: 'SMS',
			titulo: 'SMS falso do banco a pedir validação de MB WAY',
			descricao: 'SMS aparentemente do banco a informar que a conta MB WAY iria ser desativada por inatividade. Para manter ativa, devia clicar no link e "revalidar" inserindo o número de telemóvel e PIN.',
			sinais: [
				'O MB WAY nunca desativa por inatividade sem aviso prévio da app',
				'SMS de número aleatório, não de ID do banco',
				'Pedido de PIN — nenhum banco ou serviço pede o PIN por SMS',
				'Link levava a site que imitava a app MB WAY'
			],
			desfecho: 'A vítima introduziu o PIN. Foram feitas três compras online fraudulentas antes de perceber o sucedido.',
			prejuizo: '380€'
		},
		{
			id: 13,
			data: '2023-07',
			tipo: 'burla-romantica',
			canal: 'WhatsApp',
			titulo: 'Burla romântica por WhatsApp — viúvo militar norte-americano',
			descricao: 'Contacto iniciado por engano ("mensagem enviada para o número errado"). Ao longo de semanas, o suposto militar norte-americano viúvo com filha menor construiu ligação emocional. Pediu dinheiro para "tratar da filha doente" e para bilhete de avião para Portugal.',
			sinais: [
				'Primeiro contacto apresentado como "engano" é técnica comum',
				'Foto de perfil de militar americano — geralmente imagem roubada de redes sociais',
				'Progressão emocional muito rápida (amor declarado em semanas)',
				'Sempre com desculpa para não fazer videochamada ao vivo',
				'Pedidos de dinheiro via transferência bancária internacional'
			],
			desfecho: 'A vítima transferiu 1.800€ ao longo de dois meses.',
			prejuizo: '1.800€'
		},
		{
			id: 14,
			data: '2024-01',
			tipo: 'investimento',
			canal: 'Email',
			titulo: 'Email de proposta de investimento em obrigações com retorno elevado',
			descricao: 'Email profissional de uma suposta empresa financeira com sede em Lisboa a oferecer investimento em obrigações com retorno de 8% ao ano, acima da média do mercado. Tinham website, documentação e até número de telefone.',
			sinais: [
				'Empresa não registada na CMVM (Comissão do Mercado de Valores Mobiliários)',
				'Retornos acima da média sem risco declarado são sinal de alerta',
				'Pressão para decidir rapidamente ("emissão limitada")',
				'Pedido de transferência para conta em país diferente de Portugal',
				'Documentação com erros ortográficos e formatação inconsistente'
			],
			desfecho: 'A vítima investiu 5.000€. A empresa desapareceu passados dois meses, sem devolução do capital.',
			prejuizo: '5.000€'
		},
		{
			id: 15,
			data: '2023-06',
			tipo: 'phishing',
			canal: 'Email',
			titulo: 'Email falso das Finanças sobre reembolso de IRS',
			descricao: 'Email com o logótipo da Autoridade Tributária a informar que havia um reembolso de IRS disponível de 342€. Para receber, devia clicar no link e inserir dados bancários para "processamento da transferência".',
			sinais: [
				'A AT comunica sempre através do Portal das Finanças, nunca por email a pedir dados bancários',
				'Endereço do remetente era at-reembolsos@portal-financas.net',
				'Link levava a site com design antigo, diferente do oficial',
				'Pedia IBAN, nome do banco e número do cartão — a AT nunca pede o número do cartão'
			],
			desfecho: 'A vítima introduziu o IBAN e dados do cartão. Foram efetuadas compras online fraudulentas no valor de 670€.',
			prejuizo: '670€'
		},
		{
			id: 16,
			data: '2024-04',
			tipo: 'phishing',
			canal: 'SMS',
			titulo: 'SMS falso do Governo sobre subsídio de energia',
			descricao: 'SMS a informar que a vítima tinha direito a um subsídio governamental de apoio à energia de 250€. Para requerer, bastava clicar no link e preencher um formulário com dados pessoais e bancários.',
			sinais: [
				'O governo português não notifica subsídios por SMS não solicitado',
				'Link com domínio gov-apoio-energia.com (o portal gov.pt é o único oficial)',
				'Pedido de dados bancários para "creditação" — subsídios reais são processados pela AT',
				'Urgência: "prazo de candidatura termina esta semana"'
			],
			desfecho: 'A vítima preencheu o formulário. Dados pessoais e bancários comprometidos; detetado um empréstimo fraudulento em nome da vítima meses depois.',
			prejuizo: 'Dados pessoais + identidade comprometida'
		},
		{
			id: 17,
			data: '2023-05',
			tipo: 'falso-tecnico',
			canal: 'Telefone',
			titulo: 'Falso técnico da NOS a vender renovação de contrato',
			descricao: 'Chamada de pessoa a identificar-se como técnica da NOS, informando que o contrato de internet estava prestes a expirar e havia uma promoção exclusiva. Pediu o número de cartão de crédito para "garantir a continuidade do serviço sem interrupções".',
			sinais: [
				'Operadoras de telecomunicações não pedem dados de cartão por telefone de forma não solicitada',
				'Número de onde chamou era diferente do número oficial da NOS',
				'Não conseguiu confirmar detalhes específicos do contrato da vítima',
				'Urgência: "promoção só disponível hoje"'
			],
			desfecho: 'A vítima forneceu os dados do cartão. Foram feitas compras fraudulentas de 430€ nas 48 horas seguintes.',
			prejuizo: '430€'
		},
		{
			id: 18,
			data: '2024-03',
			tipo: 'burla-familiar',
			canal: 'WhatsApp',
			titulo: 'Mensagem WhatsApp de filho com número novo a pedir transferência urgente',
			descricao: 'Mensagem de WhatsApp de número desconhecido: "Mãe, é o João. Parti o telemóvel, estou com este número temporário. Preciso de pagar uma fatura urgente antes das 18h, podes fazer uma transferência?" Usava nome real do filho.',
			sinais: [
				'Número desconhecido com pedido para não usar o número antigo',
				'Pedido de dinheiro urgente antes de qualquer confirmação de identidade',
				'Pressão de prazo (antes das 18h)',
				'Não ligou para confirmar — WhatsApp apenas, para evitar reconhecimento de voz',
				'Conhecimento do nome do familiar (obtido de redes sociais)'
			],
			desfecho: 'A vítima transferiu 850€. O filho real não sabia de nada.',
			prejuizo: '850€'
		},
		{
			id: 19,
			data: '2023-10',
			tipo: 'investimento',
			canal: 'Redes sociais',
			titulo: 'Anúncio falso com rosto de personalidade portuguesa a promover plataforma crypto',
			descricao: 'Anúncio no Facebook com vídeo deepfake de personalidade mediática portuguesa a recomendar uma plataforma de investimento em criptomoedas. O registo era gratuito e o "investimento mínimo" era de 250€.',
			sinais: [
				'Vídeo com sincronização labial imperfeita e qualidade estranha (deepfake)',
				'Personalidade nunca fez tal declaração — verificável nas suas redes sociais oficiais',
				'Plataforma sem regulamentação da CMVM ou entidade europeia',
				'Após registo, "gestor dedicado" contacta por WhatsApp para pressionar a investir mais',
				'Impossibilidade de levantar fundos sem pagar "taxas de verificação"'
			],
			desfecho: 'A vítima depositou 2.500€. Nunca conseguiu levantar o dinheiro. Plataforma desapareceu.',
			prejuizo: '2.500€'
		},
		{
			id: 20,
			data: '2024-02',
			tipo: 'phishing',
			canal: 'Email',
			titulo: 'Email falso dos CTT sobre encomenda retida na alfândega',
			descricao: 'Email com design dos CTT a informar que uma encomenda estava retida na alfândega por falta de documentação. Para desbloquear, devia preencher um formulário com dados pessoais completos (CC, NIF, morada) e pagar 3,99€ de taxa administrativa.',
			sinais: [
				'Remetente com domínio diferente de ctt.pt',
				'Não havia número de encomenda específico associado',
				'Pedido de número do Cartão de Cidadão — os CTT nunca pedem o CC por email',
				'O link de pagamento não era em ctt.pt mas num domínio diferente',
				'Má formatação e erros de português no corpo do email'
			],
			desfecho: 'A vítima preencheu o formulário completo mas desconfiou antes de pagar. Dados pessoais comprometidos, sem perda financeira direta.',
			prejuizo: 'Dados pessoais (CC, NIF, morada)'
		}
	];

	const tipoLabels = {
		'phishing': 'Phishing',
		'burla-romantica': 'Burla Romântica',
		'falso-tecnico': 'Falso Técnico',
		'ransomware': 'Ransomware',
		'mb-way': 'MB WAY',
		'investimento': 'Investimento Falso',
		'burla-familiar': 'Burla Familiar'
	};

	const tipoCores = {
		'phishing': { bg: '#FFF0F0', text: '#C0392B', border: '#E57373' },
		'burla-romantica': { bg: '#FFF0FB', text: '#8E44AD', border: '#CE93D8' },
		'falso-tecnico': { bg: '#FFF8E1', text: '#E65100', border: '#FFB74D' },
		'ransomware': { bg: '#F3E5F5', text: '#6A1B9A', border: '#BA68C8' },
		'mb-way': { bg: '#E8F5E9', text: '#2E7D32', border: '#81C784' },
		'investimento': { bg: '#E3F2FD', text: '#1565C0', border: '#64B5F6' },
		'burla-familiar': { bg: '#FFF3E0', text: '#BF360C', border: '#FF8A65' }
	};

	const canalEmoji = {
		'SMS': '📱',
		'Email': '📧',
		'Telefone': '📞',
		'WhatsApp': '💬',
		'Redes sociais': '🌐',
		'Site falso': '🖥️'
	};

	const todosTipos = Object.keys(tipoLabels);
	const todosCanais = ['SMS', 'Email', 'Telefone', 'WhatsApp', 'Redes sociais', 'Site falso'];

	let filtroTipo = $state('');
	let filtroCanal = $state('');
	let pesquisa = $state('');
	let expandidos = $state(new Set());

	const casosFiltrados = $derived(() => {
		const termo = pesquisa.toLowerCase().trim();
		return casos.filter(c => {
			if (filtroTipo && c.tipo !== filtroTipo) return false;
			if (filtroCanal && c.canal !== filtroCanal) return false;
			if (termo) {
				const haystack = (c.titulo + ' ' + c.descricao + ' ' + c.sinais.join(' ')).toLowerCase();
				if (!haystack.includes(termo)) return false;
			}
			return true;
		});
	});

	const totalPrejuizo = $derived(() => {
		let total = 0;
		casos.forEach(c => {
			const match = c.prejuizo.match(/[\d.,]+€/);
			if (match) {
				const valor = parseFloat(match[0].replace('€', '').replace('.', '').replace(',', '.'));
				if (!isNaN(valor)) total += valor;
			}
		});
		return total.toLocaleString('pt-PT') + '€';
	});

	const canalMaisComum = $derived(() => {
		const contagem = {};
		casos.forEach(c => { contagem[c.canal] = (contagem[c.canal] || 0) + 1; });
		return Object.entries(contagem).sort((a, b) => b[1] - a[1])[0][0];
	});

	function toggleExpandido(id) {
		const novo = new Set(expandidos);
		if (novo.has(id)) novo.delete(id);
		else novo.add(id);
		expandidos = novo;
	}

	function formatarData(dataStr) {
		const [ano, mes] = dataStr.split('-');
		const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
		return `${meses[parseInt(mes) - 1]} ${ano}`;
	}

	function limparFiltros() {
		filtroTipo = '';
		filtroCanal = '';
		pesquisa = '';
	}

	const temFiltros = $derived(() => filtroTipo !== '' || filtroCanal !== '' || pesquisa !== '');
</script>

<svelte:head>
	<title>Arquivo de Casos | NavegaSeguro</title>
	<meta name="description" content="Casos reais documentados de fraude e burla online em Portugal — aprenda a reconhecer os sinais de alerta." />
</svelte:head>

<main>
	<!-- Hero -->
	<section class="hero">
		<div class="hero-inner">
			<div class="hero-badge">Casos Reais Documentados</div>
			<h1>Arquivo de Fraudes em Portugal</h1>
			<p class="hero-sub">
				Casos baseados em padrões reais reportados às autoridades portuguesas e ao CERT.PT.
				Nomes e detalhes identificativos foram anonimizados. Aprenda a reconhecer os sinais antes de ser afetado.
			</p>
		</div>
	</section>

	<!-- Stats bar -->
	<section class="stats-bar" aria-label="Estatísticas dos casos documentados">
		<div class="stats-inner">
			<div class="stat">
				<span class="stat-num">{casos.length}</span>
				<span class="stat-label">Casos documentados</span>
			</div>
			<div class="stat-divider" aria-hidden="true"></div>
			<div class="stat">
				<span class="stat-num">{totalPrejuizo()}</span>
				<span class="stat-label">Prejuízo total registado</span>
			</div>
			<div class="stat-divider" aria-hidden="true"></div>
			<div class="stat">
				<span class="stat-num">{canalEmoji[canalMaisComum()]} {canalMaisComum()}</span>
				<span class="stat-label">Canal mais frequente</span>
			</div>
			<div class="stat-divider" aria-hidden="true"></div>
			<div class="stat">
				<span class="stat-num">2023–2024</span>
				<span class="stat-label">Período coberto</span>
			</div>
		</div>
	</section>

	<div class="pagina">
		<!-- Filtros -->
		<aside class="filtros" aria-label="Filtros">
			<div class="filtros-topo">
				<h2 class="filtros-titulo">Filtrar casos</h2>
				{#if temFiltros()}
					<button class="limpar-btn" onclick={limparFiltros}>Limpar filtros</button>
				{/if}
			</div>

			<!-- Pesquisa -->
			<div class="campo-pesquisa">
				<label for="pesquisa" class="campo-label">Pesquisar</label>
				<div class="input-wrapper">
					<span class="input-icon" aria-hidden="true">🔍</span>
					<input
						id="pesquisa"
						type="search"
						placeholder="Palavra-chave..."
						bind:value={pesquisa}
						class="input-pesquisa"
					/>
				</div>
			</div>

			<!-- Filtro por tipo -->
			<fieldset class="filtro-grupo">
				<legend class="campo-label">Tipo de fraude</legend>
				<div class="pills">
					<button
						class="pill"
						class:pill-ativo={filtroTipo === ''}
						onclick={() => filtroTipo = ''}
					>Todos</button>
					{#each todosTipos as tipo}
						<button
							class="pill"
							class:pill-ativo={filtroTipo === tipo}
							style="--pill-bg: {tipoCores[tipo].bg}; --pill-text: {tipoCores[tipo].text}; --pill-border: {tipoCores[tipo].border};"
							onclick={() => filtroTipo = filtroTipo === tipo ? '' : tipo}
						>{tipoLabels[tipo]}</button>
					{/each}
				</div>
			</fieldset>

			<!-- Filtro por canal -->
			<fieldset class="filtro-grupo">
				<legend class="campo-label">Canal utilizado</legend>
				<div class="pills">
					<button
						class="pill"
						class:pill-ativo={filtroCanal === ''}
						onclick={() => filtroCanal = ''}
					>Todos</button>
					{#each todosCanais as canal}
						<button
							class="pill"
							class:pill-ativo={filtroCanal === canal}
							onclick={() => filtroCanal = filtroCanal === canal ? '' : canal}
						>{canalEmoji[canal]} {canal}</button>
					{/each}
				</div>
			</fieldset>
		</aside>

		<!-- Lista de casos -->
		<section class="casos-lista" aria-label="Lista de casos">
			{#if casosFiltrados().length === 0}
				<div class="sem-resultados">
					<p class="sem-resultados-emoji" aria-hidden="true">🔍</p>
					<p class="sem-resultados-titulo">Nenhum caso encontrado</p>
					<p class="sem-resultados-sub">Tente ajustar os filtros ou a pesquisa.</p>
					<button class="limpar-btn-central" onclick={limparFiltros}>Limpar filtros</button>
				</div>
			{:else}
				<div class="resultados-info" aria-live="polite">
					{casosFiltrados().length} caso{casosFiltrados().length !== 1 ? 's' : ''} encontrado{casosFiltrados().length !== 1 ? 's' : ''}
				</div>

				<div class="casos-grid">
					{#each casosFiltrados() as caso (caso.id)}
						{@const cor = tipoCores[caso.tipo]}
						{@const aberto = expandidos.has(caso.id)}
						<article class="caso-card" class:caso-aberto={aberto}>
							<div class="caso-header">
								<div class="caso-badges">
									<span class="badge-data">{formatarData(caso.data)}</span>
									<span
										class="badge-tipo"
										style="background:{cor.bg}; color:{cor.text}; border-color:{cor.border};"
									>{tipoLabels[caso.tipo]}</span>
									<span class="badge-canal">{canalEmoji[caso.canal]} {caso.canal}</span>
								</div>
								<span
									class="badge-prejuizo"
									class:prejuizo-sem={caso.prejuizo.startsWith('Sem') || caso.prejuizo.includes('sem prejuízo')}
									class:prejuizo-dados={caso.prejuizo.toLowerCase().includes('dados')}
								>{caso.prejuizo}</span>
							</div>

							<h3 class="caso-titulo">{caso.titulo}</h3>
							<p class="caso-desc">{caso.descricao}</p>

							<button
								class="expandir-btn"
								onclick={() => toggleExpandido(caso.id)}
								aria-expanded={aberto}
								aria-controls="detalhes-{caso.id}"
							>
								{aberto ? 'Mostrar menos' : 'Ver sinais de alerta e desfecho'}
								<span class="expandir-seta" aria-hidden="true">{aberto ? '▲' : '▼'}</span>
							</button>

							{#if aberto}
								<div id="detalhes-{caso.id}" class="caso-detalhes">
									<div class="sinais-bloco">
										<h4 class="sinais-titulo">
											<span aria-hidden="true">⚠️</span> Sinais de alerta
										</h4>
										<ul class="sinais-lista">
											{#each caso.sinais as sinal}
												<li class="sinal-item">{sinal}</li>
											{/each}
										</ul>
									</div>

									<div class="desfecho-bloco">
										<h4 class="desfecho-titulo">
											<span aria-hidden="true">📋</span> Desfecho
										</h4>
										<p class="desfecho-texto">{caso.desfecho}</p>
									</div>
								</div>
							{/if}
						</article>
					{/each}
				</div>
			{/if}
		</section>
	</div>

	<!-- Como te proteger -->
	<section class="proteger-secao" aria-labelledby="proteger-titulo">
		<div class="proteger-inner">
			<div class="proteger-icone" aria-hidden="true">🛡️</div>
			<h2 id="proteger-titulo">Como te proteger</h2>
			<p class="proteger-sub">
				Conhecer os casos é o primeiro passo. O segundo é verificar se as tuas defesas digitais estão atualizadas.
			</p>
			<div class="proteger-dicas">
				<div class="dica">
					<span class="dica-icone" aria-hidden="true">🔗</span>
					<p>Verifica sempre o domínio dos links — só confies em URLs que terminam no domínio oficial</p>
				</div>
				<div class="dica">
					<span class="dica-icone" aria-hidden="true">📞</span>
					<p>Desconfie de contactos não solicitados, mesmo que pareçam de entidades conhecidas</p>
				</div>
				<div class="dica">
					<span class="dica-icone" aria-hidden="true">⏱️</span>
					<p>Urgência e pressão de tempo são técnicas de manipulação — pare, respire e verifique</p>
				</div>
				<div class="dica">
					<span class="dica-icone" aria-hidden="true">💬</span>
					<p>Antes de transferir dinheiro, confirme sempre por um canal diferente (ligue diretamente)</p>
				</div>
			</div>
			<a href="/checklist" class="cta-btn">
				Fazer a Checklist de Segurança Pessoal →
			</a>
			<p class="proteger-emergencia">
				Foi vítima de fraude?
				<a href="/emergencia" class="link-emergencia">Veja o que fazer em caso de emergência</a>
				ou ligue para a <strong>GNR/PSP (112)</strong> e o <strong>CERT.PT (cert@cert.pt)</strong>
			</p>
		</div>
	</section>
</main>

<style>
	main {
		min-height: 60vh;
	}

	/* ── Hero ── */
	.hero {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
		color: #fff;
		padding: 3.5rem 2rem 3rem;
		text-align: center;
	}

	.hero-inner {
		max-width: 700px;
		margin: 0 auto;
	}

	.hero-badge {
		display: inline-block;
		background: rgba(255,255,255,0.12);
		border: 1px solid rgba(255,255,255,0.25);
		color: #a8d8ff;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
		margin-bottom: 1.2rem;
	}

	.hero h1 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 900;
		margin-bottom: 1rem;
		line-height: 1.15;
	}

	.hero-sub {
		font-size: 1rem;
		color: rgba(255,255,255,0.75);
		line-height: 1.7;
		max-width: 580px;
		margin: 0 auto;
	}

	/* ── Stats bar ── */
	.stats-bar {
		background: #fff;
		border-bottom: 1px solid #e8edf5;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);
	}

	.stats-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 1.25rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
		flex: 1;
		min-width: 120px;
	}

	.stat-num {
		font-family: 'Nunito', sans-serif;
		font-size: 1.4rem;
		font-weight: 900;
		color: #1a1a2e;
	}

	.stat-label {
		font-size: 0.75rem;
		color: #555;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.stat-divider {
		width: 1px;
		height: 40px;
		background: #e0e6f0;
		flex-shrink: 0;
	}

	/* ── Layout principal ── */
	.pagina {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2.5rem 1.5rem;
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: 2rem;
		align-items: start;
	}

	/* ── Filtros ── */
	.filtros {
		background: #fff;
		border: 1px solid #e8edf5;
		border-radius: 12px;
		padding: 1.5rem;
		position: sticky;
		top: 80px;
	}

	.filtros-topo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.filtros-titulo {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #1a1a2e;
	}

	.limpar-btn {
		background: none;
		border: none;
		color: #0984E3;
		font-size: 0.8rem;
		font-family: inherit;
		cursor: pointer;
		padding: 0;
		font-weight: 500;
	}
	.limpar-btn:hover { text-decoration: underline; }

	.campo-pesquisa {
		margin-bottom: 1.25rem;
	}

	.campo-label {
		display: block;
		font-size: 0.78rem;
		font-weight: 600;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.input-wrapper {
		position: relative;
	}

	.input-icon {
		position: absolute;
		left: 0.65rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 0.85rem;
		pointer-events: none;
	}

	.input-pesquisa {
		width: 100%;
		padding: 0.55rem 0.75rem 0.55rem 2rem;
		border: 1px solid #dde3ee;
		border-radius: 8px;
		font-size: 0.9rem;
		font-family: inherit;
		color: #1a1a2e;
		background: #f8faff;
		transition: border-color 0.15s, box-shadow 0.15s;
	}
	.input-pesquisa:focus {
		outline: none;
		border-color: #0984E3;
		box-shadow: 0 0 0 3px rgba(9,132,227,0.15);
	}

	.filtro-grupo {
		border: none;
		padding: 0;
		margin-bottom: 1.25rem;
	}

	.filtro-grupo legend {
		margin-bottom: 0.5rem;
	}

	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.pill {
		background: #f0f3fa;
		border: 1px solid #dde3ee;
		color: #555;
		border-radius: 999px;
		padding: 0.3rem 0.7rem;
		font-size: 0.78rem;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.15s;
		font-weight: 500;
		line-height: 1.4;
	}
	.pill:hover {
		background: #e3e9f5;
		border-color: #bdc8de;
		color: #1a1a2e;
	}
	.pill.pill-ativo {
		background: var(--pill-bg, #1a1a2e);
		color: var(--pill-text, #fff);
		border-color: var(--pill-border, #1a1a2e);
		font-weight: 600;
	}
	.pill.pill-ativo:not([style]) {
		background: #1a1a2e;
		color: #fff;
		border-color: #1a1a2e;
	}

	/* ── Casos ── */
	.casos-lista {
		min-width: 0;
	}

	.resultados-info {
		font-size: 0.85rem;
		color: #555;
		margin-bottom: 1.25rem;
		font-weight: 500;
	}

	.casos-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.caso-card {
		background: #fff;
		border: 1px solid #e8edf5;
		border-radius: 12px;
		padding: 1.4rem 1.5rem;
		transition: box-shadow 0.2s, border-color 0.2s;
	}
	.caso-card:hover {
		box-shadow: 0 4px 16px rgba(0,0,0,0.08);
		border-color: #c8d4e8;
	}
	.caso-aberto {
		border-color: #c8d4e8;
		box-shadow: 0 4px 16px rgba(0,0,0,0.08);
	}

	.caso-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 0.85rem;
		flex-wrap: wrap;
	}

	.caso-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		align-items: center;
	}

	.badge-data {
		background: #f0f3fa;
		color: #666;
		border: 1px solid #dde3ee;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.2rem 0.55rem;
		border-radius: 6px;
	}

	.badge-tipo {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 0.2rem 0.6rem;
		border-radius: 6px;
		border: 1px solid;
	}

	.badge-canal {
		background: #f5f7ff;
		color: #4a5568;
		border: 1px solid #dde3ee;
		font-size: 0.75rem;
		font-weight: 500;
		padding: 0.2rem 0.55rem;
		border-radius: 6px;
	}

	.badge-prejuizo {
		background: #FFF5F5;
		color: #C53030;
		border: 1px solid #FC8181;
		font-size: 0.78rem;
		font-weight: 700;
		padding: 0.25rem 0.65rem;
		border-radius: 6px;
		white-space: nowrap;
		flex-shrink: 0;
	}
	.badge-prejuizo.prejuizo-sem {
		background: #F0FFF4;
		color: #276749;
		border-color: #9AE6B4;
	}
	.badge-prejuizo.prejuizo-dados {
		background: #FFFAF0;
		color: #C05621;
		border-color: #FBD38D;
	}

	.caso-titulo {
		font-family: 'Nunito', sans-serif;
		font-size: 1.05rem;
		font-weight: 800;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
		line-height: 1.35;
	}

	.caso-desc {
		font-size: 0.9rem;
		color: #555;
		line-height: 1.65;
		margin-bottom: 1rem;
	}

	.expandir-btn {
		background: none;
		border: 1px solid #dde3ee;
		color: #0984E3;
		font-size: 0.85rem;
		font-family: inherit;
		font-weight: 600;
		padding: 0.45rem 0.9rem;
		border-radius: 8px;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		transition: background 0.15s, border-color 0.15s;
	}
	.expandir-btn:hover {
		background: #f0f7ff;
		border-color: #0984E3;
	}

	.expandir-seta {
		font-size: 0.7rem;
	}

	.caso-detalhes {
		margin-top: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid #e8edf5;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.sinais-bloco, .desfecho-bloco {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.sinais-titulo, .desfecho-titulo {
		font-size: 0.85rem;
		font-weight: 700;
		color: #1a1a2e;
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.sinais-lista {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.sinal-item {
		font-size: 0.875rem;
		color: #444;
		line-height: 1.5;
		padding-left: 1.25rem;
		position: relative;
	}
	.sinal-item::before {
		content: '›';
		position: absolute;
		left: 0;
		color: #E17055;
		font-weight: 700;
		font-size: 1rem;
		line-height: 1.4;
	}

	.desfecho-texto {
		font-size: 0.875rem;
		color: #444;
		line-height: 1.6;
		background: #F8FAFF;
		border: 1px solid #e8edf5;
		border-left: 3px solid #0984E3;
		padding: 0.65rem 0.85rem;
		border-radius: 0 6px 6px 0;
	}

	/* ── Sem resultados ── */
	.sem-resultados {
		text-align: center;
		padding: 4rem 2rem;
		color: #555;
	}
	.sem-resultados-emoji { font-size: 2.5rem; margin-bottom: 0.75rem; }
	.sem-resultados-titulo { font-size: 1.1rem; font-weight: 700; color: #444; margin-bottom: 0.4rem; }
	.sem-resultados-sub { font-size: 0.9rem; margin-bottom: 1.25rem; }
	.limpar-btn-central {
		background: #0984E3;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 0.6rem 1.4rem;
		font-size: 0.9rem;
		font-family: inherit;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s;
	}
	.limpar-btn-central:hover { background: #0773c5; }

	/* ── Como te proteger ── */
	.proteger-secao {
		background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
		color: #fff;
		padding: 4rem 2rem;
		margin-top: 1rem;
		text-align: center;
	}

	.proteger-inner {
		max-width: 720px;
		margin: 0 auto;
	}

	.proteger-icone {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.proteger-secao h2 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 900;
		margin-bottom: 0.75rem;
	}

	.proteger-sub {
		color: rgba(255,255,255,0.75);
		font-size: 1rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		max-width: 560px;
		margin-left: auto;
		margin-right: auto;
	}

	.proteger-dicas {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2.5rem;
		text-align: left;
	}

	.dica {
		background: rgba(255,255,255,0.08);
		border: 1px solid rgba(255,255,255,0.12);
		border-radius: 10px;
		padding: 1rem 1.1rem;
		display: flex;
		gap: 0.65rem;
		align-items: flex-start;
	}

	.dica-icone {
		font-size: 1.2rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.dica p {
		font-size: 0.875rem;
		color: rgba(255,255,255,0.85);
		line-height: 1.55;
	}

	.cta-btn {
		display: inline-block;
		background: #0984E3;
		color: #fff;
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1rem;
		padding: 0.85rem 2rem;
		border-radius: 10px;
		transition: background 0.2s, transform 0.15s;
		margin-bottom: 1.5rem;
	}
	.cta-btn:hover {
		background: #0773c5;
		transform: translateY(-1px);
	}

	.proteger-emergencia {
		font-size: 0.85rem;
		color: rgba(255,255,255,0.6);
		line-height: 1.6;
	}

	.link-emergencia {
		color: #74b9ff;
		text-decoration: underline;
		font-weight: 500;
	}
	.link-emergencia:hover { color: #fff; }

	/* ── Responsivo ── */
	@media (max-width: 768px) {
		.pagina {
			grid-template-columns: 1fr;
			padding: 1.5rem 1rem;
		}

		.filtros {
			position: static;
		}

		.stats-inner {
			padding: 1rem;
			gap: 0.75rem;
		}

		.stat-divider {
			display: none;
		}

		.stat {
			min-width: 100px;
		}

		.caso-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.hero {
			padding: 2.5rem 1.25rem 2rem;
		}

		.proteger-dicas {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.caso-card {
			padding: 1.1rem 1.1rem;
		}

		.stats-inner {
			grid-template-columns: 1fr 1fr;
			display: grid;
		}
	}
</style>
