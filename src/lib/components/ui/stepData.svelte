<script lang="ts">
	//stepData.svelte
	import type { ExcelData } from '$lib/interfaces/createTemplatee.interface';
	import { createEventDispatcher } from 'svelte';
	import * as XLSX from 'xlsx';
	import FileUpload from './fileUpload.svelte';
	import DataTable from './dataTable.svelte';
	import Button from './button.svelte';

	export let data: ExcelData;

	const dispatch = createEventDispatcher();

	function handleExcelUpload(e: CustomEvent<EventTarget>) {
		const target = e.detail as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (ev) => {
			const fileData = ev.target?.result;
			if (!fileData) return;

			const workbook = XLSX.read(fileData, { type: 'array' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });

			const newData: ExcelData = {
				file,
				json: json as any[],
				headers: json.length > 0 ? Object.keys(json[0]) : []
			};

			dispatch('update', newData);
		};
		reader.readAsArrayBuffer(file);
	}
</script>

<div class="p-8">
	<div class="mb-6">
		<h2 class="text-lg font-semibold text-light-black dark:text-dark-white">Importar Datos</h2>
		<p class="mt-1 text-sm text-light-black dark:text-dark-white">
			Sube un archivo Excel con la lista de participantes
		</p>
	</div>

	<div class="space-y-6">
		<!-- Upload Excel -->
		<FileUpload
			label="Archivo Excel"
			accept=".xlsx,.xls"
			fileName={data.file?.name}
			helpText="XLSX o XLS"
			icon="document"
			on:change={handleExcelUpload}
		/>

		<!-- Preview Table -->
		{#if data.json.length > 0}
			<DataTable headers={data.headers} rows={data.json} />
		{/if}

		<!-- Actions -->
		<div class="flex gap-3 pt-4">
			<Button onclick={() => dispatch('prev')} variant="secondary">Atrás</Button>
			<div class="flex-1"></div>
			<Button
				onclick={() => dispatch('process')}
				variant="secondary"
				disabled={data.json.length === 0}>Procesar datos</Button
			>
			<Button onclick={() => dispatch('next')} variant="primary" disabled={data.json.length === 0}
				>Continuar</Button
			>
		</div>
	</div>
</div>
