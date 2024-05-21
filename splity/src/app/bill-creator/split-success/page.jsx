"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useMyStore } from "@/store/store";
import { SuccessImage, EyeOpenImage, EyeCloseImage } from "@/helper/image";
import { timeStampToDate } from "@/helper/date";
import styles from "./split-success.module.css";

const Stars = dynamic(() => import("@/components/stars/Stars"), {
  ssr: false,
});

export default function SplitSuccess() {
  const { billCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
  }));

  const [showResumeCode, setShowResumeCode] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative flex flex-col items-center w-[430px] min-h-screen bg-white p-5 pt-3">
        <Stars />
        <Image
          src={SuccessImage}
          alt=""
          width={420}
          height={320}
          className={styles["success-image"]}
        />
        <h1 className={styles["splity-success"]}>Splity Success !</h1>
        <p className={styles.subtitle}>
          Share your Bill ID & Password with your friends
        </p>
        <div className="flex flex-col w-full max-w-xs mt-8" id={styles.wrapper}>
          <label htmlFor="bill-id" className="text-sm font-bold mb-2">
            Bill ID <span className="text-red-500">*</span>
          </label>
          <input
            id="bill-id"
            type="text"
            value={billCreator.bill_id}
            className="text-sm font-bold p-3 border rounded outline-none"
            readOnly
          />
          <label htmlFor="password" className="text-sm font-bold mt-4 mb-2">
            Password <span className="text-red-500">*</span>
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
          <div className="relative">
            <input
              id="resume-code"
              type={showResumeCode ? "text" : "password"}
              value={billCreator.resume_code}
              className="block w-full text-sm font-bold p-3 border rounded outline-none"
              readOnly
            />
            <span
              className="absolute top-0 end-0 p-3 text-sm font-bold"
              onClick={() => setShowResumeCode(!showResumeCode)}
            >
              <Image
                src={showResumeCode ? EyeCloseImage : EyeOpenImage}
                alt=""
                width="auto"
                height="auto"
                className={styles["eye-image"]}
              />
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-600 my-8" id={styles.wrapper2}>
          Bill expires on {timeStampToDate(billCreator.ttl)}
        </p>
        <Link href="/" className="w-full flex justify-center">
          <button className={styles.button}>
            <span className={styles["button-text"]}>Back to Home</span>
          </button>
        </Link>
        <Link
          href="/bill-creator/preview-bill"
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
