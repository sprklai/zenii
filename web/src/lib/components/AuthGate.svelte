<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { getToken, setToken, healthCheck } from '$lib/api/client';

	let { children } = $props();

	let authenticated = $state(false);
	let connecting = $state(false);
	let tokenInput = $state('');
	let error = $state('');
	let checking = $state(false);

	async function waitForGateway() {
		connecting = true;
		while (true) {
			const ok = await healthCheck();
			if (ok) {
				authenticated = true;
				connecting = false;
				return;
			}
			await new Promise((r) => setTimeout(r, 500));
		}
	}

	// If a cached token exists, poll /health until gateway is ready
	if (getToken()) {
		waitForGateway();
	}

	async function handleSubmit() {
		if (!tokenInput.trim()) {
			error = 'Token is required';
			return;
		}
		checking = true;
		error = '';
		setToken(tokenInput.trim());
		const ok = await healthCheck();
		if (ok) {
			authenticated = true;
		} else {
			error = 'Could not connect to daemon. Check the token and ensure the daemon is running.';
		}
		checking = false;
	}
</script>

{#if authenticated}
	{@render children()}
{:else if connecting}
	<div class="flex h-screen items-center justify-center">
		<div class="flex flex-col items-center gap-4">
			<svg
				class="h-8 w-8 animate-spin text-muted-foreground"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			<p class="text-sm text-muted-foreground">Connecting to MesoClaw...</p>
		</div>
	</div>
{:else}
	<Dialog.Root open={true}>
		<Dialog.Content class="sm:max-w-md">
			<Dialog.Header>
				<Dialog.Title>Connect to MesoClaw</Dialog.Title>
				<Dialog.Description>
					Enter your gateway authentication token to connect.
				</Dialog.Description>
			</Dialog.Header>
			<form onsubmit={handleSubmit} class="space-y-4">
				<Input
					type="password"
					placeholder="Bearer token"
					bind:value={tokenInput}
				/>
				{#if error}
					<p class="text-sm text-destructive">{error}</p>
				{/if}
				<Button type="submit" class="w-full" disabled={checking}>
					{checking ? 'Connecting...' : 'Connect'}
				</Button>
			</form>
		</Dialog.Content>
	</Dialog.Root>
{/if}
