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
): WebSocket {
  const baseUrl = getBaseUrl().replace(/^http/, "ws");
  const token = getToken();
  const url = token
    ? `${baseUrl}/ws/chat?token=${encodeURIComponent(token)}`
    : `${baseUrl}/ws/chat`;

  const ws = new WebSocket(url);

  ws.onopen = () => {
    ws.send(JSON.stringify({ prompt, session_id: sessionId }));
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
          ws.close();
          break;
        case "error":
          callbacks.onError(msg.error);
          ws.close();
          break;
      }
    } catch {
      callbacks.onError("Failed to parse WebSocket message");
      ws.close();
    }
  };

  ws.onerror = () => {
    callbacks.onError("WebSocket connection error");
  };

  ws.onclose = (event) => {
    if (!event.wasClean && event.code !== 1000) {
      callbacks.onError(`Connection closed unexpectedly (code: ${event.code})`);
    }
  };

  return ws;
}
