const AuthLayouts = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">{children}</div>
    </div>
  );
};

export default AuthLayouts;
