<script>
	const grupos = [
		{
			href: '/pre-escolar',
			emoji: '🧸',
			titulo: 'Pré-Escolar',
			idades: '3 – 5 anos',
			desc: 'Primeiros passos seguros online com personagens e jogos simples',
			cor: '#FF9F43',
			fundo: '#FFF5E6'
		},
		{
			href: '/primeiro-ciclo',
			emoji: '🎨',
			titulo: '1.º Ciclo',
			idades: '6 – 10 anos',
			desc: 'Passwords, estranhos online e regras básicas de segurança',
			cor: '#48DBFB',
			fundo: '#E8FAFF'
		},
		{
			href: '/segundo-ciclo',
			emoji: '📱',
			titulo: '2.º Ciclo',
			idades: '10 – 12 anos • 5.º e 6.º ano',
			desc: 'Primeiro telemóvel, redes sociais e privacidade online',
			cor: '#1DD1A1',
			fundo: '#E8FFF8'
		},
		{
			href: '/terceiro-ciclo',
			emoji: '⚡',
			titulo: '3.º Ciclo',
			idades: '12 – 15 anos • 7.º ao 9.º ano',
			desc: 'Reputação digital, cyberbullying e relações online',
			cor: '#FF6B6B',
			fundo: '#FFF0F0'
		},
		{
			href: '/secundario',
			emoji: '🎯',
			titulo: 'Secundário',
			idades: '15 – 18 anos • 10.º ao 12.º ano',
			desc: 'Deepfakes, pegada digital e primeiras fraudes financeiras',
			cor: '#A29BFE',
			fundo: '#F3F0FF'
		},
		{
			href: '/adultos',
			emoji: '👔',
			titulo: 'Adultos',
			idades: '18 – 59 anos',
			desc: 'Phishing bancário, trabalho remoto e proteção da família',
			cor: '#0984E3',
			fundo: '#EBF5FF'
		},
		{
			href: '/seniores',
			emoji: '🌟',
			titulo: 'Seniores',
			idades: '60+ anos',
			desc: 'Burlas telefónicas, suporte técnico falso e compras seguras',
			cor: '#6C5CE7',
			fundo: '#F0EEFF'
		}
	];

	const pilares = [
		{ emoji: '📚', titulo: 'Conteúdo adaptado', desc: 'Cada faixa etária tem linguagem, exemplos e desafios próprios — sem jargão técnico desnecessário.' },
		{ emoji: '🎮', titulo: 'Aprender a brincar', desc: 'Quizzes, simuladores e jogos que tornam a cibersegurança tangível e memorável.' },
		{ emoji: '🇵🇹', titulo: 'Feito para Portugal', desc: 'Exemplos com CTT, MB Way, MEO e situações reais que acontecem em Portugal.' },
		{ emoji: '♿', titulo: 'Acessível a todos', desc: 'Letra grande para seniores, narração para crianças, alto contraste e navegação por teclado.' }
	];
</script>

<svelte:head>
	<title>NavegaSeguro — Cibersegurança para todos</title>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-inner">
			<span class="badge">🇵🇹 Em português europeu · Versão 1.0</span>
			<h1>Navega na internet<br /><span class="destaque">com segurança</span></h1>
			<p class="subtitulo">Aprende a proteger-te online — com conteúdo feito para a tua idade, em português, gratuito e sem publicidade.</p>
			<a href="#escolhe" class="btn-principal">Escolhe a tua faixa etária ↓</a>
		</div>
	</section>

	<section class="grupos" id="escolhe">
		<div class="container">
			<h2>Para quem é o NavegaSeguro?</h2>
			<p class="secao-desc">Escolhe o grupo que melhor te descreve para acederes ao conteúdo adaptado à tua realidade.</p>
			<div class="grelha">
				{#each grupos as g}
					<a href={g.href} class="cartao" style="--cor: {g.cor}; --fundo: {g.fundo}">
						<span class="cartao-emoji">{g.emoji}</span>
						<h3>{g.titulo}</h3>
						<span class="idades">{g.idades}</span>
						<p>{g.desc}</p>
						<span class="seta">Explorar →</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="pilares">
		<div class="container">
			<h2>Porque o NavegaSeguro?</h2>
			<div class="grelha-pilares">
				{#each pilares as p}
					<div class="pilar">
						<span class="pilar-emoji">{p.emoji}</span>
						<h3>{p.titulo}</h3>
						<p>{p.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="urgencia">
		<div class="container">
			<h2>Temas urgentes em Portugal</h2>
			<div class="alertas">
				<div class="alerta">
					<span>📩</span>
					<div>
						<strong>Falsos SMS dos CTT</strong>
						<p>Mensagens falsas a pedir pagamento de taxas de importação — o link rouba dados bancários.</p>
					</div>
				</div>
				<div class="alerta">
					<span>📲</span>
					<div>
						<strong>Fraude MB Way</strong>
						<p>"Envia-me dinheiro por MB Way" — o suposto comprador torna-se o beneficiário.</p>
					</div>
				</div>
				<div class="alerta">
					<span>📞</span>
					<div>
						<strong>Falso técnico da MEO / NOS</strong>
						<p>Ligação a dizer que a tua internet tem problemas — pedem acesso remoto ao computador.</p>
					</div>
				</div>
				<div class="alerta">
					<span>💰</span>
					<div>
						<strong>Esquemas de investimento</strong>
						<p>Promessas de lucros garantidos em crypto ou Forex — normalmente pirâmides financeiras.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="cta-final">
		<div class="container">
			<h2>Em caso de emergência</h2>
			<div class="contactos">
				<a href="tel:116006" class="contacto-card">
					<span>📞</span>
					<strong>116 006</strong>
					<span>APAV — Apoio à Vítima</span>
				</a>
				<a href="tel:18002122" class="contacto-card">
					<span>🛡️</span>
					<strong>1800 21 22 23</strong>
					<span>Linha Internet Segura (gratuita)</span>
				</a>
				<a href="tel:112" class="contacto-card">
					<span>🚨</span>
					<strong>112</strong>
					<span>Emergência</span>
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		min-height: 100vh;
	}

	.hero {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
		color: white;
		padding: 5rem 2rem 6rem;
		text-align: center;
	}

	.hero-inner {
		max-width: 700px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.badge {
		background: rgba(255,255,255,0.15);
		border: 1px solid rgba(255,255,255,0.25);
		padding: 0.35rem 1rem;
		border-radius: 999px;
		font-size: 0.85rem;
		letter-spacing: 0.02em;
	}

	h1 {
		font-family: 'Nunito', sans-serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
	}

	.destaque {
		color: #48DBFB;
	}

	.subtitulo {
		font-size: 1.1rem;
		color: rgba(255,255,255,0.8);
		max-width: 520px;
	}

	.btn-principal {
		background: #48DBFB;
		color: #1a1a2e;
		font-weight: 700;
		padding: 0.9rem 2rem;
		border-radius: 999px;
		font-size: 1rem;
		transition: transform 0.2s, box-shadow 0.2s;
		display: inline-block;
	}

	.btn-principal:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(72,219,251,0.35);
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.grupos {
		padding: 4rem 1.5rem;
	}

	.grupos h2, .pilares h2, .urgencia h2, .cta-final h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.8rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.secao-desc {
		text-align: center;
		color: #666;
		margin-bottom: 2.5rem;
	}

	.grelha {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}

	.cartao {
		background: var(--fundo);
		border: 2px solid transparent;
		border-radius: 1rem;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
		cursor: pointer;
	}

	.cartao:hover {
		transform: translateY(-4px);
		border-color: var(--cor);
		box-shadow: 0 8px 24px rgba(0,0,0,0.1);
	}

	.cartao-emoji {
		font-size: 2.5rem;
	}

	.cartao h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 1.2rem;
		font-weight: 800;
		color: var(--cor);
	}

	.idades {
		font-size: 0.8rem;
		font-weight: 600;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.cartao p {
		font-size: 0.9rem;
		color: #444;
		flex: 1;
	}

	.seta {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--cor);
		margin-top: 0.5rem;
	}

	.pilares {
		background: #fff;
		padding: 4rem 1.5rem;
	}

	.pilares h2 {
		margin-bottom: 2.5rem;
	}

	.grelha-pilares {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 2rem;
		text-align: center;
	}

	.pilar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.pilar-emoji {
		font-size: 2.5rem;
	}

	.pilar h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.05rem;
	}

	.pilar p {
		font-size: 0.9rem;
		color: #555;
	}

	.urgencia {
		padding: 4rem 1.5rem;
		background: #FFF5E6;
	}

	.urgencia h2 {
		margin-bottom: 2rem;
	}

	.alertas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.25rem;
	}

	.alerta {
		background: #fff;
		border-left: 4px solid #FF9F43;
		border-radius: 0.75rem;
		padding: 1.25rem;
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.alerta span:first-child {
		font-size: 1.75rem;
		flex-shrink: 0;
	}

	.alerta strong {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.95rem;
	}

	.alerta p {
		font-size: 0.85rem;
		color: #555;
	}

	.cta-final {
		padding: 4rem 1.5rem;
		background: #fff;
	}

	.cta-final h2 {
		margin-bottom: 2rem;
	}

	.contactos {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.contacto-card {
		background: #f8faff;
		border: 2px solid #e0e7ff;
		border-radius: 1rem;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		text-align: center;
		transition: border-color 0.2s, transform 0.2s;
	}

	.contacto-card:hover {
		border-color: #0984E3;
		transform: translateY(-2px);
	}

	.contacto-card span:first-child {
		font-size: 2rem;
	}

	.contacto-card strong {
		font-size: 1.4rem;
		font-family: 'Nunito', sans-serif;
		font-weight: 900;
		color: #1a1a2e;
	}

	.contacto-card span:last-child {
		font-size: 0.8rem;
		color: #666;
	}
</style>
