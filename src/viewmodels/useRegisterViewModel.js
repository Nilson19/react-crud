import { useState } from "react";
import { UserService } from "../services/UserServices";

export function useRegisterViewModel() {
    const [form, setForm] = useState({
        name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async () => {
        setError("");
        setSuccess(false);
        setLoading(true);
        try {
            await UserService.register(form);
            setSuccess(true);
            setForm({
                name: "",
                last_name: "",
                email: "",
                password: "",
                phone: "",
            });

        } catch {
            setError("Error al registrar usuario.");
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        loading,
        error,
        success,
        handleChange,
        onSubmit,
    };
}
