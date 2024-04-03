# Express API with PostgreSQL Database Connection

This is a simple Express API with a PostgreSQL database connection. It provides basic CRUD operations for a "hello" table in the database.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alperengokbak/se4453-midterm-project.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PGHOST=<your-postgresql-host>
   PGUSER=<your-postgresql-username>
   PGPASSWORD=<your-postgresql-password>
   PGDATABASE=<your-postgresql-database>
   PGPORT=<your-postgresql-port>
   ```

## Usage

To run the application, use the following command:

```bash
npm run start
```

This will start the Express server on port 8080 by default.

## Endpoints

### GET /hello

Retrieves all entries from the "hello" table in the database.

### GET /hello/hello

Sends a simple "Hello World Query!" response.

## Project Structure

- `src/router/helloRouter.js`: Defines Express router and endpoints.
- `src/controller/helloController.js`: Contains controller functions for handling requests.
- `database/databaseConnection.js`: Establishes connection to PostgreSQL database.

## Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling CORS in Express.
- `pg`: PostgreSQL client for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
