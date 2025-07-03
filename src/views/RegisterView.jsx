import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useRegisterViewModel } from "../viewmodels/useRegisterViewModel";

export default function RegisterView() {
  const { form, loading, error, success, handleChange, onSubmit } =
    useRegisterViewModel();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography color="#FF5143" variant="h5" align="center" gutterBottom>
          Crear cuenta
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Usuario registrado correctamente
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Apellido"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            label="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="password"
            required
          />
          <TextField
            label="Teléfono"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              backgroundColor: "#FF5143",
              "&:hover": {
                backgroundColor: "#e03a2d",
              },
            }}
          >
            {loading ? <CircularProgress size={24} /> : "Registrar"}
          </Button>

          <Typography
            variant="body2"
            align="center"
            color="#FF5143"
            sx={{ mt: 2 }}
          >
            ¿Ya tienes cuenta?{" "}
            <MuiLink color="#FF5143" component={Link} to="/">
              Inicia sesión
            </MuiLink>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}
