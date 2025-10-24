<script lang="ts">
	let currentNameIndex = 0;
	const names = ['Brandon Lara Paz', 'Rodrigo Herrera', 'Kevin Soto', 'Katherine Meza'];

	// Cambiar nombre cada 4 segundos
	setInterval(() => {
		currentNameIndex = (currentNameIndex + 1) % names.length;
	}, 4000);
</script>

<div class="relative mt-16">
	<div class="mx-auto max-w-5xl px-4">
		<!-- Borde exterior con gradiente -->
		<div
			class="rounded-2xl bg-gradient-to-br from-light-tertiary via-light-secondary to-light-secondary_d p-1 shadow-2xl dark:from-dark-tertiary dark:via-dark-secondary dark:to-dark-secondary_d"
		>
			<!-- Contenedor principal blanco -->
			<div
				class="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-white via-light-primary to-light-primary_d p-12 dark:from-dark-surface dark:via-dark-primary dark:to-dark-primary_d"
			>
				<!-- Marca de agua -->
				<div
					class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] text-[200px] font-bold text-light-tertiary opacity-[0.02] select-none dark:text-dark-tertiary"
				>
					DataHub
				</div>

				<!-- Ornamentos de esquina -->
				<div
					class="absolute top-5 left-5 h-12 w-12 border-t-2 border-l-2 border-light-tertiary/40 dark:border-dark-tertiary/40"
				></div>
				<div
					class="absolute top-5 right-5 h-12 w-12 border-t-2 border-r-2 border-light-tertiary/40 dark:border-dark-tertiary/40"
				></div>
				<div
					class="absolute bottom-5 left-5 h-12 w-12 border-b-2 border-l-2 border-light-tertiary/40 dark:border-dark-tertiary/40"
				></div>
				<div
					class="absolute right-5 bottom-5 h-12 w-12 border-r-2 border-b-2 border-light-tertiary/40 dark:border-dark-tertiary/40"
				></div>

				<!-- Ornamento superior -->
				<div class="mb-8 flex justify-center">
					<div
						class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-light-tertiary to-light-secondary shadow-lg dark:from-dark-tertiary dark:to-dark-secondary"
					>
						<img src="/images/logo_empty_datahub.png" alt="" />
					</div>
				</div>

				<!-- Título -->
				<div class="mb-8 text-center">
					<h2 class="mb-3 text-5xl font-bold text-light-tertiary dark:text-dark-tertiary">
						Certificado de Especialización
					</h2>
					<div class="text-2xl font-semibold text-light-secondary dark:text-dark-secondary">
						Inteligencia Artificial
					</div>
				</div>

				<!-- Línea divisoria -->
				<div
					class="mb-8 h-0.5 bg-gradient-to-r from-transparent via-light-tertiary to-transparent opacity-50 dark:via-dark-tertiary"
				></div>

				<!-- Cuerpo del certificado -->
				<div class="relative mb-8 text-center">
					<p class="mb-6 text-xl text-light-secondary_d dark:text-dark-secondary_d">
						Se otorga el presente reconocimiento a
					</p>

					<!-- Carrusel de nombres -->
					<div class="relative mb-8 flex h-20 items-center justify-center overflow-hidden">
						{#each names as name, i}
							<div
								class="absolute text-4xl font-bold text-light-tertiary transition-all duration-1000 ease-in-out dark:text-dark-tertiary"
								style="
									opacity: {i === currentNameIndex ? '1' : '0'};
									transform: translateY({i === currentNameIndex
									? '0px'
									: i < currentNameIndex
										? '-30px'
										: '30px'}) scale({i === currentNameIndex ? '1' : '0.9'});
								"
							>
								{name}
							</div>
						{/each}
					</div>

					<p class="mb-3 text-lg text-light-secondary_d dark:text-dark-secondary_d">
						Por haber completado exitosamente el programa de especialización
					</p>
					<p class="mb-6 text-lg text-light-secondary_d dark:text-dark-secondary_d">
						en <span class="font-bold text-light-tertiary dark:text-dark-tertiary"
							>Inteligencia Artificial y Machine Learning</span
						>
					</p>
					<p
						class="mx-auto max-w-3xl text-base leading-relaxed text-light-secondary dark:text-dark-secondary"
					>
						Demostrando excelencia académica y dedicación en el dominio de algoritmos, redes
						neuronales, procesamiento de lenguaje natural y visión por computadora
					</p>
				</div>

				<div
					class="mb-8 h-0.5 bg-gradient-to-r from-transparent via-light-tertiary to-transparent opacity-50 dark:via-dark-tertiary"
				></div>

				<div class="flex items-end justify-between px-8">
					<div class="text-center">
						<p class="mb-2 text-sm text-light-secondary dark:text-dark-secondary">
							Fecha de emisión
						</p>
						<p class="text-lg font-semibold text-light-tertiary dark:text-dark-tertiary">
							24 de Octubre, 2025
						</p>
					</div>

					<div class="relative">
						<div
							class="flex h-24 w-24 items-center justify-center rounded-full border-4 border-light-secondary bg-gradient-to-br from-light-tertiary to-light-tertiary_d shadow-xl dark:border-dark-secondary dark:from-dark-tertiary dark:to-dark-tertiary_d"
						>
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								/>
							</svg>
						</div>
						<div
							class="absolute inset-0 m-3 rounded-full border-2 border-dashed border-white/30"
						></div>
					</div>

					<!-- Firma -->
					<div class="text-center">
						<div class="mb-2 h-0.5 w-48 bg-light-tertiary dark:bg-dark-tertiary"></div>
						<p class="font-semibold text-light-tertiary dark:text-dark-tertiary">
							Dr. Roberto Méndez
						</p>
						<p class="text-sm text-light-secondary dark:text-dark-secondary">
							Director del Programa
						</p>
					</div>
				</div>

				<div class="mt-8 text-center">
					<p class="text-xs text-light-secondary opacity-70 dark:text-dark-secondary">
						Certificado No. 080801-2025-10247
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
