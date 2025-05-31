# Social Network - Register and Login

This project is a web application that implements a user registration and login system for a social network. It is built with React for the frontend and Nest.js for the backend, using MongoDB as the database.

## Features

- User registration
- Login with JWT
- Protected dashboard
- Modern user interface with Material-UI
- Form validation
- Secure authentication

## Technologies Used

### Frontend
- React
- TypeScript
- Material-UI
- Formik & Yup
- React Router
- Axios

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

## Configuration

1. Make sure MongoDB is running locally or update the connection URL in `backend/src/app.module.ts` if using a remote database.

2. The backend will run at `http://localhost:3000`
3. The frontend will run at `http://localhost:5173`

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

## Project Structure

```
├── backend/               # Nest.js Backend
│   ├── src/
│   │   ├── auth/         # Authentication module
│   │   ├── users/        # Users module
│   │   └── main.ts       # Entry point
│   └── package.json
│
└── frontend/             # React Frontend
    ├── src/
    │   ├── components/   # React components
    │   ├── App.tsx      # Main component
    │   └── main.tsx     # Entry point
    └── package.json
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 