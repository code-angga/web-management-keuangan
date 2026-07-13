import CategoryTable from "../category/CategoryTable";
import DashboardLayouts from "../../templates/DashboardLayouts";
import { useEffect, useState } from "react";
import {
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../services/authService";
import { useNavigate } from "react-router-dom";
import CategoryCharts from "../category/CategoryCharts";

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
        <CategoryCharts categories={categories} />
      </div>
    </DashboardLayouts>
  );
};

export default DashboardPage;
