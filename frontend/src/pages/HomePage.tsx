// src/containers/ChatPage.tsx

import React from 'react';
import { Container, Title } from '@mantine/core';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title order={2} 
      style={{ textAlign: 'center' }}
      mt="md">
        Home!
        </Title>
    </Container>
  );
};

export default HomePage;