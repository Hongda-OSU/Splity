"use client";
import Image from "next/image";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white p-20 w-full px-10">
      <div className="flex flex-grow flex-col justify-between w-full max-w-lg"> 
        <div>
          <h1 className="text-3xl font-bold mb-4">Splity</h1>
          <p className="text-xl">Split bills in a snap with friends 🥳</p>
        </div>
        
        <div className="flex flex-col items-center w-full">
          <a
            href="/payment"
            className="bg-white text-black px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white flex items-center justify-center gap-2 w-full mb-4"
          >
            <Image
              src="/burger.png"
              alt="Start Split Icon"
              width={24}
              height={24}
            />
            Start a Split
          </a>
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white flex items-center justify-center gap-2 w-full"
          >
            <Image src="/bill.png" alt="Join Bill Icon" width={24} height={24} />
            Join a Bill
          </a>
        </div>
      </div>
    </main>
  );
}
