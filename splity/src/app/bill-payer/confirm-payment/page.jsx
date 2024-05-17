"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { formatDate } from "@/helper/date";
import { useMyStore } from "@/store/store";
import { BackImage, ExchangeImage } from "@/helper/image";
import { confirm_payment } from "@/helper/api";
import useAxios from "@/helper/useAxios";
import styles from "./confirm-payment.module.css";

const Loading = dynamic(() => import("@/components/loading/Loading"), {
  ssr: false,
});

export default function ConfirmPayment() {
  const router = useRouter();
  const { billPayer } = useMyStore((state) => ({
    billPayer: state.billPayer,
  }));

  const { fetchData, loading, error } = useAxios(confirm_payment, "POST");

  const ConfirmPayment = async (e) => {
    e.preventDefault();

    const data = await fetchData({
      bill_id: billPayer.bill_id,
      bill_payer: billPayer.bill_payer,
      bill_amount: billPayer.bill_amount,
    });

    if (data) {
      router.push("/bill-payer/payment-success");
    }
  };

  const getCurrentFormattedTime = () => formatDate(new Date());

  return (
    <section className="flex justify-center items-center bg-black">
      {loading && <Loading />}
      <main className="flex flex-col w-[430px] min-h-screen bg-white">
        <div className="relative flex items-center justify-center mt-10">
          <Link href="/bill-payer/payment">
            <Image
              src={BackImage}
              alt=""
              width={24}
              height={24}
              className={styles["back-image"]}
            />
          </Link>
          <h1 className={styles.header}>Confirm Payment</h1>
        </div>
        <div className="flex flex-col items-center flex-grow">
          <Image
            src={ExchangeImage}
            alt=""
            width={300}
            height={300}
            className="mt-16"
          />
          <p className={styles["bill-payer"]}>
            {billPayer.bill_payer || "Hongda Lin"}
          </p>
          <p className={styles["bill_amount"]}>
            $ {billPayer.bill_amount || "20.00"}
          </p>
          <p className={styles["bill-description"]}>
            {billPayer.bill_description || "Tuesday lunch"}
          </p>
          <p className={styles.date}>{getCurrentFormattedTime()}</p>
          <button
            className={styles.button}
            onClick={ConfirmPayment}
            disabled={loading}
          >
            <span className={styles["button-text"]}>
              {loading ? "Confirming..." : "Confirm"}
            </span>
          </button>
        </div>
      </main>
    </section>
  );
}
