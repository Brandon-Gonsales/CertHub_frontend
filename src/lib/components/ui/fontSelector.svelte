<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';
	import { ArrowLeftIcon, ChevronLeftIcon } from '$lib/icons/outline';
	import ChevronRightIcon from '$lib/icons/outline/chevronRightIcon.svelte';

	export let fonts: string[];
	export let currentIndex: number;

	const dispatch = createEventDispatcher();
</script>

<div>
	<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
		>Tipografía</label
	>
	<div class="flex items-center gap-3">
		<Button onclick={() => dispatch('prev')} variant="outline" aria-label="Anterior">
			<ChevronLeftIcon class="h-6 w-6" />
		</Button>

		<div class="flex-1 rounded-lg border border-light-four px-4 py-3 dark:border-dark-four">
			<div
				class="text-center text-light-black dark:text-dark-white"
				style="font-family: {fonts[currentIndex]}; font-size: 20px;"
			>
				{fonts[currentIndex].split(',')[0]}
			</div>
		</div>

		<Button onclick={() => dispatch('next')} aria-label="Siguiente" variant="outline">
			<ChevronRightIcon class="h-6 w-6" />
		</Button>
	</div>
</div>
