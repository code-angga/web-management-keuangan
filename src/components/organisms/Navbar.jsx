import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navbar = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
      localStorage.removeItem("token");
      navigate("/");
    };
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <div className="bg-white shadow p-4 flex justify-between">
        <h1 className="font-semibold text-xl">Finance Management</h1>

        <button
          onClick={handleLogOut}
          className="bg-red-700 text-white px-5 py-3 rounded-2xl"
        >
          LogOut
        </button>
        <p>{user?.username}</p>
        <p>{user?.role === 1 ? "Admin" : "User"}</p>
      </div>
    );
  };
};

export default Navbar;
