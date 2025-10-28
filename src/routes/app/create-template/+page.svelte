<script lang="ts">
	import { Button } from '$lib/components/ui';
	import ProgressSteps from '$lib/components/ui/progressSteps.svelte';
	import StepData from '$lib/components/ui/stepData.svelte';
	import StepDesign from '$lib/components/ui/stepDesign.svelte';
	import StepSend from '$lib/components/ui/stepSend.svelte';
	import { PlusIcon } from '$lib/icons/outline';
	import type { TemplatePayload } from '$lib/interfaces/compaing.interface';
	import type { ExcelData, TemplateConfig } from '$lib/interfaces/createTemplatee.interface';
	import { campaignService } from '$lib/services/campaingService.service';
	import { idcampañaStore } from '$lib/stores/campaingStore';
	import { onMount } from 'svelte';
	import * as XLSX from 'xlsx';

	let step = 1;
	let campaignCreated = false;
	let isCreatingCampaign = false;
	let campaignId: string | null = null;
	let isUpdatingTemplateStep1 = false;
	let isUpdatingTemplateStep2 = false;

	// Template configuration
	let templateConfig: TemplateConfig = {
		imageFile: null,
		imageUrl: null,
		overlayText: 'Nombre del participante',
		yOffset: 0,
		fontSize: 48,
		fontIndex: 0
	};

	const compaingData: TemplatePayload = {
		x: 0,
		y: 0,
		font_size: 48,
		font_family: '001',
		certificate: null
	};

	// Excel data
	let excelData: ExcelData = {
		file: null,
		json: [],
		headers: []
	};

	// Message
	let message = '';

	onMount(() => {
		// Verificar si ya existe una campaña creada
		const storedId = idcampañaStore.get();
		if (storedId) {
			campaignId = storedId;
			campaignCreated = true;
		}

		return () => {
			if (templateConfig.imageUrl) {
				URL.revokeObjectURL(templateConfig.imageUrl);
			}
		};
	});

	async function createCampaign() {
		isCreatingCampaign = true;
		try {
			const response = await fetch('https://certhub-backend.onrender.com/campaigns/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Error al crear la campaña');
			}

			const data = await response.json();
			campaignId = data.campaign_id;

			// Guardar en el store
			idcampañaStore.set(campaignId as string);

			campaignCreated = true;

			console.log('Campaña creada exitosamente:', campaignId);
		} catch (error) {
			console.error('Error creando campaña:', error);
			alert('Error al crear la campaña. Por favor, intenta nuevamente.');
		} finally {
			isCreatingCampaign = false;
		}
	}

	function resetCampaign() {
		// if (confirm('¿Estás seguro de que deseas reiniciar la campaña?')) {
		idcampañaStore.reset();
		campaignId = null;
		campaignCreated = false;
		step = 1;

		// Reset template config
		if (templateConfig.imageUrl) {
			URL.revokeObjectURL(templateConfig.imageUrl);
		}

		templateConfig = {
			imageFile: null,
			imageUrl: null,
			overlayText: 'Nombre del participante',
			yOffset: 0,
			fontSize: 48,
			fontIndex: 0
		};

		// Reset excel data
		excelData = {
			file: null,
			json: [],
			headers: []
		};

		message = '';
		// }
	}

	const updateTemplate = async () => {
		console.log('Updating template...');
		if (!campaignId) {
			alert('No se ha creado una campaña. Por favor, crea una campaña primero.');
			return;
		}
		try {
			isUpdatingTemplateStep1 = true;
			compaingData.x = 0;
			compaingData.y = 60;
			compaingData.font_size = templateConfig.fontSize;
			compaingData.font_family = '001';
			compaingData.certificate = templateConfig.imageFile;
			const response = await campaignService.updateTemplate(
				idcampañaStore.get() as string,
				compaingData
			);
			console.log('Response: ', response);
			goNext();
		} catch (error) {
			console.error('Error al actualizar la plantilla:', error);
			alert('Error al actualizar la plantilla. Por favor, intenta nuevamente.');
		} finally {
			isUpdatingTemplateStep1 = false;
		}
	};

	const updateTemplateStep2Students = async () => {
		console.log('Updating template...');
		if (!campaignId) {
			alert('No se ha creado una campaña. Por favor, crea una campaña primero.');
			return;
		}
		try {
			isUpdatingTemplateStep2 = true;
			compaingData.x = 0;
			compaingData.y = 60;
			compaingData.font_size = templateConfig.fontSize;
			compaingData.font_family = '001';
			compaingData.certificate = templateConfig.imageFile;
			const response = await campaignService.uploadStudentsFile(
				idcampañaStore.get() as string,
				excelData.file as File
			);
			console.log('Response: ', response);
			goNext();
		} catch (error) {
			console.error('Error al actualizar la plantilla:', error);
			alert('Error al actualizar la plantilla. Por favor, intenta nuevamente.');
		} finally {
			isUpdatingTemplateStep2 = false;
		}
	};

	function goNext() {
		if (step < 3) step += 1;
	}

	function goPrev() {
		if (step > 1) step -= 1;
	}

	function handleTemplateUpdate(config: TemplateConfig) {
		templateConfig = config;
	}

	function handleExcelUpdate(data: ExcelData) {
		excelData = data;
	}

	function handleSendExcel() {
		console.log('Send Excel', {
			campaignId,
			headers: excelData.headers,
			data: excelData.json
		});
		alert('Excel procesado correctamente. Los datos están listos para generar certificados.');
	}

	function handleSendMessage() {
		try {
			const responseCampaignMessage = campaignService.campaignMessage(
				idcampañaStore.get() as string,
				message
			);
			console.log('Response message campaign: ', responseCampaignMessage);
			alert('Mensaje enviado correctamente.');
			const responseActivate = campaignService.campaignActivate(
				idcampañaStore.get() as string,
				'/generate-certificate-by-user'
			);
			resetCampaign();
			console.log('Response activate campaign: ', responseActivate);
		} catch (error) {
			console.error('Error al enviar el mensaje:', error);
			alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
		}
	}
</script>

<div class="min-h-dvh">
	<!-- Header -->
	<header class="border-b border-light-four dark:border-dark-four">
		<div class="mx-auto max-w-6xl px-6 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<div class="h-10 w-10">
						<img src="/images/logo_empty_datahub.png" alt="" />
					</div>
					<h1 class="text-2xl font-semibold text-light-tertiary dark:text-dark-tertiary">
						CertHub
					</h1>
				</div>

				{#if campaignCreated}
					<Button onclick={resetCampaign} variant="secondary">Nueva Campaña</Button>
				{/if}
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-6xl px-6 py-8">
		{#if !campaignCreated}
			<!-- Vista inicial: Crear Campaña -->
			<div class="rounded-lg border border-light-four p-12 shadow-sm dark:border-dark-four">
				<div class="mx-auto max-w-md text-center">
					<div
						class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-light-four dark:bg-dark-four"
					>
						<PlusIcon class="h-6 w-6 text-light-tertiary dark:text-dark-tertiary" />
					</div>

					<h2 class="mb-2 text-2xl font-semibold text-light-black dark:text-dark-white">
						Crear Nueva Campaña
					</h2>
					<p class="mb-8 text-light-black dark:text-dark-white">
						Comienza creando una campaña para generar y enviar certificados personalizados
					</p>

					<Button
						onclick={createCampaign}
						disabled={isCreatingCampaign}
						loading={isCreatingCampaign}
						fullWidth>Crear Campaña</Button
					>
				</div>
			</div>
		{:else}
			<ProgressSteps {step} />

			<!-- Content Card -->
			<div
				class="rounded-lg border border-light-four bg-light-primary shadow-sm dark:border-dark-four dark:bg-dark-primary"
			>
				{#if step === 1}
					<StepDesign
						config={templateConfig}
						on:update={(e) => handleTemplateUpdate(e.detail)}
						on:next={updateTemplate}
					/>
				{:else if step === 2}
					<StepData
						data={excelData}
						on:update={(e) => handleExcelUpdate(e.detail)}
						on:prev={goPrev}
						on:next={updateTemplateStep2Students}
						on:process={handleSendExcel}
					/>
				{:else if step === 3}
					<StepSend
						bind:message
						templateFileName={templateConfig.imageFile?.name}
						participantCount={excelData.json.length}
						on:prev={goPrev}
						on:send={handleSendMessage}
					/>
				{/if}
			</div>
		{/if}
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600&family=Roboto:wght@400;700&family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap');

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin {
		animation: spin 1s linear infinite;
	}
</style>
