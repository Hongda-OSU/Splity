import Image from "next/image";
import Link from "next/link";
import BackImage from "../../../public/images/back.png";
import CardImage from "../../../public/images/card.png";
import PaypalImage from "../../../public/images/paypal.png";
import AppleImage from "../../../public/images/apple.png";

export default function Payment() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white w-full px-10">
      <div className="flex flex-col w-full max-w-8xl" style={{ flexGrow: 1 }}>
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <button className="p-2">
              <Image src={BackImage} alt="Back" width={24} height={24} />
            </button>
          </Link>
          <h1 className="text-2xl font-bold flex-1 text-center">
            Setup Payment
          </h1>
        </div>
        <div className="flex-grow p-6 border rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div>
              <h1 className="text-base font-bold">Payment Method</h1>
              <p className="text-xs mb-4 text-slate-500">
                Add a new payment method to your account.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[CardImage, PaypalImage, AppleImage].map((src, index) => (
                <button
                  key={index}
                  className="border p-4 rounded text-center flex flex-col items-center justify-center"
                >
                  <Image
                    className="m-auto py-2"
                    src={src}
                    alt={["Card", "PayPal", "Apple"][index]}
                    width={24}
                    height={24}
                  />
                  <p className="text-sm flex-1 text-center">
                    {["Card", "PayPal", "Apple"][index]}
                  </p>
                </button>
              ))}
            </div>
            <form className="flex flex-col flex-grow">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2 font-semibold">
                  Name
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
                  Card number
                </label>
                <input
                  id="card-number"
                  type="text"
                  placeholder="Card number"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex flex-col w-1/2 mr-2">
                  <label htmlFor="expires-month" className="mb-2 font-semibold">
                    Expires
                  </label>
                  <select
                    id="expires-month"
                    className="p-2 border rounded w-full"
                  >
                    <option>Month</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="expires-year" className="mb-2 font-semibold">
                    &nbsp;
                  </label>
                  <select
                    id="expires-year"
                    className="p-2 border rounded w-full"
                  >
                    <option>Year</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="cvc" className="mb-2 font-semibold">
                  CVC
                </label>
                <input
                  id="cvc"
                  type="text"
                  placeholder="CVC"
                  className="p-2 border rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="mt-auto w-full p-2 bg-black text-white font-bold rounded hover:bg-slate-600"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
