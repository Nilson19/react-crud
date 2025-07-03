import { useState } from "react";
import { UserService } from "../services/UserServices";
import { useNavigate } from "react-router-dom";

export function useLoginViewModel() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const { data } = await UserService.login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } catch {
      setError("Credenciales incorrectas o error de servidor.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    error,
    handleChange,
    onSubmit,
  };
}
