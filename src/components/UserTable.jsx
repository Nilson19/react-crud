import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function UserTable({ users, self, onEdit, onDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Nombre</strong>
          </TableCell>
          <TableCell>
            <strong>Email</strong>
          </TableCell>
          <TableCell>
            <strong>Teléfono</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Acciones</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} align="center">
              No hay usuarios registrados.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{`${user.name} ${user.last_name}`}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone || "-"}</TableCell>
              <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                <Tooltip title="Editar">
                  <IconButton color="primary" onClick={() => onEdit(user)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  title={
                    self && self._id === user._id
                      ? "No puedes eliminarte"
                      : "Eliminar"
                  }
                >
                  <span>
                    <IconButton
                      color="error"
                      onClick={() => onDelete(user._id)}
                      disabled={self && self._id === user._id}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
