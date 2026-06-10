import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : "text-gray-900";
  return (
    <div className="w-64 bg-gray-400 text-gray-900 min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Finance App</h2>

      <ul className="space-y-3">
        <li>
          <NavLink to="/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/create" className={linkClasses}>
            Category
          </NavLink>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
