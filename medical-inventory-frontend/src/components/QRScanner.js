import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Box } from '@mantine/core';

function QRScanner({ onScanSuccess }) {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 });
        scanner.render(onScanSuccess, (error) => {
            console.log('QR Code Scan Error:', error);
        });

        return () => {
            scanner.clear();
        };
    }, [onScanSuccess]);

    return (
        <Box mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
            <div id="reader"></div>
        </Box>
    );
}

export default QRScanner;
