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
import { useLoginViewModel } from "../viewmodels/useLoginViewModel";

export default function LoginView() {
  const { form, loading, error, handleChange, onSubmit } = useLoginViewModel();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src="./src/assets/logo.webp"
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
          />
        </Box>
        <Typography variant="h5" align="center" color="#FF5143" gutterBottom>
          Iniciar Sesión
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo electrónico"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="warning"
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
            {loading ? <CircularProgress size={24} /> : "Ingresar"}
          </Button>

          <Typography
            variant="body2"
            align="center"
            color="#FF5143"
            sx={{ mt: 2 }}
          >
            ¿No tienes cuenta?{" "}
            <MuiLink color="#FF5143" component={Link} to="/register">
              Regístrate
            </MuiLink>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}
