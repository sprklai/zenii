<script lang="ts">
	import ChatView from '$lib/components/ChatView.svelte';
	import { messagesStore } from '$lib/stores/messages.svelte';
	import { sessionsStore } from '$lib/stores/sessions.svelte';
	import { page } from '$app/state';
	import { Skeleton } from '$lib/components/ui/skeleton';

	let sessionId = $derived(page.params.id!);

	$effect(() => {
		if (sessionId) {
			messagesStore.clear();
			sessionsStore.get(sessionId);
			messagesStore.load(sessionId);
		}
	});
</script>

{#if messagesStore.loading}
	<div class="space-y-4 p-4">
		<Skeleton class="h-12 w-3/4" />
		<Skeleton class="h-12 w-1/2 ml-auto" />
		<Skeleton class="h-12 w-2/3" />
	</div>
{:else}
	<ChatView {sessionId} />
{/if}
