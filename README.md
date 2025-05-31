# Red Social - Registro y Login

Este proyecto es una aplicación web que implementa un sistema de registro y login de usuarios para una red social. Está construido con React en el frontend y Nest.js en el backend, utilizando MongoDB como base de datos.

## Características

- Registro de usuarios
- Inicio de sesión con JWT
- Dashboard protegido
- Interfaz de usuario moderna con Material-UI
- Validación de formularios
- Autenticación segura

## Tecnologías Utilizadas

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
- MongoDB con Mongoose
- JWT para autenticación
- Passport.js

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/red-social-registro-login.git
cd red-social-registro-login
```

2. Instalar dependencias del backend:
```bash
cd backend
npm install
```

3. Instalar dependencias del frontend:
```bash
cd ../frontend
npm install
```

## Configuración

1. Asegúrate de tener MongoDB ejecutándose en tu máquina local o configura la URL de conexión en `backend/src/app.module.ts`

2. El backend se ejecutará en `http://localhost:3000`
3. El frontend se ejecutará en `http://localhost:5173`

## Ejecución

1. Iniciar el backend:
```bash
cd backend
npm run start:dev
```

2. Iniciar el frontend:
```bash
cd frontend
npm run dev
```

## Estructura del Proyecto

```
├── backend/               # Backend Nest.js
│   ├── src/
│   │   ├── auth/         # Módulo de autenticación
│   │   ├── users/        # Módulo de usuarios
│   │   └── main.ts       # Punto de entrada
│   └── package.json
│
└── frontend/             # Frontend React
    ├── src/
    │   ├── components/   # Componentes React
    │   ├── App.tsx      # Componente principal
    │   └── main.tsx     # Punto de entrada
    └── package.json
```

## Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 