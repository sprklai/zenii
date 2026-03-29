<script lang="ts">
	import { Handle, Position } from '@xyflow/svelte';
	import { nodeRegistry } from '../node-registry';
	import { t } from '../i18n-utils';
	import Loader2 from '@lucide/svelte/icons/loader-2';

	let { data, id }: { data: Record<string, unknown>; id: string } = $props();

	const definition = $derived(nodeRegistry.get(data.definitionType as string));
	const label = $derived(definition ? t(definition.label) : (data.definitionType as string));
	const isRunning = $derived(data.isRunning === true);
</script>

<div
	class="rounded-lg border-2 border-dashed border-primary/50 bg-card text-card-foreground shadow-sm min-w-[160px] {isRunning ? 'ring-2 ring-yellow-500 animate-pulse' : ''}"
>
	<div class="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-t-lg">
		{#if isRunning}
			<Loader2 class="h-4 w-4 animate-spin text-yellow-500" />
		{/if}
		<span class="text-xs font-medium truncate">{label}</span>
	</div>

	{#if data.stepName}
		<div class="px-3 py-1.5 text-[10px] text-muted-foreground truncate">
			{data.stepName}
		</div>
	{/if}

	<Handle type="source" position={Position.Bottom} class="!bg-primary !w-2.5 !h-2.5" />
</div>
