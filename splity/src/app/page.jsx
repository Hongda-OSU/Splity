import Image from "next/image";
import BurgerImage from "../../public/images/burger.png";
import BillImage from "../../public/images/bill.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative w-full">
        <div className="flex min-h-screen flex-col items-center bg-black text-white p-20 w-full px-10">
          <div className="flex flex-grow flex-col justify-between w-full max-w-8xl">
            <div>
              <h1 className="text-3xl font-bold mb-4">Splity</h1>
              <p className="text-xl">Split bills in a snap with friends 🥳</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <a
                href="/payment"
                className="bg-white text-black px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-slate-300 hover:text-white flex items-center justify-center gap-2 w-full mb-4"
              >
                <Image
                  src={BurgerImage}
                  alt="Start Split Icon"
                  width={24}
                  height={24}
                />
                Start a Split
              </a>
              <a
                href="/session-authentication"
                className="bg-white text-black px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-slate-300 hover:text-white flex items-center justify-center gap-2 w-full"
              >
                <Image
                  src={BillImage}
                  alt="Join Bill Icon"
                  width={24}
                  height={24}
                />
                Join a Bill
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
