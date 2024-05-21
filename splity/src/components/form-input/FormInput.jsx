const FormInput = ({
  id,
  label,
  labelStyle,
  placeholder,
  value,
  inputStyle,
  onChange,
  required = true,
  ...rest
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        className={inputStyle}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
