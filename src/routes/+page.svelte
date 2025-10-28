<script lang="ts">
	import { goto } from '$app/navigation';
	import { Contact, FeatureSectionCard } from '$lib/components/features/landing';
	import { Footer, Header } from '$lib/components/layout';
	import { Button } from '$lib/components/ui';
	import CertificatePreviewDesign from '$lib/components/ui/certificatePreviewDesign.svelte';
	import DataTable from '$lib/components/ui/dataTable.svelte';
	import FileUpload from '$lib/components/ui/fileUpload.svelte';
	import {
		CheckIcon,
		ClipboardIcon,
		DownloadIcon,
		FacebookIcon,
		FileTypeXlsIcon,
		InstagramIcon,
		LinkedinIcon,
		MessageIcon,
		SendIcon,
		WhatsappIcon,
		XIcon
	} from '$lib/icons/outline';
	import ChevronRightIcon from '$lib/icons/outline/chevronRightIcon.svelte';
	import DeviceLaptopIcon from '$lib/icons/outline/deviceLaptopIcon.svelte';
	import Menu2Icon from '$lib/icons/outline/menu2Icon.svelte';
	import { BoltIcon, LockIcon, MoonIcon, PaletteIcon, SunIcon } from '$lib/icons/solid';
	import FilePencilIcon from '$lib/icons/solid/filePencilIcon.svelte';
	import { themeStore } from '$lib/stores/themeStore';

	const navigateToLogin = () => {
		goto('/auth/sign-in');
	};
</script>

<div class="">
	<Header />

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
			<CertificatePreviewDesign />
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
				<!-- <div
					class="rounded-xl border border-light-four p-8 transition-shadow hover:shadow-lg dark:border-dark-four"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-tertiary dark:bg-dark-tertiary"
					>
						<PaletteIcon class="h-6 w-6 text-light-primary dark:text-dark-primary" />
					</div>
					<h3 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Crea tu Diseño
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Personaliza fuentes, tamaños, posición, tipografía del nombre y diseños. Cada
						certificado es único y refleja tu estilo.
					</p>
				</div> -->
				<FeatureSectionCard
					icon={PaletteIcon}
					title="Crea tu Diseño"
					description="Personaliza fuentes, tamaños, posición, tipografía del nombre y diseños. Cada
						certificado es único y refleja tu estilo."
				/>
				<FeatureSectionCard
					icon={FileTypeXlsIcon}
					title="Sube tu lista"
					description="Carga una hoja de Excel con nombres y correos electrónicos. El sistema generará
						automáticamente un certificado único para cada estudiante."
				/>
				<FeatureSectionCard
					icon={MessageIcon}
					title="Personaliza tu mensaje"
					description="Redacta tu mensaje y envíalo a todos tus destinatarios desde la plataforma. Cada
						destinatario recibirá su código único y un link seguro para descargar su certificado."
				/>
				<FeatureSectionCard
					icon={DownloadIcon}
					title="Descarga en Alta Calidad"
					description="Descarga tu certificado en formato “PDF” con alta calidad profesional, lista para
						imprimir y compartir digitalmente."
				/>
				<FeatureSectionCard
					icon={DownloadIcon}
					title="Envío Instantáneo"
					description="Distribuye miles de certificados en cuestión de segundos. Ahorra horas de trabajo manual
						con un proceso 100% automatizado."
				/>
				<FeatureSectionCard
					icon={LockIcon}
					title="100% Segura"
					description="Tu información y la de tus estudiantes está protegida y resguardada."
				/>
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
					Certificados para cada ocasión.
				</h2>
				<p class="text-xl text-light-black dark:text-dark-white">Gestiona tus certificados.</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-9xl font-bold text-light-tertiary dark:text-dark-tertiary">🎓</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">Académico</h3>
					<p class="text-light-black dark:text-dark-white">
						Certificados para cursos, talleres, capacitaciones y diplomas.
					</p>
				</div>

				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-9xl font-bold text-light-tertiary dark:text-dark-tertiary">🏆</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">
						Reconocimiento
					</h3>
					<p class="text-light-black dark:text-dark-white">
						Premiaciones, logros y méritos especiales.
					</p>
				</div>

				<div
					class="rounded-xl bg-light-primary p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary"
				>
					<div
						class="mb-4 flex h-48 items-center justify-center rounded-lg border-4 border-light-tertiary bg-gradient-to-br from-light-primary to-light-four dark:border-dark-tertiary dark:from-dark-primary dark:to-dark-four"
					>
						<span class="text-9xl font-bold text-light-tertiary dark:text-dark-tertiary">🎉</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-light-black dark:text-dark-white">Eventos</h3>
					<p class="text-light-black dark:text-dark-white">
						Participación en conferencias, talleres y seminarios.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="relative px-4 py-20 sm:px-6 lg:px-8">
		<div
			class="absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-20"
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
						Proveer soluciones avanzadas de IA y análisis de datos, junto con servicios de
						consultoría estratégica, desarrollo de plataformas y organización de eventos académicos
						innovadores, garantizando atención personalizada, calidad superior y resultados
						tangibles que impulsen el crecimiento y la competitividad de nuestros clientes.
					</p>
				</div>
				<div class="rounded-xl border border-light-four p-6 dark:border-dark-four">
					<h4 class="mb-3 text-xl font-bold text-light-black dark:text-dark-white">
						Nuestra Visión
					</h4>
					<p class="text-light-black dark:text-dark-white">
						Ser el referente líder en consultoría de Inteligencia Artificial y Análisis de Datos en
						Bolivia, impulsando la transformación digital y la toma de decisiones basada en datos en
						PYME’s y Universidades, y fomentando la innovación a través de la educación y eventos
						tecnológicos de alto impacto.
					</p>
				</div>
			</div>
		</div>
	</section>
	<Contact />

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
	<Footer />
</div>
