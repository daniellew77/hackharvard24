// src/components/Chat/ChatBox.tsx

import React, { useState } from 'react';
import { Textarea, Button, ScrollArea, Box } from '@mantine/core';
import Message from './Message';

interface ChatBoxProps {
  messages: Array<{ sender: 'user' | 'bot'; content: string }>;
  onSend: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <Box>
      <ScrollArea style={{ height: 400, border: '1px solid #ccc', padding: '1rem' }}>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} content={msg.content} />
        ))}
      </ScrollArea>
      <Textarea
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autosize
        minRows={2}
        mt="md"
      />
      <Button onClick={handleSend} mt="sm">
        Send
      </Button>
    </Box>
  );
};

export default ChatBox;
