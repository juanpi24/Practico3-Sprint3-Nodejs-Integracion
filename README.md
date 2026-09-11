# Práctico 3 - Sprint 3: Integración de Node.js, Express y MongoDB

Este proyecto corresponde al **Sprint 3 (Trabajo Práctico 3)** de la aplicación de gestión de superhéroes. Implementa la integración completa entre **Node.js**, **Express**, **MongoDB** (con Mongoose) y motor de plantillas **EJS**, permitiendo operaciones CRUD dinámicas (creación, lectura, edición y eliminación de superhéroes) junto con validación de datos del lado del servidor.

---

## 🚀 Características Principales

* **Arquitectura Capas:** Organización modular siguiendo la estructura de *Rutas, Controladores, Servicios, Repositorios y Modelos*.
* **Persistencia de Datos:** Integración con MongoDB mediante **Mongoose** para el modelado y almacenamiento de documentos.
* **Interfaz Dinámica:** Renderizado de vistas del lado del servidor utilizando **EJS**.
* **Operaciones CRUD Completas:**
  * **Listado y Búsqueda:** Visualización de superhéroes con filtrado y búsqueda insensible a mayúsculas/minúsculas.
  * **Alta de Superhéroes:** Formulario de registro dinámico.
  * **Edición y Actualización:** Procesamiento de solicitudes HTTP `PUT` para la actualización de registros existentes.
  * **Eliminación:** Borrado de superhéroes mediante peticiones HTTP `DELETE`.
* **Validación de Datos:** Uso de `express-validator` para sanear y validar el cuerpo de las peticiones antes de interactuar con la base de datos.
* **Manejo de Sesiones y Retroalimentación:** Gestión de mensajes de éxito o error en los formularios mediante sesiones (`express-session`).

---

## 🛠️ Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución para JavaScript en el servidor.
* **Express.js** - Framework web para Node.js.
* **MongoDB** - Base de datos NoSQL basada en documentos.
* **Mongoose** - ODM (Object Data Modeling) para MongoDB.
* **EJS (Embedded JavaScript templates)** - Motor de plantillas para la generación de HTML dinámico.
* **express-validator** - Middleware para validación y sanitización de entradas.
* **express-session / connect-flash** - Manejo de estado y mensajería en vistas.

---

## 📋 Requisitos Previos

Asegúrate de contar con lo siguiente instalado en tu entorno local:

* [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
* [npm](https://www.npmjs.com/) (incluido con Node.js)
* [MongoDB](https://www.mongodb.com/) en ejecución local o una URI de conexión a **MongoDB Atlas**.

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/juanpi24/Practico3-Sprint3-Nodejs-Integracion.git
   cd Practico3-Sprint3-Nodejs-Integracion
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto (puedes tomar como referencia `.env.example` si existe) y define las credenciales necesarias:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/superheroesDB
   SESSION_SECRET=secreto_de_sesion
   ```

---

## 🚦 Ejecución del Proyecto

* **Modo de producción:**
  ```bash
  npm start
  ```

* **Modo de desarrollo (con recarga automática):**
  ```bash
  npm run dev
  ```

Una vez en ejecución, abre tu navegador e ingresa a: `http://localhost:3000`

---

## 📁 Estructura del Proyecto

```text
├── src/
│   ├── config/          # Configuración de base de datos y variables
│   ├── controllers/     # Lógica de procesamiento de peticiones HTTP
│   ├── models/          # Esquemas y modelos de Mongoose
│   ├── repositories/   # Capa de acceso directo a datos
│   ├── routes/          # Definición de rutas Express
│   ├── services/        # Lógica de negocio de la aplicación
│   ├── validators/      # Middleware de validación (express-validator)
│   └── views/           # Plantillas EJS para las vistas
├── public/              # Archivos estáticos (CSS, imágenes, JS cliente)
├── .env.example         # Ejemplo de variables de entorno
├── app.js               # Punto de entrada de la aplicación Express
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto
```

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

## 🚀 Deploy online (Render)
* [🌎 Dashboard Superhéroes ](https://superheroes-app-srp9.onrender.com/heroes)

