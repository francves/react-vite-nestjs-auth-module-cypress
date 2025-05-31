import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            ¡Bienvenido!
          </Typography>
          <Typography variant="h6" gutterBottom>
            {user.username}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Has iniciado sesión correctamente en tu cuenta.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogout}
            sx={{ mt: 2 }}
          >
            Cerrar Sesión
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard; 