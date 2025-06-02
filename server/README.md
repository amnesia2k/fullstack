# 🚀 Fullstack Authentication Server 🔐

A modern and secure backend server built with TypeScript, designed for handling user authentication and data management. This project leverages cutting-edge technologies to provide a robust and scalable foundation for any full-stack application.

## ✨ Features

- ✅ **User Registration:** Securely register new users with validation.
- 🔒 **Authentication:** Authenticate users and manage sessions.
- 🛡️ **Password Hashing:** Uses bcrypt for secure password storage.
- 🔑 **JWT Tokens:** JSON Web Tokens for secure authentication.
- 🗄️ **Database:** PostgreSQL database with Drizzle ORM for efficient data management.
- 🚦 **Validation Middleware:** Zod-based middleware for request validation.

## 🛠️ Technologies Used

| Technology     | Link                                                                                     |
| :------------- | :--------------------------------------------------------------------------------------- |
| TypeScript     | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                       |
| Express        | [https://expressjs.com/](https://expressjs.com/)                                         |
| Drizzle ORM    | [https://orm.drizzle.team/](https://orm.drizzle.team/)                                   |
| PostgreSQL     | [https://www.postgresql.org/](https://www.postgresql.org/)                               |
| Zod            | [https://zod.dev/](https://zod.dev/)                                                     |
| JSON Web Token | [https://jwt.io/](https://jwt.io/)                                                       |
| Bcrypt         | [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)             |
| CORS           | [https://github.com/expressjs/cors](https://github.com/expressjs/cors)                   |
| Cookie Parser  | [https://github.com/expressjs/cookie-parser](https://github.com/expressjs/cookie-parser) |

## 📦 Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/amnesia2k/fullstack.git
    cd fullstack/server
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up the `.env` file:**

    - Create a `.env` file in the root directory.
    - Populate it with the necessary environment variables. Refer to `.env.example` for the required variables.

      ```
      PORT=8000
      DATABASE_URL="your_database_url_here"
      JWT_SECRET=your_jwt_secret_key
      ```

4.  **Configure the database:**

    - Ensure you have PostgreSQL installed and running.
    - Update the `DATABASE_URL` in your `.env` file with your PostgreSQL connection string.
    - Run the database migrations:

      ```bash
      pnpm db:push
      ```

5.  **Start the development server:**

    ```bash
    pnpm dev
    ```

## 🚀 Usage

### API Endpoints

<details>
<summary><strong>User Registration</strong></summary>

- **Endpoint:** `POST /api/v1/register`
- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securePassword"
  }
  ```

- **Response:**

  ```json
  {
    "message": "User created successfully",
    "_id": "uniqueUserId",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "bio": "I'm a new user!",
    "image": "https://example.com/avatar.jpg",
    "role": "user",
    "isVerified": false,
    "createdAt": "2024-06-03T12:00:00.000Z",
    "token": "generatedJwtToken"
  }
  ```

</details>

<details>
<summary><strong>Get All Users</strong></summary>

- **Endpoint:** `GET /api/v1/get-users`
- **Response:**

  ```json
  {
    "message": "All Users fetched successfully!",
    "users": [
      {
        "_id": "uniqueUserId",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "bio": "I'm a new user!",
        "image": "https://example.com/avatar.jpg",
        "role": "user",
        "isVerified": false,
        "createdAt": "2024-06-03T12:00:00.000Z"
      }
    ]
  }
  ```

</details>

<details>
<summary><strong>Get User by ID</strong></summary>

- **Endpoint:** `GET /api/v1/user/:id`
- **Example:** `GET /api/v1/user/uniqueUserId`
- **Response:**

  ```json
  {
    "message": "User fetched successfully!",
    "user": {
      "_id": "uniqueUserId",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "bio": "I'm a new user!",
      "image": "https://example.com/avatar.jpg",
      "role": "user",
      "isVerified": false,
      "createdAt": "2024-06-03T12:00:00.000Z"
    }
  }
  ```

</details>

## 🤝 Contributing

Contributions are welcome! Here are the steps to contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

Please follow these guidelines:

- 📝 Use clear and concise commit messages.
- 🧪 Write tests for new features.
- 📚 Update documentation as needed.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🧑‍Author

[Olatilewa Olatoye](https://github.com/amnesia2k)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
