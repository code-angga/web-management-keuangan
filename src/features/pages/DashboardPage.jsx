import CategoryTable from "../category/CategoryTable";
import DashboardLayouts from "../../templates/DashboardLayouts";
import { useEffect, useState } from "react";
import {
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../services/authService";
import { useNavigate } from "react-router-dom";

const id = null;
const DashboardPage = () => {
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

  const navigate = useNavigate();
  const handleEdit = async (item) => {
    navigate(`/editCategory/${item.id}`);
  };

  const handleDelete = async (id) => {
    id.value = id;
    console.log("Id yang diterma", id);
    const confirmDelete = window.confirm("Yakin ingin mengapus data ?");

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <DashboardLayouts>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>

        {/* SUMMARY CARD AREA (kalau ada nanti) */}
        <div className="mb-5">
          <p className="text-gray-600">Data kategori</p>
        </div>

        {/* CATEGORY TABLE */}
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

export default DashboardPage;
