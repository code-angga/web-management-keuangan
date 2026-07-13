import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayouts from "../../templates/DashboardLayouts";
// import CategoryTable from "../components/CategoryTable";
import CategoryTable from "../category/CategoryTable";

import { getAllCategory, deleteCategory } from "../services/authService";

const CategoryPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await getAllCategory();

      setCategories(response.data || response);
    } catch (error) {
      console.log("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (item) => {
    navigate(`/updateCategory/${item.id}`);
  };

  const handleDelete = async (item) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus category?");

    if (!confirmDelete) return;

    try {
      await deleteCategory(item.id);

      alert("Category berhasil dihapus");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayouts>
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold">Category</h1>

            <p className="text-gray-600">Data Category</p>
          </div>

          <button
            onClick={() => navigate("/createCategory")}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Tambah Category
          </button>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-3">Data Category</h2>

          {loading ? (
            <p>Loading data...</p>
          ) : (
            <CategoryTable
              categories={categories}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default CategoryPage;
