import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryForm from "../../components/organisms/CategoryForm";
import { getCategoryById, updateCategory } from "../services/authService";

const EditCategory = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategoryById();
  }, []);

  const fetchCategoryById = async () => {
    try {
      const response = await getCategoryById(id);
      console.log("getcategori response", response);

      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (data) => {
    console.log(id);
    try {
      await updateCategory(id, data);
      alert("Category berhasil di Update");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (!category) return <p className="p-5">Loading</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Edit Category</h1>

      <CategoryForm initialData={category} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditCategory;
