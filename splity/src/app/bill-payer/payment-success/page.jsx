import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helper/date";
import { PaymentSuccessImage } from "@/helper/image";
import Firework from "@/components/firework/Firework";
import styles from "./payment-success.module.css";

const PaymentSuccess = () => {
  const getCurrentFormattedTime = () => {
    return formatDate(new Date());
  };

  return (
    <section className={styles.container}>
      <div id={styles["payment-success"]}>
        <div className={styles.wrapper}>
          <Firework />
          <Image
            src={PaymentSuccessImage}
            alt=""
            priority={true}
            className={styles.image1}
          />
          <p className={styles.text1}>Payment Success !</p>
          <p className={styles.text2}>
            You have split the bill with <span>{`Hongda Lin`}</span>
          </p>
          <p className={styles.text3}>{`Hongda Lin`}</p>
          <p className={styles.text4}>{`$20.00`}</p>
          <p className={styles.text5}>{`for “Tuesday lunch”`}</p>
          <p className={styles.text6}>{getCurrentFormattedTime()}</p>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span>Return</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
