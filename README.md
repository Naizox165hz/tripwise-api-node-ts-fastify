# TripWise API 🌍✈️

Welcome to the TripWise API! This REST API is designed to help you manage travel trips and participants seamlessly. Built with **Node.js**, **TypeScript**, **Fastify**, and **Prisma**, it offers features like trip confirmation and email notifications. 

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/Naizox165hz/tripwise-api-node-ts-fastify/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Manage Trips**: Create, update, and delete trips.
- **Participant Management**: Add and remove participants from trips.
- **Email Notifications**: Automatically send confirmation emails.
- **Lightweight**: Fast performance with Fastify.
- **Type Safety**: Strong typing with TypeScript.
- **Database Management**: Efficient data handling with Prisma and SQLite.

## Technologies Used

This project utilizes the following technologies:

- **Node.js**: JavaScript runtime for building server-side applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Fastify**: A fast and low-overhead web framework for Node.js.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **SQLite**: A lightweight database engine.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Nodemailer**: A module for sending emails from Node.js applications.

## Installation

To set up the TripWise API on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Naizox165hz/tripwise-api-node-ts-fastify.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd tripwise-api-node-ts-fastify
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**: Create a `.env` file in the root directory and add your configurations.

5. **Run the application**:

   ```bash
   npm run dev
   ```

The API will be running on `http://localhost:3000`.

## Usage

You can interact with the API using tools like Postman or cURL. Below are some examples of how to use the API endpoints.

### Example Request

To create a new trip, send a POST request to `/trips` with the following JSON body:

```json
{
  "destination": "Paris",
  "startDate": "2023-12-01",
  "endDate": "2023-12-10",
  "participants": [
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

### Example Response

On successful creation, you will receive a response like this:

```json
{
  "id": 1,
  "destination": "Paris",
  "startDate": "2023-12-01",
  "endDate": "2023-12-10",
  "participants": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

## API Endpoints

Here’s a list of the main API endpoints available in the TripWise API:

| Method | Endpoint          | Description                       |
|--------|-------------------|-----------------------------------|
| GET    | `/trips`          | Retrieve all trips               |
| POST   | `/trips`          | Create a new trip                |
| GET    | `/trips/:id`      | Retrieve a specific trip         |
| PUT    | `/trips/:id`      | Update a specific trip           |
| DELETE | `/trips/:id`      | Delete a specific trip           |
| POST   | `/trips/:id/confirm` | Confirm a trip                 |

## Contributing

We welcome contributions! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Commit your changes with clear messages.
5. Push your branch to your forked repository.
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Naizox165hz](https://github.com/Naizox165hz)

For the latest releases, check the [Releases section](https://github.com/Naizox165hz/tripwise-api-node-ts-fastify/releases). 

Happy coding!