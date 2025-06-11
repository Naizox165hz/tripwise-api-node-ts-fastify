# ✈️ 🌐 TripWise API

![Node.js](https://img.shields.io/badge/node.js-18.x-green?logo=node.js&style=flat)
![TypeScript](https://img.shields.io/badge/typescript-4.x-blue?logo=typescript&style=flat)
![Fastify](https://img.shields.io/badge/fastify-4.x-red?style=flat)
![Prisma](https://img.shields.io/badge/prisma-4.x-blue?style=flat)
![SQLite](https://img.shields.io/badge/sqlite-3.x-lightgrey?logo=sqlite&style=flat)
![License](https://img.shields.io/badge/license-MIT-brightgreen?style=flat)

A RESTful API for managing trips and participants, built with **Node.js**, **TypeScript**, **Fastify**, and **Prisma** using an **SQLite** database.

## Implemented Features

- Trip registration with data validation using **Zod**  
- Prisma models for `Trip` and `Participant` with relations  
- Route to confirm trips capturing `tripId` via URL parameter  
- Route parameter validation using **Zod**  
- Initial integration with **Nodemailer** for sending confirmation emails (HTML template ready)  
- Basic Prisma Client setup for database access  
- Use of `.env` file for configuring server port and database URL  

## Technologies

- Node.js  
- TypeScript  
- Fastify  
- Prisma ORM  
- SQLite  
- Zod (schema validation)  
- Nodemailer (email sending)  

## How to Run

#### 1. Clone the repository  
#### 2. Install dependencies:  
```bash
   npm install
```
#### 3. Configure the `.env` file with `PORT` and `DATABASE_URL` variables

#### 4. Generate Prisma client and run migrations:

```bash
npx prisma migrate dev
npx prisma generate
```
#### 5. Start the server:

```bash
npm run start:dev
```
## Example Requests
### Register a new trip
```bash
curl -X POST http://localhost:3333/register \
  -H "Content-Type: application/json" \
  -d '{
    "destination": "New York City",
    "starts_at": "2025-07-01T10:00:00.000Z",
    "ends_at": "2025-07-10T18:00:00.000Z"
  }'
```
### Confirm a trip by tripId
```bash
curl http://localhost:3333/trips/:tripId/confirm
```

## Next Steps
- Complete CRUD routes for Trip and Participant

- Implement automated tests
 
- Improve error handling and API responses
 
- Expand email templates and integrations
 
- Document the API with OpenAPI/Swagger