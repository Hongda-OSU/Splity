import { useEffect } from "react";
import { splity_websocket } from "./api";
import { useMyStore } from "@/store/store";

const useWebSocket = (setPaymentHistory, setPaymentReceived) => {
  const { billCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
  }));

  useEffect(() => {
    if (!billCreator.bill_id) return;
    
    const ws = new WebSocket(splity_websocket);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      ws.send(
        JSON.stringify({ action: "set_bill_id", bill_id: billCreator.bill_id })
      );
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.action === "update") {
        const { payer, amount, date } = message.data;
        setPaymentHistory((prevHistory) => [...prevHistory, message.data]);
        setPaymentReceived((prevPayment) => prevPayment + amount);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, [setPaymentHistory, setPaymentReceived, billCreator.bill_id]);
};

export default useWebSocket;
