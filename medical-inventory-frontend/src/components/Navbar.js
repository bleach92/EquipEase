import React from 'react';
import { Box, Button, Group } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        height: 60,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'gray',
      }}
    >
      <Group>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
          Dashboard
        </Link>
      </Group>
      <Group>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </Group>
    </Box>
  );
}

export default Navbar;
