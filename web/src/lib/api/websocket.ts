import { getBaseUrl, getToken } from "./client";

export interface WsTextMessage {
  type: "text";
  content: string;
}

export interface WsDoneMessage {
  type: "done";
}

export interface WsErrorMessage {
  type: "error";
  error: string;
}

export type WsMessage = WsTextMessage | WsDoneMessage | WsErrorMessage;

export interface ChatStreamCallbacks {
  onToken: (content: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}

export function createChatStream(
  prompt: string,
  sessionId: string | undefined,
  callbacks: ChatStreamCallbacks,
  model?: string,
): WebSocket {
  const baseUrl = getBaseUrl().replace(/^http/, "ws");
  const token = getToken();
  const url = token
    ? `${baseUrl}/ws/chat?token=${encodeURIComponent(token)}`
    : `${baseUrl}/ws/chat`;

  const ws = new WebSocket(url);
  let intentionalClose = false;

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        prompt,
        session_id: sessionId,
        model: model || undefined,
      }),
    );
  };

  ws.onmessage = (event) => {
    try {
      const msg: WsMessage = JSON.parse(event.data);
      switch (msg.type) {
        case "text":
          callbacks.onToken(msg.content);
          break;
        case "done":
          callbacks.onDone();
          intentionalClose = true;
          ws.close();
          break;
        case "error":
          callbacks.onError(msg.error);
          intentionalClose = true;
          ws.close();
          break;
      }
    } catch {
      callbacks.onError("Failed to parse WebSocket message");
      intentionalClose = true;
      ws.close();
    }
  };

  ws.onerror = () => {
    if (!intentionalClose) {
      callbacks.onError("WebSocket connection error");
    }
  };

  ws.onclose = (event) => {
    if (!intentionalClose && !event.wasClean && event.code !== 1000) {
      callbacks.onError(`Connection closed unexpectedly (code: ${event.code})`);
    }
  };

  return ws;
}
