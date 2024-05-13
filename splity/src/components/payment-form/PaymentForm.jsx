"use client";
import { useState } from "react";
import PaymentCard from "../payment-card/PaymentCard";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardPlaceHolder, setCardPlaceHolder] = useState("XXXX XXXX XXXX XXXX");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState({ month: "", year: "" });
  const [cvc, setCVC] = useState("");

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleCardPlaceholder = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    let formattedInput = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0 && i < 16) {
        formattedInput += " ";
      }
      formattedInput += input[i];
    }

    while (formattedInput.length < 19) {
      if ((formattedInput.length + 1) % 5 === 0 && formattedInput.length < 18) {
        formattedInput += " ";
      } else {
        formattedInput += "X";
      }
    }

    setCardPlaceHolder(formattedInput);
  };

  const handleExpiryChange = (part) => (event) => {
    setExpiry({ ...expiry, [part]: event.target.value });
  };

  return (
    <form action="/bill-payer/confirmation" className="flex flex-col flex-grow">
      <div className="flex flex-col mb-4">
        <label htmlFor="card-number" className="mb-2 text-base font-bold">
          Card number
        </label>
        <input
          id="card-number"
          type="text"
          placeholder="CARD NUMBER (16 digits)"
          className="p-2 border rounded w-full text-sm outline-none"
          onChange={handleCardPlaceholder}
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2 text-base font-bold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="CARD HOLDER NAME"
          className="p-2 border rounded w-full text-sm"
          value={name}
          onChange={handleInputChange(setName)}
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="expires-month" className="mb-1 text-base font-bold">
          Card Info
        </label>
        <p className="text-xs mb-2 ml-0.5 text-slate-500">EXPIRY & CVC</p>
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
        cardPlaceHolder={cardPlaceHolder}
        name={name}
        expiry={expiry}
        cvc={cvc}
      />
      <button className="button">
        <span className="button-text">Continue</span>
      </button>
    </form>
  );
};

export default PaymentForm;
