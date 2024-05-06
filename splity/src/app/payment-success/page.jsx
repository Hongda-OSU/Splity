import Image from "next/image";
import Link from "next/link";
import styles from "./payment-success.module.css";
import FireWork from "@/components/firework/FireWork";
import PaymentSuccessImage from "../../../public/images/Business-Competition.png";
import AvatarImage from "../../../public/images/avatar.png";

const formatDate = (date) => {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  const formattedTime = `${month} ${day}, ${year} - ${hour}:${
    minute < 10 ? "0" + minute : minute
  } ${ampm}`;
  return formattedTime;
};

const PaymentSuccess = () => {
  const getCurrentFormattedTime = () => {
    return formatDate(new Date());
  };

  return (
    <section className={styles.container}>
      <div id={styles["payment-success"]}>
        <div className={styles.wrapper}>
          <FireWork />
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
          <div id={styles["avatar-container"]}>
            <Image
              src={AvatarImage}
              alt=""
              priority={true}
              className={styles.image2}
            />
            <p className={styles.text3}>{`Hongda Lin`}</p>
          </div>
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
