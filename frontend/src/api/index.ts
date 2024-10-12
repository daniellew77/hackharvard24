// src/api/index.ts

import axios from 'axios';

const API_BASE_URL = 'locahost'; // Update with your backend URL

export const uploadDataset = async (file: File) => {
  const formData = new FormData();
  formData.append('dataset', file);

  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const submitMetadata = async (metadata: { codebook: string; goals: string; importantVariables: string }) => {
  const response = await axios.post(`${API_BASE_URL}/metadata`, metadata);
  return response.data;
};

export const sendChatMessage = async (message: string) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, { message });
  return response.data.reply; // Assuming the backend returns { reply: "..." }
};
