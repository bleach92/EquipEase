import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import Register from '../components/Auth/Register.js';

function RegisterPage() {
  return (
    <Container size={600} my={40}>
      <Title align="center" mb="md">Create Your Account</Title>
      <Text align="center" color="dimmed" mb="xl">
        Welcome! Please fill out the form below to create your account.
      </Text>
      <Register />
    </Container>
  );
}

export default RegisterPage;
