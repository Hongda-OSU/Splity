import Link from "next/link";
import "./Authenticator.css";

const Authenticator = ({ back }) => {
  return (
    <div className="flex flex-col items-center w-full" id="authenticator">
      <div className="bg-white text-black rounded-lg p-6 w-full">
        <form className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Join a Bill</h2>
          <p className="text-sm mb-6 text-slate-500">
            Enter the Session ID and Password from your friend in order to join
            a bill.
          </p>
          <label htmlFor="session-id" className="text-sm mb-2 font-medium">
            Session ID
          </label>
          <input
            id="session-id"
            type="text"
            className="mb-4 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter Session ID"
          />
          <label htmlFor="password" className="text-sm mb-2 font-medium">
            Password
          </label>
          <input
            id="password"
            type="text"
            className="mb-6 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter Password"
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-black text-white text-sm py-2 px-4 rounded"
              onClick={back}
            >
              Back
            </button>
            <Link href="/bill-payer/payment">
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
  );
};

export default Authenticator;
