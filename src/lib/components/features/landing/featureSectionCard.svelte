<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		title: string;
		description: string;
	}

	let { icon: Icon, title, description }: Props = $props();
</script>

<div
	class="group relative rounded-xl border border-light-four p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-light-four_d dark:border-dark-four dark:bg-dark-four dark:hover:shadow-dark-four_d"
>
	<div
		class="absolute top-3 left-3 h-8 w-8 border-t-2 border-l-2 border-light-tertiary dark:border-dark-tertiary"
	></div>
	<div
		class="absolute top-3 right-3 h-8 w-8 border-t-2 border-r-2 border-light-tertiary dark:border-dark-tertiary"
	></div>
	<div
		class="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-light-tertiary dark:border-dark-tertiary"
	></div>
	<div
		class="absolute right-3 bottom-3 h-8 w-8 border-r-2 border-b-2 border-light-tertiary dark:border-dark-tertiary"
	></div>

	<div class="flex items-center gap-2">
		<div
			class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
		>
			<Icon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
		</div>
		<h3 class="mb-3 text-xl font-bold tracking-tight text-light-black dark:text-dark-white">
			{title}
		</h3>
	</div>

	<p class="mb-6 leading-relaxed text-light-black dark:text-dark-white">
		{description}
	</p>

	<div class="flex items-center gap-2">
		<div
			class="h-px flex-1 bg-gradient-to-r from-transparent via-light-tertiary to-transparent dark:via-dark-tertiary"
		></div>
		<div class="flex gap-1">
			<div class="h-1.5 w-1.5 rounded-full bg-light-tertiary dark:bg-dark-tertiary"></div>
			<div class="h-1.5 w-1.5 rounded-full bg-light-tertiary dark:bg-dark-tertiary"></div>
			<div class="h-1.5 w-1.5 rounded-full bg-light-tertiary dark:bg-dark-tertiary"></div>
		</div>
		<div
			class="h-px flex-1 bg-gradient-to-r from-transparent via-light-tertiary to-transparent dark:via-dark-tertiary"
		></div>
	</div>
</div>
