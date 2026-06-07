import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryTable from "../category/CategoryTable";

// import { getCategory, deleteCategory } from "../services/authService";

const CategoryPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await getCategory();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (id) => {
    navigate("");
  };

  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-semibold">Category</h1>
        <button
          onClick={(e) => navigate("/category/create")}
          className="bg-blue-800 text-white py-3 px-5 shadow rounded cursor-pointer"
        >
          Tambah Category
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
