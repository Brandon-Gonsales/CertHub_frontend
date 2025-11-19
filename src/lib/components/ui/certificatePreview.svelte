<script lang="ts">
	//certificatePreview.svelte
	import { PhotoIcon } from '$lib/icons/outline';
	import { onMount } from 'svelte';

	export let imageUrl: string | null;
	export let overlayText: string;
	export let yOffset: number;
	export let xOffset: number;
	export let fontSize: number;
	export let fontFamily: string;
	export let containerElement: HTMLDivElement | undefined = undefined;
	export let containerHeight = 0;
	//export let containerWidth = 0;
	export let ci: string = '9857626';
	export let ciXOffset: number = 0;
	export let ciYOffset: number = 0;

	let container: HTMLDivElement;

	onMount(() => {
		const updateHeight = () => {
			if (container) {
				containerHeight = container.clientHeight;
			}
		};

		updateHeight();
		window.addEventListener('resize', updateHeight);

		return () => {
			window.removeEventListener('resize', updateHeight);
		};
	});

	$: if (container) {
		containerElement = container;
	}
</script>

<div
	bind:this={container}
	class="relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-dashed border-light-four dark:border-dark-four"
>
	{#if imageUrl}
		<img src={imageUrl} alt="preview" class="h-full w-full object-contain" />
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
			<div
				class="text-center font-semibold text-light-black"
				style="font-size: {fontSize}px; font-family: {fontFamily}; text-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 90%; transform: translate({xOffset}px, {yOffset}px);"
			>
				{overlayText}
			</div>
		</div>
		<div
			class="absolute text-light-black dark:text-dark-white"
			style="right: {12 - ciXOffset}px; bottom: {12 - ciYOffset}px;"
		>
			{ci}
		</div>
	{:else}
		<div class="flex h-full flex-col items-center justify-center text-slate-400">
			<PhotoIcon class="mb-3 h-12 w-12 text-light-tertiary dark:text-dark-tertiary" />
			<p class="text-sm text-light-secondary dark:text-dark-secondary">No hay imagen cargada</p>
		</div>
	{/if}
</div>
