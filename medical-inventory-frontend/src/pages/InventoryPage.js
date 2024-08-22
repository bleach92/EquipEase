import React from 'react';
import InventoryList from '../components/InventoryList.js';
import { useParams } from 'react-router-dom';
import { Container, Title } from '@mantine/core';

function InventoryPage() {
    const { id } = useParams();

    return (
        <Container>
            <Title align="center" my="xl">Inventory Management</Title>
            <InventoryList boxId={id} />
        </Container>
    );
}

export default InventoryPage;
