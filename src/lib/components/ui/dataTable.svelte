<script lang="ts">
	export let headers: string[];
	export let rows: any[];

	const MAX_VISIBLE_ROWS = 10;
	$: visibleRows = rows.slice(0, MAX_VISIBLE_ROWS);
</script>

<div>
	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-sm font-medium text-light-black dark:text-dark-white">Vista previa de datos</h3>
		<span class="text-xs text-light-secondary dark:text-dark-secondary">
			{rows.length} registros
		</span>
	</div>
	<div class="overflow-hidden rounded-lg border border-light-four dark:border-dark-four">
		<div class="max-h-80 overflow-auto">
			<table class="min-w-full divide-y divide-light-secondary dark:divide-dark-secondary">
				<thead class="">
					<tr>
						{#each headers as header}
							<th
								class="px-4 py-3 text-left text-xs font-medium tracking-wider text-light-black uppercase dark:text-dark-white"
							>
								{header}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class="divide-y divide-light-four dark:divide-dark-four">
					{#each visibleRows as row}
						<tr class="hover:bg-light-four dark:hover:bg-dark-four">
							{#each headers as header}
								<td
									class="px-4 py-3 text-sm whitespace-nowrap text-light-black dark:text-dark-white"
								>
									{row[header]}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	{#if rows.length > MAX_VISIBLE_ROWS}
		<p class="mt-2 text-xs text-slate-500">
			Mostrando {MAX_VISIBLE_ROWS} de {rows.length} registros
		</p>
	{/if}
</div>
