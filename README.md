📝 Proyecto CRUD de Usuarios en React
Este proyecto es una aplicación React que implementa las funcionalidades básicas de un CRUD (Crear, Leer, Actualizar, Eliminar) para la tabla de usuarios. Permite a los usuarios registrarse, iniciar sesión, acceder a un dashboard protegido, listar todos los usuarios, así como eliminar y editar usuarios existentes.

🚀 Características Principales
✅ Registro de Usuarios
Permite a los nuevos usuarios crear una cuenta en la aplicación.

✅ Inicio de Sesión (Login)
Autenticación de usuarios para acceder a funcionalidades protegidas.

✅ Dashboard Protegido
Una ruta privada a la que solo pueden acceder los usuarios autenticados.

✅ Listado de Usuarios
Muestra una lista de todos los usuarios registrados.

✅ Eliminación de Usuarios
Permite a los administradores o usuarios con los permisos adecuados eliminar cuentas de usuario.

✅ Edición de Usuarios
Funcionalidad para modificar la información de los usuarios existentes.

🛠️ Primeros Pasos
Sigue estas instrucciones para obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y prueba.

📋 Prerrequisitos
Asegúrate de tener instalado Node.js y npm (que viene incluido con Node.js) en tu sistema.

⚙️ Instalación
Clona el repositorio:

bash
Copiar
Editar
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
Instala las dependencias:

bash
Copiar
Editar
npm install
▶️ Ejecución del Proyecto
Una vez que las dependencias estén instaladas, puedes iniciar la aplicación en modo desarrollo.

Iniciar el servidor de desarrollo
Para levantar la aplicación localmente:

bash
Copiar
Editar
npm run dev
Esto iniciará la aplicación en modo desarrollo. Abre http://localhost:5173 en tu navegador para verla.
La página se recargará automáticamente si haces cambios en el código.

🗂️ Estructura del Proyecto

src/
├── components/         # Componentes reutilizables
├── views/              # Páginas principales de la aplicación (Login, Register, Dashboard)
├── services/           # Lógica para interactuar con la API (p. ej., auth.js, users.js)
├── viewmodels/         # View Models
├── utils/              # Utilidades varias (p. ej., validaciones)
├── App.js              # Componente principal de la aplicación
├── index.js            # Punto de entrada de la aplicación
└── index.css           # Estilos globales
