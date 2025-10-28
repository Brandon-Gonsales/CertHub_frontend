<script>
	import FilePencilIcon from '$lib/icons/solid/filePencilIcon.svelte';
</script>

<footer
	class="bg-gradient-to-r from-light-tertiary_d to-light-tertiary px-4 py-12 sm:px-6 lg:px-8 dark:from-dark-tertiary_d dark:to-dark-tertiary"
>
	<div class="mx-auto max-w-7xl">
		<div class="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Logo y descripción -->
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="mb-4 flex items-center">
					<FilePencilIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					<span class="ml-2 text-xl font-bold text-light-primary dark:text-dark-primary"
						>CertHub</span
					>
				</div>
				<p class="text-sm text-light-primary_d dark:text-dark-primary_d">
					Generador de certificados profesionales para eventos, cursos y reconocimientos.
				</p>
			</div>

			<!-- Producto -->
			<div>
				<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Producto</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="#features"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Características
						</a>
					</li>
					<li>
						<a
							href="#templates"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Plantillas
						</a>
					</li>
					<li>
						<a
							href="#pricing"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Precios
						</a>
					</li>
				</ul>
			</div>

			<!-- Empresa -->
			<div>
				<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Empresa</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="#about"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Sobre Nosotros
						</a>
					</li>
					<li>
						<a
							href="#contact"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Contacto
						</a>
					</li>
					<li>
						<a
							href="#blog"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Blog
						</a>
					</li>
				</ul>
			</div>

			<!-- Legal -->
			<div>
				<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Legal</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="#privacy"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Privacidad
						</a>
					</li>
					<li>
						<a
							href="#terms"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Términos de Uso
						</a>
					</li>
					<li>
						<a
							href="#cookies"
							class="text-sm text-light-primary_d transition-colors hover:text-light-primary dark:text-dark-primary_d dark:hover:text-dark-primary"
						>
							Cookies
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Copyright -->
		<div class="border-t border-light-four pt-6 text-center dark:border-dark-four">
			<p class="text-sm text-light-primary_d dark:text-dark-primary_d">
				&copy; 2025 DataHub Analytics. Todos los derechos reservados.
			</p>
		</div>
	</div>
</footer>
