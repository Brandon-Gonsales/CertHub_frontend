<script lang="ts">
	import { FONTS, type TemplateConfig } from '$lib/interfaces/createTemplatee.interface';
	import { createEventDispatcher } from 'svelte';
	import CertificatePreview from './certificatePreview.svelte';
	import FileUpload from './fileUpload.svelte';
	import RangeSlider from './rangeSlider.svelte';
	import FontSelector from './fontSelector.svelte';
	import Button from './button.svelte';

	export let config: TemplateConfig;

	const dispatch = createEventDispatcher();

	let imageContainer: HTMLDivElement;
	let containerHeight = 0;

	function handleImageUpload(e: CustomEvent) {
		const target = e.detail as HTMLInputElement; // e.detail ahora contiene el target
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
		updateConfig({ yOffset: 0, fontSize: 48, fontIndex: 0 });
	}

	function handleNext() {
		console.log('config: ', config);

		dispatch('next');
	}

	// Calculate max Y offset based on container height
	$: maxYOffset = containerHeight > 0 ? Math.floor(containerHeight / 2) : 200;
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
				fontSize={config.fontSize}
				fontFamily={FONTS[config.fontIndex]}
				bind:containerElement={imageContainer}
				bind:containerHeight
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

			<!-- Position Control -->
			<RangeSlider
				label="Posición vertical"
				min={-maxYOffset}
				max={maxYOffset}
				value={config.yOffset}
				unit="px"
				on:input={(e) => updateConfig({ yOffset: parseInt(e.detail) })}
			/>

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

			<!-- Actions -->
			<div class="flex justify-end gap-3 pt-4">
				<Button onclick={reset} variant="secondary" aria-label="Restablecer">Restablecer</Button>
				<Button
					onclick={handleNext}
					disabled={!config.imageUrl}
					variant="primary"
					aria-label="Continuar"
				>
					Continuar
				</Button>
			</div>
		</div>
	</div>
</div>
