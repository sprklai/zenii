<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import AuthGate from '$lib/components/AuthGate.svelte';
	import SessionList from '$lib/components/SessionList.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Brain from '@lucide/svelte/icons/brain';
	import Home from '@lucide/svelte/icons/home';
	import Database from '@lucide/svelte/icons/database';
	import Settings from '@lucide/svelte/icons/settings';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { sessionsStore } from '$lib/stores/sessions.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		sessionsStore.load();
	});

	const navItems = [
		{ href: '/', icon: Home, label: 'Home' },
		{ href: '/memory', icon: Database, label: 'Memory' },
		{ href: '/settings', icon: Settings, label: 'Settings' },
		{ href: '/schedule', icon: Calendar, label: 'Schedule' }
	];
</script>

<AuthGate>
	<Sidebar.Provider>
		<Sidebar.Root>
			<Sidebar.Header>
				<div class="flex items-center gap-2 px-2 py-1">
					<Brain class="h-6 w-6 text-primary" />
					<span class="font-semibold text-lg">MesoClaw</span>
				</div>
			</Sidebar.Header>

			<Sidebar.Content>
				<Sidebar.Group>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							{#each navItems as item (item.href)}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton
										isActive={page.url.pathname === item.href}
										onclick={() => goto(item.href)}
									>
										<item.icon class="h-4 w-4" />
										<span>{item.label}</span>
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>

				<Separator />

				<SessionList />
			</Sidebar.Content>

			<Sidebar.Footer>
				<ThemeToggle />
			</Sidebar.Footer>
		</Sidebar.Root>

		<main class="flex-1 overflow-hidden">
			<div class="flex h-full items-start">
				<Sidebar.Trigger class="m-2" />
				<div class="flex-1 h-full overflow-auto p-4">
					{@render children()}
				</div>
			</div>
		</main>
	</Sidebar.Provider>
</AuthGate>
