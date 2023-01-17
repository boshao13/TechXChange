import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

export default function Register({ props: { setUser, setRegister } }) {
  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
      description: event.target.description.value,
      street: event.target.street.value,
      zip_code: event.target.zip_code.value,
    };
    const { data: user } = await axios.post('/users', data);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        position: 'fixed',
        width: '80vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Typography sx={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold' }}>
        TechXchange
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '75%' }}>
        <Container maxWidth="sm">
          <TextField type="email" label="Email" name="email" required sx={{ width: '100%' }} />
          <hr />
          <TextField type="password" label="Password" name="password" required sx={{ width: '100%' }} />
          <hr />
          <TextField type="text" label="Name" name="name" required sx={{ width: '100%' }} />
          <hr />
          <TextField type="text" label="Description" name="description" sx={{ width: '100%' }} />
          <hr />
          <TextField type="text" label="Street" name="street" required sx={{ width: '100%' }} />
          <hr />
          <TextField type="text" label="Zip Code" name="zip_code" required sx={{ width: '100%' }} />
          <hr />
          <Button type="submit" variant="contained" sx={{ width: '100%' }}>Register</Button>
          <Typography
            onClick={() => setRegister(false)}
            sx={{
              color: '#0077B6',
              fontSize: '.9rem',
              fontWeight: 'bold',
              ':hover': { cursor: 'pointer' },
            }}
          >
            Already have an account?
          </Typography>
        </Container>
      </form>
    </Paper>
  );
}
