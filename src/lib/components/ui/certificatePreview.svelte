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
	export let overlayTextColor: string = 'black';
	export let ciColor: string = 'black';

	const dispatch = createEventDispatcher();

	let container: HTMLDivElement;
	let nameElement: HTMLDivElement;
	let ciElement: HTMLDivElement;
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

	// Función para limitar los offsets dentro del contenedor
	function clampOffsets(
		deltaX: number,
		deltaY: number,
		element: HTMLDivElement | undefined
	): { x: number; y: number } {
		if (!container || !element) return { x: deltaX, y: deltaY };

		const containerRect = container.getBoundingClientRect();
		const elementRect = element.getBoundingClientRect();

		// Calcular límites basados en el contenedor y el elemento
		const maxX = (containerRect.width - elementRect.width) / 2;
		const maxY = (containerRect.height - elementRect.height) / 2;

		// Limitar los valores para que no salgan del contenedor
		return {
			x: Math.max(-maxX, Math.min(maxX, deltaX)),
			y: Math.max(-maxY, Math.min(maxY, deltaY))
		};
	}

	// Funciones para el texto del nombre - Mouse
	function handleNameMouseDown(e: MouseEvent) {
		if (!imageUrl) return;
		e.preventDefault();
		isDraggingName = true;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		initialXOffset = xOffset;
		initialYOffset = yOffset;
	}

	// Funciones para el CI - Mouse
	function handleCIMouseDown(e: MouseEvent) {
		if (!imageUrl) return;
		e.preventDefault();
		isDraggingCI = true;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		initialXOffset = ciXOffset;
		initialYOffset = ciYOffset;
	}

	// Funciones para el texto del nombre - Touch
	function handleNameTouchStart(e: TouchEvent) {
		if (!imageUrl || e.touches.length !== 1) return;
		e.preventDefault();
		isDraggingName = true;
		const touch = e.touches[0];
		dragStartX = touch.clientX;
		dragStartY = touch.clientY;
		initialXOffset = xOffset;
		initialYOffset = yOffset;
	}

	// Funciones para el CI - Touch
	function handleCITouchStart(e: TouchEvent) {
		if (!imageUrl || e.touches.length !== 1) return;
		e.preventDefault();
		isDraggingCI = true;
		const touch = e.touches[0];
		dragStartX = touch.clientX;
		dragStartY = touch.clientY;
		initialXOffset = ciXOffset;
		initialYOffset = ciYOffset;
	}

	function handleMouseMove(e: MouseEvent) {
		if (isDraggingName) {
			const deltaX = e.clientX - dragStartX;
			const deltaY = e.clientY - dragStartY;
			const clamped = clampOffsets(initialXOffset + deltaX, initialYOffset + deltaY, nameElement);
			dispatch('update', {
				xOffset: clamped.x,
				yOffset: clamped.y
			});
		} else if (isDraggingCI) {
			const deltaX = e.clientX - dragStartX;
			const deltaY = e.clientY - dragStartY;
			const clamped = clampOffsets(initialXOffset + deltaX, initialYOffset + deltaY, ciElement);
			dispatch('update', {
				ciXOffset: clamped.x,
				ciYOffset: clamped.y
			});
		}
	}

	function handleTouchMove(e: TouchEvent) {
		if (e.touches.length !== 1) return;
		const touch = e.touches[0];

		if (isDraggingName) {
			const deltaX = touch.clientX - dragStartX;
			const deltaY = touch.clientY - dragStartY;
			const clamped = clampOffsets(initialXOffset + deltaX, initialYOffset + deltaY, nameElement);
			dispatch('update', {
				xOffset: clamped.x,
				yOffset: clamped.y
			});
		} else if (isDraggingCI) {
			const deltaX = touch.clientX - dragStartX;
			const deltaY = touch.clientY - dragStartY;
			const clamped = clampOffsets(initialXOffset + deltaX, initialYOffset + deltaY, ciElement);
			dispatch('update', {
				ciXOffset: clamped.x,
				ciYOffset: clamped.y
			});
		}
	}

	function handleMouseUp() {
		isDraggingName = false;
		isDraggingCI = false;
	}

	function handleTouchEnd() {
		isDraggingName = false;
		isDraggingCI = false;
	}
</script>

<svelte:window
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
/>

<div
	bind:this={container}
	class="relative overflow-hidden rounded-lg border-2 border-dashed border-light-four dark:border-dark-four"
	class:cursor-grabbing={isDraggingName || isDraggingCI}
>
	{#if imageUrl}
		<img src={imageUrl} alt="preview" class="h-full w-full object-contain" />
		<div
			class="absolute inset-0 flex items-center justify-center select-none"
			style="pointer-events: none;"
		>
			<div
				bind:this={nameElement}
				class="cursor-grab touch-none text-center font-semibold text-light-black transition-shadow hover:drop-shadow-lg active:cursor-grabbing"
				class:ring-2={isDraggingName}
				class:ring-blue-500={isDraggingName}
				class:ring-offset-2={isDraggingName}
				style="font-size: {fontSize}px; font-family: {fontFamily}; color: {overlayTextColor}; text-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 90%; transform: translate({xOffset}px, {yOffset}px); pointer-events: auto;"
				on:mousedown={handleNameMouseDown}
				on:touchstart={handleNameTouchStart}
				role="button"
				tabindex="0"
				aria-label="Arrastrar para mover el nombre"
			>
				{overlayText}
			</div>
		</div>

		<div
			class="absolute inset-0 flex items-center justify-center select-none"
			style="pointer-events: none;"
		>
			<div
				bind:this={ciElement}
				class="cursor-grab touch-none rounded px-2 py-1 text-light-black transition-shadow hover:drop-shadow-lg active:cursor-grabbing"
				class:ring-2={isDraggingCI}
				class:ring-blue-500={isDraggingCI}
				class:ring-offset-2={isDraggingCI}
				style="font-family: {fontFamily}; color: {ciColor}; transform: translate({ciXOffset}px, {ciYOffset}px); pointer-events: auto;"
				on:mousedown={handleCIMouseDown}
				on:touchstart={handleCITouchStart}
				role="button"
				tabindex="0"
				aria-label="Arrastrar para mover el CI"
			>
				{ci}
			</div>
		</div>
	{:else}
		<div class="flex h-full flex-col items-center justify-center text-slate-400">
			<PhotoIcon class="mb-3 h-12 w-12 text-light-tertiary dark:text-dark-tertiary" />
			<p class="text-sm text-light-secondary dark:text-dark-secondary">No hay imagen cargada</p>
		</div>
	{/if}
</div>
