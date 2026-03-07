<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { getToken, setToken, healthCheck } from '$lib/api/client';

	let { children } = $props();

	let authenticated = $state(!!getToken());
	let tokenInput = $state('');
	let error = $state('');
	let checking = $state(false);

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
