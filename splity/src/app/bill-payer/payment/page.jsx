"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PaymentForm from "@/components/payment-form/PaymentForm";
import {
  MasterCardImage,
  VisaImage,
  UnionPayImage,
  BackImage,
} from "@/helper/image";
import styles from "./payment.module.css";

export default function Payment() {
  const [payment_method, setPaymentMethod] = useState("MasterCard");

  return (
    <main className="flex min-h-screen bg-black w-full">
      <div className="flex flex-col min-h-screen w-[430px] bg-white m-auto">
        <div className="relative flex justify-center items-center mt-10">
          <Link href="/">
            <Image
              src={BackImage}
              alt=""
              width={28}
              height={28}
              className={styles["back-image"]}
            />
          </Link>
          <h1 className={styles.header}>Setup Payment</h1>
        </div>
        <div
          className="flex flex-grow flex-col mt-10 ml-8 mr-8"
          id={styles.wrapper}
        >
          <div>
            <h1 className="text-base font-bold">Payment Method</h1>
            <p className="text-xs mb-4 text-slate-500">
              Choose your payment method
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
              {[MasterCardImage, VisaImage, UnionPayImage].map((src, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setPaymentMethod(["MasterCard", "Visa", "UnionPay"][index])
                  }
                  className={`border p-3 rounded-lg text-center flex flex-col items-center justify-center ${
                    payment_method === ["MasterCard", "Visa", "UnionPay"][index]
                      ? "border-zinc-600 border-2"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    width="auto"
                    height="auto"
                    className="m-auto py-2 object-cover"
                  />
                  <p className="text-xs text-center font-bold">
                    {["MasterCard", "Visa", "UnionPay"][index]}
                  </p>
                </button>
              ))}
            </div>
            <PaymentForm type={"billPayer"} payment_method={payment_method} />
          </div>
        </div>
      </div>
    </main>
  );
}
