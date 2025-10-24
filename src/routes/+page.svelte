<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui';
	import DataTable from '$lib/components/ui/dataTable.svelte';
	import FileUpload from '$lib/components/ui/fileUpload.svelte';
	import {
		CheckIcon,
		ClipboardIcon,
		DownloadIcon,
		FacebookIcon,
		InstagramIcon,
		LinkedinIcon,
		XIcon
	} from '$lib/icons/outline';
	import ChevronRightIcon from '$lib/icons/outline/chevronRightIcon.svelte';
	import DeviceLaptopIcon from '$lib/icons/outline/deviceLaptopIcon.svelte';
	import Menu2Icon from '$lib/icons/outline/menu2Icon.svelte';
	import { BoltIcon, LockIcon, MoonIcon, PaletteIcon, SunIcon } from '$lib/icons/solid';
	import FilePencilIcon from '$lib/icons/solid/filePencilIcon.svelte';
	import { themeStore } from '$lib/stores/themeStore';

	let mobileMenuOpen = false;

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const navigateToLogin = () => {
		goto('/auth/sign-in');
	};
</script>

<div class="">
	<header
		class="fixed top-0 z-50 w-full border-b border-light-four bg-light-primary dark:border-dark-four dark:bg-dark-primary"
	>
		<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center">
					<FilePencilIcon class="h-8 w-8 text-light-tertiary dark:text-dark-tertiary" />
					<span class="ml-2 text-xl font-bold text-light-secondary dark:text-dark-secondary"
						>CertHub</span
					>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-8 md:flex">
					<a
						href="#features"
						class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
						>Características</a
					>
					<a
						href="#templates"
						class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
						>Plantillas</a
					>
					<a
						href="#about"
						class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
						>Nosotros</a
					>
					<button
						onclick={themeStore.toggleTheme}
						class={`dark:hover:bg-dark-primary" relative rounded-full  p-2 text-light-black transition-all duration-300 hover:bg-light-primary_d dark:text-dark-white dark:hover:bg-dark-primary_d `}
						aria-label={`Switch to ${$themeStore === 'light' ? 'light' : 'dark'} mode`}
					>
						<div class="relative flex h-6 w-6 items-center justify-center">
							<SunIcon
								class={`absolute h-5 w-5 transform transition-all duration-500 ${
									$themeStore === 'light'
										? 'scale-0 rotate-90 opacity-0'
										: 'scale-100 rotate-0 opacity-100'
								}`}
							/>
							<MoonIcon
								class={`absolute h-5 w-5 transform transition-all duration-500 ${
									$themeStore === 'light'
										? 'scale-100 rotate-0 opacity-100'
										: 'scale-0 -rotate-90 opacity-0'
								}`}
							/>
						</div>
					</button>
					<Button onclick={navigateToLogin}>Iniciar Sesión</Button>
				</div>

				<!-- Mobile menu button -->
				<button class="md:hidden" onclick={toggleMobileMenu}>
					{#if mobileMenuOpen}
						<XIcon class="h-6 w-6 text-light-tertiary dark:text-dark-tertiary" />
					{:else}
						<Menu2Icon class="h-6 w-6 text-light-tertiary dark:text-dark-tertiary" />
					{/if}
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="border-t border-light-four py-4 md:hidden dark:border-dark-four">
					<div class="flex flex-col space-y-4">
						<a
							href="#features"
							class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
							>Características</a
						>
						<a
							href="#templates"
							class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
							>Plantillas</a
						>
						<a
							href="#about"
							class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
							>Nosotros</a
						>
						<Button onclick={navigateToLogin}>Iniciar Sesión</Button>
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<!-- Hero Section -->
	<section class="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl text-center">
			<h1 class="mb-6 text-5xl font-bold text-light-black md:text-6xl dark:text-dark-white">
				Crea certificados profesionales
				<span class="block text-light-tertiary dark:text-dark-tertiary">en minutos</span>
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-light-black dark:text-dark-white">
				Diseña, personaliza y genera certificados únicos para eventos, cursos, reconocimientos y
				más.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button onclick={navigateToLogin} variant="primary">
					Crear Mi Certificado
					{#snippet rightIcon()}<ChevronRightIcon class="ml-2 h-6 w-6" />{/snippet}
				</Button>
			</div>

			<div class="relative mt-16">
				<div class="mx-auto max-w-5xl">
					<div
						class="rounded-2xl border-4 border-light-tertiary bg-gradient-to-br from-light-primary via-light-primary_d to-light-four p-8 shadow-2xl dark:border-dark-tertiary dark:from-dark-primary dark:via-dark-primary_d dark:to-dark-four"
					>
						<div class="mb-4 text-center">
							<div
								class="font-serif text-4xl font-bold text-light-tertiary dark:text-dark-tertiary"
							>
								Certificado de Reconocimiento
							</div>
						</div>
						<div class="my-8 text-center text-lg text-light-secondary dark:text-dark-secondary">
							<p class="mb-4">Este certificado se otorga a</p>
							<div
								class="my-6 border-b-2 border-light-tertiary pb-2 text-3xl font-bold text-light-black dark:border-dark-tertiary dark:text-dark-white"
							>
								[Escribe tu Nombre Aquí]
							</div>
							<p class="mt-4">Por su destacada participación</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="px-4 py-20 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-light-black dark:text-dark-white">
					Todo lo que necesitas para crear certificados increíbles
				</h2>
				<p class="text-xl text-light-black dark:text-dark-white">
					Herramientas potentes y fáciles de usar
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<PaletteIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Diseño Personalizable
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Personaliza colores, fuentes, logos y diseños. Cada certificado es único y refleja tu
						estilo.
					</p>
				</div>

				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<BoltIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Generación Instantánea
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Crea y descarga tus certificados en segundos. Sin complicaciones, sin esperas.
					</p>
				</div>

				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<DownloadIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Descarga en Alta Calidad
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Exporta en PDF o PNG con calidad profesional lista para imprimir o compartir
						digitalmente.
					</p>
				</div>

				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<ClipboardIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Plantillas Prediseñadas
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Elige entre múltiples plantillas profesionales para diferentes ocasiones y
						personalízalas a tu gusto.
					</p>
				</div>

				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<LockIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">100% Gratis</h3>
					<p class="text-light-black dark:text-dark-white">
						Todas las funciones disponibles sin costo. Sin límites, sin anuncios, sin sorpresas.
					</p>
				</div>

				<div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<DownloadIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Guarda tus Diseños
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Guarda tus certificados favoritos y reutilízalos cuantas veces necesites.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Templates Section -->
	<section
		id="templates"
		class="bg-light-primary_d px-4 py-20 sm:px-6 lg:px-8 dark:bg-dark-primary_d"
	>
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-light-black dark:text-dark-white">
					Plantillas para cada ocasión
				</h2>
				<p class="text-xl text-light-black dark:text-dark-white">
					Comienza con una plantilla y hazla tuya
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-3xl font-bold text-light-tertiary dark:text-dark-tertiary">🎓</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">Académico</h3>
					<p class="text-light-black dark:text-dark-white">
						Certificados para cursos, capacitaciones y diplomas
					</p>
				</div>

				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-3xl font-bold text-light-tertiary dark:text-dark-tertiary">🏆</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">
						Reconocimiento
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Premiaciones, logros y méritos especiales
					</p>
				</div>

				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-3xl font-bold text-light-tertiary dark:text-dark-tertiary">🎉</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">Eventos</h3>
					<p class="text-light-black dark:text-dark-white">
						Participación en conferencias, talleres y seminarios
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="relative px-4 py-20 sm:px-6 lg:px-8">
		<div
			class="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-20"
			style="background-image: url('/images/logo_empty_datahub.png');"
		></div>
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-light-black dark:text-dark-white">
					Sobre DataHub Analytics
				</h2>
				<p class="mb-4 text-xl font-semibold text-light-tertiary dark:text-dark-tertiary">
					Innovación con Inteligencia Artificial
				</p>
				<p class="mx-auto max-w-3xl text-lg text-light-black dark:text-dark-white">
					Transformamos ideas en soluciones tecnológicas inteligentes
				</p>
			</div>

			<div class="mb-16 grid gap-12 md:grid-cols-2">
				<div class="text-light-black dark:text-dark-white">
					<h3 class="mb-4 text-2xl font-bold text-light-black dark:text-dark-white">
						Quiénes Somos
					</h3>
					<p class="mb-4">
						Somos una empresa de desarrollo de software especializada en la creación de soluciones
						innovadoras con inteligencia artificial integrada.
					</p>
					<p class="">
						Con años de experiencia en el sector tecnológico, ayudamos a empresas de todos los
						tamaños a transformar sus procesos mediante la automatización inteligente y el análisis
						de datos avanzado.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold text-light-tertiary dark:text-dark-tertiary">
							1+
						</div>
						<div class="text-light-black dark:text-dark-white">Años de Experiencia</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-4xl font-bold text-light-tertiary dark:text-dark-tertiary">
							20+
						</div>
						<div class="text-light-black dark:text-dark-white">Proyectos Completados</div>
					</div>
					<div class="col-span-2 text-center">
						<div class="mb-2 text-4xl font-bold text-light-tertiary dark:text-dark-tertiary">
							50+
						</div>
						<div class="text-light-black dark:text-dark-white">Clientes Satisfechos</div>
					</div>
				</div>
			</div>

			<div class="mb-12 grid gap-8 md:grid-cols-2">
				<div class="rounded-xl border border-light-four p-6 dark:border-dark-four">
					<h4 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Nuestra Misión
					</h4>
					<p class="text-light-black dark:text-dark-white">
						Democratizar el acceso a tecnologías de inteligencia artificial, proporcionando
						soluciones innovadoras y accesibles que impulsen el crecimiento y la eficiencia de
						nuestros clientes.
					</p>
				</div>
				<div class="rounded-xl border border-light-four p-6 dark:border-dark-four">
					<h4 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Nuestra Visión
					</h4>
					<p class="text-light-black dark:text-dark-white">
						Ser líderes en innovación tecnológica, reconocidos por crear software inteligente que
						transforma industrias y mejora la vida de las personas a través de la tecnología.
					</p>
				</div>
			</div>

			<!-- Social Media Section -->
			<div
				class="rounded-xl border border-light-four bg-light-primary p-8 dark:border-dark-four dark:bg-dark-primary"
			>
				<h4 class="mb-6 text-center text-2xl font-bold text-light-black dark:text-dark-white">
					Síguenos en Redes Sociales
				</h4>
				<div class="flex flex-wrap justify-center gap-6">
					<a
						href="https://www.facebook.com/datahubanalyticsbo?locale=es_LA"
						target="_blank"
						class="flex items-center gap-2 rounded-lg border border-light-four bg-light-primary_d px-6 py-3 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
					>
						<FacebookIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
						<span class="text-light-secondary dark:text-dark-secondary">Facebook</span>
					</a>

					<a
						href="#"
						class="flex items-center gap-2 rounded-lg border border-light-four bg-light-primary_d px-6 py-3 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
					>
						<InstagramIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
						<span class="text-light-secondary dark:text-dark-secondary">Instagram</span>
					</a>
					<a
						href="#"
						class="flex items-center gap-2 rounded-lg border border-light-four bg-light-primary_d px-6 py-3 transition-all hover:shadow-lg dark:border-dark-four dark:bg-dark-primary_d"
					>
						<LinkedinIcon class="h-6 w-6 text-light-secondary dark:text-dark-secondary" />
						<span class="text-light-secondary dark:text-dark-secondary">LinkedIn</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section
		class="bg-gradient-to-r from-light-tertiary_d to-light-tertiary px-4 py-20 sm:px-6 lg:px-8 dark:from-dark-tertiary_d dark:to-dark-tertiary"
	>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-light-primary dark:text-dark-primary">
				¿Listo para crear certificados profesionales?
			</h2>
			<p class="mb-8 text-xl text-light-primary dark:text-dark-primary">
				Comienza ahora y diseña certificados únicos en minutos
			</p>
			<button
				onclick={navigateToLogin}
				class="rounded-lg bg-light-primary px-8 py-4 text-lg font-medium text-light-secondary shadow-xl transition-colors hover:bg-light-primary_d dark:bg-dark-primary dark:text-dark-secondary dark:hover:bg-dark-primary_d"
			>
				Crear Mi Primer Certificado
			</button>
		</div>
	</section>

	<!-- Footer -->
	<footer
		class="bg-gradient-to-r from-light-tertiary_d to-light-tertiary px-4 py-12 sm:px-6 lg:px-8 dark:from-dark-tertiary_d dark:to-dark-tertiary"
	>
		<div class="mx-auto max-w-7xl">
			<div class="mb-8 grid gap-8 md:grid-cols-4">
				<div>
					<div class="mb-4 flex items-center">
						<FilePencilIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
						<span class="ml-2 text-xl font-bold text-light-primary dark:text-dark-primary"
							>CertHub</span
						>
					</div>
					<p class="text-light-primary_d dark:text-dark-primary_d">
						Generador de certificados profesionales
					</p>
				</div>
				<div>
					<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Producto</h4>
					<ul class="space-y-2 text-light-primary_d dark:text-dark-primary_d">
						<li><a href="#features" class="">Características</a></li>
						<li><a href="#templates" class="">Plantillas</a></li>
					</ul>
				</div>
				<div>
					<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Empresa</h4>
					<ul class="space-y-2 text-light-primary_d dark:text-dark-primary_d">
						<li><a href="#about" class="">Sobre Nosotros</a></li>
						<li><a href="#" class="">Blog</a></li>
						<li><a href="#" class="">Contacto</a></li>
					</ul>
				</div>
				<div>
					<h4 class="mb-4 font-bold text-light-primary dark:text-dark-primary">Legal</h4>
					<ul class="space-y-2 text-light-primary_d dark:text-dark-primary_d">
						<li><a href="#" class="">Privacidad</a></li>
						<li><a href="#" class="">Términos</a></li>
						<li><a href="#" class="">Cookies</a></li>
					</ul>
				</div>
			</div>
			<div
				class="border-t border-light-four pt-8 text-center text-light-primary_d dark:border-dark-four dark:text-dark-primary_d"
			>
				<p>&copy; 2025 DataHub Analytics. Todos los derechos reservados.</p>
			</div>
		</div>
	</footer>
</div>
