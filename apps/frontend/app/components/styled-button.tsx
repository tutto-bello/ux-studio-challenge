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
  const matchesMd = useMediaQuery('(min-width:768px)');

  return (
    <Button onClick={onClick} variant="contained" sx={{ borderRadius: 1000 }}>
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
