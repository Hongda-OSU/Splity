"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helper/date";
import { PaymentSuccessImage } from "@/helper/image";
import { useMyStore } from "@/store/store";
import Stars from "@/components/stars/Stars";
import styles from "./payment-success.module.css";

const PaymentSuccess = () => {
  const { billPayer } = useMyStore((state) => ({
    billPayer: state.billPayer,
  }));

  const getCurrentFormattedTime = () => formatDate(new Date());

  return (
    <section className={styles.container}>
      <div className={styles["payment-success"]}>
        <div className={styles.wrapper}>
          <Stars />
          <Image
            src={PaymentSuccessImage}
            alt=""
            width="auto"
            height="auto"
            priority={true}
            className={styles["payment-success-image"]}
          />
          <p className={styles.text1}>Payment Success !</p>
          <p className={styles.text2}>
            You have split the bill with{" "}
            <span>{billPayer.bill_creator || "Hongda Lin"}</span>
          </p>
          <p className={styles["bill-payer"]}>
            {billPayer.bill_payer || "Hongda Lin"}
          </p>
          <p className={styles["bill-amount"]}>
            $ {billPayer.bill_amount || "20.00"}
          </p>
          <p className={styles["bill-description"]}>
            {billPayer.bill_description || "Tuesday lunch"}
          </p>
          <p className={styles.date}>{getCurrentFormattedTime()}</p>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span className={styles["button-text"]}>Back to Home</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
