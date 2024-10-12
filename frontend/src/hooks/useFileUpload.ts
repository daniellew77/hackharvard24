// src/hooks/useFileUpload.ts

import { useState } from 'react';
import { uploadDataset, submitMetadata } from '../api';

interface Metadata {
  codebook: string;
  goals: string;
  importantVariables: string;
}

export const useFileUpload = () => {
  const [files, setFiles] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const uploadFiles = async () => {
    if (!files || !metadata) {
      setUploadStatus('error');
      return;
    }
    setUploadStatus('loading');
    try {
      await uploadDataset(files);
      await submitMetadata(metadata);
      setUploadStatus('success');
    } catch (error) {
      console.error(error);
      setUploadStatus('error');
    }
  };

  return {
    files,
    setFiles,
    metadata,
    setMetadata,
    uploadStatus,
    uploadFiles,
  };
};
