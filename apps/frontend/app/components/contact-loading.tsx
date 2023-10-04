import { Skeleton, Box } from '@mui/material';
import React from 'react';

const piece = [1, 2, 3, 4, 5];

const ContactLoading = () => {
  return piece.map((p) => (
    <Box display="flex" alignItems="center" key={p} mb="24px">
      <Skeleton variant="circular" width={40} height={40} />
      <Box ml={2}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={20}
          sx={{ mb: 1, borderRadius: '8px' }}
        />
        <Skeleton
          variant="rounded"
          width={140}
          height={16}
          sx={{ borderRadius: '8px' }}
        />
      </Box>
    </Box>
  ));
};

export default ContactLoading;
