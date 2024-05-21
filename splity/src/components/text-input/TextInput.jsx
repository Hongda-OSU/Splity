import React from "react";

const TextInput = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  marginBottom,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm mb-2 font-medium">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className={`mb-${marginBottom} p-2 border border-slate-300 rounded bg-slate-100 placeholder-slate-400 text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
