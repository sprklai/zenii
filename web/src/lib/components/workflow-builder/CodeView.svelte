<script lang="ts">
	import { t } from './i18n-utils';

	let {
		value,
		oninput,
		error
	}: {
		value: string;
		oninput: (value: string) => void;
		error: string | null;
	} = $props();
</script>

<div class="flex flex-col h-full">
	{#if error}
		<div class="px-3 py-2 text-xs text-red-400 bg-red-500/5 border-b">
			{t('wb_code_validation_error')}: {error}
		</div>
	{/if}
	<textarea
		{value}
		oninput={(e) => oninput((e.target as HTMLTextAreaElement).value)}
		class="flex-1 w-full bg-background text-foreground font-mono text-sm p-4 resize-none focus:outline-none"
		spellcheck="false"
	></textarea>
</div>
