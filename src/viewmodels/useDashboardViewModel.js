import { useState, useEffect } from "react";
import { UserService } from "../services/UserServices";

export function useDashboardViewModel() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    /**
     * Cargar todos los usuarios al montar
     */
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const response = await UserService.getAll();
            setUsers(response.data);
        } catch {
            setError("Error al cargar usuarios.");
        } finally {
            setLoading(false);
        }
    };

    /**
     * Eliminar un usuario por ID
     */
    const deleteUser = async (id) => {
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            await UserService.delete(id);
            setUsers((prev) => prev.filter((u) => u._id !== id));
            setSuccess("Usuario eliminado correctamente.");
        } catch {
            setError("Error al eliminar usuario.");
        } finally {
            setLoading(false);
        }
    };

    /**
     * Actualizar un usuario por ID
     * @param {string} id
     * @param {Object} data
     */
    const updateUser = async (id, data) => {
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const response = await UserService.update(id, data);
            setUsers((prev) =>
                prev.map((u) => (u._id === id ? response.data : u))
            );
            setSuccess("Usuario actualizado correctamente.");
        } catch {
            setError("Error al actualizar usuario.");
        } finally {
            setLoading(false);
        }
    };

    return {
        users,
        loading,
        error,
        success,
        fetchUsers,
        deleteUser,
        updateUser,
    };
}
