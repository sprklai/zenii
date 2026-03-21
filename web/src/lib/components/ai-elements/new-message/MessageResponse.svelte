<script lang="ts">
	import { cn } from "$lib/utils";
	import { Streamdown, type StreamdownProps } from "svelte-streamdown";
	import Code from "svelte-streamdown/code";
	import { themeStore } from "$lib/stores/theme.svelte";
	import { shikiThemes } from "$lib/components/ai-elements/code/shiki";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = {
		content: string;
		class?: string;
	} & Omit<StreamdownProps, "content" | "class"> &
		Omit<HTMLAttributes<HTMLDivElement>, "content">;

	let { content, class: className, ...restProps }: Props = $props();
	let currentTheme = $derived(
		themeStore.isDark ? "github-dark-default" : "github-light-default"
	);
</script>

<div class={cn("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className)}>
	<Streamdown
		{content}
		shikiTheme={currentTheme}
		baseTheme="shadcn"
		components={{ code: Code }}
		{shikiThemes}
		{...restProps}
	/>
</div>
