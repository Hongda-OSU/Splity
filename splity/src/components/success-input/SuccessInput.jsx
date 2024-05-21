const SuccessInput = ({ labelFor, labelText, value }) => {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={labelFor} className="text-sm font-bold mb-2">
        {labelText} <span className="text-red-500">*</span>
      </label>
      <input
        id={labelFor}
        type="text"
        value={value}
        className="text-sm font-bold p-3 border rounded outline-none"
        readOnly
      />
    </div>
  );
};

export default SuccessInput;
