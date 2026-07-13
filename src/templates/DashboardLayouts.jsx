import Navbar from "../components/organisms/Navbar";
import Sidebar from "../components/organisms/Sidebar";

const DashboardLayouts = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-200 min-h-screen">
        <Navbar />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
