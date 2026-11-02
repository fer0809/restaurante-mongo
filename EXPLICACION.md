# Explicación del proyecto - Restaurante MongoDB

## ¿Qué es?
API REST para gestionar los platos de un restaurante usando MongoDB como base de datos y Mongoose como ODM.

## Tecnologías usadas y por qué
- **Node.js + Express**: servidor HTTP ligero y estándar para APIs REST.
- **MongoDB**: base de datos NoSQL orientada a documentos, ideal para platos con campos variables (ingredientes).
- **Mongoose**: ODM que define esquemas y validaciones sobre MongoDB.
- **dotenv**: manejo de variables de entorno (conexión y puerto).

## Estructura
- `src/models/Plato.js`: schema Mongoose del plato.
- `src/routes/platos.js`: endpoints CRUD.
- `src/index.js`: conexión a Mongo y arranque del servidor.
- `seed.js`: inserta 10 platos de ejemplo.
- `requests.http`: sentencias para probar endpoints.

## Schema (Plato)
Campos: nombre, descripcion, ingredientes (array), precio, aptoCeliacos, aptoVeganos, aptoDiabeticos, calorias, imagen (url), timestamps.

## Endpoints
- POST /api/platos → alta
- GET /api/platos → listar
- GET /api/platos/:id → obtener
- PUT /api/platos/:id → modificar
- DELETE /api/platos/:id → baja

## Cómo probar
1. `npm install`
2. `cp .env.example .env`
3. `npm run seed`
4. `npm start`
5. Usar `requests.http` (REST Client) o curl.
