<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Button } from '$lib/components/ui/button';
	import MessageSquarePlus from '@lucide/svelte/icons/message-square-plus';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import { sessionsStore } from '$lib/stores/sessions.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	async function handleNew() {
		const session = await sessionsStore.create('New Chat');
		goto(`/chat/${session.id}`);
	}

	async function handleDelete(e: Event, id: string) {
		e.stopPropagation();
		await sessionsStore.remove(id);
		if (page.params.id === id) {
			goto('/');
		}
	}
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel class="flex items-center justify-between">
		<span>Chats</span>
		<Button variant="ghost" size="icon" class="h-5 w-5" onclick={handleNew}>
			<MessageSquarePlus class="h-3.5 w-3.5" />
		</Button>
	</Sidebar.GroupLabel>
	<Sidebar.GroupContent>
		<Sidebar.Menu>
			{#each sessionsStore.sessions as session (session.id)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="group"
						isActive={page.params.id === session.id}
						onclick={() => goto(`/chat/${session.id}`)}
					>
						<MessageSquare class="h-4 w-4" />
						<span class="truncate">{session.title}</span>
					</Sidebar.MenuButton>
					<Sidebar.MenuAction onclick={(e: Event) => handleDelete(e, session.id)}>
						<Trash2 class="h-3.5 w-3.5" />
					</Sidebar.MenuAction>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>
