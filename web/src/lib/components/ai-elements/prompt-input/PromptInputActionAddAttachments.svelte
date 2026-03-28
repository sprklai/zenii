<script lang="ts">
	import { getAttachmentsContext } from "./attachments-context.svelte.js";
	import PromptInputActionMenuItem from "./PromptInputActionMenuItem.svelte";
	import ImageIcon from "./ImageIcon.svelte";
	import * as m from "$lib/paraglide/messages";

	interface Props {
		label?: string;
		class?: string;
	}

	let { label = m.prompt_input_add_attachments(), class: className, ...props }: Props = $props();

	let attachments = getAttachmentsContext();

	let handleSelect = (e: Event) => {
		e.preventDefault();
		attachments.openFileDialog();
	};
</script>

<PromptInputActionMenuItem class={className} onSelect={handleSelect} {...props}>
	<ImageIcon class="mr-2 size-4" />
	{label}
</PromptInputActionMenuItem>
