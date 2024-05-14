"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SuccessImage from "../../../../public/images/success.png";

export default function SplitSuccess() {
  const [sessionId, setSessionId] = useState("");
  const [sessionCode, setSessionCode] = useState("");
  const [error, setError] = useState({ id: false, code: false });

  const handleValidation = () => {
    let errors = { id: false, code: false };
    let valid = true;
    if (!sessionId.trim()) {
      errors.id = true;
      valid = false;
    }
    if (!sessionCode.trim()) {
      errors.code = true;
      valid = false;
    }
    setError(errors);
    return valid;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-[430px] h-[932px] bg-white p-5">
        <Image src={SuccessImage} alt="Success" width={400} height={300} />

        <h1 className="text-2xl font-bold my-5">Splitly Success!</h1>

        <p className="text-sm text-gray-500 mb-5">
          Share your Session ID & code with your friends
        </p>

        <div className="flex flex-col space-y-3 w-full max-w-xs">
          <label htmlFor="session-id" className="text-sm font-semibold">
            Session ID <span className="text-red-500">*</span>
          </label>
          <input
            id="session-id"
            type="text"
            value={sessionId}
            onChange={(e) => {
              setSessionId(e.target.value);
              setError((prev) => ({ ...prev, id: false }));
            }}
            className="p-2 border rounded"
            required
          />
          {error.id && (
            <p className="text-red-500 text-xs">Session ID is required.</p>
          )}

          <label htmlFor="session-code" className="text-sm font-semibold">
            Session code <span className="text-red-500">*</span>
          </label>
          <input
            id="session-code"
            type="text"
            value={sessionCode}
            onChange={(e) => {
              setSessionCode(e.target.value);
              setError((prev) => ({ ...prev, code: false }));
            }}
            className="p-2 border rounded"
            required
          />
          {error.code && (
            <p className="text-red-500 text-xs">Session code is required.</p>
          )}
        </div>

        <p className="text-xs text-gray-400 my-5">
          Session expired at Aug. 22, 2024 - 12:01 PM
        </p>

        <Link href="/group-bill-info">
          <button className="w-32 py-3 bg-black text-white text-center rounded-lg my-3">
            Return
          </button>
        </Link>

        <button
          className={`w-full py-3 text-center rounded-lg my-3 ${
            !sessionId || !sessionCode ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (handleValidation()) {
              document.location.href = "/preview-payer";
            }
          }}
          disabled={!sessionId || !sessionCode}
        >
          See who has paid →
        </button>
      </div>
    </div>
  );
}
