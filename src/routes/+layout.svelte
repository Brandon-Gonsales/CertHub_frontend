<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo_datahub.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>CertHub</title>
</svelte:head>

{@render children?.()}
