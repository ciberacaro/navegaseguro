<script>
	let password = $state('');
	let mostrar = $state(false);

	function calcular(pw) {
		if (!pw) return null;

		let charset = 0;
		if (/[a-z]/.test(pw)) charset += 26;
		if (/[A-Z]/.test(pw)) charset += 26;
		if (/[0-9]/.test(pw)) charset += 10;
		if (/[^a-zA-Z0-9]/.test(pw)) charset += 32;

		const entropia = pw.length * Math.log2(charset || 1);
		const tentativasPorSegundo = 1e10; // GPU moderna: 10 mil milhões/s
		const segundos = Math.pow(2, entropia) / tentativasPorSegundo;

		let tempo, nivel, cor, conselho;

		if (segundos < 60) {
			tempo = 'menos de 1 minuto';
			nivel = 'Muito fraca';
			cor = '#FF6B6B';
			conselho = 'Esta palavra-passe seria descoberta quase imediatamente. Use pelo menos 12 caracteres com letras, números e símbolos.';
		} else if (segundos < 3600) {
			tempo = `${Math.round(segundos / 60)} minutos`;
			nivel = 'Fraca';
			cor = '#FF9F43';
			conselho = 'Ainda muito vulnerável. Adicione mais caracteres e misture tipos diferentes.';
		} else if (segundos < 86400) {
			tempo = `${Math.round(segundos / 3600)} horas`;
			nivel = 'Razoável';
			cor = '#F9CA24';
			conselho = 'Pode ser melhor. Tente uma frase longa com palavras aleatórias: "Cão-Verde-Sopa-72!"';
		} else if (segundos < 31536000) {
			tempo = `${Math.round(segundos / 86400)} dias`;
			nivel = 'Boa';
			cor = '#1DD1A1';
			conselho = 'Boa palavra-passe. Certifique-se que não a usa noutros sítios.';
		} else if (segundos < 31536000 * 1000) {
			const anos = Math.round(segundos / 31536000);
			tempo = `${anos.toLocaleString('pt')} anos`;
			nivel = 'Muito boa';
			cor = '#0984E3';
			conselho = 'Excelente. Guarde-a num gestor de palavras-passe para não esquecer.';
		} else {
			tempo = 'centenas de milhares de anos';
			nivel = 'Excelente';
			cor = '#6C5CE7';
			conselho = 'Praticamente impossível de descobrir por força bruta. Perfeita.';
		}

		const forca = Math.min(100, Math.round((entropia / 80) * 100));
		return { nivel, cor, tempo, conselho, forca, entropia: Math.round(entropia) };
	}

	let resultado = $derived(calcular(password));
</script>

<div class="verificador">
	<h3>🔐 Verificador de palavra-passe</h3>
	<p class="aviso">⚠️ Use apenas palavras-passe de exemplo — nunca as suas reais. Nada é enviado para servidores.</p>

	<div class="campo">
		<input
			type={mostrar ? 'text' : 'password'}
			bind:value={password}
			placeholder="Escreva uma palavra-passe para testar..."
			autocomplete="off"
			spellcheck="false"
		/>
		<button class="toggle" onclick={() => mostrar = !mostrar} aria-label="Mostrar/esconder">
			{mostrar ? '🙈' : '👁️'}
		</button>
	</div>

	{#if resultado}
		<div class="resultado">
			<div class="barra-wrap">
				<div class="barra" style="width: {resultado.forca}%; background: {resultado.cor}"></div>
			</div>
			<div class="info" style="--cor: {resultado.cor}">
				<div class="nivel-linha">
					<strong style="color: {resultado.cor}">{resultado.nivel}</strong>
					<span class="entropia">{resultado.entropia} bits de entropia</span>
				</div>
				<p class="tempo">Tempo estimado para descobrir: <strong>{resultado.tempo}</strong></p>
				<p class="conselho">{resultado.conselho}</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.verificador {
		background: #fff;
		border: 2px solid #e0e7ff;
		border-radius: 1rem;
		padding: 1.75rem;
		max-width: 600px;
	}

	.verificador h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
		font-size: 1.15rem;
		margin-bottom: 0.5rem;
		color: #1a1a2e;
	}

	.aviso {
		font-size: 0.8rem;
		color: #888;
		margin-bottom: 1.25rem;
		background: #fff9e6;
		padding: 0.5rem 0.75rem;
		border-radius: 0.4rem;
	}

	.campo {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	input {
		flex: 1;
		padding: 0.75rem 1rem;
		border: 2px solid #e0e7ff;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-family: monospace;
		outline: none;
		transition: border-color 0.2s;
	}

	input:focus {
		border-color: #0984E3;
	}

	.toggle {
		background: #f0f4ff;
		border: 2px solid #e0e7ff;
		border-radius: 0.5rem;
		padding: 0 0.75rem;
		cursor: pointer;
		font-size: 1.1rem;
	}

	.barra-wrap {
		height: 8px;
		background: #eee;
		border-radius: 999px;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	.barra {
		height: 100%;
		border-radius: 999px;
		transition: width 0.4s ease, background 0.4s ease;
	}

	.nivel-linha {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.4rem;
	}

	.nivel-linha strong {
		font-size: 1.05rem;
		font-family: 'Nunito', sans-serif;
		font-weight: 800;
	}

	.entropia {
		font-size: 0.75rem;
		color: #aaa;
	}

	.tempo {
		font-size: 0.9rem;
		color: #444;
		margin-bottom: 0.5rem;
	}

	.conselho {
		font-size: 0.875rem;
		color: #555;
		line-height: 1.5;
	}
</style>
