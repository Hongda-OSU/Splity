"use client";
import axios from "axios";
import { useState } from "react";
import { useMyStore } from "@/store/store";
import { authenticate } from "@/helper/api";
import { useRouter } from "next/navigation";
import "./Authenticator.css";

const Authenticator = ({ back }) => {
  const router = useRouter();
  const setBillPayer = useMyStore((state) => state.setBillPayer);
  const [billId, setBillId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post(authenticate, {
        bill_id: billId,
        password,
      });

      if (res.status === 200) {
        const { bill_creator, bill_description, bill_individual } = res.data;
        setBillPayer({
          bill_id: billId,
          password,
          bill_creator,
          bill_description,
          bill_individual,
        });
        router.push("/bill-payer/payment");
      }
    } catch (err) {
      setError(
        "Authentication failed. Please check your Bill ID and Password."
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-full" id="authenticator">
      <div className="bg-white text-black rounded-lg p-6 w-full">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Join a Bill</h2>
          <p className="text-sm mb-6 text-slate-500">
            Enter Bill ID and Password from your friend in order to join a bill.
          </p>
          <label htmlFor="bill-id" className="text-sm mb-2 font-medium">
            Bill ID
          </label>
          <input
            id="bill-id"
            type="text"
            className="mb-4 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter Bill ID"
            value={billId}
            onChange={(e) => setBillId(e.target.value)}
          />
          <label htmlFor="password" className="text-sm mb-2 font-medium">
            Password
          </label>
          <input
            id="password"
            type="text"
            className="mb-6 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-black text-white text-sm py-2 px-4 rounded"
              onClick={back}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-black text-white text-sm py-2 px-4 rounded"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authenticator;
