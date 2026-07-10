const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border focus:border-blue-500 focus:outline-none p-2 rounded"
    />
  );
};

export default Input;
