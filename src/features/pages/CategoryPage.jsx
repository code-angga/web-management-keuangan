import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayouts from "../../templates/DashboardLayouts";
import CategoryTable from "../../features/category/CategoryTable";

import { getAllCategory, deleteCategory } from "../services/authService";

const CategoryPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategory();

      setCategories(response.data || response);
    } catch (error) {
      console.log(error);
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

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayouts>
      <div className="p-5">
        <div className="flex">
          <div className="mr-auto">
            <h1 className="text-2xl font-bold">Category</h1>

            <p className="text-gray-600">Data Category</p>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer"
          >
            Tambah Category
          </button>
        </div>

        <div className="bg-white rounded shadow p-4 mt-5">
          <h2 className="text-lg font-semibold mb-3">Data Category</h2>

          {loading ? (
            <p>Loading...</p>
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
