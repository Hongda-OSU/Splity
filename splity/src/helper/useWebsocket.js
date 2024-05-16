import { splity_websocket } from "./api";

const useWebSocket = (onMessage) => {
  const ws = new WebSocket(splity_websocket);

  ws.onopen = () => {
    console.log("Connected to WebSocket");
  };

  ws.onmessage = (e) => {
    const message = JSON.parse(e.data);
    if (message.action === "update") {
      onMessage(message.data);
    }
  };

  ws.onclose = () => {
    console.log("Disconnected from WebSocket");
  };

  return ws;
};

export default useWebSocket;
