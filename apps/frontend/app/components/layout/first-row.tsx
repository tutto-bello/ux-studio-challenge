import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';

const FirstRow = () => {
  const matchesLg = useMediaQuery('(min-width:1024px)');

  return (
    <Grid container>
      <Grid
        item
        xs={matchesLg ? 3 : 1.5}
        borderBottom={1}
        height={matchesLg ? 96 : 72}
        sx={{ borderColor: '#282828' }}
      ></Grid>
      <Grid
        item
        xs={matchesLg ? 6 : 9}
        borderBottom={1}
        borderLeft={1}
        borderRight={1}
        sx={{ borderColor: '#282828' }}
        height={matchesLg ? 96 : 72}
      ></Grid>
      <Grid
        item
        xs={matchesLg ? 3 : 1.5}
        borderBottom={1}
        sx={{ borderColor: '#282828' }}
        height={matchesLg ? 96 : 72}
      ></Grid>
    </Grid>
  );
};

export default FirstRow;
