// src/components/Chat/Message.tsx

import React from 'react';
import { Box, Text } from '@mantine/core';

interface MessageProps {
  sender: 'user' | 'bot';
  content: string;
}

const Message: React.FC<MessageProps> = ({ sender, content }) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: sender === 'user' ? 'flex-end' : 'flex-start',
        marginBottom: '0.5rem',
      }}
    >
      <Box
        style={{
          backgroundColor: sender === 'user' ? '#daf1da' : '#f1f0f0',
          padding: '0.5rem 1rem',
          borderRadius: '1rem',
          maxWidth: '60%',
        }}
      >
        <Text size="sm">{content}</Text>
      </Box>
    </Box>
  );
};

export default Message;
