// src/components/DataUpload/FileUploader.tsx

import React from 'react';
import { FileInput } from '@mantine/core';
import { useFileUpload } from '../../hooks/useFileUpload';

const FileUploader: React.FC = () => {
  const { files, setFiles } = useFileUpload();

  return (
    <FileInput
      label="Upload Dataset"
      placeholder="Choose file"
      value={files}
      onChange={setFiles}
      multiple={false}
      required
    />
  );
};

export default FileUploader;
