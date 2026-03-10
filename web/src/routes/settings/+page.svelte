<script lang="ts">
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import Building2 from '@lucide/svelte/icons/building-2';
	import User from '@lucide/svelte/icons/user';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import KeyRound from '@lucide/svelte/icons/key-round';
	import Brain from '@lucide/svelte/icons/brain';
	import GeneralSettings from '$lib/components/settings/GeneralSettings.svelte';
	import ProvidersSettings from '$lib/components/settings/ProvidersSettings.svelte';
	import PersonaSettings from '$lib/components/settings/PersonaSettings.svelte';
	import ChannelsSettings from '$lib/components/settings/ChannelsSettings.svelte';
	import ServicesSettings from '$lib/components/settings/ServicesSettings.svelte';
	import EmbeddingsSettings from '$lib/components/settings/EmbeddingsSettings.svelte';
	import { onMount } from 'svelte';

	const tabs = [
		{ id: 'general', label: 'General', icon: SettingsIcon },
		{ id: 'providers', label: 'Providers', icon: Building2 },
		{ id: 'persona', label: 'Persona', icon: User },
		{ id: 'channels', label: 'Channels', icon: MessageSquare },
		{ id: 'services', label: 'Services', icon: KeyRound },
		{ id: 'embeddings', label: 'Embeddings', icon: Brain },
	];

	let activeTab = $state('general');

	function getHashTab(): string {
		const hash = window.location.hash.slice(1);
		return tabs.some((t) => t.id === hash) ? hash : 'general';
	}

	function setTab(id: string) {
		window.location.hash = id;
		activeTab = id;
	}

	onMount(() => {
		activeTab = getHashTab();
	});

	$effect(() => {
		function onHashChange() {
			activeTab = getHashTab();
		}
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	});
</script>

<div class="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
	<!-- Desktop sidebar -->
	<nav class="hidden md:flex flex-col w-48 shrink-0 space-y-1">
		{#each tabs as tab (tab.id)}
			<button
				class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left
					{activeTab === tab.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
				onclick={() => setTab(tab.id)}
			>
				<tab.icon class="h-4 w-4" />
				{tab.label}
			</button>
		{/each}
	</nav>

	<!-- Mobile horizontal tabs -->
	<div class="md:hidden overflow-x-auto flex gap-1 border-b pb-2">
		{#each tabs as tab (tab.id)}
			<button
				class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors
					{activeTab === tab.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted'}"
				onclick={() => setTab(tab.id)}
			>
				<tab.icon class="h-3.5 w-3.5" />
				{tab.label}
			</button>
		{/each}
	</div>

	<!-- Content area -->
	<div class="flex-1 min-w-0 space-y-6">
		<h1 class="text-2xl font-bold">{tabs.find((t) => t.id === activeTab)?.label ?? 'Settings'}</h1>

		{#if activeTab === 'general'}
			<GeneralSettings />
		{:else if activeTab === 'providers'}
			<ProvidersSettings />
		{:else if activeTab === 'persona'}
			<PersonaSettings />
		{:else if activeTab === 'channels'}
			<ChannelsSettings />
		{:else if activeTab === 'services'}
			<ServicesSettings />
		{:else if activeTab === 'embeddings'}
			<EmbeddingsSettings />
		{/if}
	</div>
</div>
