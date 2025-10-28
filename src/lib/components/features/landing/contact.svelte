<script>
	import { FacebookIcon, MailIcon, MapPinIcon, TikTokIcon, WhatsappIcon } from '$lib/icons/outline';
	const googleMapsUrl =
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3799.2908871232935!2d-63.1621725!3d-17.778021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e91ab47cc0b7%3A0xab7c542938a24498!2sCondominio%20Plaza%20Guapay!5e0!3m2!1ses!2sbo!4v1761685579544!5m2!1ses!2sbo';
</script>

<section id="contact" class="px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<!-- Título -->
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-light-black sm:text-4xl dark:text-dark-white">
				Contáctanos
			</h2>
			<p class="text-lg text-light-black dark:text-dark-white">
				Estamos aquí para ayudarte. Ponte en contacto con nosotros.
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Información de contacto -->
			<div class="space-y-6">
				<!-- Dirección -->
				<div
					class="rounded-xl border border-light-four bg-light-primary p-6 dark:border-dark-four dark:bg-dark-primary"
				>
					<div class="mb-4 flex items-center gap-3">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
						>
							<MapPinIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
						</div>
						<h3 class="text-xl font-bold text-light-black dark:text-dark-white">Nuestra Oficina</h3>
					</div>
					<p class="mb-4 text-light-black dark:text-dark-white">
						Av. Guapay 2260, Canal Cotoca<br />
						Condominio Plaza Guapay, Piso 1 Oficina 9<br />
						Santa Cruz, Bolivia
					</p>
					<a
						href="https://maps.app.goo.gl/TCGu3NE2aN5ez8Pq9"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-light-tertiary px-4 py-2 text-sm font-medium text-light-primary transition-all hover:shadow-lg dark:bg-dark-tertiary dark:text-dark-primary"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
							/>
						</svg>
						Ver en Google Maps
					</a>
				</div>

				<!-- Email -->
				<div
					class="rounded-xl border border-light-four bg-light-primary p-6 dark:border-dark-four dark:bg-dark-primary"
				>
					<div class="mb-4 flex items-center gap-3">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
						>
							<MailIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
						</div>
						<h3 class="text-xl font-bold text-light-black dark:text-dark-white">
							Correo Electrónico
						</h3>
					</div>
					<p class="mb-4 text-light-black dark:text-dark-white">
						Envíanos un correo y te responderemos en menos de 24 horas.
					</p>
					<a
						href="mailto:dataHubAnalitycs@hotmail.com"
						class="inline-flex items-center gap-2 rounded-lg bg-light-tertiary px-4 py-2 text-sm font-medium text-light-primary transition-all hover:shadow-lg dark:bg-dark-tertiary dark:text-dark-primary"
					>
						<MailIcon class="h-5 w-5" />
						dataHubAnalitycs@hotmail.com
					</a>
				</div>

				<!-- WhatsApp -->
				<div
					class="rounded-xl border border-light-four bg-light-primary p-6 dark:border-dark-four dark:bg-dark-primary"
				>
					<div class="mb-4 flex items-center gap-3">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
						>
							<WhatsappIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
						</div>
						<h3 class="text-xl font-bold text-light-black dark:text-dark-white">WhatsApp</h3>
					</div>
					<p class="mb-4 text-light-black dark:text-dark-white">
						Chatea con nosotros directamente por WhatsApp.
					</p>
					<a
						href="https://wa.me/59175360623"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-light-tertiary px-4 py-2 text-sm font-medium text-light-primary transition-all hover:shadow-lg dark:bg-dark-tertiary dark:text-dark-primary"
					>
						<WhatsappIcon class="h-5 w-5" />
						Enviar mensaje
					</a>
				</div>
			</div>

			<!-- Redes sociales y mapa -->
			<div class="space-y-6">
				<!-- Redes sociales -->
				<div
					class="rounded-xl border border-light-four bg-light-primary p-8 dark:border-dark-four dark:bg-dark-primary"
				>
					<h3 class="mb-6 text-center text-2xl font-bold text-light-black dark:text-dark-white">
						Síguenos en Redes Sociales
					</h3>
					<div class="grid gap-4 sm:grid-cols-2">
						<a
							href="https://www.facebook.com/datahubanalyticsbo?locale=es_LA"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-3 rounded-lg border border-light-four bg-light-primary_d p-4 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
						>
							<FacebookIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
							<span class="font-medium text-light-secondary dark:text-dark-secondary">Facebook</span
							>
						</a>

						<a
							href="https://wa.me/59175360623"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-3 rounded-lg border border-light-four bg-light-primary_d p-4 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
						>
							<WhatsappIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
							<span class="font-medium text-light-secondary dark:text-dark-secondary">WhatsApp</span
							>
						</a>

						<a
							href="mailto:DataHubAnalitycs@hotmail.com"
							class="flex items-center gap-3 rounded-lg border border-light-four bg-light-primary_d p-4 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
						>
							<svg
								class="h-6 w-6 text-light-secondary dark:text-dark-secondary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span class="font-medium text-light-secondary dark:text-dark-secondary">Email</span>
						</a>
						<a
							href="https://www.tiktok.com/@datahub.analytics"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-3 rounded-lg border border-light-four bg-light-primary_d p-4 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
						>
							<TikTokIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
							<span class="font-medium text-light-secondary dark:text-dark-secondary">TikTok</span>
						</a>
					</div>
				</div>

				<div
					class="rounded-xl border border-light-four bg-light-primary p-4 dark:border-dark-four dark:bg-dark-primary"
				>
					<div class="aspect-video w-full overflow-hidden rounded-lg">
						<iframe
							src={googleMapsUrl}
							width="100%"
							height="100%"
							style="border:0;"
							allowfullscreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							class="h-full w-full"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
