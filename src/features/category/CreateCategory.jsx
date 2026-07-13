import { useNavigate } from "react-router-dom";
import DashboardLayouts from "../../templates/DashboardLayouts";

import { createCategory } from "../services/authService";
import CategoryPage from "../pages/CategoryPage";
import CategoryTable from "./CategoryTable";
import CategoryForm from "../../components/organisms/CategoryForm";

const CreateCategory = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createCategory(data);

      alert("Category berhasil ditambahkan");

      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayouts>
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-5">Tambah Category</h1>

        <CategoryForm onSubmit={handleCreate} />
      </div>
    </DashboardLayouts>
  );
};

export default CreateCategory;
