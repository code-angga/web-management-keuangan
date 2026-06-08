import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormGroup from "../molecules/FormGroup";

import { registerUser } from "../../features/services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleRegister = async () => {
    try {
      await registerUser(form);

      alert("Register berhasil");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Register gagal");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Register</h1>

      <FormGroup label="Nama">
        <Input
          type="text"
          placeholder="username"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />
      </FormGroup>

      <FormGroup label="Email">
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </FormGroup>

      <FormGroup label="Password">
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />
      </FormGroup>

      {/* ROLE */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Role</label>

        <select
          value={form.role}
          onChange={(e) =>
            setForm({
              ...form,
              role: Number(e.target.value),
            })
          }
          className="w-full border p-2 rounded"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>

      <Button onClick={handleRegister}>Register</Button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Sudah punya akun?{" "}
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
