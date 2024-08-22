import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@shadcn/ui/table';
import { Input } from '@shadcn/ui/input';
import { Button } from '@shadcn/ui/button';
import { toast } from '@shadcn/ui/toast';

function InventoryPage() {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });

  useEffect(() => {
    fetchInventory();
  }, [id]);

  const fetchInventory = async () => {
    try {
      const response = await fetch(`/api/box/${id}/inventory`, {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      setInventory(data.items);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      toast.error('Failed to fetch inventory');
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/box/${id}/inventory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          items: [...inventory, newItem],
        }),
      });
      if (response.ok) {
        setInventory([...inventory, newItem]);
        setNewItem({ name: '', quantity: '' });
        toast.success('Item added successfully');
      } else {
        toast.error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      toast.error('Failed to add item');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inventory for Box {id}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <form onSubmit={handleAddItem} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Item name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            required
          />
          <Button type="submit">Add Item</Button>
        </div>
      </form>
    </div>
  );
}

export default InventoryPage;