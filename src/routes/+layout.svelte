<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo_datahub.png';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Título y Descripción por defecto -->
	<link rel="icon" href={favicon} />
	<title>CertHub - Crea Certificados Digitales personalizados</title>
	<meta
		name="description"
		content="Con CertHub diseña, personaliza y genera certificados únicos para eventos, cursos, reconocimientos y
				más. 100% gratis y fácil de usar."
	/>

	<!-- Open Graph (OG) Meta Tags - Usadas por Facebook, LinkedIn, WhatsApp -->
	<meta property="og:title" content="CertHub - Crea certificados personalizados" />
	<meta
		property="og:description"
		content="Plataforma que diseña, personaliza y genera certificados únicos para eventos, cursos, reconocimientos y
				más. 100% gratis y fácil de usar."
	/>
	<!-- Asegúrate de subir tu imagen de logo o previsualización. La imagen debe ser un enlace público. -->
	<meta property="og:image" content={favicon} />
	<meta property="og:url" content="https://cert-hub-frontend.vercel.app/" />
	<meta property="og:type" content="website" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Certhub" />
	<meta name="twitter:creator" content="@TuUsuario" />
</svelte:head>
<!-- <svelte:head>
	<link rel="icon" href={favicon} />
	<title>CertHub</title>
</svelte:head> -->

{@render children?.()}
