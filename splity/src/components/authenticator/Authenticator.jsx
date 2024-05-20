"use client";
import { useState } from "react";
import { useMyStore } from "@/store/store";
import { authenticate } from "@/helper/api";
import { useRouter } from "next/navigation";
import useAxios from "@/helper/useAxios";
import dynamic from "next/dynamic";
import ErrorModal from "../error-modal/ErrorModal";
import "./Authenticator.css";

const Loading = dynamic(() => import("../loading/Loading"), {
  ssr: false,
});

const Authenticator = ({ back }) => {
  const router = useRouter();
  const { setBillPayer } = useMyStore((state) => ({
    setBillPayer: state.setBillPayer,
  }));
  const { loading, fetchData } = useAxios(authenticate, "POST");
  const [bill_id, setBillId] = useState("");
  const [password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData({ bill_id, password });
      if (data) {
        const { bill_creator, bill_description, bill_individual } = data;
        setBillPayer({
          bill_id,
          bill_creator,
          bill_description,
          bill_amount: bill_individual,
        });
        router.push("/bill-payer/payment");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsModalOpen(true);
    }
  };

  const onModalClose = () => {
    setErrorMessage("");
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full" id="authenticator">
      <div className="bg-white text-black rounded-lg p-6 w-full">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-2">Join a Bill</h2>
          <p className="text-sm mb-4 text-slate-500">
            Enter Bill ID and Password from your friend in order to join a bill.
          </p>
          {loading && <Loading />}
          {isModalOpen && (
            <ErrorModal onClose={onModalClose} errorMessage={errorMessage} />
          )}
          <label htmlFor="bill-id" className="text-sm mb-2 font-medium">
            Bill ID
          </label>
          <input
            id="bill-id"
            type="text"
            className="mb-4 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter Bill ID"
            value={bill_id}
            onChange={(e) => setBillId(e.target.value)}
          />
          <label htmlFor="password" className="text-sm mb-2 font-medium">
            Password
          </label>
          <input
            id="password"
            type="text"
            className="mb-8 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
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
              disabled={loading}
              className="bg-black text-white text-sm py-2 px-4 rounded"
            >
              {loading ? "Joining..." : "Join"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authenticator;
