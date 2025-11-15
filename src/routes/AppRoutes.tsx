import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../features/auth/Login';
import { EventList } from '../features/events/EventList';
import { PrivateRoute } from './PrivateRoutes';
import { Register } from '../features/auth/Register';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/events" element={<PrivateRoute><EventList /></PrivateRoute>} />
      {/* Redirigir la ruta raíz a login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);