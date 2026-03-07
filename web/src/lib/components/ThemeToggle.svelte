<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import Monitor from '@lucide/svelte/icons/monitor';
	import { themeStore } from '$lib/stores/theme.svelte';

	const icons = { light: Sun, dark: Moon, system: Monitor } as const;
	const labels = { light: 'Light', dark: 'Dark', system: 'System' } as const;
</script>

<Button variant="ghost" size="sm" onclick={() => themeStore.toggle()} class="w-full justify-start gap-2">
	{@const Icon = icons[themeStore.theme]}
	<Icon class="h-4 w-4" />
	<span class="text-xs">{labels[themeStore.theme]}</span>
</Button>
