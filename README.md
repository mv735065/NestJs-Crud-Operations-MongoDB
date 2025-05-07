readme_content_short = """
# User Management System - NestJS Project



## Overview

A **User Management System** built with **NestJS** and **MongoDB** to manage user data (CRUD operations).

---

## Technologies

- **NestJS** for building server-side applications.
- **MongoDB** for data storage.
- **Mongoose** for MongoDB integration.
- **TypeScript** for type safety.

---

## Installation

1. Clone the repo:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure MongoDB in `.env`:
    ```bash
    MONGO_URI=mongodb://localhost:27017/user_management
    ```
4. Start the app:
    ```bash
    npm run start
    ```

---

## API

- **POST /user**: Create a user.
- **GET /user?id=<id>**: Get a user by ID.
- **PUT /user?id=<id>**: Update a user.
- **GET /user/all**: Get all users.
- **DELETE /user?id=<id>**: Delete a user.

---

## Tests

Run tests with:
```bash
npm run test
