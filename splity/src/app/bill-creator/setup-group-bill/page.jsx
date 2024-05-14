import Image from "next/image";
import Link from "next/link";
import BackImage from "../../../../public/images/back.png";
import styles from "./setup-group-bill.module.css";

export default function SetupGroupBill() {
  return (
    <main className="flex min-h-screen bg-black w-full">
      <div className="flex flex-col min-h-screen w-[430px] bg-white m-auto">
        <div className="relative flex justify-center items-center mt-10">
          <Link href="/bill-creator/payment">
            <Image
              src={BackImage}
              alt=""
              width={24}
              height={24}
              className={styles.backimage}
            />
          </Link>
          <h1 className={styles.header}>Setup Payment</h1>
        </div>
        <div className="flex flex-col flex-grow p-6 mt-12">
          <div>
            <h1 className="text-base font-bold">Group Bill Information</h1>
            <p className="text-xs mb-4 text-slate-500">
              Splity will use these information to generate group bill.
            </p>
          </div>
          <form
            action="/bill-creator/split-success"
            className="flex flex-col flex-grow mt-4"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="people" className="mb-2 font-bold text-sm">
                # people
              </label>
              <input
                id="people"
                type="text"
                placeholder="# PEOPLE"
                className="p-2 border rounded w-full text-sm"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="mb-2 font-bold text-sm">
                $ price
              </label>
              <input
                id="price"
                type="text"
                placeholder="$ PRICE"
                className="p-2 border rounded w-full text-sm"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="bill-description"
                className="mb-2 font-bold text-sm"
              >
                Bill Description
              </label>
              <input
                id="bill-description"
                type="text"
                placeholder="BILL DESCRIPTION"
                className="p-2 border rounded w-full text-sm"
                required
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="password" className="mb-2 font-bold text-sm">
                Session Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="SESSION PASSWORD"
                className="p-2 border rounded w-full text-sm"
                required
              />
            </div>
            <button className={styles.button} type="submit">
              <span className={styles["button-text"]}>Confirm Payment</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
