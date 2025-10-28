<script lang="ts">
	export let step: number;

	const steps = [
		{ number: 1, title: 'Diseño', description: 'Personaliza tu plantilla' },
		{ number: 2, title: 'Datos', description: 'Importa participantes' },
		{ number: 3, title: 'Envío', description: 'Mensaje y distribución' }
	];
</script>

<div class="mb-8">
	<div class="flex items-center justify-between">
		{#each steps as stepItem, index}
			<div
				class="flex flex-1 items-center"
				class:justify-center={index === 1}
				class:justify-end={index === 2}
			>
				<div class="flex items-center">
					<div
						class={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= stepItem.number ? 'border-light-secondary bg-light-secondary text-light-white dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-white' : 'border-light-four bg-light-primary text-light-four dark:border-dark-four dark:bg-dark-primary dark:text-dark-four'}`}
					>
						{#if step > stepItem.number}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						{:else}
							<span class="text-sm font-medium">{stepItem.number}</span>
						{/if}
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-slate-900">{stepItem.title}</p>
						<p class="text-xs text-slate-500">{stepItem.description}</p>
					</div>
				</div>
			</div>

			{#if index < steps.length - 1}
				<div
					class={`h-0.5 flex-1 ${step >= stepItem.number + 1 ? 'bg-blue-600' : 'bg-slate-300'}`}
				></div>
			{/if}
		{/each}
	</div>
</div>
