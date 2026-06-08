import { useState, useEffect } from "react";
import FormGroup from "../molecules/FormGroup";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TransactionForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    console.log("ininial data", initialData);
    if (initialData) {
      setForm({
        name: initialData.name || "",
        // description: initialData.description || "",
      });
    }
  }, [initialData]);

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
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Simpan
      </button>
      </div>
    </form>
  );
};

export default TransactionForm;
