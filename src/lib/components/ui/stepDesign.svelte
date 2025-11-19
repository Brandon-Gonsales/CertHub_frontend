<script lang="ts">
	import { FONTS, type TemplateConfig } from '$lib/interfaces/createTemplatee.interface';
	import { createEventDispatcher } from 'svelte';
	import CertificatePreview from './certificatePreview.svelte';
	import FileUpload from './fileUpload.svelte';
	import RangeSlider from './rangeSlider.svelte';
	import FontSelector from './fontSelector.svelte';
	import Button from './button.svelte';

	export let config: TemplateConfig;
	export let isLoadingStep1: boolean;

	const dispatch = createEventDispatcher();

	let imageContainer: HTMLDivElement;
	let containerHeight = 0;
	let containerWidth = 0;

	function handleImageUpload(e: CustomEvent) {
		const target = e.detail as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		if (config.imageUrl) {
			URL.revokeObjectURL(config.imageUrl);
		}

		const newConfig = {
			...config,
			imageFile: file,
			imageUrl: URL.createObjectURL(file)
		};

		dispatch('update', newConfig);
	}

	function updateConfig(updates: Partial<TemplateConfig>) {
		dispatch('update', { ...config, ...updates });
	}

	// Manejar actualizaciones desde el preview (drag & drop)
	function handlePreviewUpdate(e: CustomEvent) {
		updateConfig(e.detail);
	}

	function prevFont() {
		updateConfig({ fontIndex: (config.fontIndex - 1 + FONTS.length) % FONTS.length });
	}

	function nextFont() {
		updateConfig({ fontIndex: (config.fontIndex + 1) % FONTS.length });
	}

	function reset() {
		updateConfig({
			yOffset: 0,
			xOffset: 0,
			fontSize: 48,
			fontIndex: 0,
			ci: '9857626',
			ciXOffset: 0,
			ciYOffset: 0
		});
	}

	function handleNext() {
		console.log('config: ', config);
		dispatch('next');
	}

	$: if (imageContainer) {
		containerWidth = imageContainer.clientWidth;
	}
</script>

<div class="p-8">
	<div class="mb-6">
		<h2 class="text-lg font-semibold text-light-black dark:text-dark-white">Diseño de Plantilla</h2>
		<p class="mt-1 text-sm text-light-black dark:text-dark-white">
			Sube tu certificado base y personaliza el texto
		</p>
	</div>

	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Preview -->
		<div>
			<label class="mb-3 block text-sm font-medium text-light-secondary dark:text-dark-secondary"
				>Vista previa</label
			>
			<CertificatePreview
				imageUrl={config.imageUrl}
				overlayText={config.overlayText}
				yOffset={config.yOffset}
				xOffset={config.xOffset}
				fontSize={config.fontSize}
				fontFamily={FONTS[config.fontIndex]}
				ci={config.ci}
				ciXOffset={config.ciXOffset}
				ciYOffset={config.ciYOffset}
				bind:containerElement={imageContainer}
				bind:containerHeight
				on:update={handlePreviewUpdate}
			/>
		</div>

		<!-- Controls -->
		<div class="space-y-6">
			<!-- Upload Image -->
			<FileUpload
				label="Imagen del certificado"
				accept="image/*"
				fileName={config.imageFile?.name}
				helpText="PNG, JPG hasta 10MB"
				on:change={handleImageUpload}
			/>

			<!-- Text Input -->
			<div>
				<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
					>Texto del certificado</label
				>
				<input
					type="text"
					class="focus:ring-opacity-20 w-full rounded-lg border border-light-four px-4 py-2.5 text-sm focus:border-light-tertiary focus:ring-2 focus:ring-light-tertiary focus:outline-none dark:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
					value={config.overlayText}
					oninput={(e) => updateConfig({ overlayText: e.currentTarget.value })}
					placeholder="Ingresa el texto a mostrar"
				/>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
					>Número de CI</label
				>
				<input
					type="text"
					class="focus:ring-opacity-20 w-full rounded-lg border border-light-four px-4 py-2.5 text-sm focus:border-light-tertiary focus:ring-2 focus:ring-light-tertiary focus:outline-none dark:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
					value={config.ci}
					oninput={(e) => updateConfig({ ci: e.currentTarget.value })}
					placeholder="Ingresa el número de CI"
				/>
			</div>

			<!-- Font Size -->
			<RangeSlider
				label="Tamaño de fuente"
				min={20}
				max={100}
				value={config.fontSize}
				unit="px"
				on:input={(e) => updateConfig({ fontSize: parseInt(e.detail) })}
			/>

			<!-- Font Selector -->
			<FontSelector
				fonts={FONTS}
				currentIndex={config.fontIndex}
				on:prev={prevFont}
				on:next={nextFont}
			/>

			<!-- Información de posicionamiento actual -->
			<div class="rounded-lg bg-light-one dark:bg-dark-one p-4 space-y-2">
				<p class="text-xs font-medium text-light-secondary dark:text-dark-secondary">
					Posición actual:
				</p>
				<div class="grid grid-cols-2 gap-2 text-xs">
					<div>
						<span class="text-light-tertiary dark:text-dark-tertiary">Nombre:</span>
						<span class="ml-2 text-light-black dark:text-dark-white">
							X: {config.xOffset}px, Y: {config.yOffset}px
						</span>
					</div>
					<div>
						<span class="text-light-tertiary dark:text-dark-tertiary">CI:</span>
						<span class="ml-2 text-light-black dark:text-dark-white">
							X: {config.ciXOffset}px, Y: {config.ciYOffset}px
						</span>
					</div>
				</div>
			</div>

			<!-- Actions -->
			<div class="flex justify-end gap-3 pt-4">
				<Button
					onclick={reset}
					variant="secondary"
					disabled={isLoadingStep1}
					aria-label="Restablecer">Restablecer</Button
				>
				<Button
					onclick={handleNext}
					disabled={!config.imageUrl || isLoadingStep1}
					variant="primary"
					aria-label="Continuar"
					loading={isLoadingStep1}
				>
					Continuar
				</Button>
			</div>
		</div>
	</div>
</div>
<!-- <script lang="ts">
	//stepDesign.svelte
	import { FONTS, type TemplateConfig } from '$lib/interfaces/createTemplatee.interface';
	import { createEventDispatcher } from 'svelte';
	import CertificatePreview from './certificatePreview.svelte';
	import FileUpload from './fileUpload.svelte';
	import RangeSlider from './rangeSlider.svelte';
	import FontSelector from './fontSelector.svelte';
	import Button from './button.svelte';

	export let config: TemplateConfig;
	export let isLoadingStep1: boolean;

	const dispatch = createEventDispatcher();

	let imageContainer: HTMLDivElement;
	let containerHeight = 0;
	let containerWidth = 0;

	function handleImageUpload(e: CustomEvent) {
		const target = e.detail as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		if (config.imageUrl) {
			URL.revokeObjectURL(config.imageUrl);
		}

		const newConfig = {
			...config,
			imageFile: file,
			imageUrl: URL.createObjectURL(file)
		};

		dispatch('update', newConfig);
	}

	function updateConfig(updates: Partial<TemplateConfig>) {
		dispatch('update', { ...config, ...updates });
	}

	function prevFont() {
		updateConfig({ fontIndex: (config.fontIndex - 1 + FONTS.length) % FONTS.length });
	}

	function nextFont() {
		updateConfig({ fontIndex: (config.fontIndex + 1) % FONTS.length });
	}

	function reset() {
		updateConfig({
			yOffset: 0,
			xOffset: 0,
			fontSize: 48,
			fontIndex: 0,
			ci: '9857626',
			ciXOffset: 0,
			ciYOffset: 0
		});
	}

	function handleNext() {
		console.log('config: ', config);

		dispatch('next');
	}

	// Calculate max Y offset based on container height
	$: maxYOffset = containerHeight > 0 ? Math.floor(containerHeight / 2) : 200;
	$: maxXOffset = containerWidth > 0 ? Math.floor(containerWidth / 2) : 200;
	$: if (imageContainer) {
		containerWidth = imageContainer.clientWidth;
	}
</script>

<div class="p-8">
	<div class="mb-6">
		<h2 class="text-lg font-semibold text-light-black dark:text-dark-white">Diseño de Plantilla</h2>
		<p class="mt-1 text-sm text-light-black dark:text-dark-white">
			Sube tu certificado base y personaliza el texto
		</p>
	</div>

	<div class="grid gap-8 lg:grid-cols-2">
		<div>
			<label class="mb-3 block text-sm font-medium text-light-secondary dark:text-dark-secondary"
				>Vista previa</label
			>
			<CertificatePreview
				imageUrl={config.imageUrl}
				overlayText={config.overlayText}
				yOffset={config.yOffset}
				xOffset={config.xOffset}
				fontSize={config.fontSize}
				fontFamily={FONTS[config.fontIndex]}
				ci={config.ci}
				ciXOffset={config.ciXOffset}
				ciYOffset={config.ciYOffset}
				bind:containerElement={imageContainer}
				bind:containerHeight
			/>
		</div>

		<div class="space-y-6">
			<FileUpload
				label="Imagen del certificado"
				accept="image/*"
				fileName={config.imageFile?.name}
				helpText="PNG, JPG hasta 10MB"
				on:change={handleImageUpload}
			/>

			<div>
				<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
					>Texto del certificado</label
				>
				<input
					type="text"
					class="focus:ring-opacity-20 w-full rounded-lg border border-light-four px-4 py-2.5 text-sm focus:border-light-tertiary focus:ring-2 focus:ring-light-tertiary focus:outline-none dark:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
					value={config.overlayText}
					oninput={(e) => updateConfig({ overlayText: e.currentTarget.value })}
					placeholder="Ingresa el texto a mostrar"
				/>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-light-black dark:text-dark-white"
					>Número de CI</label
				>
				<input
					type="text"
					class="focus:ring-opacity-20 w-full rounded-lg border border-light-four px-4 py-2.5 text-sm focus:border-light-tertiary focus:ring-2 focus:ring-light-tertiary focus:outline-none dark:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
					value={config.ci}
					oninput={(e) => updateConfig({ ci: e.currentTarget.value })}
					placeholder="Ingresa el número de CI"
				/>
			</div>

			<RangeSlider
				label="Posición vertical"
				min={-maxYOffset}
				max={maxYOffset}
				value={config.yOffset}
				unit="px"
				on:input={(e) => updateConfig({ yOffset: parseInt(e.detail) })}
			/>

			<RangeSlider
				label="Posición horizontal del texto"
				min={-maxXOffset}
				max={maxXOffset}
				value={config.xOffset}
				unit="px"
				on:input={(e) => updateConfig({ xOffset: parseInt(e.detail) })}
			/>


			<RangeSlider
				label="Posición horizontal del CI"
				min={-maxXOffset}
				max={maxXOffset}
				value={config.ciXOffset}
				unit="px"
				on:input={(e) => updateConfig({ ciXOffset: parseInt(e.detail) })}
			/>

			<RangeSlider
				label="Posición vertical del CI"
				min={-maxYOffset}
				max={maxYOffset}
				value={config.ciYOffset}
				unit="px"
				on:input={(e) => updateConfig({ ciYOffset: parseInt(e.detail) })}
			/>

			<RangeSlider
				label="Tamaño de fuente"
				min={20}
				max={100}
				value={config.fontSize}
				unit="px"
				on:input={(e) => updateConfig({ fontSize: parseInt(e.detail) })}
			/>

			<FontSelector
				fonts={FONTS}
				currentIndex={config.fontIndex}
				on:prev={prevFont}
				on:next={nextFont}
			/>

			<div class="flex justify-end gap-3 pt-4">
				<Button
					onclick={reset}
					variant="secondary"
					disabled={isLoadingStep1}
					aria-label="Restablecer">Restablecer</Button
				>
				<Button
					onclick={handleNext}
					disabled={!config.imageUrl || isLoadingStep1}
					variant="primary"
					aria-label="Continuar"
					loading={isLoadingStep1}
				>
					Continuar
				</Button>
			</div>
		</div>
	</div>
</div> -->
