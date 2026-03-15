<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { providersStore } from '$lib/stores/providers.svelte';
	import { channelsStore } from '$lib/stores/channels.svelte';
	import { configStore } from '$lib/stores/config.svelte';
	import ProvidersSettings from '$lib/components/settings/ProvidersSettings.svelte';
	import ChannelsSettings from '$lib/components/settings/ChannelsSettings.svelte';
	import { onMount } from 'svelte';

	let {
		detectedTimezone = '',
		oncomplete
	}: {
		detectedTimezone: string;
		oncomplete: () => void;
	} = $props();

	const TOTAL_STEPS = 3;
	let step = $state(1);
	let userName = $state('');
	let userLocation = $state('');
	let userTimezone = $state('');
	let saving = $state(false);
	let error = $state('');

	const stepLabels = ['AI Provider', 'Channels', 'Your Profile'];

	onMount(async () => {
		userTimezone = detectedTimezone;
		await providersStore.load();
		await channelsStore.load();
	});

	function stepState(i: number): 'done' | 'active' | 'upcoming' {
		if (i + 1 < step) return 'done';
		if (i + 1 === step) return 'active';
		return 'upcoming';
	}

	async function handleFinish() {
		if (!userName.trim()) {
			error = 'Your name is required';
			return;
		}
		if (!userLocation.trim()) {
			error = 'Your location is required';
			return;
		}
		saving = true;
		error = '';
		try {
			const updates: Record<string, string | null> = {
				user_name: userName.trim(),
				user_location: userLocation.trim()
			};
			if (userTimezone.trim()) {
				updates.user_timezone = userTimezone.trim();
			}
			await configStore.update(updates as Record<string, unknown>);
			oncomplete();
		} catch (e) {
			error = e instanceof Error ? e.message : String(e);
		} finally {
			saving = false;
		}
	}
</script>

<div class="flex min-h-screen items-start justify-center overflow-y-auto bg-background p-4 py-12">
	<div class="w-full max-w-2xl space-y-6">
		<!-- Header -->
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold tracking-tight">Welcome to Zenii</h1>
			<p class="text-muted-foreground">Let's get you set up so you can start chatting.</p>
		</div>

		<!-- Step Indicator -->
		<div class="flex items-center justify-center gap-3">
			{#each stepLabels as label, i (label)}
				{@const state = stepState(i)}
				<div class="flex items-center gap-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium {state === 'active'
							? 'bg-primary text-primary-foreground'
							: state === 'done'
								? 'bg-green-600 text-white'
								: 'bg-muted text-muted-foreground'}"
					>
						{state === 'done' ? '\u2713' : i + 1}
					</div>
					<span class="text-sm font-medium {state === 'active' ? 'text-foreground' : 'text-muted-foreground'}">
						{label}
					</span>
				</div>
				{#if i < TOTAL_STEPS - 1}
					<div class="h-px w-12 bg-border"></div>
				{/if}
			{/each}
		</div>

		<!-- Step Content -->
		{#if step === 1}
			<div class="space-y-4">
				<Card.Root>
					<Card.Header>
						<div class="flex items-center justify-between">
							<div>
								<Card.Title>Set up an AI Provider</Card.Title>
								<Card.Description>
									Add an API key for at least one provider to enable chat. Expand a provider below, enter
									your key, and save it.
								</Card.Description>
							</div>
							<Button
								onclick={() => (step = 2)}
								disabled={!providersStore.hasUsableModel}
								size="lg"
								class="shrink-0 ml-4"
							>
								{providersStore.hasUsableModel ? 'Next' : 'Add a key first'}
							</Button>
						</div>
					</Card.Header>
				</Card.Root>

				<ProvidersSettings />
			</div>
		{:else if step === 2}
			<div class="space-y-4">
				<Card.Root>
					<Card.Header>
						<div class="flex items-center justify-between">
							<div>
								<Card.Title>Connect Channels</Card.Title>
								<Card.Description>
									Optionally connect messaging channels like Telegram, Slack, or Discord so Zenii can
									reach you there. You can skip this and set them up later in Settings.
								</Card.Description>
							</div>
							<div class="flex gap-2 shrink-0 ml-4">
								<Button variant="ghost" onclick={() => (step = 3)}>
									Skip
								</Button>
								<Button onclick={() => (step = 3)}>
									Next
								</Button>
							</div>
						</div>
					</Card.Header>
				</Card.Root>

				<ChannelsSettings />
			</div>
		{:else}
			<Card.Root>
				<Card.Header>
					<Card.Title>Your Profile</Card.Title>
					<Card.Description>
						Tell Zenii a bit about yourself so it can give you personalized, context-aware responses.
					</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-4">
					<div class="space-y-1">
						<label class="text-sm font-medium" for="onboard-name">Your Name</label>
						<Input
							id="onboard-name"
							bind:value={userName}
							placeholder="e.g., Rakesh"
						/>
					</div>
					<div class="space-y-1">
						<label class="text-sm font-medium" for="onboard-location">Location</label>
						<Input
							id="onboard-location"
							bind:value={userLocation}
							placeholder="e.g., Toronto, Canada"
						/>
					</div>
					<div class="space-y-1">
						<label class="text-sm font-medium" for="onboard-timezone">Timezone</label>
						<Input
							id="onboard-timezone"
							bind:value={userTimezone}
							placeholder="e.g., America/Toronto"
						/>
						<p class="text-xs text-muted-foreground">
							Auto-detected from your system. Edit if incorrect.
						</p>
					</div>
					{#if error}
						<p class="text-sm text-destructive">{error}</p>
					{/if}
				</Card.Content>
			</Card.Root>

			<div class="flex justify-between">
				<Button variant="ghost" onclick={() => (step = 2)}>Back</Button>
				<Button onclick={handleFinish} disabled={saving} size="lg">
					{saving ? 'Saving...' : 'Get Started'}
				</Button>
			</div>
		{/if}
	</div>
</div>
