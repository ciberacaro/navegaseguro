<script>
	let frase = $state('');
	let copiado = $state(false);

	const substituicoes = { a: '@', e: '3', i: '1', o: '0', s: '$' };

	const resultado = $derived.by(() => {
		const palavras = frase.trim().split(/\s+/).filter(p => p.length > 0);

		if (palavras.length === 0) {
			return { palavras: [], letras: [], comSubs: [], senha: '', passos: [], valido: false, poucosPalavras: false };
		}

		if (palavras.length < 4) {
			return { palavras, letras: [], comSubs: [], senha: '', passos: [], valido: false, poucosPalavras: true };
		}

		// Passo 1: primeira letra de cada palavra
		const letras = palavras.map(p => p[0]);

		// Passo 2: aplicar substituições (minúsculas para substituição)
		const comSubs = letras.map(l => {
			const lower = l.toLowerCase();
			return substituicoes[lower] ?? l;
		});

		// Passo 3: juntar, capitalizar primeira letra, adicionar contagem
		let base = comSubs.join('');
		const primeiraLetra = base[0].toUpperCase();
		base = primeiraLetra + base.slice(1);
		const senha = base + palavras.length;

		const passos = [
			{ label: 'Palavras encontradas', valor: palavras.join(' · ') },
			{ label: 'Primeiras letras', valor: letras.join(' ') },
			{ label: 'Após substituições (a→@, e→3, i→1, o→0, s→$)', valor: comSubs.join(' ') },
			{ label: 'Juntas + capitalização', valor: base },
			{ label: 'Resultado final (+ nº de palavras)', valor: senha }
		];

		return { palavras, letras, comSubs, senha, passos, valido: true, poucosPalavras: false };
	});

	const forca = $derived.by(() => {
		const senha = resultado.senha;
		if (!senha) return null;

		let charset = 0;
		if (/[a-z]/.test(senha)) charset += 26;
		if (/[A-Z]/.test(senha)) charset += 26;
		if (/[0-9]/.test(senha)) charset += 10;
		if (/[@$!%*?&\^#]/.test(senha)) charset += 32;

		const entropia = Math.log2(charset || 1) * senha.length;

		const largura = Math.min(100, Math.round((entropia / 80) * 100));

		let nivel, cor;
		if (entropia < 28) {
			nivel = 'Muito fraca'; cor = '#FF6B6B';
		} else if (entropia < 40) {
			nivel = 'Fraca'; cor = '#FF9F43';
		} else if (entropia < 56) {
			nivel = 'Razoável'; cor = '#F9CA24';
		} else if (entropia < 72) {
			nivel = 'Boa'; cor = '#1DD1A1';
		} else {
			nivel = 'Muito boa'; cor = '#0984E3';
		}

		return { entropia: Math.round(entropia), nivel, cor, largura };
	});

	async function copiar() {
		if (!resultado.senha) return;
		try {
			await navigator.clipboard.writeText(resultado.senha);
		} catch {
			// fallback silencioso
		}
		copiado = true;
		setTimeout(() => (copiado = false), 2000);
	}
</script>

<div class="gerador-frase">
	<h2>Gerador de Frase-Palavra-passe</h2>
	<p class="intro">
		Transforma uma frase memorável numa palavra-passe forte. Basta pensar numa frase que consigas recordar!
	</p>

	<div class="campo-entrada">
		<label for="frase-input">A tua frase memorável</label>
		<input
			id="frase-input"
			type="text"
			placeholder="Ex: O meu gato tem 3 anos!"
			bind:value={frase}
		/>
	</div>

	{#if resultado.poucosPalavras}
		<div class="aviso-poucos">
			⚠️ Usa pelo menos 4 palavras para uma palavra-passe segura
		</div>
	{/if}

	{#if resultado.valido}
		<div class="resultado-senha">
			<span class="senha-texto">{resultado.senha}</span>
			<button class="btn-copiar" onclick={copiar}>
				{copiado ? 'Copiado!' : 'Copiar'}
			</button>
		</div>

		{#if forca}
			<div class="forca-bloco">
				<div class="forca-topo">
					<span>Força da palavra-passe</span>
					<span class="forca-nivel" style="color: {forca.cor}">{forca.nivel}</span>
					<span class="forca-entropia">({forca.entropia} bits)</span>
				</div>
				<div class="barra-fundo">
					<div
						class="barra-fill"
						style="width: {forca.largura}%; background: {forca.cor}"
					></div>
				</div>
			</div>
		{/if}

		<div class="passos">
			<h3>Como foi gerada — passo a passo</h3>
			<ol>
				{#each resultado.passos as passo, i}
					<li>
						<span class="passo-label">{passo.label}</span>
						<code class="passo-valor">{passo.valor}</code>
					</li>
				{/each}
			</ol>
		</div>
	{/if}

	<div class="nota-aviso">
		💡 <strong>Nota:</strong> Esta é uma técnica de memorização — usa um gestor de palavras-passe para o dia-a-dia. Não uses a mesma palavra-passe em vários sítios.
	</div>
</div>

<style>
	.gerador-frase {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 1.5rem;
		max-width: 600px;
		margin: 0 auto;
		font-family: inherit;
	}

	h2 {
		margin: 0 0 0.5rem;
		font-size: 1.3rem;
		color: #1a202c;
	}

	.intro {
		color: #4a5568;
		font-size: 0.95rem;
		margin-bottom: 1.25rem;
	}

	.campo-entrada {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		font-size: 0.875rem;
		font-weight: 600;
		color: #2d3748;
		margin-bottom: 0.35rem;
	}

	input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.65rem 0.85rem;
		border: 1.5px solid #cbd5e0;
		border-radius: 8px;
		font-size: 1rem;
		color: #2d3748;
		transition: border-color 0.2s;
	}

	input:focus {
		outline: none;
		border-color: #667eea;
	}

	.aviso-poucos {
		background: #fff3cd;
		border: 1px solid #ffc107;
		border-radius: 8px;
		padding: 0.65rem 1rem;
		color: #856404;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.resultado-senha {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: #f0fff4;
		border: 1.5px solid #68d391;
		border-radius: 8px;
		padding: 0.75rem 1rem;
		margin-bottom: 1rem;
	}

	.senha-texto {
		font-family: 'Courier New', monospace;
		font-size: 1.25rem;
		font-weight: 700;
		color: #276749;
		flex: 1;
		word-break: break-all;
	}

	.btn-copiar {
		background: #276749;
		color: #fff;
		border: none;
		border-radius: 6px;
		padding: 0.4rem 0.85rem;
		font-size: 0.875rem;
		cursor: pointer;
		white-space: nowrap;
		transition: background 0.2s;
	}

	.btn-copiar:hover {
		background: #1f5237;
	}

	.forca-bloco {
		margin-bottom: 1.25rem;
	}

	.forca-topo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: #4a5568;
		margin-bottom: 0.35rem;
	}

	.forca-nivel {
		font-weight: 700;
	}

	.forca-entropia {
		color: #718096;
		font-size: 0.8rem;
	}

	.barra-fundo {
		background: #e2e8f0;
		border-radius: 4px;
		height: 8px;
		overflow: hidden;
	}

	.barra-fill {
		height: 100%;
		border-radius: 4px;
		transition: width 0.4s ease;
	}

	.passos {
		background: #f7fafc;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin-bottom: 1rem;
	}

	.passos h3 {
		margin: 0 0 0.75rem;
		font-size: 0.95rem;
		color: #2d3748;
	}

	.passos ol {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.passos li {
		font-size: 0.875rem;
		color: #4a5568;
	}

	.passo-label {
		display: block;
		font-size: 0.8rem;
		color: #718096;
		margin-bottom: 0.1rem;
	}

	.passo-valor {
		background: #edf2f7;
		color: #2d3748;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
	}

	.nota-aviso {
		background: #ebf8ff;
		border: 1px solid #90cdf4;
		border-radius: 8px;
		padding: 0.65rem 1rem;
		color: #2c5282;
		font-size: 0.875rem;
		line-height: 1.5;
	}
</style>
