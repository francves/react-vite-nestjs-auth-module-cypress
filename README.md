# Social Network - Register and Login

This project is a web application that implements a user registration and login system for a social network. It is built with React for the frontend and Nest.js for the backend, using MongoDB as the database.

## Features

- User registration
- Login with JWT
- Protected dashboard
- Modern user interface with Material-UI
- Form validation
- Automated testing with Cypress
- RESTful API
- MongoDB database

## Technologies Used

### Frontend
- React
- TypeScript
- Material-UI
- Formik & Yup
- React Router
- Axios
- Cypress (E2E testing)

### Backend
- Nest.js
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- Passport.js

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/francves/react-vite-nestjs-auth-module-cypress.git
cd react-vite-nestjs-auth-module-cypress
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Configure environment variables:
   - Create `.env` file in the `backend` folder with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/social-network
   JWT_SECRET=your_jwt_secret
   ```

## Running the Project

1. Start the backend:
```bash
cd backend
npm run start:dev
```

2. Start the frontend:
```bash
cd frontend
npm run dev
```

3. Run Cypress tests:
```bash
cd frontend
npm run cypress:open
```

## Project Structure

```
react-vite-nestjs-auth-module-cypress/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── register.cy.ts
│   │   │   └── login.cy.ts
│   │   └── support/
│   └── package.json
└── backend/
    ├── src/
    │   ├── users/
    │   ├── auth/
    │   └── main.ts
    └── package.json
```

## Testing

The project includes automated tests with Cypress for registration and login functionalities. The tests are located in:

- `frontend/cypress/e2e/register.cy.ts`: Tests for the registration process
- `frontend/cypress/e2e/login.cy.ts`: Tests for the login process

To run the tests:
```bash
cd frontend
npm run cypress:open
```

## API Endpoints

### Users
- `POST /users` - Create new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Authentication
- `POST /auth/login` - Login
- `POST /auth/register` - Register new user

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 