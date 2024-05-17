"use client";
import Image from "next/image";
import Link from "next/link";
import { useMyStore } from "@/store/store";
import { SuccessImage } from "@/helper/image";
import { timeStampToDate } from "@/helper/date";
import Stars from "@/components/stars/Stars";
import styles from "./split-success.module.css";

export default function SplitSuccess() {
  const { billCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
  }));

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative flex flex-col items-center w-[430px] min-h-screen bg-white p-5">
        <Stars />
        <Image
          src={SuccessImage}
          alt=""
          width={420}
          height={320}
          className="object-cover"
        />
        <h1 className={styles.text1}>Splity Success !</h1>
        <p className={styles.text2}>
          Share your Bill ID & Password with your friends
        </p>
        <div className="flex flex-col w-full max-w-xs mt-8">
          <label htmlFor="bill-id" className="text-sm font-bold mb-2">
            Bill ID
          </label>
          <input
            id="bill-id"
            type="text"
            value={billCreator.bill_id}
            className="text-sm font-bold p-3 border rounded outline-none"
            readOnly
          />
          <label htmlFor="password" className="text-sm font-bold mt-4 mb-2">
            Password
          </label>
          <input
            id="password"
            type="text"
            value={billCreator.password}
            className="text-sm font-bold p-3 border rounded outline-none"
            readOnly
          />
          <label htmlFor="resume-code" className="text-sm font-bold mt-4 mb-2">
            Resume Code
          </label>
          <input
            id="resume-code"
            type="password"
            value={billCreator.resume_code}
            className="text-sm font-bold p-3 border rounded outline-none"
            readOnly
          />
        </div>
        <p className="text-xs text-gray-600 my-8">
          Bill expired at {timeStampToDate(billCreator.ttl)}
        </p>
        <Link href="/" className="w-full flex justify-center">
          <button className={styles.button}>
            <span className={styles["button-text"]}>Return</span>
          </button>
        </Link>
        <Link
          href="/bill-creator/preview-payer"
          className="w-full flex justify-center mt-8 mb-8"
        >
          <button className="w-full text-center rounded-lg">
            <span className={styles["who-has-paid"]}>See who has paid</span>{" "}
            <span className={styles.arrow}>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
