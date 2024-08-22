import React from 'react';
import Login from '../components/Auth/Login.js';
import { Container, Title } from '@mantine/core';

function LoginPage() {
    return (
        <Container>
            <Title align="center" my="xl">Login</Title>
            <Login />
        </Container>
    );
}

export default LoginPage;
