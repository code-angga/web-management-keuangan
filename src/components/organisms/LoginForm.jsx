import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormGroup from "../molecules/FormGroup";

import { loginUser } from "../../features/services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await loginUser(form);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
      alert("Login gagal");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Login</h1>

      <FormGroup label="Email">
        <Input
          type="email"
          placeholder="Masukkan email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </FormGroup>

      <FormGroup label="Password">
        <Input
          type="password"
          placeholder="Masukkan password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </FormGroup>
      <div className="grid grid-cols-2 my-2 text-sm">
        <div>
          Belum punya akun?{" "}
          <Link to="/register" className="font-semibold">
            Daftar
          </Link>
        </div>
        <div className="text-right">
          <a href="#">Lupa kata sandi?</a>
        </div>
      </div>

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginForm;
