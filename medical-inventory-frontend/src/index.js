import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { MantineProvider } from '@mantine/core';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
