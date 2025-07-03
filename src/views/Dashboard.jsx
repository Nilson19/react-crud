import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import EditUserModal from "../components/UpdateUserView";
import UserTable from "../components/UserTable";
import { useDashboardViewModel } from "../viewmodels/useDashboardViewModel";

export default function Dashboard() {
  const { users, loading, error, success, deleteUser, updateUser } =
    useDashboardViewModel();

  const [self, setSelf] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setSelf(JSON.parse(user));
    }
  }, []);

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      deleteUser(id);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleSave = async (data) => {
    if (!selectedUser) return;
    await updateUser(selectedUser._id, data);
    setEditModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Box>

      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" gutterBottom color="#FF5143">
          Lista de Usuarios
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <UserTable
            users={users}
            self={self}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Box>

      <EditUserModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        user={selectedUser}
        onSave={handleSave}
      />
    </Container>
  );
}
