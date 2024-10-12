// src/containers/ChatPage.tsx

import React from 'react';
import { Container, Title, Space } from '@mantine/core';
import FileUploader from '../components/DataUpload/FileUploader';
import MetadataForm from '../components/DataUpload/MetadataForm';
import ChatBox from '../components/Chat/ChatBox';
import { useFileUpload } from '../hooks/useFileUpload';
import { useChat } from '../hooks/useChat';

const ChatPage: React.FC = () => {
  const { uploadStatus } = useFileUpload();
  const { messages, sendMessage } = useChat();

  return (
    <Container>
      <Title order={2} 
      style={{ textAlign: 'center' }}
      mt="md">
        Data Processing with Natural Language
      </Title>
      <Space h="md" />
      
      {uploadStatus === 'idle' || uploadStatus === 'error' ? (
        <>
          <FileUploader />
          <MetadataForm />
          {uploadStatus === 'error' && <p style={{ color: 'red' }}>Upload failed. Please try again.</p>}
        </>
      ) : (
        <ChatBox messages={messages} onSend={sendMessage} />
      )}
    </Container>
  );
};

export default ChatPage;
