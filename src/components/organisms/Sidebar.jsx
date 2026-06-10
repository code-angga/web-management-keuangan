// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
//       <h2 className="text-xl font-semibold mb-8 text-center">Menu</h2>
//       <ul className="">
//         <li className="py-3 cursor-pointer hover:text-amber-100">Dashboard</li>
//         <li className="py-3 cursor-pointer hover:text-amber-100">Transaksi</li>
//         <li className="py-3 cursor-pointer hover:text-amber-100">Laporan</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Finance App</h2>

      <ul className="space-y-3">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/create">Category</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
