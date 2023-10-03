import { TextField, InputLabel, Box } from '@mui/material';
import React, { ChangeEvent } from 'react';

const TextInput = ({
  id,
  type,
  label,
  required,
  name,
  placeholder,
  handleChange,
  value,
}: {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  value: string;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}) => {
  return (
    <Box mb={3}>
      <InputLabel>{label}</InputLabel>
      <TextField
        id={id}
        name={name}
        type={type}
        required={required}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
};

export default TextInput;
