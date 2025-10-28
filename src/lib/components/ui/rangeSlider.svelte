<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let min: number;
	export let max: number;
	export let value: number;
	export let unit: string = '';

	const dispatch = createEventDispatcher();

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		dispatch('input', target.value);
	}
</script>

<div>
	<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white">
		{label}
		<span class="ml-2 text-xs font-normal text-light-secondary dark:text-dark-secondary"
			>{value}{unit}</span
		>
	</label>
	<input
		type="range"
		{min}
		{max}
		{value}
		on:input={handleInput}
		class="slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-light-four accent-light-tertiary dark:bg-dark-four dark:accent-dark-tertiary"
	/>
</div>

<style>
	.slider::-webkit-slider-thumb {
		appearance: none;
		width: 18px;
		height: 18px;
		background: #2563eb;
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid white;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.slider::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: #2563eb;
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid white;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
</style>
