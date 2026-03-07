<script lang="ts">
	import ChatView from '$lib/components/ChatView.svelte';
	import { messagesStore } from '$lib/stores/messages.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		messagesStore.clear();
	});
</script>

<ChatView />
