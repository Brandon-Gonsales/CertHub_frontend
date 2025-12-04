<script lang="ts">
	const lista = [1, 2, 3, 4, 5, 6, 7, 8];
	let resultado = 0;
	function sumar(a: number, b: number): number {
		return a + b;
	}
	let numero1 = 0;
	let numero2 = 0;
	resultado = sumar(numero1, numero2);
</script>

<div class="grid justify-between gap-4 p-4">
	{#each lista as item}
		<div class="flex h-20 w-32 items-center justify-center bg-green-500">contenedor {item}</div>
	{/each}
	<p>Resultado: {resultado}</p>
	<input type="number" bind:value={numero1} />
	<input type="number" bind:value={numero2} />

	<button onclick={() => (resultado = sumar(numero1, numero2))}>Sumar</button>
</div>
