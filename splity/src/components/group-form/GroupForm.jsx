"use client";
import React from "react";
import "./GroupForm.css";

const GroupForm = ({
  handleSubmit,
  handleInputChange,
  total_members,
  bill_total,
  bill_description,
  password,
  loading,
}) => {
  return (
    <form
      className="flex flex-col flex-grow mt-4 text-black"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="people" className="mb-2 font-bold text-sm">
          People
        </label>
        <input
          id="people"
          type="text"
          placeholder="Number of people"
          value={total_members}
          className="p-2 border rounded w-full text-sm bg-white placeholder-slate-400 border-slate-300"
          onChange={(e) => handleInputChange("total_members", e)}
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="price" className="mb-2 font-bold text-sm">
          Price
        </label>
        <input
          id="price"
          type="text"
          placeholder="Total price"
          value={bill_total}
          className="p-2 border rounded w-full text-sm bg-white placeholder-slate-400 border-slate-300"
          onChange={(e) => handleInputChange("bill_total", e)}
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="bill-description" className="mb-2 font-bold text-sm">
          Bill Description
        </label>
        <input
          id="bill-description"
          type="text"
          value={bill_description}
          placeholder="Bill description"
          className="p-2 border rounded w-full text-sm bg-white placeholder-slate-400 border-slate-300"
          onChange={(e) => handleInputChange("bill_description", e)}
          required
        />
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="password" className="mb-2 font-bold text-sm">
          Password
        </label>
        <input
          id="password"
          type="text"
          value={password}
          placeholder="Password"
          className="p-2 border rounded w-full text-sm bg-white placeholder-slate-400 border-slate-300"
          onChange={(e) => handleInputChange("password", e)}
          required
        />
      </div>
      <button className="button" type="submit" disabled={loading}>
        <span className="button-text">Let's Splity</span>
      </button>
    </form>
  );
};

export default GroupForm;
