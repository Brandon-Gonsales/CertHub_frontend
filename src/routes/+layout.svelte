<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo_datahub.png';

	let { children } = $props();

	// Configuración central de metadatos
	const baseUrl = 'https://cert-hub-frontend.vercel.app';
	const ogImage = `${baseUrl}/og-image.png`;
	const title = 'CertHub - Crea Certificados Digitales personalizados';
	const description =
		'Con CertHub diseña, personaliza y genera certificados únicos para eventos, cursos, reconocimientos y más. 100% gratis y fácil de usar.';
</script>

<svelte:head>
	<!-- Configuración básica -->
	<link rel="icon" href="/images/logo_empty_datahub.png" />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- SEO Básico -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="/images/logo_empty_datahub.png" />

	<!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={baseUrl} />
	<meta property="og:site_name" content="CertHub" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:secure_url" content={ogImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="CertHub - Plataforma de certificados digitales" />
	<meta property="og:locale" content="es_ES" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={baseUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="CertHub - Plataforma de certificados digitales" />
</svelte:head>

{@render children?.()}
