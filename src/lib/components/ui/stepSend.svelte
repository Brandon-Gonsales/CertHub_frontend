<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';

	export let message: string;
	export let templateFileName: string | undefined;
	export let participantCount: number;
	export let isLoadingStep3: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="p-8">
	<div class="mb-6">
		<h2 class="text-lg font-semibold text-light-black dark:text-dark-white">Mensaje de Envío</h2>
		<p class="mt-1 text-sm text-light-black dark:text-dark-white">
			Redacta el mensaje que acompañará los certificados
		</p>
	</div>

	<div class="space-y-6">
		<div>
			<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
				>Mensaje personalizado</label
			>
			<textarea
				rows="10"
				class="focus:ring-opacity-20 dark:focus:ring-opacity-20 w-full rounded-lg border border-light-four bg-light-primary px-4 py-3 text-sm focus:border-light-tertiary focus:ring-2 focus:ring-light-tertiary dark:border-dark-four dark:bg-dark-primary dark:text-dark-white dark:focus:border-dark-tertiary dark:focus:ring-2 dark:focus:ring-dark-tertiary dark:focus:outline-none"
				bind:value={message}
				placeholder="Escribe aquí el mensaje que acompañará el envío de los certificados..."
			></textarea>
			<p class="mt-2 text-xs text-light-secondary dark:text-dark-secondary">
				{message.length} caracteres
			</p>
		</div>

		<!-- Summary Card -->
		<div
			class="rounded-lg border border-light-four bg-light-primary p-4 dark:border-dark-four dark:bg-dark-primary"
		>
			<h4 class="mb-3 text-sm font-medium text-light-black dark:text-dark-white">
				Resumen del envío
			</h4>
			<dl class="space-y-2 text-sm">
				<div class="flex justify-between">
					<dt class="text-light-black dark:text-dark-white">Plantilla:</dt>
					<dd class="font-medium text-light-secondary dark:text-dark-secondary">
						{templateFileName || 'No configurada'}
					</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-light-black dark:text-dark-white">Participantes:</dt>
					<dd class="font-medium text-light-secondary dark:text-dark-secondary">
						{participantCount} registros
					</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-light-black dark:text-dark-white">Mensaje:</dt>
					<dd class="font-medium text-light-secondary dark:text-dark-secondary">
						{message.trim() ? 'Configurado' : 'Pendiente'}
					</dd>
				</div>
			</dl>
		</div>

		<!-- Actions -->
		<div class="flex gap-3 pt-4">
			<Button onclick={() => dispatch('prev')} disabled={isLoadingStep3} variant="secondary"
				>Atrás</Button
			>
			<div class="flex-1"></div>
			<Button
				onclick={() => dispatch('send')}
				variant="primary"
				disabled={!message.trim() || isLoadingStep3}
				loading={isLoadingStep3}>Enviar certificados</Button
			>
		</div>
	</div>
</div>
