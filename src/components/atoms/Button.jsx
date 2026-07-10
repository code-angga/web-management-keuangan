const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-60 mx-auto block bg-blue-800 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
