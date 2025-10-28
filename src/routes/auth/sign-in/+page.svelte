<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui';
	import { ChevronLeftIcon, EyeIcon, EyeOffIcon } from '$lib/icons/outline';
	import CheckIcon from '$lib/icons/outline/checkIcon.svelte';
	import UserIcon from '$lib/icons/outline/userIcon.svelte';
	import { ExclamationCircleIcon, LockIcon } from '$lib/icons/solid';

	let showPassword = false;
	let username = '';
	let password = '';
	let errorMessage = '';
	let isLoading = false;

	async function handleSubmit() {
		console.log(username, password);
		goto('/app/create-template');
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	}
</script>

<div class="relative flex min-h-screen">
	<!-- Animated gradient background effect -->
	<div class="pointer-events-none absolute inset-0 z-0 opacity-30">
		<div
			class="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-light-tertiary/40 blur-3xl dark:bg-dark-tertiary/40"
		></div>
		<div
			class="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-light-secondary/30 blur-3xl delay-1000 dark:bg-dark-secondary/30"
		></div>
	</div>

	<!-- Left Side - Branding -->
	<div
		class="relative z-20 hidden flex-col justify-between bg-gradient-to-br from-light-tertiary via-light-tertiary_d to-light-secondary p-12 lg:flex lg:w-1/2 dark:from-dark-tertiary dark:via-dark-tertiary_d dark:to-dark-secondary"
	>
		<div>
			<div class="mb-12 flex items-center">
				<!-- Certificate Icon -->
				<svg
					viewBox="0 0 24 24"
					fill="none"
					class="h-10 w-10 text-light-primary dark:text-dark-primary"
				>
					<path
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle
						cx="17"
						cy="17"
						r="3"
						stroke="currentColor"
						stroke-width="2"
						fill="currentColor"
						opacity="0.3"
					/>
				</svg>
				<span class="ml-3 text-2xl font-bold text-light-primary dark:text-dark-primary"
					>CertHub</span
				>
			</div>

			<h1 class="mb-6 text-5xl leading-tight font-bold text-light-primary dark:text-dark-primary">
				Diseña certificados<br />profesionales
			</h1>
			<p class="mb-12 text-lg text-light-primary/90 dark:text-dark-primary/90">
				Crea, personaliza y descarga certificados únicos para tus cursos, eventos y logros con
				plantillas profesionales.
			</p>

			<div class="space-y-6">
				<div class="flex items-start">
					<div
						class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-light-primary/10 dark:bg-dark-primary/10"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							class="h-6 w-6 text-light-primary dark:text-dark-primary"
						>
							<path
								d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path
								d="M9 12h6m-6 4h4"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
					<div>
						<h3 class="mb-1 text-lg font-semibold text-light-primary dark:text-dark-primary">
							Editor Intuitivo
						</h3>
						<p class="text-sm text-light-primary/80 dark:text-dark-primary/80">
							Personaliza cada elemento de tu certificado fácilmente
						</p>
					</div>
				</div>
				<div class="flex items-start">
					<div
						class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-light-primary/10 dark:bg-dark-primary/10"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							class="h-6 w-6 text-light-primary dark:text-dark-primary"
						>
							<path
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<h3 class="mb-1 text-lg font-semibold text-light-primary dark:text-dark-primary">
							Descarga al Instante
						</h3>
						<p class="text-sm text-light-primary/80 dark:text-dark-primary/80">
							Exporta en alta calidad PDF
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="text-sm text-light-primary/70 dark:text-dark-primary/70">
			© 2025 CertHub. Todos los derechos reservados.
		</div>
	</div>

	<div
		class="relative z-20 flex flex-1 items-center justify-center bg-light-primary p-8 dark:bg-dark-primary"
	>
		<div class="w-full max-w-md">
			<!-- Mobile Logo -->
			<div class="mb-10 flex flex-col items-center justify-center">
				<div class="mb-4 flex h-32 w-32 items-center justify-center">
					<img src="/images/logo_empty_datahub.png" alt="" />
				</div>
				<span class="text-3xl font-bold text-light-secondary dark:text-dark-secondary"
					>DataHub<span class="ml-2 text-light-tertiary dark:text-dark-tertiary">Analitics</span
					></span
				>
			</div>

			<!-- Error Message -->
			{#if errorMessage}
				<div
					class="mb-6 flex items-start rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30"
				>
					<ExclamationCircleIcon
						class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-light-error dark:text-dark-error"
					/>
					<p class="text-sm text-light-error dark:text-dark-error">{errorMessage}</p>
				</div>
			{/if}

			<form onsubmit={handleSubmit} class="space-y-5">
				<!-- Username -->
				<div>
					<label
						for="username"
						class="mb-2 block text-sm font-semibold text-light-black dark:text-dark-white"
					>
						Usuario o Email
					</label>
					<div class="relative">
						<UserIcon
							class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-light-four dark:text-dark-four"
						/>
						<input
							id="username"
							type="text"
							bind:value={username}
							onkeypress={handleKeyPress}
							class="w-full rounded-xl border-2 border-light-four bg-light-primary py-3.5 pr-4 pl-12 text-light-black transition-all outline-none placeholder:text-light-four/50 hover:border-light-four focus:border-light-tertiary dark:border-dark-four dark:bg-dark-primary dark:text-dark-white dark:placeholder:text-dark-four dark:hover:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
							placeholder="usuario@ejemplo.com"
							disabled={isLoading}
						/>
					</div>
				</div>

				<!-- Password -->
				<div>
					<label
						for="password"
						class="mb-2 block text-sm font-semibold text-light-black dark:text-dark-white"
					>
						Contraseña
					</label>
					<div class="relative">
						<LockIcon
							class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-light-four dark:text-dark-four"
						/>
						<input
							id="password"
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							onkeypress={handleKeyPress}
							class="w-full rounded-xl border-2 border-light-four bg-light-primary py-3.5 pr-12 pl-12 text-light-black transition-all outline-none placeholder:text-light-four/50 hover:border-light-four focus:border-light-tertiary dark:border-dark-four dark:bg-dark-primary dark:text-dark-white dark:placeholder:text-dark-four/50 dark:hover:border-dark-four dark:focus:border-dark-tertiary dark:focus:ring-dark-tertiary"
							placeholder="••••••••"
							disabled={isLoading}
						/>
						<button
							type="button"
							onclick={() => (showPassword = !showPassword)}
							class="absolute top-1/2 right-4 -translate-y-1/2 text-light-black transition-colors hover:text-light-four dark:text-dark-white"
							disabled={isLoading}
						>
							{#if showPassword}
								<EyeIcon class="h-5 w-5" />
							{:else}
								<EyeOffIcon class="h-5 w-5" />
							{/if}
						</button>
					</div>
				</div>

				<!-- Forgot Password -->
				<div class="flex justify-end">
					<button
						type="button"
						class="text-sm font-semibold text-light-tertiary transition-colors hover:text-light-tertiary_d dark:text-dark-tertiary dark:hover:text-dark-tertiary_d"
					>
						¿Olvidaste tu contraseña?
					</button>
				</div>

				<Button onclick={handleSubmit} disabled={isLoading} fullWidth {isLoading}>
					Iniciar Sesión
				</Button>
			</form>

			<!-- Divider -->
			<div class="my-8 flex items-center">
				<div class="h-px flex-1 bg-light-four/30 dark:bg-dark-four/30"></div>
				<span class="px-4 text-sm text-light-four dark:text-dark-four">o</span>
				<div class="h-px flex-1 bg-light-four/30 dark:bg-dark-four/30"></div>
			</div>

			<!-- Sign Up Link -->
			<div class="text-center">
				<p class="text-light-black/70 dark:text-dark-white/70">
					¿Primera vez en CertHub?
					<button
						type="button"
						onclick={() => goto('/auth/sign-up')}
						class="ml-1 font-bold text-light-tertiary transition-colors hover:text-light-tertiary_d dark:text-dark-tertiary dark:hover:text-dark-tertiary_d"
					>
						Crea tu cuenta gratis
					</button>
				</p>
			</div>

			<!-- Back to Home -->
			<div class="mt-8 text-center">
				<button
					type="button"
					onclick={() => goto('/')}
					class="inline-flex items-center text-sm font-medium text-light-secondary transition-colors hover:text-light-secondary_d dark:text-dark-secondary dark:hover:text-dark-secondary_d"
				>
					<ChevronLeftIcon class="mr-1 h-4 w-4" />
					Volver al inicio
				</button>
			</div>
		</div>
	</div>
</div>
