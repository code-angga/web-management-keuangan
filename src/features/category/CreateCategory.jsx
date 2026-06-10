import { useNavigate } from "react-router-dom";
import CategoryForm from "../../components/organisms/CategoryForm";
import { createCategory } from "../services/authService";

const CreateCategory = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      // console.log("DATA YANG DIKIRIM:", data);
      await createCategory(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Tambah Category</h1>
      <CategoryForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateCategory;
