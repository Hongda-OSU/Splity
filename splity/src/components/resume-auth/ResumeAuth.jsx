"use client";
import { useState } from "react";
import { useMyStore } from "@/store/store";
import { resume_bill } from "@/helper/api";
import { useRouter } from "next/navigation";
import useAxios from "@/helper/useAxios";
import dynamic from "next/dynamic";
import ErrorModal from "../error-modal/ErrorModal";
import "./ResumeAuth.css";

const Loading = dynamic(() => import("../loading/Loading"), {
  ssr: false,
});

const ResumeAuth = ({ back }) => {
  const router = useRouter();
  const { setBillCreator } = useMyStore((state) => ({
    setBillCreator: state.setBillCreator,
  }));
  const { loading, error, fetchData } = useAxios(resume_bill, "POST");
  const [bill_id, setBillId] = useState("");
  const [resume_code, setResumeCode] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchData({ bill_id, resume_code });
      if (data) {
        const { password, ttl } = data;
        setBillCreator({
          bill_id,
          resume_code,
          password,
          ttl,
        });
        router.push("/bill-creator/split-success");
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
          <h2 className="text-lg font-semibold mb-2">Resume a Bill</h2>
          <p className="text-sm mb-4 text-slate-500">
            Enter Bill ID and Resume Code in order to resume to a previous bill.
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
          <label htmlFor="resume_code" className="text-sm mb-2 font-medium">
            Resume Code
          </label>
          <input
            id="resume_code"
            type="text"
            className="mb-8 p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm"
            placeholder="Enter resume code"
            value={resume_code}
            onChange={(e) => setResumeCode(e.target.value)}
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
              {loading ? "Resuming..." : "Resume"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeAuth;
