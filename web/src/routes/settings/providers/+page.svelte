<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { providersStore } from '$lib/stores/providers.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		providersStore.load();
	});
</script>

<div class="max-w-2xl mx-auto space-y-6">
	<h1 class="text-2xl font-bold">Providers</h1>

	{#if providersStore.loading}
		<div class="space-y-2">
			<Skeleton class="h-20 w-full" />
			<Skeleton class="h-20 w-full" />
		</div>
	{:else}
		<div class="space-y-4">
			<Card.Root>
				<Card.Header>
					<Card.Title>Configured Providers</Card.Title>
				</Card.Header>
				<Card.Content>
					{#if providersStore.providers.length > 0}
						<div class="space-y-2">
							{#each providersStore.providers as provider (provider.name)}
								<div class="flex items-center justify-between p-2 rounded-lg bg-muted">
									<div>
										<span class="font-medium">{provider.name}</span>
										<Badge variant="secondary" class="ml-2">{provider.type}</Badge>
									</div>
									<span class="text-sm text-muted-foreground">{provider.model_id}</span>
								</div>
							{/each}
						</div>
					{:else}
						<p class="text-muted-foreground">No providers configured</p>
					{/if}
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<Card.Title>Available Models</Card.Title>
				</Card.Header>
				<Card.Content>
					{#if providersStore.models.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each providersStore.models as model (model.id)}
								<Badge variant="outline">{model.id} ({model.provider})</Badge>
							{/each}
						</div>
					{:else}
						<p class="text-muted-foreground">No models available</p>
					{/if}
				</Card.Content>
			</Card.Root>
		</div>
	{/if}
</div>
