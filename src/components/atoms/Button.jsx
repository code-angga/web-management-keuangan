const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-800 hover:bg-blue-300 text-white px-4 py-2 rounded shadow w-full cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
