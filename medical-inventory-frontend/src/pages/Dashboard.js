import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from '../components/QRScanner.js';
import { Container, Title } from '@mantine/core';

function Dashboard() {
  const navigate = useNavigate();

  const handleScanSuccess = (result) => {
    navigate(`/inventory/${result}`);
  };

  return (
    <Container>
      <Title align="center" my="xl">Scan a QR Code to View Inventory</Title>
      <QRScanner onScanSuccess={handleScanSuccess} />
    </Container>
  );
}

export default Dashboard;
