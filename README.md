# Tripleten web_project_around_express


Este proyecto es una API RESTful construida con Node.js, Express y MongoDB. Permite gestionar usuarios y tarjetas, incluyendo operaciones de creación, lectura, actualización, eliminación (CRUD), así como funciones de "like" y "dislike" a las tarjetas.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB con Mongoose
- Postman (para pruebas de endpoints)
- Middlewares personalizados (como autenticación mock con `req.user`)
- Manejo de errores centralizado usando `.catch` y `err.name`
- Métodos avanzados de Mongoose: `.orFail()`, `$addToSet`, `$pull`, `findByIdAndUpdate`, `findByIdAndDelete`
- Validación de datos y respuestas con status codes (`400`, `404`, `500`)

## Funcionalidades principales
- Obtener todos los usuarios o uno por ID
- Crear usuarios y tarjetas
- Actualizar perfil y avatar (`PATCH /users/me`, `/users/me/avatar`)
- Obtener, crear, eliminar tarjetas
- Dar/Quitar "likes" a tarjetas (`PUT` y `DELETE /cards/:id/likes`)
