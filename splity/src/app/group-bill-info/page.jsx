"use client";
import Image from "next/image";
import Link from "next/link";
import BackImage from "../../../public/images/back.png";

export default function GroupBillInfo() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white w-full px-10">
      <div className="flex flex-col w-full max-w-sm" style={{ flexGrow: 1 }}>
        <div className="flex items-center justify-between mb-12">
          <Link href="/payment">
            <button className="p-2">
              <Image src={BackImage} alt="Back" width={24} height={24} />
            </button>
          </Link>
          <h1 className="text-2xl font-bold flex-1 text-center">
            Setup Group Bill
          </h1>
        </div>
        <div className="flex-grow p-6 border rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div>
              <h1 className="text-base font-bold">Group Bill Information</h1>
              <p className="text-xs mb-4 text-slate-500">
                Splity will use these information to generate group bill.
              </p>
            </div>
            <form className="flex flex-col flex-grow">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2 font-semibold">
                  # people
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="First Last"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2 font-semibold">
                  $ price
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="First Last"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2 font-semibold">
                  Bill description
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="First Last"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="card-number" className="mb-2 font-semibold">
                  Session code
                </label>
                <input
                  id="card-number"
                  type="text"
                  placeholder="Card number"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col mt-8">
                <button
                  type="submit"
                  className="mt-auto w-full p-2 bg-black text-white font-bold rounded hover:bg-slate-600"
                >
                  Let&apos;s Splity!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
