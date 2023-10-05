import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
}

const StyledButton = (props: ButtonProps) => {
  const { label, icon, onClick } = props;
  const matchesLg = useMediaQuery('(min-width:1024px)');

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        width: matchesLg ? 120 : 'auto',
        borderRadius: 1000,
        backgroundImage:
          'linear-gradient(to bottom, #282828 70%, #3C3C3C 100%)',
        border: '1px solid #3C3C3C',
        ':hover': {
          opacity: 0.8,
          transitionDuration: '200ms',
          transitionProperty: 'opacity',
        },
      }}
    >
      {icon && matchesLg && (
        <span
          style={{
            marginRight: matchesLg ? '8px' : '0px',
            marginLeft: matchesLg ? '4px' : '0px',
            marginBottom: matchesLg ? '-4px' : '0px',
          }}
        >
          {icon}
        </span>
      )}
      <span style={{ minWidth: 'max-content' }}>{label}</span>
    </Button>
  );
};

export default StyledButton;
