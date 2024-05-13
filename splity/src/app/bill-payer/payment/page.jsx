import Image from "next/image";
import Link from "next/link";
import BackImage from "../../../../public/images/back.png";
import PaymentForm from "@/components/payment-form/PaymentForm";
import styles from "./payment.module.css";

export default function Payment() {
  return (
    <main className="flex min-h-screen bg-black w-full">
      <div className="flex flex-col min-h-screen w-[430px] bg-white m-auto">
        <div className="flex flex-row items-center mt-10 mb-8">
          <Link href="/">
            <button className="ml-6">
              <Image
                src={BackImage}
                alt=""
                width={24}
                height={24}
                className=" mt-2"
              />
            </button>
          </Link>
          <h1 className={styles.header}>Setup Payment</h1>
        </div>
        <PaymentForm />
      </div>
    </main>
  );
}
