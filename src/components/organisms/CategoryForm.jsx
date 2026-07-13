import { useState, useEffect } from "react";

import FormGroup from "../molecules/FormGroup";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const CategoryForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    console.log("Initial Data:", initialData);

    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup label="Nama Category">
        <Input
          type="text"
          placeholder="Masukkan nama category"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </FormGroup>

      <FormGroup label="Deskripsi">
        <Input
          type="text"
          placeholder="Masukkan deskripsi"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />
      </FormGroup>

      <div className="my-4">
        <Button type="submit">
          {initialData ? "Update Category" : "Simpan Category"}
        </Button>
      </div>
    </form>
  );
};

export default CategoryForm;
