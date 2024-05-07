import Image from "next/image";
import Link from "next/link";

export default function SessionAuthentication() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative w-full">
        <div className="flex min-h-screen flex-col items-center bg-black text-white p-20 w-full px-10">
          <div className="flex flex-grow flex-col justify-between w-full max-w-sm">
            <div>
              <h1 className="text-3xl font-bold mb-4">Splity</h1>
              <p className="text-xl">Split bills in a snap with friends 🥳</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-white text-black rounded-lg p-6 w-full max-w-8xl">
                <form className="flex flex-col">
                  <h2 className="text-lg font-semibold mb-4">
                    Session Authentication
                  </h2>
                  <p className="text-sm mb-6 text-slate-500">
                    Enter the Session ID and Session code from your friend to
                    proceed payment.
                  </p>
                  <label
                    htmlFor="session-id"
                    className="text-sm mb-2 font-medium"
                  >
                    Session ID
                  </label>
                  <input
                    id="session-id"
                    type="text"
                    className="mb-4 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
                    placeholder="Enter Session ID"
                  />
                  <label
                    htmlFor="session-code"
                    className="text-sm mb-2 font-medium"
                  >
                    Session code
                  </label>
                  <input
                    id="session-code"
                    type="text"
                    className="mb-6 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
                    placeholder="Enter Session code"
                  />
                  <div className="flex justify-between">
                    <Link href="/">
                      <button
                        type="button"
                        className="bg-black text-white text-sm py-2 px-4 rounded"
                      >
                        Back
                      </button>
                    </Link>
                    <Link href="/payment">
                      <button
                        type="submit"
                        className="bg-black text-white text-sm py-2 px-4 rounded"
                      >
                        Enter
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
