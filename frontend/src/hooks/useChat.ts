// src/hooks/useChat.ts

import { useState } from 'react';
import { sendChatMessage } from '../api';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string) => {
    const userMessage: Message = { sender: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const botResponse = await sendChatMessage(message);
      const botMessage: Message = { sender: 'bot', content: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { sender: 'bot', content: 'An error occurred. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return {
    messages,
    sendMessage,
  };
};
