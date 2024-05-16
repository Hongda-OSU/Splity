"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helper/date";
import { SuccessImage } from "@/helper/image";
import Stars from "@/components/stars/Stars";
import styles from "./split-success.module.css";

export default function SplitSuccess() {
  const [sessionId, setSessionId] = useState("");
  const [sessionCode, setSessionCode] = useState("");

  const getNextFormattedTime = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return formatDate(tomorrow);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative flex flex-col items-center w-[430px] min-h-screen bg-white p-5">
        <Stars />
        <Image
          src={SuccessImage}
          alt=""
          width={420}
          height={320}
          className="mt-8 object-cover"
        />
        <h1 className={styles.text1}>Splity Success !</h1>
        <p className={styles.text2}>
          Share your Session ID & Password with your friends
        </p>
        <div className="flex flex-col w-full max-w-xs mt-8">
          <label htmlFor="session-id" className="text-sm font-bold mb-2">
            Session ID <span className="text-red-500">*</span>
          </label>
          <input
            id="session-id"
            type="text"
            value={sessionId}
            onChange={(e) => {
              setSessionId(e.target.value);
              setError((prev) => ({ ...prev, id: false }));
            }}
            className="p-2 border rounded"
            required
          />

          <label htmlFor="session-code" className="text-sm font-bold mt-4 mb-2">
            Session code <span className="text-red-500">*</span>
          </label>
          <input
            id="session-code"
            type="text"
            value={sessionCode}
            onChange={(e) => {
              setSessionCode(e.target.value);
              setError((prev) => ({ ...prev, code: false }));
            }}
            className="p-2 border rounded"
            required
          />
        </div>
        <p className="text-xs text-gray-600 my-8">
          Session expired at {getNextFormattedTime()}
        </p>
        <Link href="/" className="w-full flex justify-center">
          <button className={styles.button}>
            <span className={styles["button-text"]}>Return</span>
          </button>
        </Link>
        <Link
          href="/bill-creator/preview-payer"
          className="w-full flex justify-center mt-12 mb-16"
        >
          <button className="w-full text-center rounded-lg">
            <span className={styles.text3}>See who has paid →</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
