import { useState, useEffect } from "react";
import FormGroup from "../molecules/FormGroup";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { getAllCategory } from "../../features/services/authService";

const TransactionForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        categoryId: initialData.categoryId || initialData.category?.id || "",
      });
    }
  }, [initialData]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategory();
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormGroup label="Nama Transaction" />
      <Input
        type="text"
        placeholder="Nama Transaction"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />
      <div className="my-4">
        <FormGroup label="Category" />
        <select
          value={form.categoryId}
          onChange={(e) =>
            setForm({
              ...form,
              categoryId: e.target.value,
            })
          }
          className="w-full border focus:border-blue-500 focus:outline-none p-2 rounded"
        >
          <option value="">Pilih Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <Button type="submit">Simpan</Button>
      </div>
    </form>
  );
};

export default TransactionForm;
