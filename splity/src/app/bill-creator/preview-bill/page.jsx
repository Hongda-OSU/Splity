"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/helper/useFetch";
import useWebSocket from "@/helper/useWebsocket";
import { useMyStore } from "@/store/store";
import { PreviewPayerImage } from "@/helper/image";
import { query_payment_history } from "@/helper/api";
import PreviewItem from "@/components/preview-item/PreviewItem";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./preview-bill.module.css";

const Loading = dynamic(() => import("@/components/loading/Loading"), {
  ssr: false,
});

const PreviewBill = () => {
  const { billCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
  }));

  const { data, loading, error } = useFetch(
    `${query_payment_history}?bill_id=${billCreator.bill_id}`
  );

  const [paymentHistory, setPaymentHistory] = useState([]);
  const [paymentReceived, setPaymentReceived] = useState(0);

  useEffect(() => {
    if (data) {
      const payment_history = data.history || [];
      const total_payment = payment_history.reduce(
        (sum, { amount }) => sum + amount,
        0
      );
      setPaymentHistory(payment_history);
      setPaymentReceived(total_payment);
    }
  }, [data]);

  useWebSocket(setPaymentHistory, setPaymentReceived);

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 50 });
    AOS.refresh();
  }, []);

  return (
    <section className={styles.container}>
      <div id={styles["preview-payer"]}>
        <div className={styles.wrapper}>
          <Image
            src={PreviewPayerImage}
            alt=""
            width="auto"
            height="auto"
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
            You have received ${paymentReceived.toFixed(2)} from your friends
          </p>
          <Link href="/bill-creator/split-success" className={styles.link}>
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

export default PreviewBill;
