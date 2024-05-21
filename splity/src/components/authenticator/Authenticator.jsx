"use client";
import { useState } from "react";
import { useMyStore } from "@/store/store";
import { authenticate } from "@/helper/api";
import { useRouter } from "next/navigation";
import useAxios from "@/helper/useAxios";
import dynamic from "next/dynamic";
import ErrorModal from "../error-modal/ErrorModal";
import TextInput from "../text-input/TextInput";
import "./Authenticator.css";

const Loading = dynamic(() => import("../loading/Loading"), {
  ssr: false,
});

const Authenticator = ({ back }) => {
  const router = useRouter();
  const { setBillPayer } = useMyStore((state) => ({
    setBillPayer: state.setBillPayer,
  }));
  const { loading, error, fetchData } = useAxios(authenticate, "POST");
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
    setBillId("");
    setPassword("");
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
          <TextInput
            id="bill-id"
            label="Bill ID"
            value={bill_id}
            placeholder="Enter Bill ID"
            onChange={(e) => setBillId(e.target.value)}
            marginBottom={2}
          />
          <TextInput
            id="password"
            label="Password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            marginBottom={4}
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
