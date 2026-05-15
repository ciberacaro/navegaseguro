<script>
	import { browser } from '$app/environment';

	let estado = $state('parado'); // 'parado' | 'a-ler' | 'pausado'
	let suportado = $state(false);
	let progresso = $state(0);
	let total = $state(0);

	let fragmentos = [];
	let indice = 0;

	if (browser) {
		suportado = 'speechSynthesis' in window;
	}

	function obterTexto() {
		const zona = document.getElementById('conteudo-principal');
		if (!zona) return [];

		const blocos = zona.querySelectorAll('h1, h2, h3, p, li, summary, .pergunta-texto, .rec-pergunta');
		const resultado = [];

		for (const el of blocos) {
			const texto = el.textContent?.trim();
			if (texto && texto.length > 2) resultado.push(texto);
		}
		return resultado;
	}

	function vozPortugues() {
		const vozes = speechSynthesis.getVoices();
		return (
			vozes.find(v => v.lang === 'pt-PT') ||
			vozes.find(v => v.lang === 'pt-BR') ||
			vozes.find(v => v.lang.startsWith('pt')) ||
			null
		);
	}

	function lerFragmento(i) {
		if (i >= fragmentos.length) {
			estado = 'parado';
			progresso = 0;
			indice = 0;
			return;
		}

		indice = i;
		progresso = i + 1;

		const utter = new SpeechSynthesisUtterance(fragmentos[i]);
		utter.lang = 'pt-PT';
		utter.rate = 0.92;
		utter.pitch = 1;

		const voz = vozPortugues();
		if (voz) utter.voice = voz;

		utter.onend = () => {
			if (estado === 'a-ler') lerFragmento(i + 1);
		};
		utter.onerror = () => {
			if (estado === 'a-ler') lerFragmento(i + 1);
		};

		speechSynthesis.speak(utter);
	}

	function iniciar() {
		speechSynthesis.cancel();
		fragmentos = obterTexto();
		total = fragmentos.length;
		indice = 0;
		estado = 'a-ler';
		lerFragmento(0);
	}

	function pausar() {
		speechSynthesis.pause();
		estado = 'pausado';
	}

	function retomar() {
		speechSynthesis.resume();
		estado = 'a-ler';
		// alguns browsers não suportam resume bem — reler do fragmento atual
		if (!speechSynthesis.speaking) {
			lerFragmento(indice);
		}
	}

	function parar() {
		speechSynthesis.cancel();
		estado = 'parado';
		progresso = 0;
		indice = 0;
	}
</script>

{#if suportado}
	<div class="leitor-flutuante" role="region" aria-label="Leitor de voz">
		{#if estado === 'parado'}
			<button class="btn-leitor principal" onclick={iniciar} aria-label="Ler esta página em voz alta" title="Ler em voz alta">
				<span aria-hidden="true">🔊</span>
				<span class="btn-texto">Ler</span>
			</button>
		{:else}
			<div class="controles">
				{#if estado === 'a-ler'}
					<button class="btn-leitor" onclick={pausar} aria-label="Pausar leitura" title="Pausar">⏸</button>
				{:else}
					<button class="btn-leitor" onclick={retomar} aria-label="Retomar leitura" title="Retomar">▶</button>
				{/if}
				<button class="btn-leitor parar" onclick={parar} aria-label="Parar leitura" title="Parar">⏹</button>
				{#if total > 0}
					<span class="prog-texto" aria-live="polite" aria-label="{progresso} de {total} partes">{progresso}/{total}</span>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	.leitor-flutuante {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 500;
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.controles {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		background: #1a1a2e;
		border-radius: 2rem;
		padding: 0.4rem 0.75rem;
		box-shadow: 0 4px 16px rgba(0,0,0,0.25);
	}

	.btn-leitor {
		background: #0984E3;
		color: #fff;
		border: none;
		border-radius: 2rem;
		padding: 0.55rem 1rem;
		font-size: 1rem;
		font-family: inherit;
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		box-shadow: 0 2px 8px rgba(9,132,227,0.4);
		transition: background 0.15s, transform 0.1s;
	}

	.btn-leitor:hover {
		background: #0773c5;
		transform: translateY(-1px);
	}

	.btn-leitor.principal {
		padding: 0.6rem 1.1rem;
		font-size: 1rem;
	}

	.btn-leitor.parar {
		background: #636e72;
		box-shadow: none;
	}

	.btn-leitor.parar:hover {
		background: #4a5568;
	}

	.btn-texto {
		font-size: 0.85rem;
	}

	.prog-texto {
		font-size: 0.75rem;
		color: #aaa;
		min-width: 3rem;
		text-align: center;
	}

	@media (max-width: 600px) {
		.leitor-flutuante {
			bottom: 1rem;
			right: 1rem;
		}
	}
</style>
