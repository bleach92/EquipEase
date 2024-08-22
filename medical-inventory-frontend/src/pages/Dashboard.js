import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@shadcn/ui/card';
import { Button } from '@shadcn/ui/button';
import { Input } from '@shadcn/ui/input';

function Dashboard() {
  const [boxes, setBoxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBoxes();
  }, []);

  const fetchBoxes = async () => {
    try {
      const response = await fetch('/api/boxes', {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      setBoxes(data);
    } catch (error) {
      console.error('Error fetching boxes:', error);
    }
  };

  const filteredBoxes = boxes.filter(box => 
    box.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    box.identifier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Input
        type="text"
        placeholder="Search boxes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBoxes.map((box) => (
          <Card key={box.identifier}>
            <CardHeader>
              <CardTitle>{box.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">ID: {box.identifier}</p>
              <Link to={`/inventory/${box.identifier}`}>
                <Button>View Inventory</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;