// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes />
      </Router>
    </MantineProvider>
  );
};

export default App;
