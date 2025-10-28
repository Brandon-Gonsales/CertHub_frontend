<script>
	import { goto } from '$app/navigation';
	import { XIcon } from '$lib/icons/outline';
	import Menu2Icon from '$lib/icons/outline/menu2Icon.svelte';
	import { SunIcon } from '$lib/icons/solid';
	import FilePencilIcon from '$lib/icons/solid/filePencilIcon.svelte';
	import MoonIcon from '$lib/icons/solid/moonIcon.svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import { Button } from '../ui';

	let mobileMenuOpen = false;

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const navigateToLogin = () => {
		goto('/auth/sign-in');
	};
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-light-four bg-light-primary dark:border-dark-four dark:bg-dark-primary"
>
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="h-10 w-10">
					<img src="/images/logo_empty_datahub.png" alt="" />
				</div>
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
				<a
					href="#contact"
					class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
					>Contacto</a
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
					<a
						href="#contact"
						class="text-light-secondary hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
						>Contacto</a
					>
					<Button onclick={navigateToLogin}>Iniciar Sesión</Button>
				</div>
			</div>
		{/if}
	</nav>
</header>
