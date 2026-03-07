import { apiGet, apiPost } from "$lib/api/client";

export interface Message {
  id: string;
  session_id: string;
  role: string;
  content: string;
  created_at: number;
}

function createMessagesStore() {
  let messages = $state<Message[]>([]);
  let loading = $state(false);
  let streaming = $state(false);
  let streamContent = $state("");
  let error = $state("");

  return {
    get messages() {
      return messages;
    },
    get loading() {
      return loading;
    },
    get streaming() {
      return streaming;
    },
    get streamContent() {
      return streamContent;
    },
    get error() {
      return error;
    },

    async load(sessionId: string) {
      loading = true;
      try {
        messages = await apiGet<Message[]>(
          `/sessions/${encodeURIComponent(sessionId)}/messages`,
        );
      } finally {
        loading = false;
      }
    },

    async send(sessionId: string, role: string, content: string) {
      const msg = await apiPost<Message>(
        `/sessions/${encodeURIComponent(sessionId)}/messages`,
        { role, content },
      );
      messages = [...messages, msg];
      return msg;
    },

    startStream() {
      streaming = true;
      streamContent = "";
      error = "";
    },

    setError(msg: string) {
      error = msg;
    },

    appendToken(token: string) {
      streamContent += token;
    },

    finishStream(sessionId: string) {
      if (streamContent) {
        messages = [
          ...messages,
          {
            id: crypto.randomUUID(),
            session_id: sessionId,
            role: "assistant",
            content: streamContent,
            created_at: Date.now(),
          },
        ];
      }
      streaming = false;
      streamContent = "";
    },

    clear() {
      messages = [];
      streaming = false;
      streamContent = "";
      error = "";
    },
  };
}

export const messagesStore = createMessagesStore();
