import api from "../utils/api";

export const UserService = {
  /**
   * Registrar un nuevo usuario
   * @param {Object} userData
   */
  register(userData) {
    return api.post("/users", userData);
  },

  /**
   * Obtener todos los usuarios
   */
  getAll() {
    return api.get("/users");
  },


  /**
   * Obtener usuario por ID
   * @param {string} id
   */
  getById(id) {
    return api.get(`/users/${id}`);
  },

  /**
   * Obtener usuario por email
   * @param {string} email
   */
  getByEmail(email) {
    return api.get(`/users/email/${encodeURIComponent(email)}`);
  },

  /**
   * Actualizar usuario
   * @param {string} id
   * @param {Object} data
   */
  update(id, data) {
    return api.put(`/users/${id}`, data);
  },

  /**
   * Eliminar usuario
   * @param {string} id
   */
  delete(id) {
    return api.delete(`/users/${id}`);
  },

  /**
   * Login
   * @param {Object} credentials { email, password }
   */
  login(credentials) {
    return api.post("/users/login", credentials);
  },
};
