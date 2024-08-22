import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InventoryPage from './pages/InventoryPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

function App() {
   const isAuthenticated = !!localStorage.getItem('token');

   return (
       <Router>
           {isAuthenticated && <Navbar />}
           <Routes>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
               <Route path="/inventory/:id" element={isAuthenticated ? <InventoryPage /> : <Navigate to="/login" />} />
               <Route path="/" element={<Navigate to="/dashboard" />} />
           </Routes>
       </Router>
   );
}

export default App;
