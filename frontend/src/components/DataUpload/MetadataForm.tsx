// src/components/DataUpload/MetadataForm.tsx

import React from 'react';
import { TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFileUpload } from '../../hooks/useFileUpload';

const MetadataForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      codebook: '',
      goals: '',
      importantVariables: '',
    },
  });

  const { setMetadata } = useFileUpload();

  const handleSubmit = (values: typeof form.values) => {
    setMetadata(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Codebook"
        placeholder="Enter codebook details"
        {...form.getInputProps('codebook')}
        required
      />
      <Textarea
        label="Goals"
        placeholder="Describe your analysis goals"
        {...form.getInputProps('goals')}
        required
      />
      <TextInput
        label="Important Variables"
        placeholder="List important variables"
        {...form.getInputProps('importantVariables')}
        required
      />
      <Button type="submit" mt="md">
        Submit Metadata
      </Button>
    </form>
  );
};

export default MetadataForm;
