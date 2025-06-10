# Tripleten web_project_around_express

## Descripción

Esta es una API REST creada con Express que permite consultar información de usuarios y sus respectivas **cards** desde archivos JSON.  
Incluye rutas para obtener todos los usuarios, buscar por ID y acceder a las cards.  
También cuenta con manejo de errores para rutas no válidas o datos inexistentes.

## Funcionalidades

- Obtener todos los usuarios
- Obtener un usuario por ID
- Obtener todas las cards
- Manejo de errores 404 personalizados

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **fs (File System)** para lectura de archivos JSON
- **Express Router** para modularizar rutas
- **Formato JSON** en las respuestas
- **Estructura organizada** en carpetas (`routes/`, `data/`)
