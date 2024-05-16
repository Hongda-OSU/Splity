import { useEffect } from "react";
import { splity_websocket } from "./api";

const useWebSocket = (setPaymentHistory, setPaymentReceived) => {
  useEffect(() => {
    const ws = new WebSocket(splity_websocket);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.action === "update") {
        const { payer, amount, date } = message.data;
        setPaymentHistory((prevHistory) => [...prevHistory, message.data]);
        setPaymentReceived((prevTotal) => prevTotal + amount);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, [setPaymentHistory, setPaymentReceived]);
};

export default useWebSocket;
