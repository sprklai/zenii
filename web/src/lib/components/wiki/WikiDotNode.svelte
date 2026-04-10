<script lang="ts">
	import { Handle, Position } from '@xyflow/svelte';

	let { data } = $props<{ data: { label: string } }>();
</script>

<Handle type="target" position={Position.Top} class="!opacity-0"></Handle>
<div class="flex flex-col items-center gap-1">
	<div class="h-4 w-4 rounded-full border-2 border-primary bg-primary/30"></div>
	<span class="max-w-[120px] truncate text-center text-[10px] leading-tight text-foreground">
		{data.label}
	</span>
</div>
<Handle type="source" position={Position.Bottom} class="!opacity-0"></Handle>
