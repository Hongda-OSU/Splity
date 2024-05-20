"use client";
import { useState } from "react";
import { useMyStore } from "@/store/store";
import { useRouter } from "next/navigation";
import PaymentCard from "../payment-card/PaymentCard";
import "./PaymentForm.css";

const PaymentForm = ({ payment_method, type }) => {
  const router = useRouter();
  const { setBillPayer, setBillCreator } = useMyStore((state) => ({
    setBillPayer: state.setBillPayer,
    setBillCreator: state.setBillCreator,
  }));

  const [card_number, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState({ month: "", year: "" });
  const [cvc, setCVC] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleCardNumber = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    let cardNumber = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0 && i < 16) {
        cardNumber += " ";
      }
      cardNumber += input[i];
    }

    while (cardNumber.length < 19) {
      if ((cardNumber.length + 1) % 5 === 0 && cardNumber.length < 18) {
        cardNumber += " ";
      } else {
        cardNumber += "X";
      }
    }

    setCardNumber(cardNumber);
  };

  const handleExpiryChange = (part) => (e) => {
    setExpiry({ ...expiry, [part]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "billPayer") {
      setBillPayer({ bill_payer: name });
      router.push("/bill-payer/confirm-payment");
    } else if (type === "billCreator") {
      setBillCreator({ bill_creator: name });
      router.push("/bill-creator/setup-group-bill");
    }
  };

  return (
    <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2 text-sm font-bold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Card holder name"
          className="p-2 border rounded w-full text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="card-number" className="mb-2 text-sm font-bold">
          Card number
        </label>
        <input
          id="card-number"
          type="text"
          placeholder="Card number (16 digits)"
          className="p-2 border rounded w-full text-sm outline-none"
          onChange={handleCardNumber}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="expires-month" className="mb-2 text-sm font-bold">
          Card Info
        </label>
        <div className="flex flex-row gap-2">
          <select
            id="expires-month"
            className="p-2 border rounded flex-1 text-sm"
            onChange={handleExpiryChange("month")}
            required
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            id="expires-year"
            className="p-2 border rounded flex-1 text-sm"
            onChange={handleExpiryChange("year")}
            required
          >
            <option value="">Year</option>
            {Array.from({ length: 21 }).map((_, index) => {
              const year = new Date().getFullYear() + index;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <input
            id="cvc"
            className="p-2 border flex-1 rounded w-full text-sm"
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={handleInputChange(setCVC)}
            required
          />
        </div>
      </div>
      <PaymentCard
        card_number={card_number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        payment_method={payment_method}
      />
      <button className="button">
        <span className="button-text">Continue</span>
      </button>
    </form>
  );
};

export default PaymentForm;
