import React from "react";

const FormInput = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2 font-bold text-sm">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        className="p-2 border rounded w-full text-sm bg-white placeholder-slate-400 border-slate-300"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
