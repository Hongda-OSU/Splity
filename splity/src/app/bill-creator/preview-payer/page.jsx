"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./preview-payer.module.css";
import { PreviewPayerImage } from "@/helper/image";
import { splity_websocket } from "@/helper/api";
import PreviewItem from "@/components/preview-item/PreviewItem";

const PreviewPayer = () => {
  const [paidHistory, setPaidHistory] = useState([]);
  const [totalReceived, setTotalReceived] = useState(0);

  useEffect(() => {
    const ws = new WebSocket(splity_websocket);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.action === "update") {
        const { payer, amount, date } = message.data;
        setPaidHistory((prevHistory) => [...prevHistory, message.data]);
        setTotalReceived((prevTotal) => prevTotal + amount);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div id={styles["preview-payer"]}>
        <div className={styles.wrapper}>
          <Image
            src={PreviewPayerImage}
            alt=""
            priority={true}
            className={styles.image1}
          />
          <p className={styles.text1}>Who has paid ?</p>
          <p className={styles.text2}>Theses people have paid your bill</p>
          <div className={styles["preview-container"]}>
            {paidHistory.map((payer, index) => (
              <PreviewItem key={index} payer={payer} />
            ))}
          </div>
          <p className={styles["receive-total"]}>
            You have received ${totalReceived.toFixed(1)} from your friends
          </p>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span className={styles["button-text"]}>Return</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewPayer;
