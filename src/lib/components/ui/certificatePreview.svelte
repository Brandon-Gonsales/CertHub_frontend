<script lang="ts">
	import { PhotoIcon } from '$lib/icons/outline';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let imageUrl: string | null;
	export let overlayText: string;
	export let yOffset: number;
	export let xOffset: number;
	export let fontSize: number;
	export let fontFamily: string;
	export let containerElement: HTMLDivElement | undefined = undefined;
	export let containerHeight = 0;
	export let ci: string = '9857626';
	export let ciXOffset: number = 0;
	export let ciYOffset: number = 0;

	const dispatch = createEventDispatcher();

	let container: HTMLDivElement;
	let isDraggingName = false;
	let isDraggingCI = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let initialXOffset = 0;
	let initialYOffset = 0;

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

	// Funciones para el texto del nombre
	function handleNameMouseDown(e: MouseEvent) {
		if (!imageUrl) return;
		e.preventDefault();
		isDraggingName = true;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		initialXOffset = xOffset;
		initialYOffset = yOffset;
	}

	// Funciones para el CI
	function handleCIMouseDown(e: MouseEvent) {
		if (!imageUrl) return;
		e.preventDefault();
		isDraggingCI = true;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		initialXOffset = ciXOffset;
		initialYOffset = ciYOffset;
	}

	function handleMouseMove(e: MouseEvent) {
		if (isDraggingName) {
			const deltaX = e.clientX - dragStartX;
			const deltaY = e.clientY - dragStartY;
			dispatch('update', {
				xOffset: initialXOffset + deltaX,
				yOffset: initialYOffset + deltaY
			});
		} else if (isDraggingCI) {
			const deltaX = e.clientX - dragStartX;
			const deltaY = e.clientY - dragStartY;
			dispatch('update', {
				ciXOffset: initialXOffset + deltaX,
				ciYOffset: initialYOffset + deltaY
			});
		}
	}

	function handleMouseUp() {
		isDraggingName = false;
		isDraggingCI = false;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div
	bind:this={container}
	class="relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-dashed border-light-four dark:border-dark-four"
	class:cursor-grabbing={isDraggingName || isDraggingCI}
>
	{#if imageUrl}
		<img src={imageUrl} alt="preview" class="h-full w-full object-contain" />
		
		<!-- Texto del nombre (draggable) -->
		<div 
			class="absolute inset-0 flex items-center justify-center select-none"
			style="pointer-events: none;"
		>
			<div
				class="text-center font-semibold text-light-black cursor-grab active:cursor-grabbing transition-shadow hover:drop-shadow-lg"
				class:ring-2={isDraggingName}
				class:ring-blue-500={isDraggingName}
				class:ring-offset-2={isDraggingName}
				style="font-size: {fontSize}px; font-family: {fontFamily}; text-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 90%; transform: translate({xOffset}px, {yOffset}px); pointer-events: auto;"
				on:mousedown={handleNameMouseDown}
				role="button"
				tabindex="0"
				aria-label="Arrastrar para mover el nombre"
			>
				{overlayText}
			</div>
		</div>

		<!-- CI (draggable) -->
		<div
			class="absolute text-light-black dark:text-dark-white cursor-grab active:cursor-grabbing transition-shadow hover:drop-shadow-lg px-2 py-1 rounded"
			class:ring-2={isDraggingCI}
			class:ring-blue-500={isDraggingCI}
			class:ring-offset-2={isDraggingCI}
			style="right: {12 - ciXOffset}px; bottom: {12 - ciYOffset}px;"
			on:mousedown={handleCIMouseDown}
			role="button"
			tabindex="0"
			aria-label="Arrastrar para mover el CI"
		>
			{ci}
		</div>

		<!-- Indicadores visuales cuando está cargada la imagen -->
		<div class="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
			💡 Arrastra los textos para posicionarlos
		</div>
	{:else}
		<div class="flex h-full flex-col items-center justify-center text-slate-400">
			<PhotoIcon class="mb-3 h-12 w-12 text-light-tertiary dark:text-dark-tertiary" />
			<p class="text-sm text-light-secondary dark:text-dark-secondary">No hay imagen cargada</p>
		</div>
	{/if}
</div>
<!-- <script lang="ts">
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
</div> -->
