"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/helper/useFetch";
import useWebSocket from "@/helper/useWebsocket";
import PreviewItem from "@/components/preview-item/PreviewItem";
import { PreviewPayerImage } from "@/helper/image";
import { query_payment_history } from "@/helper/api";
import styles from "./preview-payer.module.css";

const PreviewPayer = () => {
  const Loading = dynamic(() => import("@/components/loading/Loading"), {
    ssr: false,
  });

  const { data, loading, error } = useFetch(
    `${query_payment_history}?bill_id=7300`
  );
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [paymentReceived, setPaymentReceived] = useState(0);

  const handleWebSocketMessage = (message) => {
    const { payer, amount, date } = message;
    setPaymentHistory((prevHistory) => [
      ...prevHistory,
      { payer, amount, date },
    ]);
    setPaymentReceived((prevTotal) => prevTotal + amount);
  };

  if (data && paymentHistory.length === 0 && paymentReceived === 0) {
    const payment_history = data.history || [];
    const total_payment = payment_history.reduce(
      (sum, { amount }) => sum + amount,
      0
    );
    setPaymentHistory(payment_history);
    setPaymentReceived(total_payment);

    useWebSocket(handleWebSocketMessage);
  }

  return (
    <section className={styles.container}>
      <div id={styles["preview-payer"]}>
        <div className={styles.wrapper}>
          <Image
            src={PreviewPayerImage}
            alt=""
            priority={true}
            className={styles["preview-payer-image"]}
          />
          <p className={styles.text1}>Who has paid ?</p>
          <p className={styles.text2}>These people have paid your bill</p>
          <div className={styles["preview-container"]}>
            {paymentHistory.map((payer, index) => (
              <PreviewItem key={index} payer={payer} />
            ))}
          </div>
          <p className={styles["receive-total"]}>
            You have received ${paymentReceived.toFixed(1)} from your friends
          </p>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span className={styles["button-text"]}>Return</span>
            </button>
          </Link>
          {loading && <Loading />}
        </div>
      </div>
    </section>
  );
};

export default PreviewPayer;
