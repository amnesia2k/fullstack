# 🚀 Fullstack Authentication Boilerplate 🔐

A modern, production-ready authentication boilerplate built with TypeScript, Express, Drizzle ORM, and more! Jumpstart your next fullstack project with robust user authentication features.

## ✨ Description

This project provides a solid foundation for building fullstack applications requiring user authentication. It includes user registration, login, and secure password handling. It leverages modern technologies to ensure scalability and maintainability.

## 💻 Installation

Follow these steps to set up the project locally:

- 👯 **Clone the Repository:**

  ```bash
  git clone https://github.com/amnesia2k/fullstack.git
  cd fullstack/server
  ```

- ⚙️ **Install Dependencies:**

  ```bash
  pnpm install
  ```

- 📝 **Configure Environment Variables:**

  - Create a `.env` file based on `.env.example`.
  - Update the `DATABASE_URL`, `JWT_SECRET`, and `PORT` variables as needed.

  ```bash
  cp .env.example .env
  # Edit .env
  ```

- 💾 **Run Database Migrations:**

  ```bash
  pnpm db:push
  pnpm db:migrate
  ```

- 🚀 **Start the Development Server:**
  ```bash
  pnpm dev
  ```

## 💡 Usage

### Registering a New User

To register a new user, send a POST request to the `/api/v1/register` endpoint with the following JSON body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword"
}
```

### Logging In

To log in, send a POST request to the `/api/v1/login` endpoint with the following JSON body:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword"
}
```

### Fetching all users

To fetch all users, send a GET request to the `/api/v1/users` endpoint.

```bash
  curl http://localhost:8000/api/v1/users
```

### Fetching User by ID

To fetch an user by ID, send a GET request to the `/api/v1/user/:id` endpoint.

```bash
  curl http://localhost:8000/api/v1/user/:id
```

<details>
<summary>Detailed Instructions</summary>

1.  **Clone the repository:** Follow the `git clone` command as outlined in the Installation section.
2.  **Install dependencies:** Ensure all dependencies are installed using `pnpm install`.
3.  **Set up the database:**
    - Make sure you have a PostgreSQL database instance running.
    - Update the `DATABASE_URL` in your `.env` file to point to your database.
4.  **Run migrations:** This will create the necessary tables in your database.
5.  **Start the server:** Use the `pnpm dev` command to start the development server with hot-reloading.
</details>

## ✨ Features

- ✅ **User Registration:** Securely register new users with validation.
- 🔑 **User Login:** Authenticate existing users with password verification.
- 🛡️ **Password Hashing:** Bcrypt is used for secure password storage.
- 🍪 **Cookie-Based Authentication:** JWT tokens stored in cookies for session management.
- 📦 **Zod Validation:** Data validation using Zod schemas.
- 🚀 **Drizzle ORM:** Type-safe database interactions with Drizzle ORM.

## 🛠️ Technologies Used

| Technology     | Description                                                 | Link                                                        |
| :------------- | :---------------------------------------------------------- | :---------------------------------------------------------- |
| TypeScript     | Primary language for type safety and maintainability        | [TypeScript](https://www.typescriptlang.org/)               |
| Express        | Web framework for building APIs                             | [Express](https://expressjs.com/)                           |
| Drizzle ORM    | Modern and typesafe ORM                                     | [Drizzle ORM](https://orm.drizzle.team/)                    |
| PostgreSQL     | Relational database for storing user data                   | [PostgreSQL](https://www.postgresql.org/)                   |
| Bcrypt         | Library for hashing passwords                               | [Bcrypt](https://www.npmjs.com/package/bcrypt)              |
| JSON Web Token | For creating and managing user sessions                     | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  |
| Zod            | Schema declaration and validation                           | [Zod](https://github.com/colinhacks/zod)                    |
| CUID2          | Generate unique IDs                                         | [CUID2](https://github.com/paralleldrive/cuid2)             |
| Cors           | Cross-origin resource sharing                               | [Cors](https://github.com/expressjs/cors)                   |
| Cookie Parser  | Parse Cookie header and populate req.cookies with an object | [Cookie Parser](https://github.com/expressjs/cookie-parser) |
| Neon           | Fully managed serverless PostGres Database                  | [Neon](https://neon.tech/)                                  |

## 🤝 Contributing

We welcome contributions to improve this boilerplate! Here's how you can contribute:

- 🐛 **Report Bugs:** Submit detailed bug reports with steps to reproduce.
- 💡 **Suggest Features:** Propose new features and enhancements.
- 💻 **Submit Pull Requests:** Contribute code changes with clear descriptions.

Please follow these guidelines:

- **Code Style:** Follow the existing code style.
- **Commit Messages:** Use clear and descriptive commit messages.
- **Testing:** Write tests for new features and bug fixes.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author Info

- **GitHub**: [Your Github Link Here](https://github.com/amnesia2k)
- **LinkedIn**: [Your LinkedIn Link Here](https://www.linkedin.com/in/olatilewaolatoye/)
- **Twitter**: [Your Twitter Link Here](https://x.com/@olathedev_)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
