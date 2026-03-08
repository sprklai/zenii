<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Switch } from '$lib/components/ui/switch';
	import { configStore } from '$lib/stores/config.svelte';
	import { getBaseUrl, setBaseUrl, getToken, setToken } from '$lib/api/client';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let baseUrl = $state(getBaseUrl());
	let token = $state(getToken() ?? '');

	onMount(() => {
		configStore.load();
	});

	function handleSaveConnection() {
		setBaseUrl(baseUrl);
		setToken(token);
	}

	async function toggleConfig(key: string, value: boolean) {
		console.log(`[Settings] toggleConfig called: ${key} = ${value}`);
		try {
			const result = await configStore.update({ [key]: value });
			console.log(`[Settings] Config ${key} persisted:`, result);
			// Re-fetch from server to confirm round-trip
			await configStore.load();
			console.log(`[Settings] After reload: ${key} =`, configStore.config[key]);
		} catch (e) {
			console.error(`[Settings] Failed to update ${key}:`, e);
			await configStore.load();
		}
	}
</script>

<div class="max-w-2xl mx-auto space-y-6">
	<h1 class="text-2xl font-bold">Settings</h1>

	<Card.Root>
		<Card.Header>
			<Card.Title>Connection</Card.Title>
			<Card.Description>Gateway connection settings</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-3">
			<div class="space-y-1">
				<label class="text-sm font-medium" for="base-url">Gateway URL</label>
				<Input id="base-url" bind:value={baseUrl} placeholder="http://127.0.0.1:18981" />
			</div>
			<div class="space-y-1">
				<label class="text-sm font-medium" for="token">Auth Token</label>
				<Input id="token" type="password" bind:value={token} placeholder="Bearer token" />
			</div>
			<Button onclick={handleSaveConnection}>Save Connection</Button>
		</Card.Content>
	</Card.Root>

	{#if !configStore.loading && Object.keys(configStore.config).length > 0}
		<Card.Root>
			<Card.Header>
				<Card.Title>Agent Features</Card.Title>
				<Card.Description>Toggle context injection and self-evolution at runtime</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium">Context Injection</p>
						<p class="text-xs text-muted-foreground">Rich environment and identity context in agent preamble</p>
					</div>
					<Switch
						checked={configStore.config.context_injection_enabled === true}
						onCheckedChange={(v) => toggleConfig('context_injection_enabled', v)}
					/>
				</div>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium">Self-Evolution</p>
						<p class="text-xs text-muted-foreground">Agent can learn preferences and propose skill changes</p>
					</div>
					<Switch
						checked={configStore.config.self_evolution_enabled === true}
						onCheckedChange={(v) => toggleConfig('self_evolution_enabled', v)}
					/>
				</div>
			</Card.Content>
		</Card.Root>
	{/if}

	<div class="flex gap-2">
		<Button variant="outline" onclick={() => goto('/settings/providers')}>
			Providers
		</Button>
		<Button variant="outline" onclick={() => goto('/settings/services')}>
			Services
		</Button>
		<Button variant="outline" onclick={() => goto('/settings/persona')}>
			Persona & Skills
		</Button>
		<Button variant="outline" onclick={() => goto('/settings/channels')}>
			Channels
		</Button>
	</div>

	{#if configStore.loading}
		<Skeleton class="h-40 w-full" />
	{:else if Object.keys(configStore.config).length > 0}
		<Card.Root>
			<Card.Header>
				<Card.Title>Current Configuration</Card.Title>
			</Card.Header>
			<Card.Content>
				<pre class="text-xs bg-muted rounded-lg p-3 overflow-auto max-h-80">{JSON.stringify(configStore.config, null, 2)}</pre>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
