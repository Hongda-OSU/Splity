import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helper/date";
import { BackImage, ExchangeImage } from "@/helper/image";
import styles from "./confirm-payment.module.css";

export default function ConfirmPayment() {
  const getCurrentFormattedTime = () => formatDate(new Date());

  return (
    <section className="flex justify-center items-center bg-black">
      <main className="flex flex-col w-[430px] min-h-screen bg-white">
        <div className="relative flex items-center justify-center mt-10">
          <Link href="/bill-payer/payment">
            <Image
              src={BackImage}
              alt=""
              width={24}
              height={24}
              className={styles.backimage}
            />
          </Link>
          <h1 className={styles.header}>Confirm Payment</h1>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow gap-6">
          <Image
            src={ExchangeImage}
            alt="Profile avatar"
            width={280}
            height={280}
          />
          <p className={styles.text1}>Hongda Lin</p>
          <p className={styles.text2}>$20.00</p>
          <p className={styles.text3}>for “Tuesday lunch”</p>
          <p className={styles.text4}>{getCurrentFormattedTime()}</p>
          <Link
            href="/bill-payer/payment-success"
            className="w-full flex justify-center"
          >
            <button className={styles.button}>
              <span className={styles["button-text"]}>Confirm Payment</span>
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
}
