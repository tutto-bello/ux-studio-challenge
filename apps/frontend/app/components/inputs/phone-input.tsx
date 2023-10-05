/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, InputLabel, Box } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+00 00 000 0000"
        definitions={{
          '#': /[1-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

const PhoneInput = ({
  id,
  type,
  label,
  required,
  name,
  placeholder,
  handleChange,
  value,
  form,
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
  form: { errors: Record<string, string>; touched: Record<string, boolean> };
}) => {
  const hasError = Boolean(form.touched[name] && form.errors[name]);

  return (
    <Box mb={3}>
      <Box display="flex">
        <InputLabel error={hasError}>{label}</InputLabel>
        {hasError && (
          <InputLabel error={hasError}>
            {': '}
            {form.errors[name]}
          </InputLabel>
        )}
      </Box>

      <TextField
        id={id}
        name={name}
        type={type}
        required={required}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        error={hasError}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#414141',
            },
          },
          '&:hover': {
            '&& fieldset': {
              borderColor: '#414141',
            },
          },
        }}
        InputProps={{
          inputComponent: TextMaskCustom as any,
        }}
      />
    </Box>
  );
};

export default PhoneInput;
