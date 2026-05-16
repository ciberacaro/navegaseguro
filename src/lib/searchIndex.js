// Índice de pesquisa global do NavegaSeguro.
// Curado manualmente: ao adicionar conteúdo significativo, atualizar aqui.
// tipo: 'page' | 'faixa' | 'tema' | 'noticia' | 'arquivo' | 'faq' | 'glossario' | 'ferramenta'

export const searchIndex = [
	// ─── Páginas principais ───
	{ tipo: 'page', titulo: 'Início', desc: 'Página inicial do NavegaSeguro', url: '/', tags: ['inicio', 'home'] },
	{ tipo: 'page', titulo: 'Ferramentas', desc: 'Verificador de URL, analisador de SMS, simulador, verificador de passwords', url: '/ferramentas', tags: ['ferramentas'] },
	{ tipo: 'page', titulo: 'Notícias e alertas', desc: 'Alertas recentes de cibersegurança em Portugal', url: '/noticias', tags: ['alertas', 'notícias'] },
	{ tipo: 'page', titulo: 'Perguntas Frequentes (FAQ)', desc: '15 dúvidas mais comuns sobre cibersegurança', url: '/faq', tags: ['faq', 'perguntas'] },
	{ tipo: 'page', titulo: 'Glossário', desc: '61 termos de cibersegurança explicados', url: '/glossario', tags: ['glossário', 'termos'] },
	{ tipo: 'page', titulo: 'Recursos externos', desc: 'Linhas de apoio, autoridades e organizações em Portugal', url: '/recursos', tags: ['recursos', 'links'] },
	{ tipo: 'page', titulo: 'Pais e Educadores', desc: 'Planos de sessão, fichas e avaliação de turma', url: '/educadores', tags: ['educadores', 'professores', 'escola'] },
	{ tipo: 'page', titulo: 'Fichas de trabalho', desc: 'Fichas imprimíveis A4 para todas as faixas etárias', url: '/educadores/fichas', tags: ['fichas', 'trabalho'] },
	{ tipo: 'page', titulo: 'Avaliação de turma', desc: 'Modo apresentador + folha de respostas para professores', url: '/educadores/avaliacao', tags: ['avaliação', 'turma'] },
	{ tipo: 'page', titulo: 'Estou a ser burlado agora — Emergência', desc: 'Passos imediatos para cada situação de fraude em curso', url: '/emergencia', tags: ['emergência', 'burla', 'agora', 'ajuda'] },
	{ tipo: 'page', titulo: 'Sobre o NavegaSeguro', desc: 'Missão, princípios e acessibilidade', url: '/sobre', tags: ['sobre', 'missão', 'acessibilidade'] },
	{ tipo: 'page', titulo: 'Contacto e parcerias', desc: 'Contacto para escolas, instituições e media', url: '/contacto', tags: ['contacto', 'parcerias'] },
	{ tipo: 'page', titulo: 'Empresas e Instituições', desc: 'Cibersegurança para PME e instituições públicas em Portugal', url: '/empresas', tags: ['empresas', 'PME', 'instituições', 'organização'] },
	{ tipo: 'page', titulo: 'Calendário de Cibersegurança', desc: 'Datas importantes: Dia da Internet Segura, Mês Europeu da Cibersegurança...', url: '/calendario', tags: ['calendário', 'datas', 'awareness'] },
	{ tipo: 'page', titulo: 'Arquivo de Casos Reais', desc: '35 burlas documentadas em Portugal, com filtros', url: '/arquivo', tags: ['arquivo', 'casos'] },
	{ tipo: 'page', titulo: 'Cartão imprimível', desc: 'Cartão A5 com sinais de alerta para seniores', url: '/imprimir', tags: ['imprimir', 'cartão'] },
	{ tipo: 'page', titulo: 'Checklist de Segurança', desc: '10 perguntas com recomendações personalizadas', url: '/checklist', tags: ['checklist'] },
	{ tipo: 'page', titulo: 'Quiz Completo', desc: '35 perguntas por todas as faixas — com certificado', url: '/quiz-completo', tags: ['quiz', 'teste'] },
	{ tipo: 'page', titulo: 'Quiz: Real ou Fraude?', desc: 'Classifica mensagens reais e fraudulentas — treino prático', url: '/quiz-phishing', tags: ['quiz', 'phishing', 'fraude'] },
	{ tipo: 'page', titulo: 'Pesquisa', desc: 'Pesquisa em todo o conteúdo do site', url: '/pesquisa', tags: ['pesquisa', 'search'] },

	// ─── Faixas etárias ───
	{ tipo: 'faixa', titulo: 'Pré-Escolar', desc: '3–5 anos · Primeiros passos seguros online', url: '/pre-escolar', tags: ['crianças', 'pré-escolar', 'pais'] },
	{ tipo: 'faixa', titulo: '1.º Ciclo', desc: '6–10 anos · Passwords, estranhos online, regras básicas', url: '/primeiro-ciclo', tags: ['primeiro ciclo', 'crianças'] },
	{ tipo: 'faixa', titulo: '2.º Ciclo', desc: '10–12 anos · Redes sociais, privacidade, primeiro telemóvel', url: '/segundo-ciclo', tags: ['segundo ciclo', 'jovens'] },
	{ tipo: 'faixa', titulo: '3.º Ciclo', desc: '12–15 anos · Cyberbullying, sextorsão, grooming, deepfakes', url: '/terceiro-ciclo', tags: ['terceiro ciclo', 'adolescentes', 'sextorsão', 'grooming'] },
	{ tipo: 'faixa', titulo: 'Secundário', desc: '15–18 anos · Fraudes financeiras, IA, RGPD, quishing, passkeys', url: '/secundario', tags: ['secundário', 'jovens', 'investimento'] },
	{ tipo: 'faixa', titulo: 'Adultos', desc: '18–59 anos · Phishing, MB Way, vishing, SIM swap, passkeys, teletrabalho', url: '/adultos', tags: ['adultos'] },
	{ tipo: 'faixa', titulo: 'Seniores', desc: '60+ anos · Burlas telefónicas, falso técnico, voz clonada, QR codes', url: '/seniores', tags: ['seniores', 'idosos', '60+'] },

	// ─── Temas-chave (deep-links indicativos) ───
	{ tipo: 'tema', titulo: 'Quishing (QR codes falsos)', desc: 'Autocolantes em parquímetros, restaurantes e carregadores VE', url: '/adultos', tags: ['quishing', 'QR', 'parquímetro'] },
	{ tipo: 'tema', titulo: 'SIM Swap', desc: 'Roubo do número de telemóvel via operadora — proteja com app de 2FA', url: '/adultos', tags: ['sim swap', 'operadora', '2FA'] },
	{ tipo: 'tema', titulo: 'Passkeys', desc: 'Chaves de acesso biométricas — resistentes a phishing por natureza', url: '/secundario', tags: ['passkeys', 'biometria'] },
	{ tipo: 'tema', titulo: 'Burla MB Way', desc: 'Falso comprador OLX que pede NIF — esquema clássico em Portugal', url: '/adultos', tags: ['mb way', 'olx'] },
	{ tipo: 'tema', titulo: 'Falso filho/neto no WhatsApp', desc: 'Mensagem de "mudei de número" a pedir dinheiro urgente', url: '/seniores', tags: ['falso filho', 'whatsapp', 'familiar'] },
	{ tipo: 'tema', titulo: 'Sextorsão', desc: 'Chantagem com imagens íntimas — não pague, denuncie em 800 21 90 90', url: '/terceiro-ciclo', tags: ['sextorsão', 'chantagem'] },
	{ tipo: 'tema', titulo: 'Grooming', desc: 'Aliciamento de menores por adultos predatórios online', url: '/terceiro-ciclo', tags: ['grooming', 'predador'] },
	{ tipo: 'tema', titulo: 'Deepfakes', desc: 'Imagens e vídeos manipulados por IA — em Portugal é crime', url: '/secundario', tags: ['deepfake', 'ia'] },
	{ tipo: 'tema', titulo: 'Voz clonada por IA', desc: 'Familiares falsos com voz idêntica — combine palavra-código familiar', url: '/seniores', tags: ['voz', 'ia', 'clonagem'] },
	{ tipo: 'tema', titulo: 'Phishing por email/SMS', desc: 'CTT, AT, EDP, MEO — todas as marcas são imitadas', url: '/adultos', tags: ['phishing', 'sms', 'email'] },
	{ tipo: 'tema', titulo: 'Vishing (burla por telefone)', desc: 'Falso banco, polícia ou operadora — desligue e ligue você', url: '/adultos', tags: ['vishing', 'telefone'] },
	{ tipo: 'tema', titulo: 'Ransomware', desc: 'Encriptação de ficheiros + pedido de resgate — backup é a defesa', url: '/adultos', tags: ['ransomware', 'backup'] },
	{ tipo: 'tema', titulo: 'Investimento falso (cripto / Forex)', desc: 'Plataformas não registadas na CMVM — sempre fraude', url: '/secundario', tags: ['investimento', 'cripto'] },
	{ tipo: 'tema', titulo: 'Burla romântica', desc: 'Conversas longas, pedido de dinheiro, nunca videochamada', url: '/adultos', tags: ['romance', 'tinder'] },
	{ tipo: 'tema', titulo: 'Cyberbullying', desc: 'Como reconhecer, parar e denunciar', url: '/segundo-ciclo', tags: ['bullying', 'cyberbullying'] },
	{ tipo: 'tema', titulo: 'Reputação digital / Pegada digital', desc: 'O que publicas hoje aparece em entrevistas daqui a 5 anos', url: '/secundario', tags: ['reputação', 'pegada digital'] },
	{ tipo: 'tema', titulo: 'RGPD — os teus direitos', desc: 'Acesso, retificação, apagamento, portabilidade', url: '/adultos', tags: ['rgpd', 'dados', 'privacidade'] },
	{ tipo: 'tema', titulo: '2FA / Verificação em dois passos', desc: 'Sempre por app (Authy, Google Authenticator), nunca por SMS', url: '/adultos', tags: ['2fa', 'autenticação'] },
	{ tipo: 'tema', titulo: 'Gestor de palavras-passe', desc: 'Bitwarden (gratuito, open-source) — uma palavra-passe única por conta', url: '/adultos', tags: ['password', 'bitwarden'] },
	{ tipo: 'tema', titulo: 'Backup 3-2-1', desc: '3 cópias, 2 suportes, 1 fora de casa', url: '/adultos', tags: ['backup'] },

	// ─── Ferramentas (deep links a secções de /ferramentas) ───
	{ tipo: 'ferramenta', titulo: 'Verificador de URL / QR Code', desc: 'Análise heurística do domínio — lookalikes, encurtadores, TLDs de risco', url: '/ferramentas', tags: ['url', 'qr', 'verificador'] },
	{ tipo: 'ferramenta', titulo: 'Analisador de SMS suspeito', desc: 'Padrões de phishing — urgência, marcas, falso familiar', url: '/ferramentas', tags: ['sms', 'analisador'] },
	{ tipo: 'ferramenta', titulo: 'Simulador de fraudes', desc: 'Clica nas partes suspeitas de mensagens reais', url: '/ferramentas', tags: ['simulador'] },
	{ tipo: 'ferramenta', titulo: 'Verificador de palavra-passe', desc: 'Testa força — calculado localmente, sem envio', url: '/ferramentas', tags: ['password', 'força'] },
	{ tipo: 'ferramenta', titulo: 'Gerador de palavra-passe por frase', desc: 'Frase memorável → palavra-passe forte', url: '/ferramentas', tags: ['gerador', 'password'] }
];

// Notícias, arquivo, FAQ e glossário são adicionados dinamicamente
// pelo /pesquisa/+page.svelte ao carregar (importação direta dos arrays
// quando possível, ou índice estático de títulos abaixo).

export const indiceTitulos = {
	noticias: [
		'Quishing: QR codes falsos detetados em parquímetros e carregadores de VE em Lisboa e Porto',
		'SIM Swap em Portugal: criminosos convencem operadoras a transferir números de telemóvel',
		'Bancos portugueses começam a implementar passkeys',
		'Sequestro de contas WhatsApp pelo código de 6 dígitos',
		'Onda de SMS falsos da Autoridade Tributária a anunciar reembolsos',
		'Burla com IA: chamadas a imitar a voz de familiares',
		'Plataformas falsas de investimento em cripto no Instagram',
		'Aplicações de mensagens efémeras usadas para extorsão sexual de jovens',
		'Atualização crítica: routers domésticos com senha por defeito',
		'Lojas online falsas a aproveitar promoções de Carnaval'
	],
	arquivo: [
		'SMS falso dos CTT com taxa de entrega',
		'Falso técnico da Microsoft a pedir acesso remoto',
		'Burla romântica no Facebook — engenheiro offshore',
		'Ransomware em empresa familiar via email',
		'Falso sobrinho em apuros',
		'Falso comprador OLX a pagar por MB WAY',
		'Falso gestor de investimentos em cripto no Instagram',
		'SMS falso da EDP com corte de fornecimento',
		'Email falso do BPI a pedir credenciais',
		'Falso concurso do Continente — vale de 500€',
		'Pop-up de vírus falso com suporte técnico',
		'SMS falso do banco para validar MB WAY',
		'Burla romântica WhatsApp — viúvo militar',
		'Email de investimento em obrigações com retorno elevado',
		'Email falso das Finanças sobre reembolso de IRS',
		'SMS falso do Governo sobre subsídio de energia',
		'Falso namorado no Tinder a pedir dinheiro de emergência',
		'Anúncio de arrendamento abaixo do mercado em Lisboa',
		'Falso emprego no estrangeiro a pedir taxas adiantadas',
		'Email com fatura falsa em PDF infetado',
		'SMS falso da AT a anunciar reembolso',
		'Falso comprador OLX com MB WAY',
		'Esquema de investimento em cripto no Instagram',
		'Pop-up "Microsoft" com chamada para falso suporte',
		'WhatsApp "filho que mudou de número"',
		'Phishing por email do departamento de RH',
		'Falso apoio do Instagram a pedir credenciais',
		'Wi-Fi gratuito com SMS de verificação',
		'Pig butchering via app de namoro',
		'Falso técnico da operadora a "atualizar router"',
		'SIM Swap: conta bancária esvaziada',
		'Quishing: QR code falso no parquímetro',
		'Pig butchering no LinkedIn',
		'Sequestro de conta WhatsApp pelo código de 6 dígitos',
		'Anúncio falso no Google leva a software com malware'
	],
	faq: [
		'Qual é uma palavra-passe segura?',
		'Devo mudar a palavra-passe regularmente?',
		'É seguro usar um gestor de palavras-passe?',
		'Recebi um SMS dos CTT/Finanças/MB WAY. É verdadeiro?',
		'Como verifico se um link é seguro antes de clicar?',
		'Caí numa fraude. O que faço agora?',
		'O burlão tem o meu nome e contacto. Como sabe?',
		'A partir de que idade posso dar telemóvel ao meu filho?',
		'Devo ler as conversas do meu filho?',
		'O meu filho foi vítima de cyberbullying. O que fazer?',
		'Comprei numa loja online e não chegou nada. O que fazer?',
		'É seguro guardar o cartão de crédito em sites de compras?',
		'Sou obrigado a aceitar cookies em todos os sites?',
		'Uma empresa usou os meus dados sem autorização. O que fazer?',
		'O Wi-Fi público é seguro?'
	],
	glossario: [
		'2FA', 'Adware', 'Antivírus', 'API', 'Aplicação maliciosa', 'Autenticação',
		'Backup', 'Biometria', 'Bluetooth', 'Botnet', 'Burla 419', 'Burla romântica',
		'CAPTCHA', 'CDN', 'Cibercrime', 'CNCS', 'CNPD', 'Cookies', 'Criptomoeda',
		'Cyberbullying', 'Dark Web', 'Data breach', 'DDoS', 'Deepfake', 'Domínio',
		'Encriptação', 'Engenharia Social', 'Firewall', 'Geolocalização', 'GPG',
		'Grooming', 'Hacker', 'HTTPS', 'IP', 'Keylogger', 'Malware', 'MFA',
		'Passkey', 'Pharming', 'Phishing', 'Pig butchering', 'Quishing', 'Ransomware',
		'RGPD', 'Rootkit', 'Sextorsão', 'SIM Swap', 'Smishing', 'Spam', 'Spear phishing',
		'Spoofing', 'Spyware', 'SSL/TLS', 'Tor', 'Troyano', 'TLS', 'URL',
		'Verificação em dois passos', 'Vishing', 'VPN', 'Vulnerabilidade', 'Worm',
		'XSS', 'Zero-day'
	]
};
