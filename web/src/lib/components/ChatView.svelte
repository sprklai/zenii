<script lang="ts">
	import {
		Conversation,
		ConversationContent,
		ConversationEmptyState,
		ConversationScrollButton
	} from '$lib/components/ai-elements/conversation';
	import { Message, MessageContent } from '$lib/components/ai-elements/message';
	import { Response } from '$lib/components/ai-elements/response';
	import { Loader } from '$lib/components/ai-elements/loader';
	import {
		PromptInput,
		PromptInputTextarea,
		PromptInputToolbar,
		PromptInputSubmit,
		type PromptInputMessage
	} from '$lib/components/ai-elements/prompt-input';
	import { messagesStore } from '$lib/stores/messages.svelte';
	import { sessionsStore } from '$lib/stores/sessions.svelte';
	import { createChatStream } from '$lib/api/websocket';
	import { goto } from '$app/navigation';

	let { sessionId = undefined }: { sessionId?: string } = $props();

	async function handleSubmit(message: PromptInputMessage) {
		const prompt = (message.text ?? '').trim();
		if (!prompt || messagesStore.streaming) return;

		let currentSessionId = sessionId;

		if (!currentSessionId) {
			const session = await sessionsStore.create(prompt.slice(0, 50));
			currentSessionId = session.id;
			goto(`/chat/${currentSessionId}`, { replaceState: true });
		}

		await messagesStore.send(currentSessionId, 'user', prompt);

		messagesStore.startStream();

		createChatStream(prompt, currentSessionId, {
			onToken(content) {
				messagesStore.appendToken(content);
			},
			onDone() {
				messagesStore.finishStream(currentSessionId!);
			},
			onError(error) {
				messagesStore.finishStream(currentSessionId!);
				console.error('Chat error:', error);
			}
		});
	}
</script>

<div class="flex h-[calc(100vh-4rem)] flex-col">
	<Conversation class="flex-1">
		<ConversationContent>
			{#if messagesStore.messages.length === 0 && !messagesStore.streaming}
				<ConversationEmptyState
					title="Start a conversation"
					description="Send a message to begin chatting with MesoClaw"
				/>
			{:else}
				<div class="space-y-2">
					{#each messagesStore.messages as msg (msg.id)}
						<Message from={msg.role === 'user' ? 'user' : 'assistant'}>
							<MessageContent variant="flat">
								{#if msg.role === 'user'}
									<p class="whitespace-pre-wrap">{msg.content}</p>
								{:else}
									<Response content={msg.content} />
								{/if}
							</MessageContent>
						</Message>
					{/each}

					{#if messagesStore.streaming}
						<Message from="assistant">
							<MessageContent variant="flat">
								{#if messagesStore.streamContent}
									<Response content={messagesStore.streamContent} />
								{:else}
									<Loader />
								{/if}
							</MessageContent>
						</Message>
					{/if}
				</div>
			{/if}
		</ConversationContent>
		<ConversationScrollButton />
	</Conversation>

	<div class="p-4">
		<PromptInput onSubmit={handleSubmit}>
			<PromptInputTextarea placeholder="Send a message..." />
			<PromptInputToolbar>
				<div class="flex-1"></div>
				<PromptInputSubmit
					status={messagesStore.streaming ? 'streaming' : 'idle'}
					disabled={messagesStore.streaming}
				/>
			</PromptInputToolbar>
		</PromptInput>
	</div>
</div>
