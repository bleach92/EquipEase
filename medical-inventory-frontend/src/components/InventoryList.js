import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@shadcn/ui/table';
import { Button } from '@shadcn/ui/button';

function InventoryList({ inventory, onEdit, onDelete }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inventory.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(item)} variant="outline" className="mr-2">
                Edit
              </Button>
              <Button onClick={() => onDelete(item)} variant="destructive">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InventoryList;