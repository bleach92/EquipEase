import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, NumberInput, Button, Title, Container } from '@mantine/core';

function InventoryList({ boxId }) {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`/api/box/${boxId}/inventory`, {
                    headers: { Authorization: token },
                });
                setInventory(res.data.items);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };
        fetchInventory();
    }, [boxId]);

    const handleUpdate = async (item, newQuantity) => {
        try {
            const token = localStorage.getItem('token');
            const updatedItems = inventory.map((i) =>
                i.name === item.name ? { ...i, quantity: newQuantity } : i
            );
            await axios.post(
                `/api/box/${boxId}/inventory`,
                { items: updatedItems },
                { headers: { Authorization: token } }
            );
            setInventory(updatedItems);
        } catch (error) {
            console.error('Error updating inventory:', error);
        }
    };

    return (
        <Container>
            <Title align="center" my="xl">Inventory for Box: {boxId}</Title>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Update Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <NumberInput
                                    value={item.quantity}
                                    min={0}
                                    onChange={(value) => handleUpdate(item, value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default InventoryList;
