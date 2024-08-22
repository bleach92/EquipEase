import React, { useState } from 'react';
import { QRCodeScanner } from 'react-qr-code';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function QRScanner() {
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleNavigate = () => {
    if (result) {
      navigate(`/inventory/${result}`);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>QR Code Scanner</CardTitle>
      </CardHeader>
      <CardContent>
        <QRCodeScanner
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p className="mt-4">Scanned result: {result}</p>
        <Button
          onClick={handleNavigate}
          disabled={!result}
          className="mt-4"
        >
          Go to Inventory
        </Button>
      </CardContent>
    </Card>
  );
}

export default QRScanner;