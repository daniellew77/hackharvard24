// src/routes.tsx

import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
    </RouterRoutes>
  );
};

export default Routes;
